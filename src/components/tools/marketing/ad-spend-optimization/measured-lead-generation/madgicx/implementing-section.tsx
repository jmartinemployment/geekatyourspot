import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Madgicx means your measured lead generation moves from manual, error-prone routines to a
        system that runs with minimal oversight. The fastest deployments happen when your ad accounts and CRM data
        are already organized, and you use Madgicx’s pre-built connectors and phased rollout model. Geek @ Your Spot
        leads this process for small businesses in Miami-Dade, Broward, and West Palm Beach, making sure every step
        fits your real environment, not just a generic template.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with a review of your current ad accounts, CRM, and any spreadsheets that hold your
        customer or lead data. Madgicx connects directly to your ad platforms and pulls in this data, but the
        quality and structure of what you have will shape how quickly the system can start making decisions. If your
        records are clean and your CRM is already mapped to your sales pipeline, the initial connection and data
        sync can be done in a matter of days. Where data is fragmented or there are gaps in tracking, Geek @ Your
        Spot will map out what needs to be cleaned or standardized before the automation can work as intended.</p>
      <p className="text-base text-white shadow-text pt-3">
        Madgicx uses a four-phase rollout. First is tracking validation: Geek @ Your Spot checks that every
        conversion event and key customer action is tracked accurately across your platforms. This means mapping
        your events, installing server-side tracking pixels, and verifying that all signals are flowing correctly
        before Madgicx starts optimizing anything. This step is critical, if the data is off, the automation will
        make poor decisions. For small businesses, this is often where most manual errors get caught and fixed
        early.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is platform connection and CRM integration. Madgicx authenticates with your ad platforms using secure
        methods and connects with your CRM. The goal is to let Madgicx see the full <GlossaryLink slug="customer-journey">customer
        journey</GlossaryLink>, not just clicks and form fills. This is especially important for businesses with
        longer sales cycles or multiple touchpoints. Geek @ Your Spot handles the technical setup, ensuring your CRM
        feeds conversion data back to the bidding engine, so Madgicx can optimize for real business outcomes, not
        just vanity metrics.</p>
      <p className="text-base text-white shadow-text pt-3">
        The third phase is conservative monitoring and copilot mode. Madgicx is given limited control, with strict
        spend caps and manual approval required for its optimization suggestions. This lets you see how the system
        makes decisions, spot any unexpected behavior, and build trust in the automation before letting it manage
        more of your budget. Geek @ Your Spot reviews the recommendations with you, so you know what changes are
        happening and why. This phase usually lasts two to three weeks but can be shorter if your accounts are
        already well-structured.</p>
      <p className="text-base text-white shadow-text pt-3">
        The final phase is multi-channel expansion. Once the system has proven itself with baseline campaigns, Geek
        @ Your Spot can enable Madgicx to optimize across all your active channels, Meta, Google Ads, and more. At
        this point, dynamic creative testing and budget reallocation are fully automated, with Madgicx running
        experiments and shifting spend based on real-time performance. This is where the biggest time savings and
        cost improvements show up: your team no longer needs to manually analyze every campaign or rotate creatives
        by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens the go-live timeline most is having clean, mapped data and a willingness to phase in
        automation rather than flipping everything at once. Madgicx’s pre-built connectors for platforms like Google
        Sheets mean you can bring in custom metrics or unique business logic quickly, without writing code.
        Templated setup options for <GlossaryLink slug="audience-segmentation">audience segmentation</GlossaryLink> and
        creative rotation allow you to get started with proven structures and then fine-tune as you see results.
        Geek @ Your Spot’s role is to guide you through these decisions, handle the technical work, and keep the
        project moving, so you avoid the delays that come from unclear ownership or missing information.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business, the biggest operational change is that you move from a manual, reactive workflow to a
        proactive, data-driven process. Instead of waiting for performance to drop before making changes, Madgicx
        flags issues and suggests actions in real time. Your team spends less time pulling reports and more time
        reviewing high-level strategy. Most importantly, you see exactly what the automation is doing, every budget
        change, creative swap, or audience tweak is logged and explained, so you keep full control even as the
        system handles the routine work.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, going live with Madgicx is not a single switch but a structured rollout that starts with <GlossaryLink slug="data-quality">data
        quality</GlossaryLink>, moves through careful integration, and phases in automation at a pace you can
        monitor and trust. Geek @ Your Spot’s local expertise ensures this process fits the realities of South
        Florida small businesses, not just best practices from a vendor’s playbook. By the end of rollout, your
        measured lead generation is no longer limited by manual bottlenecks, and your ad spend is guided by
        real-time performance data, not guesswork.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="going-live-with-madgicx" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going live with Madgicx
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
              <h2 id="going-live-with-madgicx-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going live with Madgicx
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
