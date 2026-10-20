export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When small businesses in South Florida rely on a traditional front desk or basic voicemail to handle
        incoming calls, the real cost goes far beyond a few missed messages. Every unanswered call is a
        potential job lost to a competitor. For a plumbing or HVAC company, one missed emergency call can mean
        losing out on hundreds, sometimes thousands, of dollars in booked work. But the financial loss does not
        stop there. The time staff spend checking voicemails, returning calls, and trying to piece together
        partial information is time they cannot spend on billable work or urgent customer needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual call handling creates a constant drag on focus. Office managers and owners are forced to juggle
        urgent calls, incomplete messages, and routine intake while trying to keep business operations running.
        When calls are missed, the team has to chase down leads, often after the customer has already found
        another provider. This fractured attention makes it easy to overlook real opportunities and hard to keep
        track of which jobs are urgent, which are routine, and which are already lost. The cycle repeats: staff
        bounce between callbacks, invoice processing, and the next interruption, always one step behind.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most off-the-shelf voice AI and answering services do not solve this. Closed systems force businesses
        into rigid call flows and canned scripts. You cannot adapt the logic to your business, change how
        emergencies are routed, or update intake questions as your services evolve. Sensitive customer data sits
        on third-party servers you cannot audit. Each new call adds to the risk of vendor lock-in, higher
        switching costs, and less control over your own information. If your business needs change, you are
        stuck waiting for the vendor’s next update, or paying for a costly migration.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain is not hypothetical. For a small team, even a single missed call can cost more than an entire
        month of AI receptionist service. The business owner who misses an after-hours emergency loses both the
        immediate job and any future work from that customer. Staff who spend hours each week on callbacks and
        message triage are not just inefficient, they are losing ground to competitors who answer every call,
        every time. The real price is measured in lost revenue, wasted hours, and the steady erosion of control
        over your customer experience.</p>
      <p className="text-md text-white shadow-text pt-3">
        LobbyStack breaks this cycle by giving businesses a way out of closed, inflexible systems. Where most
        providers lock you into their infrastructure, LobbyStack’s open-source approach means you can inspect,
        modify, and deploy the receptionist logic on your own terms. You decide how calls are routed, what
        questions are asked, and who gets notified, without waiting for a vendor update or risking your data on
        someone else’s server. This means no more guessing what the system is doing with your calls, no more
        chasing after missed opportunities, and no more handing over control to a black box. The cost of doing
        nothing is not just missed calls, it is giving up the ability to run your business your way.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
