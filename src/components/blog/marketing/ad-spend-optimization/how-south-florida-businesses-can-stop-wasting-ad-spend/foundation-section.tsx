import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FoundationSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A Measured Lead Generation rollout either becomes a reliable growth engine or stalls out based on decisions
        made right at the start. The biggest risk is treating it as a quick tech upgrade rather than a change in how
        your business manages lead data, creative, and spend. The key factors that separate a sustainable system
        from one that fails are data integrity, mapping of roles and channels, and who owns each part of the
        process.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data integrity is the first decision that cannot be unwound. If your CRM and contact lists are messy,
        duplicated, or out of date, no amount of automation will deliver quality leads or target the right buyers.
        Wrench is critical here, not just for scoring and segmenting your contacts, but for cleaning and
        standardizing your data so every sync with ad platforms is accurate. If you skip this step, your campaigns
        will waste budget on mismatched or invalid contacts, and you will never see the efficiency gains Measured
        Lead Generation promises.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mapping roles and assigning platform ownership is next. Who owns creative testing? Who monitors daily budget
        automation? If you treat your tools, Performance Max, Marpipe, Optmyzr, and <Link id={`blog-marketing-measured-lead-generation-foundation-madgicx${idSuffix}`} href="/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx" className="text-[#0B162A] hover:underline">Madgicx</Link>,
        as isolated add-ons with no clear point of responsibility, your automation will stall. Assign one owner for
        each platform: someone who knows what a win looks like and who can step in if something is off. This way,
        when Marpipe generates 200 creative variants or Optmyzr flags a landing page error, you know who is
        responsible for acting (or confirming that automation has done its job).</p>
      <p className="text-base text-white shadow-text pt-3">
        Channel mapping is just as important. Madgicx is only as powerful as your account structure. If you do not
        define clear funnel stages and segment your audiences, you end up with overlapping ads bidding against each
        other or with cold and warm leads mixed together. The same goes for exclusion rules in Wrench and audience
        segmentation in Performance Max. If you leave these undefined, your automation will spend as much time
        correcting mistakes as it does optimizing performance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, decide who owns the data <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink>. Is it operations, marketing, or a consultant? Without a clear data feedback owner, even
        the best automation will drift. Optmyzr’s rule engine, for example, needs fresh data on what counts as a
        quality lead, what a safety threshold is for <GlossaryLink slug="cost-per-acquisition" className="text-[#0B162A] hover:underline">cost-per-acquisition</GlossaryLink>,
        and when to pause a campaign. If no one is regularly reviewing and updating these parameters, your
        automation will slowly become less effective over time.</p>
      <p className="text-base text-white shadow-text pt-3">
        A lasting implementation is not about more tools or a bigger budget. It is about structured decisions: clean
        data, mapped roles, clear funnel definitions, and defined ownership at every step. When these are set from
        the beginning, Measured Lead Generation does not just work, it compounds, delivering better leads and more
        efficient spend every month.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-make-or-break-decisions-for-a-lasting-measured-lead-generation-setup" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The make-or-break decisions for a lasting Measured Lead Generation setup
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-make-or-break-decisions-for-a-lasting-measured-lead-generation-setup-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The make-or-break decisions for a lasting Measured Lead Generation setup
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
