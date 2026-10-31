
export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses start with the right intent: automate lead capture, answer faster, and cut the
        chaos. But in practice, many chatbot projects stall out or never deliver on the promise. The gap is
        not in the technology. It’s in the setup, the real-world fit, and the discipline to line up each phase
        so the solution matches your actual workflow, not just the demo.</p>
      <p className="text-base text-white shadow-text pt-3">
        The most common failure is thinking that a bot on your website alone solves the whole problem. In
        reality, your prospects are scattered across WhatsApp, Instagram, Facebook, SMS, and the phone. If
        your chatbot is only on your website chat, you’ve captured one channel and left four open leaks. My AI
        Front Desk, for instance, works because it answers calls, texts, emails, and website chat as a single
        agent, if you skip that&nbsp;omnichannel&nbsp;setup,
        you’re still missing leads. BotPenguin and Manychat solve the next common pitfall: fragmented social
        messaging. If you don’t connect every major platform and treat them as one pipeline, you’re still
        toggling between apps and losing context.</p>
      <p className="text-base text-white shadow-text pt-3">
        Implementation fails when teams try to automate everything before understanding their own lead flow.
        The right approach starts with mapping your actual customer journey: where inquiries enter, what
        questions matter, and who needs to respond at each step. Dapta’s strength is in its ability to qualify
        leads with structured, bilingual questions and pass only the best on to your team. But if you don’t
        define those questions up front, or if you skip the step of segmenting leads by urgency, you end up
        with a bot that dumps raw, unqualified contacts into
        your&nbsp;CRM, creating more work, not less.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another common stall comes from underestimating the importance of clean, connected data. Chatbots and
        voice agents are only as good as the data they collect and the way they sync it. If
        your&nbsp;CRM&nbsp;or spreadsheet is not set up to receive and
        organize every captured detail, you’ll find yourself back to manual entry or, worse, missing crucial
        context on follow-up. Tidio is designed to make this easy with its drag-and-drop interface and live
        chat integrations, but if you skip the data mapping and validation step, even the best automation will
        start to break down.</p>
      <p className="text-base text-white shadow-text pt-3">
        Teams also hit a wall when they treat the AI assistant as a set-and-forget tool. The initial pilot
        might answer basic questions, but without regular review, checking response accuracy, updating scripts
        for new products or promotions, and refining handoff rules, performance degrades over time. Manychat
        and BotPenguin both allow for rapid updates and flow adjustments, but it takes discipline to revisit
        and tweak the logic as your business evolves. If you don’t, you end up with a stale bot that
        frustrates both your team and your prospects.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, real-world success depends on setting clear escalation paths. No AI system handles 100% of
        cases. When a conversation gets complex or a high-value lead signals they want a human, the system
        must alert your team and hand off the chat or call, complete with history attached. Dapta and Tidio
        both enable seamless human handoff, but only if you configure the rules and train your staff on when
        and how to step in. Skipping this step is why many chatbot deployments become customer service
        headaches rather than sales engines.</p>
      <p className="text-base text-white shadow-text pt-3">
        What separates an implementation that works from one that fizzles is not a feature checklist or a
        brand name. It’s the discipline to walk the four-phase method in order: align business goals, clean
        your data, pick the right stack for your channels, and run a real pilot. Every tool in the mix, My AI
        Front Desk, BotPenguin, Manychat, Dapta, Tidio, does its job only when plugged into your actual
        workflow, not a generic template. The teams that get this right see fewer missed leads, faster
        response times, and a sales pipeline that fills itself. The ones that skip steps end up right back
        where they started: chasing messages, missing opportunities, and wondering why the “AI” never lived up
        to the pitch.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-most-lead-capture-chatbot-projects-stall-before-they-deliver-real-value" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Most Lead Capture Chatbot Projects Stall Before They Deliver Real Value
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-most-lead-capture-chatbot-projects-stall-before-they-deliver-real-value-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Most Lead Capture Chatbot Projects Stall Before They Deliver Real Value
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
