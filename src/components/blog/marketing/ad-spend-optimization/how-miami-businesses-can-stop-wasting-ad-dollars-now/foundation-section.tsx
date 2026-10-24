import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FoundationSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A Budget Ad Copy &amp; Message Validation system that works long-term is built on decisions that cannot be
        undone halfway through. The most important is data quality: if your pipeline starts with missing or messy
        input, the best AI in the world cannot patch the gap. Before automating anything, map every lead source,
        tracking pixel, and goal event. Tools like Plai and LocaliQ make this process easier by automating the pixel
        setup and unifying <GlossaryLink slug="call-tracking" className="text-[#0B162A] hover:underline">call
        tracking</GlossaryLink>, web forms, and social leads in a single dashboard. But if you skip this, you are
        left chasing ghost conversions and wondering why your <GlossaryLink slug="cost-per-lead" className="text-[#0B162A] hover:underline">cost
        per lead</GlossaryLink> never improves.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is audience mapping. Many setups fail because they treat all clicks as equal. Early on, decide which
        audience segments matter to your business: local zip codes, specific neighborhoods, or buyer intent
        categories. Google Performance Max and LocaliQ both lock down geographic targeting, but it is up to you to
        specify where you want your dollars to go. Leave this open, and your ad spend leaks into out-of-town or
        low-intent clicks. Once the system knows your true service area and priority segments, it can enforce strict
        geofencing and audience filters, keeping every dollar focused on prospects who are actually likely to buy.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ownership of messaging data is another critical early decision. If you do not have control over your ad copy
        library and test results, you cannot train or improve the AI. Anyword’s Predictive Performance Score only
        works if you feed it historical data and let it learn from past campaigns. The moment you let this data
        scatter across spreadsheets or third-party agency logins, you lose the <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink> that makes automation better over time. Keep your creative assets, test scores, and
        outcome data centralized, otherwise, every campaign starts from scratch, and the system never gets smarter.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand control and style guidelines must be established upfront. AdCreative lets you upload your brand fonts,
        colors, and imagery, applying them automatically to every new creative draft it generates. But it only
        enforces consistency if you set the rules at the start. Without a defined brand kit, the AI will default to
        whatever looks generic, hurting trust and <GlossaryLink slug="conversion-rate" className="text-[#0B162A] hover:underline">conversion
        rates</GlossaryLink>. Consistency in look and message is not just a cosmetic concern, it is a structural
        safeguard that keeps your campaigns on brand across platforms and over time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, decide who owns the system and the process. Adzooma and Plai both make cross-channel management
        easier by giving you one dashboard for all your platforms, but this only works if someone is responsible for
        acting on its recommendations. Assign ownership for checking alerts, approving creative, and updating
        business goals. If everyone is responsible, no one is, and the system slips out of sync with your real-world
        needs. Put clear roles in place, so when the AI flags an underperforming campaign or a budget leak, it gets
        fixed that day, not after another week of wasted spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        A Budget Ad Copy &amp; Message Validation setup that lasts is not a one-time project. It is a system of
        decisions, mapped data, and enforced standards, powered by AI tools that work because you have given them
        the right foundation. Get these right at the start, and your automation keeps working month after month,
        scaling with your business instead of stalling the first time something changes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-foundation-of-a-budget-ad-copy-message-validation-setup-that-lasts" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The foundation of a Budget Ad Copy &amp; Message Validation setup that lasts
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-foundation-of-a-budget-ad-copy-message-validation-setup-that-lasts-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The foundation of a Budget Ad Copy &amp; Message Validation setup that lasts
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
