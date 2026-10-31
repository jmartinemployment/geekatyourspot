import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Automating Ad Spend Optimization replaces guesswork with a repeatable system: you identify wasted spend,
        measure what actually brings in customers, then use optimization tools to keep your budget focused on what
        works. The steps follow a clear order. First, connect your ad accounts and unify the data, so every dollar
        spent can be traced back to a real sale or lead. Then, set rules that spot underperforming ads and move budget
        toward those that prove they bring in qualified business. Once these controls are in place, you stop burning
        cash on what looks good in a platform dashboard but does not translate to revenue.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core change is in how decisions get made. Instead of relying on monthly spreadsheets or the default views
        inside Google or Meta, you start with a single source of truth. This means pulling in all your ad channels,
        search, social, and display, into one dashboard. <Link id={`blog-marketing-precision-lead-acquisition-mechanics-adzooma${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/adzooma" className="text-[#0B162A] hover:underline">Adzooma</Link> makes
        this unified view possible for small teams by connecting Google, Meta, and Microsoft accounts, then surfacing
        cross-channel spend and performance in real time. You see instantly if a campaign is eating budget without
        results, or if a single ad set is quietly driving your best leads. This cross-account clarity is what most
        teams cannot get when managing each platform in its own silo.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once you see which campaigns are working, automation tools handle the repetitive moves. <Link id={`blog-marketing-precision-lead-acquisition-mechanics-cometly${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly" className="text-[#0B162A] hover:underline">Cometly</Link> deploys
        server-level tracking that goes beyond browser pixels, capturing each conversion down to the click, even when
        ad blockers or privacy settings would normally hide them. This closes the loop, so you do not scale up losers
        or pause real winners based on false signals. <Link id={`blog-marketing-precision-lead-acquisition-mechanics-triplewhale${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/triplewhale" className="text-[#0B162A] hover:underline">Triplewhale</Link>&rsquo;s
        server pixel does the same for e-commerce: it deduplicates conversion data, so you stop paying twice for the
        same customer and can finally trust your ROAS. Where budget needs to move between campaigns or channels, <Link id={`blog-marketing-precision-lead-acquisition-mechanics-bir${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/bir" className="text-[#0B162A] hover:underline">Bir</Link>&rsquo;s
        automated rules check accounts every fifteen minutes, catching sudden spikes in cost or performance drops
        before they can drain your ad spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step is rules-based optimization. Tools like <Link id={`blog-marketing-precision-lead-acquisition-mechanics-optmyzr${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/optmyzr" className="text-[#0B162A] hover:underline">Optmyzr</Link> automate
        tedious, error-prone tasks: pausing keywords with high costs and no conversions, scaling up winning ad sets, or
        shutting down broken landing pages. You set the thresholds that matter to your local business, whether
        that&rsquo;s cost per lead, <GlossaryLink slug="conversion-rate" className="text-[#0B162A] hover:underline">conversion
        rate</GlossaryLink> by zip code, or return on ad spend for a product line, and let the system enforce them
        without constant check-ins. This is how local teams keep up with larger competitors who have dedicated
        analysts watching budgets every day.</p>
      <p className="text-base text-white shadow-text pt-3">
        What ties this system together is the repeatable review cycle. <Link id={`blog-marketing-precision-lead-acquisition-mechanics-wask${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/wask" className="text-[#0B162A] hover:underline">Wask</Link> gives
        you a weekly process for structured review: connect your accounts, run the workflow, and get a plain-English
        summary of what to keep, what to fix, and what to cut. <Link id={`blog-marketing-precision-lead-acquisition-mechanics-plai${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/plai" className="text-[#0B162A] hover:underline">Plai</Link> and <Link id={`blog-marketing-precision-lead-acquisition-mechanics-localiq${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/localiq" className="text-[#0B162A] hover:underline">LocaliQ</Link> help
        you go beyond surface metrics; they handle setup of conversion pixels, lock down geofencing, and recommend
        narrow audience targets based on what works for other small businesses in your area. <Link id={`blog-marketing-precision-lead-acquisition-mechanics-google-performance-max${idSuffix}`} href="/tools/marketing/ad-spend-optimization/precision-lead-acquisition/google-performance-max" className="text-[#0B162A] hover:underline">Performance
        Max</Link> lets you move micro-budgets automatically to where demand is highest, while Adzooma centralizes
        alerts and fixes so you do not miss errors or waste in a forgotten account. The whole process keeps your spend
        focused on campaigns that prove they bring in paying customers, and the gains compound over time: fewer wasted
        dollars, more qualified leads, and a marketing system that scales even if you never add headcount.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-ad-spend-optimization-changes-the-way-small-teams-manage-their-budget" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Ad Spend Optimization Changes the Way Small Teams Manage Their Budget
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
              <h2 id="how-ad-spend-optimization-changes-the-way-small-teams-manage-their-budget-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Ad Spend Optimization Changes the Way Small Teams Manage Their Budget
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
