import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Most small business sales teams in South Florida are fighting a losing battle every week. The core
        problem? The entire process is built on guesswork and outdated lists. Instead of working directly from
        real buying signals, teams spend their days working through spreadsheets of cold, outdated or
        irrelevant names, leads that have no real intent, no decision-making authority, or are simply no
        longer at the company. This is not a failure of effort. It is structural, and it’s everywhere.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first breakdown is in the data itself. When you type out prospect lists by hand or buy generic
        contact sheets, you end up with two kinds of errors: you call people who have left the company, or you
        call the main switchboard and get routed to a gatekeeper who can’t or won’t connect you to
        decision-makers. Many teams spend hours every week dialing numbers that go nowhere, hitting generic
        voicemails, or getting blocked by reception. Even when you reach someone, it is often the wrong
        person, a junior staff member, a generic info@ inbox, or worse, a dead number that triggers spam
        filters and hurts your future
        deliverability.&nbsp;<Link id={`use-cases-marketing-lead-enrichment-and-predictive-scoring-challenges-lusha${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha" className="text-[#C83803] hover:underline">Lusha</Link>&nbsp;is
        built to solve this by dropping verified mobile numbers and real emails straight into your database,
        so you skip the switchboard entirely and always have a direct line to someone who can actually buy.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next failure is failing to know who is actually interested right now. Most businesses have no way
        to see which local companies are on their website, looking at pricing or service pages, or comparing
        you to a competitor. Every day, high-intent prospects visit, look around, and leave with no trace.
        There is no system to resolve anonymous traffic into real companies, so sales teams keep working cold
        lists while warm, ready-to-buy accounts slip away.
        Both&nbsp;<Link id={`use-cases-marketing-lead-enrichment-and-predictive-scoring-challenges-snitcher${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher" className="text-[#C83803] hover:underline">Snitcher</Link>&nbsp;and&nbsp;<Link id={`use-cases-marketing-lead-enrichment-and-predictive-scoring-challenges-leadfeeder${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder" className="text-[#C83803] hover:underline">Leadfeeder</Link>&nbsp;are
        designed for exactly this problem: they identify, in real time, the companies browsing your site, flag
        the ones that fit your ICP, and show you what they viewed, so you never miss a warm lead again.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even when a qualified lead does fill out a form, the process is slow. Form entries sit in inboxes
        waiting for manual review, and too often nobody enriches the data before it hits
        the&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. That means your team is left working with
        half-complete records, missing firmographics, or basic contact details. This is
        where&nbsp;<Link id={`use-cases-marketing-lead-enrichment-and-predictive-scoring-challenges-apollo${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo" className="text-[#C83803] hover:underline">Apollo</Link>&nbsp;comes
        in: it enriches inbound leads instantly, pulling in verified business emails, phone numbers, and deep
        company data so every lead that appears is ready to score and work right away, no lag, no guessing.</p>
      <p className="text-md text-white shadow-text pt-3">
        There is also a problem with prioritization. Without predictive scoring, every lead looks the same, so
        reps spend their time on whoever comes in first or shuffles to the top of the spreadsheet, not on the
        prospects who are actually most likely to
        buy.&nbsp;<Link id={`use-cases-marketing-lead-enrichment-and-predictive-scoring-challenges-factors${idSuffix}`} href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors" className="text-[#C83803] hover:underline">Factors</Link>&nbsp;addresses
        this head-on, scoring inbound and outbound leads based on real engagement: not just who fits on paper,
        but who is showing buying signals, multiple visits to your pricing page, repeat content downloads, or
        high-value company characteristics. This lets you sort the list by real intent, not just
        alphabetically or by who filled out a form first.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, even the best-intentioned teams get tripped up by compliance and data decay. Outdated contact
        records, missing opt-in proof, or risky email architectures expose you to regulatory complaints and
        high bounce rates. Lusha flags risky addresses before you send, and updates records when contacts move
        or get promoted, so your outreach stays compliant and effective without repeated manual cleanup.</p>
      <p className="text-md text-white shadow-text pt-3">
        When you add it up, the pattern is clear. The failures are not just about missing a few leads, they
        are about working in the dark, spending hours on tasks that automation can do in seconds, and missing
        the high-intent buyers who are already looking for you. Until you fix these structural issues, dead
        data, anonymous traffic, manual prioritization, and compliance risk, you are stuck on the same hamster
        wheel as every other local business: calling cold, missing hot, and watching the real pipeline slip
        through your fingers.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-sales-teams-keep-chasing-the-wrong-leads-and-miss-the-ones-that-matter" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Sales Teams Keep Chasing the Wrong Leads (and Miss the Ones That Matter)
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-sales-teams-keep-chasing-the-wrong-leads-and-miss-the-ones-that-matter-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Sales Teams Keep Chasing the Wrong Leads (and Miss the Ones That Matter)
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
