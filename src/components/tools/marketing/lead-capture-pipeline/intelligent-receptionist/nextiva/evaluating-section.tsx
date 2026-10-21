
export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Choosing Nextiva for your Intelligent Receptionist is a decision about fit, how well the platform
        matches the way your business actually works, how it handles your volume, and how its pricing model
        lines up with your budget. The first thing to weigh is whether you need a tool that truly unifies all
        your customer conversations. Nextiva is not a collection of disconnected apps. It brings together phone,
        SMS, web chat, email, and even social media into one system. For a small business, this means no more
        jumping between tabs or losing track of which customer asked what, and when. If your team is tired of
        piecing together fragmented conversations or missing leads because they only watch the phone line,
        Nextiva’s single workspace is a direct fix.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s pricing is built for predictability. Nextiva XBert starts at $99 per month for 100
        interactions, with additional usage at $0.99 per interaction and no contract. This means you are not
        paying by the minute or locked into a long-term deal. For most small businesses, this covers the bulk of
        their inbound calls, chats, and texts. The model is designed so that if you have a spike in volume, such
        as during a seasonal rush or a successful marketing campaign, you pay only for the extra interactions,
        not for a block of unused capacity. This is a relief for small teams used to surprise bills from legacy
        phone vendors or answering services that charge for every minute on hold.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fit is also about how quickly you can get value from the system. Nextiva’s setup does not require
        technical skills or a dedicated IT person. The platform is configured through a dashboard, and most
        businesses can go live in minutes to hours. If you have more complex needs, like integrating with
        a&nbsp;CRM&nbsp;or
        running HIPAA-compliant workflows, expect a few weeks for proper mapping and testing, but this is still
        much faster than hiring and training a new receptionist. The key is that Nextiva does not force you to
        change your business to fit its model; it adapts to your hours, your appointment types, your escalation
        rules. Geek @ Your Spot LLC’s implementation closes any remaining gap, handling the configuration, testing,
        and training so your team doesn’t lose time learning a new system.</p>
      <p className="text-base text-white shadow-text pt-3">
        When judging Nextiva, look at the real impact on your week. Does it reduce the hours your staff spend on
        the phone? Does it cut down on missed appointments and no-shows by sending instant confirmations and
        reminders? Does it capture every lead, even after hours or when your team is busy? The case study from
        Cedar Financial shows what is possible: a 471% boost in productivity by streamlining operations and
        managing all channels through a single platform. While your numbers will depend on your own volume and
        process, the direction is clear, Nextiva is designed to give small businesses more hours back and fewer
        errors, not just to automate for automation’s sake.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, compliance and data security are not afterthoughts. If you handle sensitive information,
        Nextiva’s healthcare platform is HIPAA-ready with end-to-end encryption and a signed BAA. This matters
        if you are in healthcare, legal, or any field where privacy and audit trails are required. For everyone
        else, the same architecture means your customer data is not scattered or exposed across half a dozen
        apps.</p>
      <p className="text-base text-white shadow-text pt-3">
        The HVAC team from the opening story found that Nextiva’s pricing meant they could finally afford to
        answer every call, every time, without hiring extra staff or worrying about overtime. They saw fewer
        missed jobs, tighter schedules, and less stress on their technicians. The real test for any Intelligent
        Receptionist is whether it lets your best people focus on what only they can do, serving customers,
        closing sales, running the business, while the routine, repetitive work is handled instantly and
        accurately. Nextiva’s fit for small, local businesses comes down to this: it is a practical, affordable
        way to stop losing money to missed connections and fragmented systems, and it does not ask you to become
        a tech expert to get there.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-nextiva-fit-pricing-and-what-matters-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Nextiva: Fit, Pricing, and What Matters for Small Teams
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-nextiva-fit-pricing-and-what-matters-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Nextiva: Fit, Pricing, and What Matters for Small Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
