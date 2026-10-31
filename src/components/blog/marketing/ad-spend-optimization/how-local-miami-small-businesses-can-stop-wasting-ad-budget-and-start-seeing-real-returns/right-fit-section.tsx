export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Automating Ad Spend Optimization makes sense when your ad budget, campaign count, or data complexity reach the
        point where manual review slows you down and introduces risk. If you are running cross-platform campaigns on
        Google, Meta, and Microsoft, and especially if you have to juggle separate dashboards and monthly reports, the
        cost in lost time and missed errors adds up fast. Tools like Adzooma and Wask are designed to unify this work,
        letting you catch budget leaks, outdated ad creative, or non-performing ad sets across all channels from a
        single view. For a Miami small business that switches between platforms all week, this means less dashboard
        fatigue and more focus on what actually moves the needle.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation is also the right call when you need to act faster than a human can. Bir, for example, checks your
        ad accounts every fifteen minutes for cost spikes, creative fatigue, or campaign drift. When a spike hits
        during a weekend or after hours, automation locks it down before it drains your budget. Optmyzr&rsquo;s scripts
        can pause a leaking keyword or adjust for a local competitor&rsquo;s bid spike in real time, not the day after
        you notice a dip. For campaigns where every hour of delay means wasted spend, automation is not just a
        convenience, it is protection.</p>
      <p className="text-base text-white shadow-text pt-3">
        But automation is not the answer to every problem. If your campaigns are small, your spend is under $1,500 a
        month, and you can review every keyword and creative by hand each week, a manual approach keeps you in touch
        with your numbers and may save you the cost and complexity of an automation platform (<a id={`blog-marketing-precision-lead-acquisition-right-fit-source-wask-co${idSuffix}`} href="https://www.wask.co/google-ads-automation" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wask</a>,
        as of Oct 29, 2026). Automation cannot create a winning offer, fix a broken sales process, or invent the
        creative that turns interest into sales. LocaliQ&rsquo;s targeting and tracking will not make up for an unclear
        call-to-action or an offer that does not fit your market. Plai&rsquo;s dashboards and automated pixel setup
        only add value if you have a sales process ready to handle and close the leads they track.</p>
      <p className="text-base text-white shadow-text pt-3">
        Stay manual when you are still testing your model, when your team is learning the basics of digital ads, or
        when your campaign volume is low enough that hands-on review works. Automation is best added once your process
        is proven, your sales data is reliable, and your strategy is clear. Even then, automation is not
        set-and-forget. Every platform, Cometly, Triplewhale, Bir, Adzooma, Optmyzr, and the rest, works best when
        someone reviews the alerts, checks the dashboards, and makes decisions based on what is actually driving
        revenue, not just what the software recommends.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are not sure which side you are on, start small. Pick one workflow, like automated budget checks or
        unified reporting across Google and Meta, and pilot it in a single campaign. See if it saves time and surfaces
        issues you would have missed. If the results are real, expand from there. Where the work is still too
        uncertain, or where you need hands-on learning to understand your market, keep it manual. The next step, for a
        Miami business weighing this decision, is to map out where your spend is going now, what you are actually
        getting back, and where your team is losing the most time or missing the most errors. That is where
        automation, if you add it, will pay back first.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a id={`blog-marketing-precision-lead-acquisition-right-fit-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
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
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="when-automation-is-the-right-call-for-ad-spend-optimization-and-where-to-stay-manual" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When automation is the right call for Ad Spend Optimization, and where to stay manual
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="when-automation-is-the-right-call-for-ad-spend-optimization-and-where-to-stay-manual-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When automation is the right call for Ad Spend Optimization, and where to stay manual
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
