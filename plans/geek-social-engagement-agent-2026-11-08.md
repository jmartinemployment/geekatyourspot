# GeekSocial engagement agent (Facebook Pages + LinkedIn)

## Context

Jeff wants a service that publishes article and link posts to a Facebook Page and LinkedIn, watches
comments and reactions, drafts replies with Claude, and sends replies and reactions after approval.
His brief is gated: Phase 0 (verify the platform APIs, write `docs/PLATFORM-CAPABILITIES.md`, stop and
show the matrix) comes before any code, and every later phase stops at a gate for his review.

**Approving this plan authorizes Phase 0 only.** Phases 1 to 6 are outlined so he can veto the
architecture now; each still ends at its own gate.

## Decisions already made (Jeff, 2026-11-08)

- **Architecture: inside GeekAPI + GeekRepository**, not a standalone service. `GeekBackend/AGENTS.md`
  ("Service topology & trust boundaries") says new products get no database connection of their own,
  Postgres is reached only through GeekRepository (`X-Repo-Key`, called only from GeekAPI), and calls
  the standalone Geek-SEO service unauthorized. The brief's `GeekSocial.Persistence` project becomes a
  `Social` slice of GeekRepository.
- **Authorization: scope `geeksocial.manage` + policy**, copying `ContentCreatorManage`
  (`GeekAPI/Auth/ContentCreatorAuthConstants.cs`, `GeekAPI/Program.cs:199-247`). GeekOAuth has no
  audience mechanism (no token carries `aud`; GeekAPI sets `ValidateAudience=false`), so the brief's
  "audience `geeksocial`" is replaced by the scope.
- **Existing setup:** Facebook test Page (admin) and LinkedIn company Page (admin). Not yet: Meta
  developer app, LinkedIn developer app, Community Management API access.

## Long-lead items Jeff must start now (before or during Phase 0)

LinkedIn approval is the critical path; nothing LinkedIn-side can be proven until it lands.
1. Create the Meta app and add the Page `feed` webhook use case (development mode is enough for his own Page).
2. Create the LinkedIn app, associate it with the company Page, request **Community Management API**
   (starts at Development tier: 500 calls/app/day, 100/member/day, no BATCH_GET; Standard needs a form,
   a screen recording and test credentials, within 12 months), and request the **webhooks use case**.
3. Open question for Phase 0: LinkedIn member posting (`w_member_social`) belongs to a different
   product ("Share on LinkedIn"); confirm whether it can share an app with Community Management or
   needs a second app.

## Phase 0: platform verification (the only work the first approval starts)

Deliverables, written into `GeekBackend/docs/` (no code, no schema):
- `PLATFORM-CAPABILITIES.md`: matrix of action x platform x endpoint x scope/permission x access tier x
  webhook support x token lifetime/refresh, with **BLOCKED** where unsupported or unapproved.
- Then stop and show Jeff the matrix.

Findings so far (official docs fetched 2026-11-08; Phase 0 must re-confirm each and close the gaps):

| Action | Meta Page (Graph v27.0) | LinkedIn org | LinkedIn member |
|---|---|---|---|
| Publish link/article | `POST /{page-id}/feed` (`link`); `pages_manage_posts`; returns `{id}`; schedule with `published=false` + `scheduled_publish_time` (10 min to 30 days) | `POST /rest/posts` with `content.article` (source, title, description, thumbnail URN from Images API; no URL scraping); 201 + `x-restli-id`; `w_organization_social`, org role ADMINISTRATOR/CONTENT_ADMIN/DIRECT_SPONSORED_CONTENT_POSTER | same endpoint, author `urn:li:person`, `w_member_social` |
| Native long-form Article / Newsletter | n/a | **BLOCKED** (not in Posts API content types) | **BLOCKED** |
| Read comments | `GET /{post-id}/comments` with Page token (a user token returns empty; comment `id` needs MODERATE task) | `GET /rest/socialActions/{urn}/comments`; `r_organization_social` (comment docs name `*_social_feed`, reconcile in portal) | **BLOCKED**: `r_member_social` is restricted to approved developers |
| Reply as the account | `POST /{object-id}/comments` (Page token with MODERATE, or `pages_manage_engagement`); reply to a comment via `/{comment-id}/comments` (inferred, confirm) | `POST /rest/socialActions/{urn}/comments` with `actor`, `object`, `parentComment`; 429 on member creation throttle (1 min) | same endpoint, `w_member_social`; useless without read access |
| React | Page `LIKE` only: `POST /{comment-id}/likes`, `pages_manage_engagement`, CREATE_CONTENT; other reaction types not documented, treat as **BLOCKED** until proven | `POST /rest/reactions?actor=` with `root` = post or comment URN; LIKE, PRAISE, EMPATHY, INTEREST, APPRECIATION, ENTERTAINMENT (`MAYBE` returns 400) | same, person actor |
| Webhooks | `feed` field via `POST /{page-id}/subscribed_apps`; needs `pages_manage_metadata` + `pages_show_list`; verbs add/edit/edited/delete/remove/hide/unhide; comment fields `comment_id, parent_id, post_id, from, message, created_time`; reaction has `reaction_type`; handshake `hub.mode/verify_token/challenge`; `X-Hub-Signature-256` (`sha256=`); retries over 36 h; up to 1000 per batch | `ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS` via `PUT /rest/eventSubscriptions/...`; needs `rw_organization_admin` by an org ADMINISTRATOR; PUBLIC posts only; actions LIKE, COMMENT, SHARE, SHARE_MENTION, ADMIN_COMMENT, COMMENT_EDIT, COMMENT_DELETE; batches of 10; redelivery every 5 min for 8 h; pull API `organizationalEntityNotifications` keeps 60 days | **BLOCKED**: no notifications, no read access |
| Webhook security | `X-Hub-Signature-256` HMAC with app secret | GET `challengeCode` -> JSON with hex `HMACSHA256(challengeCode, clientSecret)` within 3 s; re-validated every 2 h (3 failures = blocked); POST `X-LI-Signature` = hex `HMACSHA256("hmacsha256=" + raw body, clientSecret)`; HTTPS only; dedupe on `notificationId` | n/a |
| Tokens | Long-lived user token about 60 days (`fb_exchange_token`); Page token from `/{user-id}/accounts` has no expiry but can be invalidated | Access 60 days; programmatic refresh 365 days, and refreshing does not extend it (re-consent yearly) | same |
| Headers | none special | `Linkedin-Version: YYYYMM` (use 202610; **202511 sunsets 2026-11-16**), `X-Restli-Protocol-Version: 2.0.0` | same |

Meta personal profiles: out of scope (no API). LinkedIn member engagement is publish-only until
`r_member_social` is approved, which also removes any need for a polling fallback.

Gaps Phase 0 must close before the matrix is final: Meta Advanced Access / App Review needs per
permission and whether `feed` webhooks fire in development mode; whether `pages_read_user_content`
is required to read commenter text; token invalidation triggers; whether a Page can create
non-LIKE reactions; the LinkedIn `*_social` vs `*_social_feed` scope names; LinkedIn data-retention
rules (sets the purge window); Development-tier limits against the planned call volume.

## Phases 1 to 6 (outline; each gated, none started by the first approval)

Where each piece lives (all paths under `GeekBackend/`, reuse these, do not invent new patterns):
- **Contracts (Phase 1):** interfaces and models in `GeekApplication/` returning `Result<T>`
  (`GeekApplication/Results/`): `ISocialPublisher`, `ISocialEngagementReader` (including
  normalized webhook events), `ISocialEngagementWriter` (validates reaction type per platform),
  `ISocialAccountConnector`, `IReplyDrafter`; models `SocialAccount`, `SocialPost`,
  `EngagementEvent`, `ReplyDraft`, `ActionAudit`. Implementations `Meta`, `LinkedInOrganization`,
  `LinkedInMember` under `GeekAPI/Services/Social/`, registered with **keyed DI** because both
  platforms are active at once (precedent: `GeekAPI/Services/Workflow/Hosting/WorkflowServiceRegistration.cs:59`;
  startup throws on missing config like `Geek-SEO/GeekSeoBackend/Extensions/SeoProviderRegistration.cs`).
- **Persistence (Phase 2):** schema `geek_social` in GeekRepository's Postgres: `social_accounts`,
  `posts`, `engagement_events` (unique `platform` + `platform_event_id`), `reply_drafts`
  (pending/approved/rejected/sent/failed), `action_audit`. Follow the `geek_gtm` / `geek_visitors`
  precedent: `GeekRepository/Migrations/Sql/0043_geek_social_schema.sql` plus a `SocialDbContext`
  with no EF migrations. **Deviation:** the brief says migrations go through `dotnet ef`; the three
  newest schemas use SQL files via `SqlMigrationRunner`. Decide at the Phase 2 gate after reading the
  runner. Reads via Dapper (`Repositories/Blog/BlogRepository.cs`), writes via EF. GeekAPI reaches the
  data only through `HttpSocial*Repository` (`GeekAPI/HttpClients/HttpVisitorRepository.cs` pattern) to
  new `repo/social/*` controllers (`GeekRepository/Controllers/Gtm`, `Visitors` pattern).
- **Token encryption:** copy `GeekRepository/Infrastructure/GtmCredentialProtector.cs` (AES-256-GCM,
  returns null on failure so callers fail closed; AGENTS.md says copy, never reuse) as
  `SocialCredentialProtector` with its own key env var. Never log tokens, comment bodies or personal data.
- **Ingestion (Phase 3):** public, signature-verified GeekAPI endpoints for each platform
  (`api/social/webhooks/meta`, `.../linkedin`): handshake, verify against the raw body, persist the
  event with `ON CONFLICT DO NOTHING`, wake the worker, return 200. Worker follows
  `GeekAPI/Services/GeekCrawler/GeekCrawlerWake.cs` + `GeekCrawlerWorker.cs` (`Channel<Guid>` wake and
  one-shot orphan recovery at startup). **Deviation:** AGENTS.md forbids timer polling, so the brief's
  polling fallback becomes gap recovery only: on startup, after resubscribing, and from an operator
  "resync" action, using LinkedIn's documented pull API and Meta's `GET /{post-id}/comments`.
- **Agent (Phase 4):** `ClaudeReplyDrafter` in `GeekAPI/Services/Social/`, modeled on
  `GeekAPI/Services/Workflow/Providers/AnthropicProvider.cs` (raw `HttpClient`, forced `tool_use`
  schema returning category, draft and a needs-human reason; reuse `LlmConcurrencyGate` and the
  `LlmProviders__Anthropic__*` config; no default model). Categories question / praise / complaint /
  spam / sensitive. Approval required by default; per-account auto-send only for categories Jeff
  opts into; complaint and sensitive never auto. Guardrails: per-platform rate limits, per-thread
  cooldown, unique partial index so a comment is never answered twice, max length, no links unless
  approved, per-account kill switch. **AGENTS.md has no automatic write retries:** a send is one
  attempt; a 429 or error marks the draft `failed`, writes an audit row, and opens a cool-down for
  later sends. A crash between the platform call and the DB write leaves a `sending` row that startup
  recovery marks failed with "outcome unknown, verify on platform" and never resends.
  Brand voice config is a new file (none exists); seed it from Jeff's copy rules (no em dashes, full
  sentences, "small businesses" never SMBs, no AI-in-HR pitches, never the home address, phone or email).
- **API and UI (Phase 5):** GeekAPI controllers under `api/social/*` with the `geeksocial.manage`
  policy. GeekOAuth: add `SeedGeekSocialClient` to `GeekOAuth/src/GeekOAuth.Server/Infrastructure/OidcPublicClientSeeds.cs`
  (copy `SeedGeekReportsClient`), the scope to `ScopeSeeder.cs` (existing scopes are never edited, so
  get the name right), and the new host to the CSP list in `Middleware/SecurityHeadersMiddleware.cs:111-133`.
  Frontend: a new Next.js repo on Vercel (every internal app is its own repo and Vercel project; none
  is on Railway), copying `content-creator-v2` auth (`src/lib/auth/cookies.ts`, `src/proxy.ts`, the
  `src/app/api/cw/[...path]/route.ts` same-origin Bearer proxy). Inbox page copies
  `GeekContentWorkflow/src/app/app/reconciliation/page.tsx`; the edit step is new (nearest form:
  `geek-admin/src/components/post-form.tsx`). Optional MCP tools follow `/Users/jeffmartin/development/Geek-GTM-MCP`
  (ModelContextProtocol 1.4.0, calls `api/social/internal/*` with `X-API-Key`).
- **Proof (Phase 6):** against the real Facebook test Page and LinkedIn company Page: SQL row counts for
  `posts`, `engagement_events`, `reply_drafts` (sent) and `action_audit` with the platform IDs returned
  for one post, one reply and one reaction per platform; a webhook replayed twice yields exactly one
  `engagement_events` row; an expired or revoked token gives an explicit failure plus an audit row.
  Integration tests use real sandbox accounts and run only with `TEST_DATABASE_URL`
  (`GeekBackend.IntegrationTests`); unit-test fakes stay in `GeekBackend.Tests`.

## Deviations from the brief, for Jeff's veto

1. No `GeekSocial.Persistence` project or separate Railway service (AGENTS.md topology). New env vars
   go on GeekAPI and GeekRepository; `docs/SETUP.md` lists them. The frontend deploys to Vercel.
2. Scope `geeksocial.manage` instead of an `aud` claim.
3. Gap recovery instead of a polling fallback; no automatic write retries.
4. Migration mechanism decided at the Phase 2 gate (SQL convention vs `dotnet ef`).
5. LinkedIn member reading is BLOCKED, so `LinkedInMember` ships publish-only.

## Working rules for the build

- Correctness over expediency: fail loud, no stubs, no mocked data in non-test code, never report
  success the platform did not confirm.
- GeekBackend commits: no AI attribution and no `Co-authored-by`; run `git diff --cached --stat` as its
  own step first because the repo can hold other people's staged work; `AGENTS.md` is gitignored, so
  any GeekSocial section added there stays local.
- Stop at every gate and show Jeff the artifact before continuing.

## Verification for Phase 0

- Every matrix row cites the official doc URL and fetch date; rows not confirmed are marked
  unverified, not guessed.
- Cross-check each BLOCKED row against the developer portal once the apps exist.
- Nothing is written outside `GeekBackend/docs/`; `git status` shows only the two doc files.
