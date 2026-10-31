export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Bir suits small and mid-sized teams that need to control ad spend across several platforms, want real-time
        automation, and have enough complexity in their campaigns that manual checks are no longer safe or practical. It
        is built for businesses in Miami-Dade, Broward, and Palm Beach counties that run multiple ad accounts or brands
        and cannot afford to let a weekend or holiday cost spike eat into their margins. If your team spends hours every
        week checking performance, pausing underperformers, and trying to scale what works, Bir is designed for your
        workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        The businesses that see the most value from Bir are those running at least several campaigns or ad sets at once,
        especially if they need to coordinate across Meta, Google, TikTok, and other channels. If your team has tried to
        rely on in-platform rules and found them too rigid or too slow, Bir&rsquo;s custom logic and frequent checks
        fill that gap. It is also a fit for businesses that want to use their own data, sales, leads, or offline
        conversions, to drive automation, not just what the ad platforms report.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir is less suited for a business that runs a single campaign on one platform, spends only a few hundred dollars
        per month, or wants a tool that makes every decision for them with no input. If your ad management is simple, or
        if you want a hands-off solution that never needs tweaking, a native platform&rsquo;s automation or a basic
        rule-based tool will be easier to run. Bir gives you control and transparency, but it expects you to know your
        KPIs and to work with your implementer to set up the right rules.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real decision point is your appetite for automation and your tolerance for risk. If you have ever lost sleep
        over a campaign that ran wild over a holiday, or if you have missed scaling opportunities because you were not
        watching when a creative started to win, Bir is a fit. It is not the cheapest tool in the category, but the
        return comes from what it prevents: wasted spend, missed scaling, and hours lost to manual checks. Businesses
        that care about connecting their ad spend to real business outcomes, sales, leads, or other KPIs, get the most
        from Bir&rsquo;s ability to pull in custom data and act on it in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that are ready to move beyond spreadsheets and manual reporting, but do not want to hand over control
        to a black-box AI, Bir is the practical step up. It lets you set your own guardrails, see every action taken,
        and adjust your logic as your business changes. If you want to know exactly why a budget was raised, a campaign
        was paused, or a creative was scaled, Bir&rsquo;s audit and reporting tools give you that visibility.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot&rsquo;s role is to make sure Bir fits your actual business, not just your ad accounts. That
        means mapping your data, configuring your rules, and training your team so you do not just automate for
        automation&rsquo;s sake, you automate what matters. If you are not sure whether your campaigns are complex
        enough to need Bir, or if you are worried about the learning curve, the right next step is to map out your
        current pain points and see where automation could return hours or prevent risk. The teams that get the most
        from Bir are the ones that know what they want to protect, what they want to scale, and are ready to move from
        manual firefighting to a system that runs itself.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a id={`tools-marketing-precision-lead-acquisition-bir-right-fit-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
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
              <h2 id="which-businesses-get-the-most-from-bir-and-when-another-solution-is-a-better-fit" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which businesses get the most from Bir, and when another solution is a better fit
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
              <h2 id="which-businesses-get-the-most-from-bir-and-when-another-solution-is-a-better-fit-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which businesses get the most from Bir, and when another solution is a better fit
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
