import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The next steps after reading this are clear: start by mapping your current ad flows, review your tracking
        setup, and schedule a data quality check before you move a dollar into automation. Only once you know that your
        conversions, sales, and lead data are flowing cleanly across your platforms should you move to the next phase,
        selecting the right tool and process for your business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Begin with a business objectives alignment. Write down exactly what success looks like for your business,
        whether it is lowering <GlossaryLink slug="cost-per-lead">cost per lead</GlossaryLink>, increasing new sales,
        or just keeping your budget from drifting into low-value clicks. This is not a formality. Cometly, for example,
        will not deliver real value if you cannot name which conversions matter most to you. If your team is still
        debating whether a phone call or a form fill is a true lead, clarify this now. The same goes for Plai and
        LocaliQ, both depend on clear, measurable goals to set up their automated tracking and local targeting.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, run a data quality assessment. This is where you check that your CRM, website forms, and ad platforms are
        all sharing the same version of the truth. Triplewhale and Cometly both specialize in closing the gap between
        what your ad dashboard claims and what actually shows up in your bank account. Use their server-side tracking
        to verify that every conversion, call, or booked appointment is being recorded and deduplicated. If you find
        missing data or duplicate conversions, fix it before you go further. This step alone can reveal hidden leaks
        that have been quietly draining your budget for months.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once your data is solid, choose the right toolset and architecture. For small teams managing multiple
        platforms, Adzooma stands out by bringing every channel into one dashboard. No more logging in to five places
        to check if a campaign is burning cash overnight, Adzooma and Wask both give you real-time alerts and unified
        reporting, so you never miss a problem. If your campaigns are more complex, spanning Google, Meta, and local
        search, Bir and Optmyzr offer advanced automation, running custom scripts and 15-minute check rules that catch
        volatility before it can snowball into a bigger loss.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business has specific needs, such as hyper-local targeting or strict budget controls, tools like
        LocaliQ and Performance Max are built to lock down your geographic footprint and shift spend between channels
        based on live conversion data. For businesses that want to move away from spreadsheet-based reporting,
        Triplewhale and Plai deliver automated, visual dashboards that translate complex performance metrics into plain
        English, making it easy to see which campaigns to scale and which to cut.</p>
      <p className="text-base text-white shadow-text pt-3">
        With the tech in place, roll out a pilot implementation. Start by running automated rules on a subset of your
        campaigns. For example, use Optmyzr or Bir to run automated bid adjustments and pause underperforming ads, but
        keep a manual review step for the first month. This lets you validate that the automation is following your
        business logic and not over-correcting for short-term noise. During this phase, keep your team in the loop,
        review alerts and recommendations together, and refine your rules as needed. If you see budget shifts or
        pausing that do not match your goals, adjust the thresholds or step up your data checks.</p>
      <p className="text-base text-white shadow-text pt-3">
        You should expect a noticeable drop in wasted spend within the first month, and a much clearer understanding of
        which ads are actually driving results. For most small businesses, the immediate impact is less time spent on
        manual checks and fewer surprises in monthly reports. In a hypothetical twelve-person marketing team, this
        could mean reclaiming 20 hours a month previously lost to spreadsheet exports and dashboard checks (<a id={`use-cases-marketing-precision-lead-acquisition-preparing-source-cometly-com${idSuffix}`} href="https://www.cometly.com/post/boost-conversion-rates-framework" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Cometly</a>,
        as of Oct 29, 2026). Over the next quarter, you should see your high-performing campaigns get more budget
        automatically, while weak performers are scaled down or paused without waiting for human intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        Longer term, the most valuable outcome is discipline, your ad budget starts working like a flywheel, with rules
        that keep it spinning in the right direction even if your attention is elsewhere. You will be able to explain
        every dollar spent and every campaign change, not just to yourself but to your team and, if needed, your
        accountant. When the next marketing push or seasonal surge comes, you will not be scrambling to figure out what
        worked last time, you will have a record of what delivered and why.</p>
      <p className="text-base text-white shadow-text pt-3">
        That is what a working ad spend optimization process delivers: control, clarity, and the confidence to scale
        what is working without fear of runaway costs. The right next step is to treat this as an operational upgrade,
        not just a software install. Set aside a day to map your current flows, run your data checks, and pick the tool
        that fits your business. Once you have that foundation, you are ready to let automation do what it does best,
        saving you time, protecting your budget, and letting your team focus on real growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a id={`use-cases-marketing-precision-lead-acquisition-preparing-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What do you sell, and what action should an ad produce, a phone call, appointment, quote request, store visit, or online purchase?</li>
        <li>What is the biggest problem today: not knowing what works, spending too much for results, getting poor-quality leads, or not having time to manage campaigns?</li>
        <li>Can you trace a lead from the original ad through to a booked job or completed sale?</li>
        <li>Are phone calls, website forms, bookings, and purchases tracked separately?</li>
        <li>Who changes your bids and budgets today, how often, and based on what information?</li>
        <li>Over the last three months, how many inquiries, qualified leads, customers, and sales dollars came from paid advertising?</li>
        <li>Where do you record whether an inquiry became qualified, booked, won, or lost?</li>
        <li>Do your ad platforms and sales records disagree? Can you show an example?</li>
        <li>Should software only recommend changes, make changes after approval, or operate automatically within limits?</li>
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
              <h2 id="what-to-do-next-and-what-results-to-expect-from-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to Do Next and What Results to Expect from Ad Spend Optimization
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
              <h2 id="what-to-do-next-and-what-results-to-expect-from-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to Do Next and What Results to Expect from Ad Spend Optimization
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
