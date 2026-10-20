
export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The first decisions you make about your Intelligent Receptionist are the ones that will either keep your
        South Florida business nimble or lock you into limitations for years. These are not just about picking a
        product from a catalog. They set the boundaries for what your receptionist can do, who owns your data,
        and how much you will spend as your call volume grows. Once made, some of these choices are impossible
        to reverse without starting over, so they demand real scrutiny up front.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with the question of infrastructure and control. If you choose a closed, proprietary platform, you
        are buying into their way of doing things, data storage, call flow, updates, and privacy rules.
        LobbyStack is the outlier here: it is open-source from the start, which means you keep full control over
        where your data lives, how your call flows are scripted, and even which AI models run the voice engine.
        If your business has strict compliance needs or just wants to avoid vendor lock-in, skipping this
        decision at the start will cost you dearly down the road if you try to migrate away from a closed
        provider.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing model is another one-way door. Some services, like Voksha, bill per call with published rates
        and no long-term contract. This keeps your costs predictable as your call volume changes. Legacy
        providers and even some AI platforms bill by the minute or force you into bundled plans with tiered
        overage fees. If you choose a per-minute model and your business grows, you can find yourself with a
        bill that jumps unpredictably when peak season hits. With Voksha, every extra call is a flat $1, no
        matter how long it lasts, so you can forecast spend as you scale from a handful of calls to hundreds a
        month.</p>
      <p className="text-md text-white shadow-text pt-3">
        You also commit early on to how much human backup your business needs or can afford. Pure AI systems
        like My AI Front Desk and LobbyStack are designed for routine, predictable workflows, answering,
        booking, qualifying, and logging calls 24/7. This fits solo operators and small teams who simply cannot
        afford a live receptionist. But for high-stakes environments, law, healthcare, or emergency services,
        Smith.ai’s hybrid approach, with 500+ live North American agents, is the only path that prevents
        brand-damaging moments when a distressed or complex caller needs empathy and a bot is not enough. You
        cannot “add” a human network as an afterthought; you are in or out from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another decision that closes doors fast. If your operation sits on fragmented tools, one
        app for calls, another for chat, a&nbsp;CRM&nbsp;that is never
        up to date, you are exposing yourself to blind spots and friction that will never go away without a
        rebuild. Nextiva is designed to pull your calls, SMS, and chat into one dashboard, so nothing slips
        through. LobbyStack gives technical teams the ability to build their own integrations directly, without
        waiting for a vendor’s roadmap. Choosing a solution that cannot reach
        your&nbsp;CRM, calendar, or field service platform on day one is
        a choice to keep living with manual entry and missed follow-ups.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, decide now if you want to run your own infrastructure, or if you need to keep things as
        hands-off as possible. LobbyStack can be self-hosted, meaning you set the pace for updates, backups, and
        security; it is work, but it is all yours. My AI Front Desk, Nextiva, and Smith.ai run fully managed,
        meaning you trade some control for never touching a server. For most small businesses in Miami-Dade,
        Broward, and Palm Beach, the right answer is the model that keeps you focused on customers, not
        maintenance, but for regulated or privacy-focused operations, the wrong decision here is impossible to
        unwind without replacing the whole stack.</p>
      <p className="text-md text-white shadow-text pt-3">
        Each of these choices, control, pricing, human fallback, integration, hosting, will shape every call,
        every bill, and every customer experience your business has from the day you go live. You do not need to
        get all of them perfect, but you cannot afford to ignore them. The teams that get this right are the
        ones who name their priorities up front and match the platform to their real risks, not just the feature
        list of the month.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-early-choices-that-shape-your-intelligent-receptionist-deployment-forever" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Early Choices That Shape Your Intelligent Receptionist Deployment Forever
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
              <h2 id="the-early-choices-that-shape-your-intelligent-receptionist-deployment-forever-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Early Choices That Shape Your Intelligent Receptionist Deployment Forever
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
