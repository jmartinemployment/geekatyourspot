# GeekSocial engagement agents and orchestrator (Facebook, Instagram, LinkedIn)

## Context

Jeff wants a service that publishes article and link posts to a Facebook Page, Instagram and
LinkedIn, watches comments and reactions, drafts replies with Claude, and sends replies and
reactions after approval. It is built as separate components, each an agent with one responsibility,
coordinated by an orchestrator (see "Agents and the orchestrator" below).
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
- **Structure: separate agents, one responsibility each, plus an orchestrator (Jeff, 2026-11-09).**
  The earlier outline had one agent. It is now the components under "Agents and the orchestrator".
  The orchestrator is plain code, not a Claude call.

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

Findings so far (official docs fetched 2026-11-08, all LinkedIn pages read at the `li-lms-2026-10`
doc version, none from the 202511 era; Phase 0 must re-confirm each and close the gaps):

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

## Agents and the orchestrator

Each agent has one responsibility, a typed contract in `GeekApplication/`, and a list of things it
must never do. The orchestrator is the only component that knows the order of the steps. No agent
calls another agent: each takes an input and returns a `Result<T>`, and the orchestrator carries the
result to the next one.

| Component | Its one responsibility | Claude |
|---|---|---|
| Connector | Credentials: authorization, token storage and renewal, webhook subscriptions, marking an account `reconnect_required` | no |
| Listener | Turning what the platforms send (and what a resync reads) into one stored `EngagementEvent` per event | no |
| Triage | Deciding what a comment is: category, whether it needs a reply, whether a person must write it | yes |
| Drafter | Writing the reply text for a comment Triage said needs one | yes |
| Post Writer | Writing the post copy for an article or link, per platform | yes |
| Reviewer | Checking any outbound text against the voice and safety rules, and refusing what breaks them | no |
| Sender | Being the only component that changes anything on a platform: publish, reply, react. One attempt, one audit row | no |
| Orchestrator | The order of the steps, the state of each draft, and the guardrails around a send | no |

**Per component** (all under `GeekAPI/Services/Social/`, one folder each):

- **Connector** (`Connector/`; contract `ISocialAccountConnector`, plus a new `ISocialTokenProvider`).
  Takes an authorization callback, or a request for a token. Returns the stored account, or a
  `SocialToken` that is not expired. It renews a token when one within its renewal window is asked
  for, and marks the account `reconnect_required` when renewal fails. It is the only component that
  encrypts or decrypts a token (`SocialCredentialProtector`). It never reads engagement and never
  sends. No timer renews tokens (AGENTS.md forbids polling).
- **Listener** (`Listener/`; contract `ISocialEngagementReader`). Takes a webhook delivery or a
  resync page. Returns events stored once (`ON CONFLICT DO NOTHING`) and wakes the orchestrator with
  the event id. The handshake answers from in-memory configuration only. It never interprets a
  comment, never calls Claude and never calls a platform write endpoint.
- **Triage** (`Triage/`; new contract `IEngagementTriage`). Takes one stored event and its post
  context. Returns `{ NeedsReply, Category, NeedsHumanReason }` through a forced `tool_use` schema.
  It never writes reply text, never touches the store and never calls a platform. It runs only for a
  platform with an operator clearance recorded for sending comment text to Claude, and fails closed
  without one.
- **Drafter** (`Drafting/`; contract `IReplyDrafter`). Takes the event, its category and the brand
  voice. Returns the draft text and nothing else. It does not decide the category or whether to
  reply, and it is not called when Triage set `NeedsHumanReason`. It never sends.
- **Post Writer** (`Publishing/`; new contract `IPostWriter`). Takes an article's URL, title and
  summary and the target accounts. Returns post copy per platform as a suggestion for the person's
  form. It never posts. Instagram posts need an image, so the request carries one; the Post Writer
  never makes an image.
- **Reviewer** (`Review/`; new contract `IOutboundTextReviewer`, replacing the planned
  `ReplyDraftValidator`). Takes any outbound text (a draft, an edit a person made, post copy) and
  returns pass or the list of rules it breaks: em dash, "SMB", the address, phone or email, a link
  that was not approved, length. It never rewrites. A refusal is shown to the operator.
- **Sender** (`Sending/`; the existing `ISocialPublisher` and `ISocialEngagementWriter`, one
  implementation per platform, keyed DI). Takes an account, a token and one request. Returns the id
  the platform confirmed, or a failure code. One attempt, never retried; a timeout after the request
  left is `outcome_unknown`. It writes the `action_audit` row for the call. It never decides
  whether to send and never edits text.
- **Orchestrator** (`Orchestration/`; a `BackgroundService` woken through a `Channel<Guid>`, after
  `GeekCrawlerWake.cs` and `GeekCrawlerWorker.cs`). It never calls Claude and never calls a
  platform. It reaches agents only through their contracts and holds state only in `ISocialStore`.

**The reply path, in the orchestrator's order:**

1. Woken with an event id (from the Listener), or at startup for every event with no triage outcome.
2. Only `comment_created` goes to Triage; the other event kinds are stored and not triaged.
3. Triage returns a category and whether a reply is needed. When no reply is needed, or Triage could
   not run, the outcome is stored on the event now.
4. If a reply is needed and Triage did not say a person must write it, the Drafter writes it.
5. The Reviewer checks the text. A refusal is stored as a `rejected` draft carrying the rules it
   broke, so the operator sees what was refused and nothing can send it.
6. Otherwise the draft is created `pending`, and only then is `reply_needed` stored on the event. A
   crash in between leaves the event untriaged, recovery runs it again, and the one-answer index
   turns a second draft for a comment that already has a live one into a conflict the orchestrator
   reads as "already drafted". A person approves, edits (the Reviewer checks the edit) or rejects.
   Auto-send applies only to a category the account opts into, never complaint or sensitive, and only
   after step 5 passed.
7. Before a send the orchestrator checks that the account is connected and sends are not disabled,
   applies the per-platform rate limit and the per-thread cool-down, then moves the draft
   `approved` to `sending` by compare-and-set. It asks the Connector for the token and hands it to
   the Sender.
8. The Sender's result moves the draft to `sent` (with the platform comment id) or `failed` (with a
   code). A failure opens a cool-down; it is derived from recent audit rows so a restart does not
   forget it.
9. At startup it marks every draft still `sending` as `failed` with `outcome_unknown` and never
   resends it (`FailInterruptedSendsAsync`).

**The post path:** the operator starts a post, the Post Writer returns copy per platform into the
form, the person edits it, the Reviewer checks what they submit, and the Sender publishes. Nothing is
stored until it is published (`social_posts`), so a person always sees the copy first.

**What makes "one responsibility" enforced rather than asserted** (tests in `GeekBackend.Tests`, in
the style of `PostgresIsOAuthOnlyTests`):
- Only the Sender takes `ISocialPublisher` or `ISocialEngagementWriter` in a constructor.
- Only Triage, the Drafter and the Post Writer take the Anthropic client.
- The orchestrator takes neither of the above, and no agent takes another agent.
- A comment's text reaches only Triage and the Drafter.

**Failures:** an agent that cannot complete returns a failed `Result` with a `SocialFailureCodes`
value. The orchestrator stores it where the operator sees it. Nothing is retried automatically and
no fallback model or canned reply stands in; an operator action re-runs the step.

## Phases 1 to 6 (outline; each gated, none started by the first approval)

**Phase 2b (built 2026-11-09, awaiting Jeff's gate): the changes the agent split needs.** Phase 1 and
Phase 2 were built. Splitting Triage from the Drafter changed them in four small ways, done and gated
together. Because `0043_geek_social_schema.sql` has never been pushed or applied anywhere, the new
columns went into it directly and there is no `0044`. Item 4's open question is decided: a refused
draft is created `rejected`, with the rules it broke in `reply_drafts.review_refusal` (a `text[]` the
database checks against the Reviewer's rule list), so the draft states gained nothing.
1. `IReplyDrafter` currently returns a category as well as the draft. The category moves to the new
   `IEngagementTriage`; `ReplyDraftRequest` carries it in, and `ReplyDraftSuggestion` drops it.
2. The new contracts `IEngagementTriage`, `IPostWriter`, `IOutboundTextReviewer` and
   `ISocialTokenProvider`, with their models.
3. Phase 2 store: a triage outcome on `engagement_events` (none yet, reply needed, no reply needed,
   blocked for lack of clearance, failed with a code), and a way to list events with none, so the
   orchestrator can recover at startup.
4. Phase 2 store: a record of why the Reviewer refused a draft. The draft statuses have no state for
   it today, so the way to record it is decided by reading what the store permits.

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
  runner. Reads via Dapper (`Repositories/Blog/BlogRepository.cs`), writes via EF. **Schema-parity
  test, required with either mechanism:** an integration test (`TEST_DATABASE_URL`, applied with
  `SqlMigrationTestHelper`) that applies the scripts to an empty database and then queries every
  `SocialDbContext` set, so a column the SQL lacks (or the model misspells) fails the build instead of
  failing in production. A context with no EF migrations has no model snapshot to compare, so the
  test runs the model against the real schema. GeekAPI reaches the
  data only through `HttpSocial*Repository` (`GeekAPI/HttpClients/HttpVisitorRepository.cs` pattern) to
  new `repo/social/*` controllers (`GeekRepository/Controllers/Gtm`, `Visitors` pattern).
- **Token encryption:** copy `GeekRepository/Infrastructure/GtmCredentialProtector.cs` (AES-256-GCM,
  returns null on failure so callers fail closed; AGENTS.md says copy, never reuse) as
  `SocialCredentialProtector` with its own key env var. Never log tokens, comment bodies or personal data.
  Decrypted tokens travel only inside a sealed `SocialToken` type whose `ToString` and JSON
  serialization are redacted, and a test exercises the exception and ProblemDetails path with one
  to prove no token reaches a response or a log line.
- **Connector, Listener and the orchestrator's intake (Phase 3):** the Connector first (an account
  has to be connected before anything can be proven), then the Listener, then the orchestrator
  shell that takes a wake, loads the event and recovers untriaged events at startup. Nothing
  reaches Triage yet. The Listener is public, signature-verified GeekAPI endpoints for each platform (the handshake GETs answer from
  in-memory configuration only, with no repo call: LinkedIn allows 3 seconds, re-validates every
  2 hours, and blocks the endpoint after 3 failures)
  (`api/social/webhooks/meta`, `.../linkedin`): handshake, verify against the raw body, persist the
  event with `ON CONFLICT DO NOTHING`, wake the worker, return 200. Worker follows
  `GeekAPI/Services/GeekCrawler/GeekCrawlerWake.cs` + `GeekCrawlerWorker.cs` (`Channel<Guid>` wake and
  one-shot orphan recovery at startup). **Deviation:** AGENTS.md forbids timer polling, so the brief's
  polling fallback becomes gap recovery only: on startup, after resubscribing, and from an operator
  "resync" action, using LinkedIn's documented pull API and Meta's `GET /{post-id}/comments`.
- **Triage, Drafter, Reviewer and the reply path (Phase 4a), then Sender and Post Writer (Phase 4b):**
  Phase 4a ends with a `pending` draft in the store and nothing sent. Phase 4b adds the Sender, the
  send step of the orchestrator and the Post Writer, and ends at the first real send.
  Triage, the Drafter and the Post Writer are each a Claude client in `GeekAPI/Services/Social/`,
  modeled on `GeekAPI/Services/Workflow/Providers/AnthropicProvider.cs` (raw `HttpClient`, forced
  `tool_use` schema; reuse `LlmConcurrencyGate` and the `LlmProviders__Anthropic__*` config; no
  default model). Categories question / praise / complaint / spam / sensitive. Approval required by
  default; per-account auto-send only for categories Jeff opts into; complaint and sensitive never
  auto. The orchestrator's guardrails: per-platform rate limits, per-thread cooldown, the unique
  partial index so a comment is never answered twice, the per-account kill switch.
  **AGENTS.md has no automatic write retries:** a send is one attempt; a 429 or error marks the
  draft `failed`, the Sender writes an audit row, and the orchestrator opens a cool-down for later
  sends. A crash between the platform call and the DB write leaves a `sending` row that startup
  recovery marks failed with "outcome unknown, verify on platform" and never resends.
  Brand voice config is a new file (none exists); seed it from Jeff's copy rules (no em dashes, full
  sentences, "small businesses" never SMBs, no AI-in-HR pitches, never the home address, phone or
  email). The rules go into the Drafter's and the Post Writer's system prompts and are also enforced
  in code by the Reviewer, which refuses text that contains an em dash, "SMB", the address, phone or
  email, or a link that was not approved. A refused draft is operator-visible and is never silently
  rewritten.
- **API and UI (Phase 5):** GeekAPI controllers under `api/social/*` with the `geeksocial.manage`
  policy. Approve, reject, edit, publish and resync call the orchestrator, never an agent or the
  store directly. GeekOAuth: add `SeedGeekSocialClient` to `GeekOAuth/src/GeekOAuth.Server/Infrastructure/OidcPublicClientSeeds.cs`
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
  (`GeekBackend.IntegrationTests`); unit-test fakes stay in `GeekBackend.Tests`. Each agent is tested
  alone against fakes of its neighbours, and the orchestrator against fake agents, so a failure points
  at one component.

## Deviations from the brief, for Jeff's veto

1. No `GeekSocial.Persistence` project or separate Railway service (AGENTS.md topology). New env vars
   go on GeekAPI and GeekRepository; `docs/SETUP.md` lists them. The frontend deploys to Vercel.
2. Scope `geeksocial.manage` instead of an `aud` claim.
3. Gap recovery instead of a polling fallback; no automatic write retries.
4. Migration mechanism decided at the Phase 2 gate (SQL convention vs `dotnet ef`).
5. LinkedIn member reading is BLOCKED, so `LinkedInMember` ships publish-only.
6. Separate agents and a plain-code orchestrator instead of one agent (Jeff, 2026-11-09). This adds
   Phase 2b, splits Phase 4 into 4a and 4b, and changes `IReplyDrafter` (Phase 1) and the store
   (Phase 2) as listed under "Phases 1 to 6".

## Open decisions for Jeff (defaults stated; none blocks Phase 2b)

- **Post copy:** the person always sees and edits the Post Writer's copy before anything publishes.
- **Reactions:** a person chooses them in the inbox; Triage does not pick reactions.
- **Retention purge and restart recovery:** the orchestrator calls both at startup and after each
  event it processes, with no daily job (AGENTS.md forbids polling). A daily job, as the visitors
  store has, is the alternative.
- **Content Creator overlap:** GeekSocial keeps its own posts and drafts separate from Content
  Creator's existing social post and schedule tables.
- **Comment text to Claude:** LinkedIn (L5) and Meta (M4, I6) clearances are still open, and Triage
  and the Drafter stay blocked per platform until each is recorded. Which Instagram setup the
  connect flow uses (I1) is also open.

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
