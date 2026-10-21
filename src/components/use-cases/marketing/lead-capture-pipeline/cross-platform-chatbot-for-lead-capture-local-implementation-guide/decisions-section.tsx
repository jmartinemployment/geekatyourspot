
export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The earliest decisions in a cross-platform chatbot rollout are the ones you cannot walk back later
        without starting over. For a small business in South Florida, this means setting your business goals
        and picking the channels that matter most to your leads, before you buy a license or start building
        flows. The choices you make about what “qualified” means, which questions to ask, and how you’ll
        measure success all lock in your pipeline’s shape. If you skip this work, you end up with a chatbot
        that collects names but never closes the loop, or worse, one that annoys your best prospects with the
        wrong questions on the wrong platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start by naming the single biggest bottleneck you want to fix. Is it missed calls after hours?
        Scattered social DMs? Leads slipping away in lengthy back-and-forth about qualification? For most
        small teams, it is a mix, but pick the one you will measure against. Geek @ Your Spot LLC’s own approach
        is to define that measurable business objective up front, whether that is a 40% reduction in missed
        leads, a set number of new appointments booked, or a drop in average response time. A project without
        this anchor will drift.</p>
      <p className="text-base text-white shadow-text pt-3">
        Channel selection is next. You do not need a bot on every channel just because the tool can do it. If
        90% of your Miami-Dade prospects come through WhatsApp and your website, those are the ones you cover
        on day one. My AI Front Desk stands out for handling both phone and SMS as natural channels, critical
        if you are losing hot leads to voicemail or slow replies. BotPenguin, on the other hand, is designed
        for teams who juggle Facebook, Instagram, and WhatsApp DMs. Pick the mix that matches your customer’s
        habits, not a vendor’s checklist.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next decision is how your pipeline will qualify and score leads. This is not a static checklist.
        The best systems, like those powered by Dapta or My AI Front Desk, use structured questions tied to
        your actual process: service needed, urgency, budget, or county. For a business in South Florida,
        where English and Spanish are used interchangeably, Dapta’s bilingual support is a practical
        necessity, not a nice-to-have. The questions you pick here drive the AI’s routing, handoff, and
        follow-up steps. Once live, changing them means retraining flows and retracing your integration work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Deciding which data is the source of truth comes next. If
        your&nbsp;CRM&nbsp;is the record, every lead must land there
        with full context. Manychat and Tidio both make it easy to push contact info and chat history into
        external databases or spreadsheets, but the specific integration must match your process. If you stick
        to a web chat that never syncs, your team is still copy-pasting details. Choose a tool whose data path
        lines up with your business logic.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, you set the rules for when a human steps in. Too many small businesses automate everything,
        only to frustrate prospects who want a real answer. Tidio and BotPenguin both allow for instant
        handover to a live agent when a conversation hits a roadblock. Decide in advance where that line sits
        for your team and set the trigger rules early. If you try to retrofit this later, you will find
        yourself rewriting core logic and retraining staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        These are not decisions to make in a vacuum. In practice, the owner, the staff who answer calls, and
        the person who manages the&nbsp;CRM&nbsp;all need to be in the
        room. Once you have set your business goal, named your channels, mapped your data flow, and decided
        how leads are scored and routed, you have drawn the boundaries for your entire rollout. Every tool you
        pick and every process you automate now follows the shape you set here. Change this later, and you are
        rebuilding.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-you-make-first-are-the-ones-that-shape-the-whole-project" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions You Make First Are the Ones That Shape the Whole Project
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-you-make-first-are-the-ones-that-shape-the-whole-project-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions You Make First Are the Ones That Shape the Whole Project
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
