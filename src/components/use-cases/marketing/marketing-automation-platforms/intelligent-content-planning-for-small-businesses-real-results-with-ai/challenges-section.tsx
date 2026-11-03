export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most content teams in small businesses are not failing because they lack effort or commitment. They
        fail where the process itself is broken, at the workflow level. The first breakdown is in the handoff
        between ideas and execution. Teams start with a blank screen and a vague calendar, hoping to fill it
        with topics that might matter. But what happens instead is a cycle: brainstorms eat up hours, debates
        go in circles, and nobody is sure which idea will land. This is not just inefficient; it leaves the
        whole team guessing about what drives results.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next point of failure is repetitive, manual work that eats up everyone’s time. Staff are stuck
        rewriting the same information for different channels, manually drafting emails, or tweaking the same
        blog post for social, email, and web. These repetitive tasks do not require creative skill, but they
        pull skilled people away from higher-value work. In the process, context gets lost, especially when
        switching between tools, copying content from one system to another, or asking someone to rewrite
        technical information for customers. This constant context switching fragments attention and leads to
        mistakes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another common breakdown is in approvals and ownership. When no one owns the next step, work sits in
        inboxes. Approvals can stall for hours or days because the process is unclear or there are too many
        layers of sign-off. One slow approver, or a missing piece of context in a brief, can hold up an entire
        campaign. This is not just a delay; it is a hidden cost that shows up as missed deadlines and
        last-minute scrambles. And when the process is not clear, people default to guesswork or take
        shortcuts, which introduces inconsistency and risk.</p>
      <p className="text-base text-white shadow-text pt-3">
        Communication friction adds another layer of pain. Staff spend hours typing out nearly identical
        emails, trying to explain concepts in plain English, or responding to the same local leads with only
        minor tweaks. Without a system to streamline these responses, the work is draining and the message is
        often inconsistent. Team members are forced to jump out of their main tools into external chat boxes
        or email threads just to brainstorm or get information, breaking the flow and leading to even more
        wasted time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, teams often fall into the trap of producing content that is detached and generic. Instead of
        building authority on what the business already does well, they chase after high-competition keywords
        or copy what competitors are doing. The result? A pile of disconnected articles that never get seen,
        never rank, and never build on the brand’s strengths. This is made worse when content assignments are
        vague, briefs are missing key details, or writing tasks are handed off to staff or contractors who do
        not understand the local market or the business’s unique voice.</p>
      <p className="text-base text-white shadow-text pt-3">
        Each of these failures is a workflow problem, not a talent or effort problem. When teams rely on
        manual, unstructured processes, every step becomes a bottleneck. The real loss is not just
        productivity, it is the inability to build momentum, measure what works, or scale content efforts as
        the business grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-content-planning-fails-small-teams-where-the-workflow-breaks-down" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Content Planning Fails Small Teams: Where the Workflow Breaks Down
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
              <h2 id="why-content-planning-fails-small-teams-where-the-workflow-breaks-down-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Content Planning Fails Small Teams: Where the Workflow Breaks Down
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
