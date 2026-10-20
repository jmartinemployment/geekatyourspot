import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Content Generation replaces the slow, manual grind of content creation with a streamlined,
        repeatable system that lets even a two-person team look and operate like an in-house agency. The
        process starts with a clear goal: produce on-brand, localized marketing content, SEO articles, social
        posts, and emails, at the pace and quality of Fortune 500 competitors, but on a small business budget.</p>
      <p className="text-md text-white shadow-text pt-3">
        The approach follows a four-phase sequence, each phase building on the last. First, business
        objectives are set in concrete terms, what needs to be published, how often, for which audiences, and
        what a win looks like (more local leads, higher search rankings, or a steady stream of email opens).
        This isn’t guesswork; it’s a direct response to the real bottlenecks already slowing the team down,
        whether that’s blank-page paralysis, inconsistent messaging, or missing deadlines for local events.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>&nbsp;assessment. Every workflow runs on the information you already have:
        service descriptions, customer FAQs, product details, and event calendars. Clean, structured data,
        whether it’s in Google Sheets,
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, or
        QuickBooks, is pooled and validated for accuracy and completeness. This step matters because AI tools
        like&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-rytr${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr" className="text-[#0B162A] hover:underline">Rytr</Link>,&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-koala${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/koala" className="text-[#0B162A] hover:underline">Koala</Link>,
        and&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-scalenut${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut" className="text-[#0B162A] hover:underline">Scalenut</Link>&nbsp;can
        only generate content as good as the source material they’re fed. If the data has gaps or
        inconsistencies, the system flags them for review before a single draft is produced.</p>
      <p className="text-md text-white shadow-text pt-3">
        The third phase is tech selection and architecture. Here, the right mix of tools is chosen based on
        what each workflow needs. Rytr is plugged in for rapid-fire caption and microcopy generation,
        Instagram posts, Google Business Profile updates, and follow-up emails in both English and Spanish,
        all tailored for the South Florida
        market.&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-hootsuite${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite" className="text-[#0B162A] hover:underline">Hootsuite</Link>&nbsp;is
        set up as the operational backbone for scheduling, trend tracking, and multi-platform publishing,
        allowing the team to batch a month of content in a single
        sitting.&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-anyword${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword" className="text-[#0B162A] hover:underline">Anyword</Link>&nbsp;is
        introduced to eliminate the guesswork in paid ads and email subject lines by running predictive
        performance checks before anything goes live. Scalenut
        and&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-frase${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/frase" className="text-[#0B162A] hover:underline">Frase</Link>&nbsp;are
        brought in for long-form content, converting a messy pile of business notes into polished,
        authoritative blog posts that answer real customer questions and drive organic search traffic. Koala
        ensures every piece matches the business’s tone and keeps service details accurate across channels.
        When visual assets are
        needed,&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-imagine${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine" className="text-[#0B162A] hover:underline">Imagine</Link>&nbsp;generates
        branded images and short videos, drawing on real product photos or service references. For teams
        sitting on unused webinar recordings or customer
        calls,&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-castmagic${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic" className="text-[#0B162A] hover:underline">Castmagic</Link>&nbsp;turns
        that raw audio into transcribed, timestamped, and repurposed marketing assets, blog posts, email
        drips, and social snippets, in
        minutes.&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-copy-ai${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/copy" className="text-[#0B162A] hover:underline">Copy.ai</Link>&nbsp;and&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-mechanics-jasper${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper" className="text-[#0B162A] hover:underline">Jasper</Link>&nbsp;tie
        it all together, orchestrating multi-channel campaigns, batch-converting content for every platform,
        and locking in brand voice and compliance at every step.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last phase is pilot implementation. The rollout is structured: start with a single workflow (for
        example, social media scheduling), run smoke tests using real data, and validate outputs in a
        sandboxed environment. Each tool, Rytr for captions, Hootsuite for scheduling, Scalenut for articles,
        is tested with your actual business context, not a vendor demo. The team reviews the results, corrects
        errors, and iterates the setup until the content is ready to publish without manual rewriting.
        Throughout, the process is designed to scale: once the workflow proves itself, it expands to cover new
        campaigns, different content types, or additional team members without adding complexity or headcount.</p>
      <p className="text-md text-white shadow-text pt-3">
        The outcome is a marketing operation that runs on rails. A Friday afternoon that used to end with an
        abandoned draft now finishes with a full content calendar, every post and email mapped out and ready
        to go. The business owner stays focused on revenue work, while the digital presence keeps working
        behind the scenes, no missed local events, no silent weeks on social, and no more missed leads because
        a follow-up email was never sent. This is not a theoretical model. It’s a practical, local-first
        system that puts real marketing power into the hands of small teams, using the best of today’s AI
        tools in a way that matches their pace, budget, and need for results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-intelligent-content-generation-turns-small-teams-into-full-scale-marketing-engines" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Intelligent Content Generation Turns Small Teams Into Full-Scale Marketing Engines
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-intelligent-content-generation-turns-small-teams-into-full-scale-marketing-engines-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Intelligent Content Generation Turns Small Teams Into Full-Scale Marketing Engines
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
