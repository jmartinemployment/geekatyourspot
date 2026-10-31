import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Cometly is the right fit for small businesses in Miami-Dade, Broward, and Palm Beach counties that need to see
        which ads drive real revenue, not just reported conversions. If you are running ads on multiple platforms and
        your team cannot trace spend to sales, Cometly addresses this head-on. The businesses that benefit most are
        those with enough ad activity to see gaps in their current reporting, but without the resources to build a
        custom tracking stack or hire a full-time analyst to reconcile numbers by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your team is struggling with over-reported conversions, missed offline sales, or constant confusion when
        reconciling ad platform reports with your CRM or payment system, Cometly&rsquo;s unified tracking and
        attribution system is built for you. It is especially useful if you run campaigns across Meta, Google, TikTok,
        or LinkedIn, and need to connect the dots from click to closed deal. The platform is designed to handle the
        privacy and tracking challenges that have made browser pixels unreliable, so you can trust the numbers you
        see.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other hand, Cometly is not the best fit for businesses that run only a few ads on a single platform and
        are satisfied with basic platform reporting. If your sales process is entirely online, with no phone calls, form
        fills, or offline events, and you do not need to connect ad spend to CRM or payment data, you may not see the
        full value of Cometly&rsquo;s unified approach. The same goes for teams with highly customized or proprietary
        systems that cannot integrate with Cometly&rsquo;s 70+ native connectors, although most standard platforms are
        covered, edge cases may require extra work or may not be supported.</p>
      <p className="text-base text-white shadow-text pt-3">
        Before deciding, businesses should take a close look at their current tracking and reporting setup. Start by
        listing every touchpoint where a lead or sale can happen, website, phone, form, chat, offline event. Then,
        compare the conversions reported in your ad platforms with what your CRM or payment processor shows. If there is
        a significant gap, or if you find yourself spending hours each week reconciling data, you are in Cometly&rsquo;s
        core use-case.</p>
      <p className="text-base text-white shadow-text pt-3">
        It is also important to assess your internal processes and data quality. Cometly&rsquo;s value depends on clean,
        consistent data across your ad channels, CRM, and web tracking. If your <GlossaryLink slug="utm-parameters">UTM
        parameters</GlossaryLink> are inconsistent, or if you have missing or duplicate records in your CRM, you will
        want to address these before or during implementation. Geek @ Your Spot can help with this as part of their
        deployment process, but the more disciplined your data, the faster you will see results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another key factor is your team&rsquo;s workflow and appetite for automation. Cometly automates budget
        reallocation, creative analysis, and reporting, so teams that want to move away from manual spreadsheet work and
        reactive decision-making will get the most from the platform. If your business values real-time alerts and wants
        to act on opportunities and issues as they happen, rather than waiting for a monthly review, Cometly&rsquo;s
        automation layer is a strong match.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that are considering a DIY approach, it is worth weighing the time and expertise needed to build
        and maintain a system that matches what Cometly delivers out of the box. Server-side tracking, multi-touch
        attribution, and real-time data integration require technical resources, ongoing maintenance, and constant
        adaptation to privacy changes and new ad platform requirements. Most small teams find that the cost and
        complexity of doing it themselves outweighs the subscription price of a purpose-built platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are still unsure, the next step is to run a short audit of your current ad spend and attribution
        accuracy. Check the last three months of ad platform-reported conversions against your actual sales. Look for
        discrepancies, duplicated conversions, or gaps where conversions are missing entirely. If you see issues, or if
        you cannot answer with confidence which ads are driving your best customers, Cometly is likely to save you time,
        money, and uncertainty.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Cometly is for small businesses that need to make every ad dollar count and cannot afford to operate
        on guesswork. It is not for those satisfied with surface-level reporting or teams with highly specialized,
        closed systems. The right next step is to map your current data flows, check for gaps, and decide if the value
        of clear, actionable attribution is worth the investment, for most small teams trying to grow in a competitive
        market, it is.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a id={`tools-marketing-precision-lead-acquisition-cometly-right-fit-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
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
              <h2 id="which-businesses-should-choose-cometly-and-what-to-do-before-you-decide" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which Businesses Should Choose Cometly and What to Do Before You Decide
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
              <h2 id="which-businesses-should-choose-cometly-and-what-to-do-before-you-decide-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which Businesses Should Choose Cometly and What to Do Before You Decide
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
