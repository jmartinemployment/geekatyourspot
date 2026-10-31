export default function PaaSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is AI ad-spend optimization?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              AI ad-spend optimization uses advertising performance data to help decide where your budget should go.
              Depending on the system, it can recommend or execute bid adjustments, budget changes, campaign pauses, and
              reallocations.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How is ad-spend optimization different from attribution?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Attribution helps identify which advertising interactions contributed to a lead or sale. Spend
              optimization uses performance evidence to decide what to fund next.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will optimization reduce my advertising bill?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Not necessarily. Optimization may recommend reducing waste, maintaining the same budget, or spending more
              on campaigns meeting your targets.</p>
            <p className="text-base text-white shadow-text pt-3">
              The relevant question is whether the spending produces worthwhile outcomes, not whether the monthly bill
              becomes smaller.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is this worthwhile if I spend around $1,500 a month on ads?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Possibly, but that budget alone does not establish a need for additional software.</p>
            <p className="text-base text-white shadow-text pt-3">
              Our proposed assessment would compare the cost of the software and management against the problem being
              solved. If your existing tools can address the issue, we should start there rather than add
              subscriptions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is ROAS the same as profit?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. Return on ad spend, or ROAS, compares attributed revenue with advertising spend.</p>
            <p className="text-base text-white shadow-text pt-3">
              For example, $4,000 in attributed revenue from $1,000 in advertising equals 4&times; ROAS. That does not
              deduct product costs, payroll, software, management, or other expenses. Your business still needs a
              profitability assessment.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can this work if customers call instead of buying online?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, provided the measurement setup can connect the inquiry and later outcome appropriately.</p>
            <p className="text-base text-white shadow-text pt-3">
              A phone inquiry, a qualified opportunity, and a completed sale should not automatically count as the same
              achievement. Offline-conversion workflows can help connect later sales outcomes back to advertising.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can AI distinguish good leads from spam or unsuitable inquiries?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Not reliably unless the workflow provides meaningful information about lead quality.</p>
            <p className="text-base text-white shadow-text pt-3">
              Our proposed setup would define qualified and unqualified outcomes, record them consistently, and verify
              whether those outcomes can be returned to the advertising platform. Better measurement data can support AI
              bidding optimization; it does not eliminate the need for accurate classification.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I approve changes before the software makes them?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              That depends on the product and configuration.</p>
            <p className="text-base text-white shadow-text pt-3">
              Before recommending a system, we should demonstrate whether it only recommends changes, executes after
              approval, or operates automatically. We should also establish spending limits, permitted actions, alerts,
              and a history of changes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How long does it take to know whether optimization is working?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              There is no set timeline for results. The right evaluation period depends on how often your business gets
              conversions and how long your customers take to decide. For example, Google suggests using conversion
              cycles and mentions four weeks for some Smart Bidding changes, but that is just a guideline. Each campaign
              will show results at its own pace.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can we limit advertising to the areas we actually serve?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, ad platforms let you target by geography, including picking specific locations or a set radius. For
              South Florida businesses, Geek @ Your Spot recommends defining the service areas that bring in profit and
              excluding areas that do not. We also check if your ads should reach only people physically in your area or
              those interested in it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
