export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida face a daily grind when it comes to customer messaging. Each new
        lead comes in through a different channel: WhatsApp, website chat, Instagram, Facebook Messenger, or
        email. Every message lands in a separate inbox. The result is a fragmented process that eats up hours
        and leaves your team scrambling to keep up. Important details get lost. Prospects are forced to repeat
        themselves. Your staff wastes time copying contact info from one system to another, and the same
        question is answered three times by three different people. Even with the best intentions, leads slip
        through the cracks or go cold before anyone follows up.</p>
      <p className="text-md text-white shadow-text pt-3">
        The cost of this fragmentation is real. For a small team, maybe three or four people, there is no
        extra capacity to manually stitch these conversations together. Each lost thread means a slower reply,
        a missed sales opportunity, or a support issue that goes unresolved. Customers get frustrated when
        they have to explain their problem again, or when they wait hours for a response because the right
        person never saw the message. In a competitive market, this is how a business earns a reputation for
        being hard to reach.</p>
      <p className="text-md text-white shadow-text pt-3">
        This problem gets worse as your business grows. More channels mean more places to check, more
        passwords to remember, and more risk that something gets missed. The administrative burden grows, not
        just in replying to customers but in tracking who said what, when, and where. If your team is busy, it
        is easy to miss a WhatsApp message from a high-value prospect or lose context on an Instagram DM that
        should have been passed to sales. The result is duplicated effort, repeated questions, and a support
        queue that never really clears.</p>
      <p className="text-md text-white shadow-text pt-3">
        Trying to fix this with manual workarounds, like forwarding emails, copying chat logs, or keeping a
        shared spreadsheet, only adds to the chaos. These stopgaps are error-prone and hard to scale. They
        turn your team into data entry clerks instead of letting them focus on what matters: building
        relationships and closing sales. Even when you invest in separate tools for each channel, you end up
        with too many dashboards and no single view of the customer. The promise of digital engagement becomes
        a mess of overlapping systems and lost time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The other trap is overcomplicating the solution. Some businesses try to adopt advanced AI or
        automation, but get stuck because the setup is too technical. If a tool requires heavy coding or a
        developer just to change a message flow, it ends up unused. Others try basic chat scripts that only
        handle exact keywords, leaving customers frustrated when their question does not fit the script. Fully
        automated systems with no handoff to a real person risk alienating customers who want a human touch
        for complex or sensitive issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real pain is the time and focus lost to these avoidable tasks. Instead of growing your business,
        your team is stuck answering the same simple product questions or policy inquiries over and over.
        Valuable hours are spent managing the tools, not serving customers. Every repeated question, every
        lost lead, every missed follow-up is money left on the table. For a small business, these are the
        hours and dollars that make the difference between growth and stagnation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing This by Hand
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
                What It Costs to Keep Doing This by Hand
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
