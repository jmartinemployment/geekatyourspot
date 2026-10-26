# Website visitor tracking and daily visitor report for geekatyourspot.com

## Corrected, 2026-10-26

Two things in the build below, and in the plan under it, were wrong, and the owner said so before
anything was deployed. Both are fixed in the working tree; nothing is committed in either repo until
"commit & push".

1. **The store is Postgres, not Mongo.** The plan's storage row and the build put the visitor data in a
   second Mongo database, `geek_visitors`, with its own `MONGO_VISITORS_URL`. GeekBackend's rules say
   Mongo is the crawl store only and every other product store is a schema in GeekRepository's own
   Supabase Postgres (`GeekBackend/AGENTS.md`, "Mongo is for GeekCrawler only; every other store is
   Supabase", Jeff 2026-10-26, verbatim: *"Mongo DB is for GeekCrawler. Supabase is for this type of
   database."*). The store is now the `geek_visitors` schema in `DATABASE_URL`, created by
   `GeekRepository/Migrations/Sql/0042_geek_visitors_schema.sql` and mapped by
   `GeekRepository/Data/VisitorsDbContext.cs` the way `geek_gtm` is done: tables `visitors`, `sessions`,
   `session_pages`, `page_clicks`, `filter_day_drops` and `daily_reports`, every column the snake_case
   of its row property (`GeekRepository/Data/Entities/Visitors/VisitorRows.cs`).
   `GeekRepository/Repositories/Visitors/VisitorRepository.cs` replaces the Mongo repository: each
   write is a read-modify-write under the row's `version` token, retried on a lost race, so a score
   only rises, a step keeps its first time, and a mark or a claim lands once. Postgres has no TTL
   index, so `POST repo/visitors/retention/purge` removes sessions and visitors last seen more than
   180 days ago, and GeekAPI's daily job calls it after the report. `MONGO_VISITORS_URL`, the Mongo
   index step at startup and the EphemeralMongo tests are gone; the repository tests run on the EF
   in-memory provider and read the schema script against the model, and
   `GeekBackend.IntegrationTests/VisitorSchemaIntegrationTests.cs` round-trips a session through a
   real Postgres when `TEST_DATABASE_URL` is set. The privacy policy names Supabase, not Hostinger,
   as the database host.

2. **Nothing is emailed.** The owner did not ask for the report to be emailed ("Why do you need
   email, Task was create report?", 2026-10-26). The Resend client, the intent alert email, the
   `VisitorOptions` boot check and `RESEND_API_KEY`, `VISITOR_EMAIL_FROM` and `VISITOR_EMAIL_TO` are
   deleted from GeekAPI. The 07:00 job still claims the day once across instances, composes the
   report, stores its totals in `daily_reports` (`built_at`, not `sent_at`), and purges. The report
   is read, with the backend key, from `GET api/visitors/internal/reports/{date}` (text),
   `.../reports/{date}/summary` (what the build recorded) and `.../reports/{date}/{sessions|pages|
   interactions}.csv`, composed on demand from the day's sessions for as long as the sessions are
   retained. The Florida intent threshold stays as data: the session's `intent_reached_at` is set
   once when a Florida session reaches 60, the report counts "Intent sessions" and marks each block
   "intent reached", and the sessions CSV carries `intentReachedAt` in place of the three alert
   columns.

3. **No failure ends in a log line alone.** The rule is `GeekBackend/AGENTS.md`, "Correctness over
   expediency": failures become a failed state or an operator-visible error, not log-only
   warnings, and nothing silently substitutes success. The build had three places that did exactly
   that, and the owner found them ("Booking is broken, because it 'designed to drop out quietly'.
   Do I not have a rule against silent errors?", 2026-10-26). Now: the site code that passes each
   visit, identity and drop count on to GeekAPI (`src/lib/visitors/forward-pulse.ts`) answers with
   what happened instead of nothing, and `/api/pulse` answers 503 rather than 204 when the site
   holds no GeekAPI address or key, so it never accepts what it cannot pass on; the 07:00 job in
   GeekAPI records the retention purge's counts or its error on the day's row in `daily_reports`
   (`purged_at`, `purged_sessions`, `purged_visitors`, `purge_error`, read from the summary
   route), releases the claim when the row cannot be written so the next minute builds again, and
   takes over a claim that has had no build behind it for ten minutes; and the report says in
   words when a day had no sessions and no dropped requests, because on a public site that means
   the site passed nothing on, not that nobody came. What remains, stated rather than asserted
   away: Vercel keeps no state between requests, so a hand-off that fails after the visitor's
   response has gone can only be written to the Vercel log with its reason; a whole day of such
   failures is what the report's line catches.

The lines below that say Mongo, Hostinger, Resend, "alert" or "email" are the record of what was
planned and built before this correction, kept as written. Where they conflict with this section,
this section is current.

## Built, 2026-10-25

Everything below this section is the plan as approved on 2026-10-18; this section records what was built on
2026-10-25 and where it departs from the text below. Nothing is deployed yet: the environment variables in
"Environment and deploy order" are still to be set, and the commits in both repos wait for "commit & push".

**What exists.**

- **Site:** `src/app/api/pulse/route.ts`, `src/lib/visitors/{pulse-event,request-fields,forward-pulse,visitor-events,geo-cookie,vercel-geo}.ts`,
  `src/components/analytics/visitor-pulse.tsx` (rendered from `src/app/layout.tsx` after the GTM tag), `src/proxy.ts`,
  the scheduler and contact wiring, the two server actions, `.env.example`, the Permissions-Policy header, and the
  five privacy policy sections. `isbot` 5.2.2 was added.
- **GeekBackend:** `GeekApplication/Models/Visitors/{VisitorRecords,VisitorDtos}.cs`;
  `GeekRepository/Repositories/Visitors/{IVisitorRepository,MongoVisitorRepository}.cs` and four controllers under
  `GeekRepository/Controllers/Visitors/`; `GeekAPI/Services/Visitors/*`, `GeekAPI/HttpClients/{IVisitorRepositoryClient,HttpVisitorRepository}.cs`,
  `GeekAPI/Controllers/Visitors/VisitorsInternalController.cs`; `AddVisitors` in `GeekAPI/Program.cs`; `UAParser` 3.1.47;
  `tzdata` in the Dockerfile; `.env.example`, `docs/technical-specification.md` and the integration test factory updated;
  76 tests under `GeekBackend.Tests/Visitors/`.

**Departures from the plan below, each on purpose.**

1. **One definition of the documents.** The session, profile, filter-day and report classes live once, in
   `GeekApplication/Models/Visitors/VisitorRecords.cs`, and both services use them; the class maps are in
   `MongoVisitorRepository`'s static constructor. The plan had entity copies in `GeekRepository/Data/Entities/Visitors/`,
   which would have been a second reader of the same shape. Field names in Mongo are camelCase and nulls are not
   written, so `$min` on a step's timestamp lands the first time.
2. **Geo cookie and browser position, added at the owner's request on 2026-10-25.** `src/proxy.ts` copies Vercel's geo
   headers into a readable `gays_geo` cookie (seven days, documents only). The beacon reads it and, only when it carries
   no coordinates, asks `navigator.geolocation` once per session and sends a `geo` event; the session stores it as
   `browserGeo`, and a position inside Florida marks a session Florida when the request carried no region. The
   Permissions-Policy header now reads `geolocation=(self)`. The plan's "not collected" entry for precise location
   is superseded by this.
3. **Drops are counted by GeekAPI.** `/api/pulse` forwards each drop's reason to `POST api/visitors/internal/drops`
   after the 204, and GeekAPI files it under the New York day in `filter_stats`.
4. **Same-origin without Fetch Metadata.** When a browser sends no `Sec-Fetch-Site`, the Origin or Referer host is
   compared with the request host; a request naming neither is dropped.
5. **Scheduler view.** The section is at least a viewport tall, so "50% visible" is read as half the section or the
   section filling half the viewport, for three seconds, once per session.
6. **`MONGO_VISITORS_URL` unset** does not stop GeekRepository: it is logged at startup and every `repo/visitors/*`
   route answers 503. GeekAPI still refuses to start without its three variables, as the plan says.
7. **Identify also stamps the session.** A booking stamps `scheduler.bookedAt` and a contact message
   `contactSubmittedAt` on the session through the server action's forward, so a blocked beacon still leaves the step.
8. **The contact form.** `submitContact` takes the visitor ids and forwards the identity, but no page on the site
   calls it today, so "contact submitted" cannot fire until a form exists.

**Sample output.** A run of the real pipeline against an ephemeral Mongo produced the report and the alert in
`/private/tmp/claude-501/-Users-jeffmartin-development-geekatyourspot/6b133fce-7393-44e2-9969-3438c980c12f/scratchpad/report-output/`.

## Context

Local B2B visitors read the site and leave, and nothing records who they were or what they did. The goal is to:

- record every human visitor with everything the request and the browser make available,
- record the path each visitor takes and the time spent on each page,
- score intent in real time,
- email Jeff a daily report of every visitor from the previous day,
- email Jeff the moment a Florida session crosses the intent threshold.

There is no reverse IP lookup. No IP-to-company service, reverse DNS (PTR) query or ASN lookup is called, so visitors are
not resolved to businesses. A visitor gets a name only when they submit the contact form or book a consultation.

Nothing for this exists today:

- **Site:** no middleware, no beacon route. GTM is the only tracking (`src/app/layout.tsx:98`). There are no pricing or proposal pages.
- **GeekBackend:** no visitor, scoring, report or outbound email code. Resend is used only on the site
  (`src/lib/actions/submit-contact.ts`, `src/services/booking-confirmation.service.ts`).
- **What is reused:**
  - the GeekAPI → GeekRepository data-plane pattern and the `/api/{x}/internal/*` + `X-API-Key` convention;
  - the `BackgroundService` + `PeriodicTimer` pattern in `GeekAPI/Services/GeekCrawler/GeekCrawlerScheduleHostedService.cs`,
    with `HostedServiceScan.ShouldLogAndContinue`;
  - Resend.

## Settled decisions

| Area | Decision |
|---|---|
| Ownership | Build in house. No vendor tracking script. |
| Company lookup | **None.** Reverse IP lookup is removed: no Snitcher, no IPinfo, no reverse DNS, no ASN lookup. |
| Location | Vercel's geolocation request headers, which arrive on every request with no lookup call: country, region (state), city, postal code, latitude, longitude, time zone and continent. |
| Storage | Mongo database `geek_visitors` on the Hostinger Mongo, reached only through GeekRepository. No Postgres. |
| Actions | **Daily report:** an email to Jeff at 07:00 America/New_York covering the previous day, with every collected field in CSV attachments. **Intent alert:** a real-time email when a Florida session reaches score 60. The target-account alert is gone because it keyed on the company domain that the lookup supplied. |
| Pages | Pricing and proposal pages are not built here. `/pricing` and `/proposals/*` get weights so they score once they exist. |
| Privacy | The IP address is stored as collected, because it is part of the report. A persistent `gays_visitor` id and a `gays_session` id live in localStorage; there is no cookie. Global Privacy Control turns tracking off. Sessions and visitors expire after 180 days. |

## What is collected

### From the request (read by `/api/pulse` on Vercel)

| Field | Source |
|---|---|
| IP address | `x-real-ip`, validated with `net.isIP` |
| Country, region (state), city, postal code | `x-vercel-ip-country`, `x-vercel-ip-country-region`, `x-vercel-ip-city` (RFC 3986 encoded, decoded before storing), `x-vercel-ip-postal-code` |
| Latitude, longitude | `x-vercel-ip-latitude`, `x-vercel-ip-longitude` |
| Time zone, continent | `x-vercel-ip-timezone`, `x-vercel-ip-continent` |
| Vercel edge region | the prefix of `x-vercel-id` |
| User agent | `user-agent`, stored raw and parsed in GeekAPI into browser, browser version, OS, OS version, device type, brand and model |
| Low-entropy client hints | `sec-ch-ua`, `sec-ch-ua-mobile`, `sec-ch-ua-platform` (Chromium browsers only) |
| Languages | `accept-language` |
| Privacy signals | `dnt` is stored; `sec-gpc: 1` drops the event |
| Received at | the server clock |

### From the browser (`VisitorPulse`)

**Session snapshot**, sent once per session with the first `page_view`:

- **Visitor:** the `gays_visitor` UUID, first seen at, and visit number.
- **Arrival:**
  - the full landing URL with its query string and the full `document.referrer`;
  - UTM source, medium, campaign, term and content;
  - click ids `gclid`, `gbraid`, `wbraid`, `fbclid`, `msclkid`, `li_fat_id` and `ttclid`.
- **Screen:** screen width and height, available width and height, viewport width and height, device pixel ratio, colour depth and orientation.
- **Device:** `navigator.platform`, `hardwareConcurrency`, `deviceMemory` (Chromium), `maxTouchPoints`, pointer type (coarse or fine) and hover support.
- **Browser:**
  - `navigator.languages`, plus the `Intl` time zone and UTC offset;
  - `cookieEnabled`, `pdfViewerEnabled` and display mode (browser tab or installed app);
  - `prefers-color-scheme` and `prefers-reduced-motion`.
- **High-entropy client hints** (Chromium only, from `navigator.userAgentData.getHighEntropyValues`): platform version, model, architecture, bitness and full browser version list.
- **Network:** `navigator.connection` effective type, downlink, round-trip time and save-data (Chromium).
- **Automation:** `navigator.webdriver`. When it is true, nothing is sent.

**Per page:**

- Path, query string, document title and entry time.
- Active milliseconds: time the tab was visible and not idle.
- Maximum scroll depth percentage, and whether it was the exit page.
- Core Web Vitals through `useReportWebVitals` from `next/web-vitals`: LCP, INP, CLS, FCP and TTFB.

**Per interaction:**

- **Link clicks:** href, link id (the ids `gtmLinkIdFromHref` already sets), internal or outbound, and time. At most 50 per page.
- **Scheduler funnel:** viewed (at least 50% visible for 3 seconds), date picked, slot held and booking completed.
- **Contact form:** submitted.

**Identity** (only when the visitor gives it):

- `createBooking` and `submitContact` forward first name, last name, email and phone with the session and visitor ids, after their own work succeeds.
- The visitor record takes the identity, so the report also names that visitor's earlier anonymous sessions.

### Not collected

- **Reverse IP lookup** of any kind, removed at your request.
- **Canvas, WebGL, audio and font fingerprinting.** These exist to re-identify people who cleared their storage, and Safari, Firefox and Brave randomise them, so the values would also be unreliable.
- **Precise location from `navigator.geolocation`**, which needs a permission prompt.
- **Anything typed into a form that was not submitted.**

## Flow

```
browser VisitorPulse ──sendBeacon──▶ site POST /api/pulse  (Vercel)
   drops: >8 KB, Sec-Fetch-Site ≠ same-origin, bot UA (isbot), Sec-GPC, no/invalid x-real-ip,
          VISITOR_EXCLUDED_IPS, invalid body          → always 204
   after(): forward {event + request fields} ──X-API-Key──▶ GeekAPI POST api/visitors/internal/events
      parse user agent → visitor upsert → session page-view / page-end / click / scheduler / vitals (atomic Mongo ops)
      → rescore ($max) → Florida && score ≥ 60 → claim → email "intent"

createBooking / submitContact (server actions)
   after(): ──X-API-Key──▶ GeekAPI POST api/visitors/internal/identify

GeekAPI VisitorDailyReportHostedService (PeriodicTimer, every minute)
   now ≥ 07:00 America/New_York and yesterday's report unclaimed → claim
   → GeekRepository: sessions started yesterday (New York day), their visitors, that day's filter_stats
   → text body + sessions.csv + pages.csv + interactions.csv → Resend → mark sent
```

- **Florida:** `x-vercel-ip-country == "US"` and `x-vercel-ip-country-region == "FL"`, taken from the first event of the session.
- **IP changes mid-session** (a phone moving from Wi-Fi to cellular): the session keeps its first IP and location. Later IPs go into `additionalIps` with `$addToSet`, up to 10.

### Scoring (`VisitorIntentScoring.cs`, one file of constants)

**Path weights**

| Path rule | Weight |
|---|---|
| `/proposals/` and anything under it | 50 |
| Any path starting with `/pricing` | 40 |
| `/architectural-infrastructure-audit` | 30 |
| `/use-cases` and anything under it | 10 |
| `/tools` and anything under it | 8 |
| `/methodology` | 8 |
| `/blog` and anything under it | 3 |
| `/glossary` and anything under it | 2 |
| `/` (exact) | 2 |
| Legal pages and unmatched paths | 0 |

Segment rules match the path itself and anything under it, so `/blogger` does not match `/blog`.

**Session score**

1. **Per distinct path:** `w × (0.25 + 0.75 × min(activeSec, 120) / 120)`. When a path is viewed more than once, its active seconds are summed before the cap.
2. **Distinct-page bonus:** +5 for each distinct path after the first, capped at +20.
3. **Scheduler:** +25 once per session for `scheduler_view`. The scheduler sits on 104 pages, so this fires only after it has been at least 50% visible for 3 seconds.
4. **Total:** capped at 100. The intent alert fires at 60.

**Visitor score:** the sum of that visitor's session scores over the last 30 days, computed on read.

### Daily report (sent from GeekAPI through the Resend REST API)

- **Window:** the previous calendar day in America/New_York, converted to a UTC range on `startedAt`. Daylight saving days are 23 or 25 hours long (8 March and 1 November 2026).
- **When:**
  - Sent at 07:00 New York time.
  - A send missed for a deploy or restart goes out on the first tick after startup, for yesterday only. Older days remain available from the report endpoint.
  - A day with no visitors still gets a report, so a missing email means something broke.
- **Subject:** `Website visitors, Fri 17 Oct 2026: 42 visitors, 51 sessions, 2 identified`.
- **Body** (plain text, built with a `StringBuilder`):
  1. **Totals:** visitors (new and returning), sessions, page views, median active time per session, Florida sessions, identified visitors, intent alerts sent, and drops by reason.
  2. **Top 10 lists:** landing pages, referrer hosts, UTM sources and campaigns, cities, device types and browsers.
  3. **One block per session, highest score first:**
     - identity, IP, location, the visitor's local time, device and browser, screen and language;
     - referrer, UTM and click ids, and the landing page;
     - every page with its seconds, scroll depth and clicks;
     - the scheduler funnel and the session score;
     - the visitor's visit number and 30-day score.

     The body lists the top 100 sessions; the CSVs hold all of them.
- **Attachments** (RFC 4180 quoting, UTF-8 with a BOM so Excel opens them cleanly):
  - `sessions-YYYY-MM-DD.csv`: one row per session, with every session-level field flattened.
  - `pages-YYYY-MM-DD.csv`: one row per page view, including Web Vitals.
  - `interactions-YYYY-MM-DD.csv`: one row per click, scheduler step or form submission.
- **Firing once:**
  - A claim is an `InsertOne` into `daily_reports` with `_id` = the New York date. A duplicate key means another instance holds the claim.
  - A failed send deletes the claim, but only where `claimedAt` still matches and `sentAt` is null. The next tick retries.
  - Resend `Idempotency-Key: visitor-report-{date}`.
- **On demand:** `GET api/visitors/internal/reports/{date}/{sessions|pages|interactions}.csv` returns the same CSVs for any day still inside the 180-day TTL.

### Intent alert (plain-text email through the Resend REST API, sent from GeekAPI)

- **Trigger:** a Florida session reaches a score of 60.
- **Firing once:**
  - The alert fires at most once per session.
  - A claim is an atomic `UpdateOne` where `alerts.intent.claimedAt` is null, and the caller wins only when `ModifiedCount == 1`.
  - After the claim, the send runs with `CancellationToken.None`.
  - A failed send releases the claim, but only if `claimedAt` still matches.
  - Resend `Idempotency-Key: visitor-{sessionId}-intent`.
- **Email body:**
  - identity if known, IP, city, region and postal code, and device and browser;
  - referrer host and UTM, session score, visit number and 30-day visitor score;
  - each path with its seconds and a scheduler mark.
- **Time zone:** times are shown in America/New_York, resolved at startup, which fails if the zone is missing. Add `tzdata` to the Dockerfile if the noble image lacks it.

## Mongo `geek_visitors` (all writes atomic, dates stored as `DateTime` UTC so TTL works)

| Collection | Key and contents | TTL |
|---|---|---|
| `visitors` | `_id` = the `gays_visitor` UUID. Holds `firstSeenAt`, `lastSeenAt`, `sessionCount` and `identity{firstName, lastName, email, phone, source, identifiedAt}`. | 180 days on `lastSeenAt` |
| `sessions` | `_id` = the client session UUID. See the field list below. Indexed on `{startedAt:1}` and `{visitorId:1, startedAt:-1}`. | 180 days on `lastSeenAt` |
| `filter_stats` | `_id` = the New York day. Holds `counts.{reason}`. | none |
| `daily_reports` | `_id` = the New York date. Holds `claimedAt`, `sentAt`, `emailId` and the totals. | none |

**`sessions` fields:**

- **Identity and timing:** `visitorId`, `visitNumber`, `startedAt` and `lastSeenAt`.
- **Network and location:** `ip`, `additionalIps` (10 max), `geo{country, region, city, postalCode, latitude, longitude, timezone, continent}`, `edgeRegion` and `florida`.
- **Browser:** `userAgent{raw, browser, browserVersion, os, osVersion, deviceType, brand, model}`, `clientHints{…}`, `acceptLanguage`, `dnt` and `environment{screen, device, browser, network}`.
- **Arrival:** `arrival{landingUrl, referrer, utm{…}, clickIds{…}}`.
- **Pages:** `pages[{pageViewId, path, query, title, enteredAt, activeMs, maxScrollPct, vitals{…}, clicks[] (50 max)}]`, 200 pages max.
- **Funnel and score:** `scheduler{viewedAt, datePickedAt, slotHeldAt, bookedAt}`, `contactSubmittedAt`, `score` and `alerts.intent{claimedAt, sentAt, emailId}`.

The old plan's `ip_resolutions`, `companies` and `target_accounts` collections are gone.

**Operations**

- **Page view:** `FindOneAndUpdate` with upsert. `$setOnInsert` writes the session snapshot and the request fields, and the result says whether the session is new.
- **New session:** an upsert on `visitors` with `$setOnInsert` on `firstSeenAt`, `$max` on `lastSeenAt` and `$inc` on `sessionCount`. The returned count becomes the session's `visitNumber`.
- **Adding a page:** `$push` guarded by `pages.pvid $ne` and `pages.199 $exists:false`, with no upsert.
- **Page end:** `$max` on `pages.$[p].activeMs` and `pages.$[p].maxScrollPct`.
- **Click:** `$push` to `pages.$[p].clicks`, guarded by `clicks.49 $exists:false`.
- **Vitals:** `$set` on `pages.$[p].vitals.{name}`.
- **Scheduler step or contact submission:** `$min` on the step's timestamp, so the first one stands.
- **Identify:** `$set` on `visitors.identity`. When a visitor submits twice, the latest submission wins.
- **Score:** `$max`.
- **Drop counters:** `$inc` on a whitelisted reason only.

## Files: GeekBackend (`/Users/jeffmartin/development/GeekBackend`)

**Contracts**
- `GeekApplication/Models/Visitors/VisitorDtos.cs`: the hop DTOs (event, identify, report rows) plus the `VisitorAlertKinds` and `VisitorDropReasons` constants. Shared by both services, following `GeekApplication/Models/ContentCreator/GccDtos.cs`.

**GeekRepository**
- `GeekRepository/Data/Entities/Visitors/`: `VisitorSession.cs`, `VisitorProfile.cs`, `VisitorFilterDay.cs`, `VisitorDailyReport.cs`.
- `GeekRepository/Repositories/Visitors/IVisitorRepository.cs` and `MongoVisitorRepository.cs`:
  - Class maps in a static constructor.
  - Reuses `PreferIpv4MongoHost` from `Services/MongoGeekCrawlerService.cs:267-303`.
  - Takes a `TimeProvider` and has `EnsureIndexesAsync`.
  - Catches `MongoException` and returns `Result`. A duplicate key on the report claim returns a lost claim.
  - **Do not copy** the crawler's string date serializer (line 1259) or its read-then-replace claim (line 1219). Copy `UpdateRagIndexStatusAsync` (lines 929-956) instead.
- `GeekRepository/Controllers/Visitors/`:
  - `VisitorSessionsController`, which includes `GET repo/visitors/sessions?fromUtc&toUtc`, paged on `(startedAt, _id)`.
  - `VisitorProfilesController`, `VisitorFilterStatsController` and `VisitorDailyReportsController`.
  - Routes are `repo/visitors/*`, under the `InternalServicePolicy` policy.
- `GeekRepository/ServiceRegistration.cs`: register a singleton from the required `MONGO_VISITORS_URL`, with no localhost default.
- `GeekRepository/Program.cs`: call index creation after line 112, mirroring lines 262-277.

**GeekAPI**
- `GeekAPI/Services/Visitors/`:
  - `VisitorOptions.cs`: required environment variables, validated at startup.
  - `VisitorUserAgentParser.cs`: wraps the `UAParser` NuGet package (uap-csharp, Apache 2.0).
  - `VisitorIntentScoring.cs`
  - `VisitorAlertEmail.cs`: the plain-text intent alert.
  - `VisitorDailyReportBuilder.cs`: the New York day window, totals, top 10 lists and the text body.
  - `VisitorReportCsv.cs`: the three CSVs.
  - `VisitorDailyReportHostedService.cs`: a `BackgroundService` with a one-minute `PeriodicTimer`, modelled on `GeekCrawlerScheduleHostedService`. It takes a `TimeProvider`.
  - `ResendEmailClient.cs`: a typed `HttpClient` that sends plain text with base64 attachments and returns `Result`.
  - `VisitorEventProcessor.cs`: the orchestration. It never logs the IP or the request body.
  - `ServiceRegistration.cs` (`AddVisitors`): modelled on `Services/GeekCrawler/ServiceRegistration.cs:12-18`, and registers the hosted service.
- `GeekAPI/HttpClients/HttpVisitorRepository.cs`: checks status codes and returns `Result` instead of calling `EnsureSuccessStatusCode`. Registered as a scoped factory over `CreateClient("GeekRepository")`, following `Program.cs:101-115`.
- `GeekAPI/Controllers/Visitors/VisitorsInternalController.cs`:
  - `POST api/visitors/internal/events`, `POST api/visitors/internal/identify` and `GET api/visitors/internal/reports/{date}/{kind}.csv`.
  - Maps `Result` explicitly: 202 on success, 400 on invalid input, 404 when not found, 502 on failure.
  - The request records are declared at the bottom of the file.
- `GeekAPI/Program.cs`: add `builder.Services.AddVisitors(builder.Configuration);` after line 174 (`AddGeekCrawler`). No middleware change is needed; `ApiKeyMiddleware.cs:111` already guards `/internal/`.

**Config**
- `.env.example` and `docs/technical-specification.md` (around lines 604-608): add the new variable names.
- `GeekBackend.IntegrationTests/GeekApiTestFactory.cs:49-54`: add the visitor variables, or every integration test fails at startup.

**Tests** (`GeekBackend.Tests/Visitors/`, xUnit, hand-written handlers, `FakeTimeProvider`, EphemeralMongo as in `GeekCrawler/MongoGeekCrawlerRagIndexStatusTests.cs`)
- `VisitorIntentScoringTests`: weights, time factor, summing repeat views, bonus cap, scheduler counted once, 100 cap, 59.9 vs 60, never decreasing.
- `VisitorUserAgentParserTests`: Chrome on Windows, Safari on iPhone, Samsung Internet on Android, Edge, and an empty UA.
- `VisitorDailyReportBuilderTests`:
  - The New York window on a normal day, on 8 March 2026 (23 hours) and on 1 November 2026 (25 hours).
  - Totals, top 10 ordering, an empty day that still builds, and the 100-session body cap.
- `VisitorReportCsvTests`: commas, quotes and newlines are quoted, the BOM is present, and the column headers stay stable.
- `VisitorDailyReportHostedServiceTests`:
  - Before 07:00 it does nothing; at 07:00 it sends once, and the next tick sends nothing.
  - A failed send releases the claim and retries on the next tick.
  - Two services racing send one email.
- `MongoVisitorRepositoryTests`:
  - Claims: 20 parallel intent claims and 20 parallel report claims each have exactly one winner, and a stale release does nothing.
  - Caps: duplicate pvid, the 200-page cap, the 50-click cap and the `additionalIps` cap.
  - Updates: `activeMs` and `maxScrollPct` use `$max`; `sessionCount` increments only for a new session; identify sets the visitor identity.
  - Queries and indexes: the `startedAt` range query, and TTL `expireAfterSeconds`.
- `VisitorEventProcessorTests`:
  - A Florida session at 60 or above sends the intent email once; a non-Florida session does not.
  - A failed send releases the claim.
  - No IP appears in captured logs.
- `ApiKeyMiddlewareAuthBoundaryTests`: `events`, `identify` and `reports` under `/api/visitors/internal/` without a key each return 401.

## Files: geekatyourspot

- `package.json`: add `isbot`. User agents are parsed in GeekAPI and location comes from headers, so nothing else is needed.
- `src/lib/visitors/pulse-event.ts` (new): event types (`page_view` with the optional session snapshot, `page_end`, `click`, `scheduler`, `contact`, `vitals`), limits, and a pure `parsePulseEvent(text)`.
- `src/lib/visitors/request-fields.ts` (new): reads the IP, the Vercel geo headers, the `x-vercel-id` region, the user agent, client hints, `accept-language` and `dnt` from a `Request`.
- `src/lib/visitors/forward-pulse.ts` (new):
  - Imports `server-only`.
  - Has `forwardPulse` and `forwardIdentity`, which POST to `${GEEK_API_URL}/api/visitors/internal/{events|identify}` with `X-API-Key` and a 5-second timeout.
  - Logs only the status code.
- `src/app/api/pulse/route.ts` (new):
  - Applies the drop checks shown in the Flow section.
  - Parses `request.text()`, since `sendBeacon` may send `text/plain`.
  - Calls `after(() => forwardPulse(...))` and always returns 204.
- `src/lib/visitors/visitor-events.ts` (new): `emitVisitorEvent(kind)` dispatches a window `CustomEvent` that `VisitorPulse` listens for, and `readVisitorIds()` returns the session and visitor ids. The scheduler calls these, so it never imports the beacon.
- `src/components/analytics/visitor-pulse.tsx` (new). Its shape follows `gtm-click-tracker.tsx`: `'use client'`, renders `null`.
  - **Guards:** kept at module level, so StrictMode cannot double-send.
  - **Ids:** `gays_visitor` is persistent; `gays_session` rolls over after 30 minutes idle. Both live in localStorage.
  - **Session snapshot:** collected and sent with the first `page_view` of each session.
  - **Page events:** on a `usePathname` change it sends the last `page_end` (active time and maximum scroll depth), then a `page_view` with a new pvid, the title and the query string read from `window.location`.
  - **Active time:** `visibilitychange`, `pagehide` and `pageshow` (back/forward cache) keep the visible-only time cumulative. The timer pauses after 30 seconds with no input.
  - **Clicks:** one capture-phase listener on `document` for anchors.
  - **Web Vitals:** `useReportWebVitals`.
  - **Scheduler:** an IntersectionObserver on `#consultationAppointment2xl` requires 50% visibility for 3 seconds. Window events from `visitor-events.ts` add the later steps.
  - **Sending:** `navigator.sendBeacon` with a JSON Blob. If it returns false, the event is dropped and there is no fetch retry.
  - **Never sends:** when `navigator.globalPrivacyControl` or `navigator.webdriver` is true.
  - **No `useSearchParams`:** it would de-optimize the prerendered pages.
- **Scheduler and contact flow:**
  - `src/components/shared/scheduler/booking-widget.tsx`: emits "date picked".
  - The slot hold step: emits "slot held".
  - `src/components/shared/scheduler/contact-drawer.tsx`: emits "booking completed" or "contact submitted", and passes `readVisitorIds()` to the server actions.
- `src/lib/actions/create-booking.ts` and `src/lib/actions/submit-contact.ts`:
  - They take the visitor ids as one more argument.
  - On success they call `after(() => forwardIdentity(...))`.
  - A failed forward never fails the booking or the contact email.
- `src/app/layout.tsx`: import and render `<VisitorPulse />` after `<GoogleTagManager … />`, and change nothing else. The Sora wiring is not touched.
- `.env.example`: add `GEEK_BACKEND_API_KEY` and `VISITOR_EXCLUDED_IPS`.
- **Privacy policy** (`src/components/privacy-policy/`). These ship in the same deploy as the tracker, and the copy is full sentences with no dashes.
  - `information-we-collect-section.tsx`:
    - the IP address and the approximate location Vercel derives from it;
    - device, browser and screen details;
    - pages, time on page, scrolling and clicks;
    - the referring site and campaign tags;
    - contact details linked to visit history when someone books or writes in.
  - `cookies-section.tsx`: the `gays_visitor` and `gays_session` local storage entries.
  - `how-we-use-section.tsx`: the daily visitor report and visit notifications.
  - `who-we-share-with-section.tsx`: Railway and Hostinger, alongside the existing Google, Vercel and Resend.
  - `retention-security-section.tsx`: 180 days.
  - The Do Not Track wording changes to say the site honors Global Privacy Control.

## Environment and deploy order

1. **GeekRepository:** `MONGO_VISITORS_URL`, using a dedicated Mongo user with readWrite on `geek_visitors` only.
2. **GeekAPI:** `RESEND_API_KEY` (send-only), `VISITOR_EMAIL_FROM` (on the Resend-verified domain) and `VISITOR_EMAIL_TO`. These serve both the report and the alert.
3. **Vercel, Production only:** `GEEK_API_URL=https://api.geekatyourspot.com`, `GEEK_BACKEND_API_KEY` (server only, never `NEXT_PUBLIC_`), `VISITOR_EXCLUDED_IPS`.
4. **Site:** deploy last.

Commits go direct to main in each repo, and only when Jeff says "commit & push".

## Verification

1. **Backend tests:** `dotnet test GEEKBACKEND.slnx --filter "FullyQualifiedName~Visitors"`, then the full suite, including the integration tests.
2. **Local backend:**
   - Run `mongo:7` and a throwaway `postgres:16` in Docker. Start GeekRepository on 5050 and GeekAPI on 8080 from a directory with no `.env` above it, passing every variable explicitly.
   - curl `POST /api/visitors/internal/events` with the request fields set by hand (Vercel adds the geo headers only in production): `page_view` with a snapshot, `page_end` 120000, a `click`, `scheduler_view`, then a second page. Check `sessionScore` on each response.
   - With region `FL`, the session crosses 60 and exactly one intent email arrives. Replaying the events sends none.
   - `POST identify`, then `GET reports/{today}/sessions.csv`. The row carries the identity and every snapshot field.
3. **Local site:**
   - Set `.env.local` `GEEK_API_URL=http://localhost:8080` and run `npm run dev`.
   - curl `/api/pulse` with `x-real-ip`, `sec-fetch-site: same-origin` and a Chrome UA. It returns 204 and writes a record.
   - A Googlebot UA, a cross-site request, `sec-gpc: 1` or an excluded IP returns 204 and writes nothing.
   - In the browser Network tab, filtered on `pulse`, expect:
     - the first `page_view` with the snapshot, then one per navigation;
     - a `page_end` on hide or navigation;
     - `click` and `vitals` events;
     - `scheduler_view` after a 3-second dwell.
   - Submit the contact form; the session gains the identity.
   - Finish with `npm run lint && npm run build`.
4. **Mongo (`mongosh geek_visitors`):** inspect `sessions`, `visitors`, `filter_stats` and `daily_reports`. `getIndexes()` shows the TTL seconds.
5. **Production:**
   - Vercel logs show `/api/pulse` returning 204 with no forward errors, and the Railway logs are clean.
   - A phone on cellular appears with its carrier's city.
   - A browser with Global Privacy Control on records nothing.
   - At 07:00 the next morning, one report email arrives with three CSVs.

## Risks

- **Personal data.** A stored IP together with device details is personal data under GDPR and CCPA. The privacy policy changes ship in the same deploy, and Global Privacy Control is honored.
- **Location accuracy.** Vercel geolocation is city level at best. Mobile carriers and VPNs often place a visitor in a hub city or another state, so "Florida" will miss some locals and include some non-locals.
- **Most visitors stay anonymous.** With no reverse lookup, a visitor is named only after booking or writing in. Everyone else is an IP, a place and a device.
- **Chromium-only fields.** Client hints, `deviceMemory` and network information exist only in Chromium browsers, so Safari and Firefox rows leave those columns empty.
- **Report size.** A busy day makes a long email. The body is capped at 100 sessions and the CSVs are complete; Resend's 40 MB attachment limit is far above a day of this site's traffic.
- **TTL indexes.** A changed TTL needs `collMod`. Recreating the index throws `IndexOptionsConflict`, which the startup helper would swallow.
- **The API key on Vercel.** `GEEK_BACKEND_API_KEY` there passes GeekAPI's catch-all key check. Keep it server-only and limited to Production.
- **Ad blockers.** Brave and similar blockers may block the beacon whatever the path is called.
