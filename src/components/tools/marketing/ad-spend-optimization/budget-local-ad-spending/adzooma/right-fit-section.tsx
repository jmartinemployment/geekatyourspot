import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma is built for small teams managing digital ad budgets where every dollar counts and where manual
        oversight is stretched thin. If you run digital ads for a business in Miami-Dade, Broward, or West Palm
        Beach, and your monthly spend is under $500, Adzooma is designed to solve the problems you face every day:
        scattered logins, missed optimizations, and budgets lost to platform defaults or human oversight gaps (<a id={`tools-marketing-budget-ad-copy-message-validation-adzooma-right-fit-source-adzooma-com${idSuffix}`} href="https://adzooma.com/budgeting-paid-ads/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Adzooma</a>,
        as of Oct 23, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        The teams that see the most value from Adzooma are those who cannot afford a full-time ad manager or an
        agency retainer, but still need to run effective, multi-channel campaigns. These are often owner-operators,
        lean marketing staff, or small agencies serving local clients. They need automation that protects spend,
        surfaces urgent issues, and lets them act quickly without jumping between platforms or waiting for monthly
        reports. Adzooma delivers this with daily, weekly, or monthly data refreshes depending on plan, and with a
        dashboard that shows every account, every channel, at a glance.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your workflow depends on instant, always-on validation, catching outdated copy, overspend, or delivery
        errors before they eat your budget, Adzooma’s automation rules and real-time alerts are critical. The
        platform fits best where a single missed day can mean a week’s wasted spend, and where the cost of a mistake
        is not just lost money, but lost leads and lost time. Adzooma’s Opportunity Engine, custom rules, and
        multi-channel support mean you can run Google, Meta, and Microsoft Ads with the same confidence as larger
        teams, without the overhead.</p>
      <p className="text-base text-white shadow-text pt-3">
        There are, however, situations where Adzooma may not be the right fit. If your business requires highly
        customized, platform-specific creative testing at scale, where every ad variation is hand-tuned and measured
        across dozens of segments, Adzooma’s automation-first approach may not offer the granular control of a
        dedicated, in-house PPC specialist or a larger agency. Similarly, if you are running campaigns solely on one
        platform and have the time and expertise to manage every detail manually, the unified dashboard and
        cross-platform automation may be less of a differentiator.</p>
      <p className="text-base text-white shadow-text pt-3">
        For companies with compliance requirements that demand manual review and sign-off on every ad change, or for
        those using highly specialized ad formats not supported by Google, Meta, or Microsoft, Adzooma’s automation
        may need to be supplemented with other tools or processes. The platform is strongest where the main
        challenge is time, budget, and oversight, not deep customization or regulatory review.</p>
      <p className="text-base text-white shadow-text pt-3">
        What should a small business do next if they are considering Adzooma? First, review how much time and money
        is lost each month to manual checks, missed alerts, or scattered reporting. If the answer is more than a few
        hours, if you have ever found yourself logging in late at night to check budgets, or catching a mistake only
        after it cost you leads, Adzooma’s automation and unified dashboard are likely to pay for themselves
        quickly. The Free plan is a low-risk way to see how the platform fits your workflow, with upgrades available
        for faster data refreshes and more custom alerting as your needs grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real decision is whether to keep patching together spreadsheets and logins, or to move to a
        purpose-built automation layer that closes the gaps for small teams. In South Florida, where budgets are
        tight and competition is high, Adzooma is a practical fit for businesses that want to run smarter, faster
        campaigns without the cost or complexity of an agency. For those who need deep, manual control or run
        outside the main ad platforms, another approach may suit better. For everyone else, Adzooma is the tool that
        brings big-team oversight to small-team budgets, and does it without adding more work to your day.</p>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-marketing-ad-spend-optimization-budget-local-ad-spending-adzooma-xlink-blog${idSuffix}`} href="/blog/marketing/ad-spend-optimization/how-miami-businesses-can-stop-wasting-ad-dollars-now" className="text-[#C83803] hover:underline">How Miami Businesses Can Stop Wasting Ad Dollars Now</Link> describes the job Adzooma does for a team that has caught a budget mistake only after it cost leads: one view across Google, Meta and Microsoft Ads, underperforming campaigns flagged, and one-click fixes for budget pacing errors and network settings that drain spend quietly over a weekend. It is also clear that a dashboard only helps if one named person owns acting on its alerts, since a flag nobody picks up is another week of wasted spend. Who that owner is, and which platforms you actually run, are settled in the four-phase assessment in our <Link id={`tools-marketing-ad-spend-optimization-budget-local-ad-spending-adzooma-xlink-pillar${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" className="text-[#C83803] hover:underline">AI Budget Ad Copy &amp; Message Validation</Link> guide before Adzooma becomes the control panel.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`tools-marketing-budget-ad-copy-message-validation-adzooma-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What is your comfortable monthly ad spend right now, and what are you currently paying a human or agency to
          manage it?</li>
        <li>If we double your current volume of inbound leads next month, does your business have the internal staff to
          pick up the phone within 5 minutes, or will they sit in an inbox?</li>
        <li>Does your business draw customers from a tight 5-to-10 mile radius around a physical storefront, or are you
          chasing high-ticket contracts across all of Miami-Dade, Broward, and Palm Beach or nationally?</li>
        <li>How often do you refresh your ad graphics and text, and how do you currently figure out which image actually
          made money versus just getting empty clicks?</li>
        <li>When a new client pays you, can you track that specific invoice back to the exact Facebook ad or Google
          keyword they clicked three weeks ago, or is that a complete black box?</li>
        <li>Where is your customer data stored right now? Is it scattered across Gmail and paper folders, or do you have
          a <GlossaryLink slug="crm">CRM</GlossaryLink> like Hubspot or Salesforce that updates automatically?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="which-teams-get-the-most-from-adzooma-and-who-should-look-elsewhere" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which Teams Get the Most from Adzooma, and Who Should Look Elsewhere
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
              <h2 id="which-teams-get-the-most-from-adzooma-and-who-should-look-elsewhere-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which Teams Get the Most from Adzooma, and Who Should Look Elsewhere
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
