export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ is the right fit for small businesses in South Florida that need to make every ad dollar count,
        especially those spending under $500 a month who cannot afford agency retainers or wasted clicks (<a id={`tools-marketing-budget-ad-copy-message-validation-localiq-right-fit-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). It is built for owners who want real control over where their ads run, who sees them,
        and which messages get budget, without having to become a digital marketing expert themselves. If you are
        running campaigns on Google, Meta, or both, but struggle to track where your leads come from or to keep your
        spend inside your true service area, LocaliQ is designed for you.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform is especially well-suited to service businesses, local retailers, and professional practices in
        West Palm Beach, Broward, and Miami-Dade counties. These are the businesses most exposed to micro-budget
        risks: a single day of misconfigured targeting or a poorly performing ad can wipe out a week’s budget.
        LocaliQ’s automation and validation guard against these failures by enforcing strict geographic targeting,
        filtering out low-intent keywords, and constantly reallocating budget to the best-performing ads and
        messages. Owners do not need to monitor campaigns daily or learn the technical details of every platform,
        LocaliQ does this work in the background, every hour of every day.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, LocaliQ is not the right tool for every business. LocaliQ’s strength is in disciplined, algorithmic
        optimization and validation, not in bespoke creative strategy or brand storytelling. It is also not a fit
        for businesses who want to manage every detail manually, or who prefer to run one-off campaigns with no
        ongoing optimization. The value of LocaliQ comes from its continuous, real-time management; if you want to
        set and forget, or if you want to be in the weeds every day, its automation may feel restrictive.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ is also not a replacement for high-touch consulting or human creative direction. It does not write
        your brand story or design your visual identity. Instead, it ensures that the copy, images, and offers you
        do use are validated against real performance data, and that your budget is never left exposed to platform
        defaults or out-of-area impressions. For technical teams who want full API access and integration with
        custom data warehouses, LocaliQ’s open API environment supports more advanced setups, but its real value is
        in making best-practice optimization accessible to non-technical owners.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step for small businesses considering LocaliQ is not to dive into a generic trial or to hand over
        creative to an outside agency. Instead, the process starts with a structured consultation focused on your
        specific objectives and data quality. Geek @ Your Spot, as the implementation partner, brings a four-phase
        method: clarify your business goals, assess your current data and tracking setup, select the right LocaliQ
        modules for your needs, and build an integration plan that fits your existing systems. This approach ensures
        that LocaliQ is not just another tool added to the stack, but a platform that actually solves the real
        problems of wasted spend and unvalidated messaging.</p>
      <p className="text-base text-white shadow-text pt-3">
        For owners who want to keep their marketing lean, measurable, and under control, LocaliQ offers a clear path
        forward. It strips out the guesswork and manual labor that make micro-budget campaigns so risky, and
        replaces them with a system that validates every dollar and every message. For those who need more than
        that, bespoke creative, high-touch consulting, or enterprise-level customization, there are other options on
        the market, but they come at a different price and complexity. For most small businesses in South Florida,
        LocaliQ is the practical, affordable, and effective way to bring AI-driven budget ad copy and message
        validation into the real world.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`tools-marketing-budget-ad-copy-message-validation-localiq-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
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
          a CRM like Hubspot or Salesforce that updates automatically?</li>
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
              <h2 id="who-localiq-is-right-for-who-should-look-elsewhere-and-the-next-step-for-south-florida-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who LocaliQ is right for, who should look elsewhere, and the next step for South Florida small businesses
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
              <h2 id="who-localiq-is-right-for-who-should-look-elsewhere-and-the-next-step-for-south-florida-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who LocaliQ is right for, who should look elsewhere, and the next step for South Florida small businesses
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
