import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Budget Ad Copy &amp; Message Validation works by installing automated controls directly inside your ad
        accounts that protect every dollar from waste, filter out bad clicks, and keep your campaigns focused on
        high-intent local buyers, without ongoing manual tweaks or a costly agency retainer. The process follows a
        strict four-phase method: align business goals, assess your data, select and configure the right technology,
        and pilot it in your own local environment before going live. Every step is designed to make sure your $500
        or less monthly spend is guarded, measured, and put to work for local results (<a id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        The first phase is <Link id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-google-performance-max${idSuffix}`} href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max" className="text-[#0B162A] hover:underline">Google
        Performance Max</Link> Objectives Alignment. Here, Geek @ Your Spot works with you to define what a win
        looks like for your business, whether that is more phone calls from the right zip codes, a lower cost per
        booked appointment, or simply fewer junk leads burning through your ad spend. Instead of broad, generic
        goals, you get sharp, measurable <GlossaryLink slug="kpi" className="text-[#0B162A] hover:underline">KPIs</GlossaryLink> that
        tie every dollar back to a real business outcome. This is not about vanity metrics or chasing impressions.
        It is about knowing exactly what you want your ads to do and setting up the entire system to deliver it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">Data Quality</GlossaryLink> Assessment.
        The system cannot make smart decisions if your data is a mess. Geek @ Your Spot audits your current
        tracking, checks every lead form, call tracking number, and source attribution, and builds automated checks
        to catch gaps before they cost you. For example, <Link id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-localiq${idSuffix}`} href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq" className="text-[#0B162A] hover:underline">LocaliQ</Link> consolidates
        lead forms, call tracking, and digital touches into one dashboard, so you know which ad, keyword, or
        platform actually drove each lead. This step also covers automated validation scripts, using tools like <Link id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-anomalo${idSuffix}`} href="/tools/marketing/anomalo" className="text-[#0B162A] hover:underline">Anomalo</Link> or <Link id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-great-expectations${idSuffix}`} href="/tools/marketing/great-expectations" className="text-[#0B162A] hover:underline">Great
        Expectations</Link>, already detailed in the publisher’s automation guides, to catch duplicates, missing
        fields, or broken tracking before they derail your campaign. Without clean, unified data, every optimization
        is just guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        The third phase is Tech Selection &amp; Architecture. Here, the focus is on connecting tools that work
        together and can be run by a small team, no extra staff, no endless dashboards. For managing micro-budgets,
        Google Performance Max is brought in to move dollars between search, maps, and social networks
        automatically, shifting spend based on what is converting now, not last week’s averages. <Link id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-adzooma${idSuffix}`} href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma" className="text-[#0B162A] hover:underline">Adzooma</Link> is
        used to combine Google, Facebook, and Microsoft Ads into one screen, so you see and control everything at
        once and do not lose money to dead or unchecked accounts. <Link id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-anyword${idSuffix}`} href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword" className="text-[#0B162A] hover:underline">Anyword</Link> is
        deployed to generate and validate ad copy before it ever goes live, using frameworks like AIDA or PAS and
        scoring each headline with a Predictive Performance Score. <Link id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-adcreative${idSuffix}`} href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adcreative" className="text-[#0B162A] hover:underline">AdCreative</Link> produces
        on-brand, conversion-focused graphics and layouts in seconds, keeping your visuals fresh and tailored to
        each ad platform. <Link id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-plai${idSuffix}`} href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/plai" className="text-[#0B162A] hover:underline">Plai</Link> is
        used to automate the harder side of analytics and targeting, setting up conversion pixels, narrowing
        audiences, and showing clear dashboards so even non-technical owners can see what works and why.</p>
      <p className="text-base text-white shadow-text pt-3">
        The final phase is Pilot Implementation Strategy. Rather than flipping the switch on your whole budget
        overnight, Geek @ Your Spot launches a controlled pilot, often in a sandboxed environment or with a subset
        of your campaign spend. This lets you smoke-test the new automation, validate that leads are coming from the
        right areas, and confirm that the system is catching and routing every inquiry as planned. AdCreative’s
        automated creative refresh ensures new graphics and copy are rotated in before <GlossaryLink slug="ad-fatigue" className="text-[#0B162A] hover:underline">ad
        fatigue</GlossaryLink> sets in; Adzooma’s cross-channel rules pause or fix budget leaks in real time;
        LocaliQ’s centralized lead management keeps every new inquiry tracked and followed up without fail. Only
        after this pilot proves its value and reliability does the full rollout happen, often with little to no
        downtime for your active campaigns.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Set clear, measurable business outcomes, no more guessing at what &quot;success&quot; looks like.</li>
        <li>Clean up and unify all lead, call, and tracking data before automating a single rule.</li>
        <li>Install automation software that works with your current ad accounts, including Google Performance Max,
          LocaliQ, Anyword, AdCreative, Adzooma, and Plai, each handling a specific bottleneck.</li>
        <li>Test the system in a pilot phase to catch problems early, using real data and live leads, before scaling up.</li>
        <li>Monitor, refine, and let the automation handle the daily grind, no more manual bid tweaks, copy rewrites, or
          spreadsheet chaos.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        This process does not just stop budget leaks. It gives you proof, in your own data, that every click, call,
        and form submission was worth the money. With automated guardrails in place, your ads stay focused on the
        buyers who matter, and your $15 a day finally works as hard as you do (<a id={`use-cases-marketing-budget-ad-copy-message-validation-mechanics-source-business-google-com${idSuffix}`} href="https://business.google.com/aunz/think/ai-excellence/epidemic-sound-ai-max-search/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Google</a>,
        as of Oct 24, 2026).</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-budget-ad-copy-message-validation-actually-works" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Budget Ad Copy &amp; Message Validation Actually Works
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
              <h2 id="how-budget-ad-copy-message-validation-actually-works-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Budget Ad Copy &amp; Message Validation Actually Works
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
