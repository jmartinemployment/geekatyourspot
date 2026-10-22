import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Picture a small sales team in Miami-Dade, working the phones from a cramped office, list of prospects
        on the desk. Every day, they spend hours dialing company numbers, only to be sent to voicemail or
        blocked by a receptionist who will never pass on the message. They try LinkedIn, sending messages that
        vanish unread. The real decision-makers remain out of reach, and every call that lands on a dead line
        is another hour lost, hours that no one on a small team can afford.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is not just wasted effort. It is a direct hit to the pipeline. With no verified mobile numbers or
        personal emails, your team is locked out of conversations that could close deals. Instead, you chase
        cold leads, hoping one will answer. Meanwhile, the website quietly logs dozens of visits from real
        prospects, people who have shown genuine interest. But without a way to capture or enrich that data,
        98% of those warm leads leave without ever raising a hand, and you never know who they were.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-marketing-lead-enrichment-lusha-overview-lead-enrichment${idSuffix}`} href="/use-cases/marketing/lead-capture-pipeline/ai-lead-enrichment-scoring" className="text-[#C83803] hover:underline">Lead Enrichment & Predictive Scoring</Link>&nbsp;exist for this exact bottleneck. Instead of pouring 80% of your
        energy into dead ends, the right pipeline brings verified contact data, buying signals, and scoring
        models straight into your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or outreach workflow.
        Now the team spends its time talking to people who actually have the authority and intent to buy.
        Calls reach real decision-makers. Email campaigns skip the bounces and land in active inboxes. The
        difference is not just in the number of leads, but in the quality and the speed with which you can act
        on them.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in West Palm, Broward and Miami-Dade, the stakes are simple: every wasted hour
        and missed contact is money left on the table. With a Lead Capture Pipeline built around smart
        chatbots, AI-driven&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>, and always-on
        voice assistants, your team works around the clock, capturing, enriching, and qualifying leads while
        you sleep. This approach is not about adding more work. It is about focusing your limited resources
        where they have real impact, so you spend less time guessing and more time closing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
