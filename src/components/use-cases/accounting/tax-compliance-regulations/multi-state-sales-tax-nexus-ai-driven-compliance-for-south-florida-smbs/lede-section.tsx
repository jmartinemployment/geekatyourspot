import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture a Broward-based online retailer whose sales just broke six figures, celebration-worthy, until
        the next spreadsheet reveals orders shipped to buyers in Texas, Georgia, and New York. Suddenly, the
        owner is not just running a business. They are now on the hook for tracking Multi-State Sales Tax Nexus
        across more than 11,000 tax jurisdictions, each with its own thresholds, deadlines, and rules. What
        started as a growth milestone now feels like a full-time compliance job, with no safety net and no
        dedicated tax staff to lean on.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is the moment where risk outpaces revenue. Small businesses in South Florida, whether selling on
        Shopify, shipping wholesale, or
        scaling&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;subscriptions, trigger new tax
        obligations as soon as they cross $100,000 in sales or 200 transactions in a single state. The problem:
        those triggers go off long before most teams have the internal controls, reporting, or state
        registrations to manage them. Missing a threshold means you may owe back taxes (out of pocket), face
        audit letters, or rack up late penalties, without ever knowing you crossed the line.</p>
      <p className="text-md text-white shadow-text pt-3">
        This page gives you the answer to a simple but urgent question: are you truly scaling your business
        across state lines, or just scaling your audit liability? If your sales are moving outside Florida, you
        need to know, right now, where you stand with Multi-State Sales Tax Nexus. We show you how to automate
        compliance, wire a purpose-built tax engine into your billing stack, and eliminate the risk of silent
        violations. No more manual tracking, no more spreadsheet errors, no more legal blind spots. Just a
        clear, managed path to selling anywhere in the US, with zero manual upkeep and zero guesswork.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-cost-of-crossing-borders-without-a-tax-map" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Crossing Borders Without a Tax Map
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-cost-of-crossing-borders-without-a-tax-map" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Crossing Borders Without a Tax Map
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
