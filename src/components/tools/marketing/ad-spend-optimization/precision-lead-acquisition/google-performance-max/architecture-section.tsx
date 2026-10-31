import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Google Performance Max is built as a modular platform that connects directly to the ad channels, data
        sources, and creative tools small businesses already use. Its architecture is designed for speed,
        flexibility, and minimal overhead, every connection and workflow is engineered to reduce manual work and
        keep campaigns running smoothly, even on a micro-budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core, Google Performance Max relies on native integrations with Google Ads, Maps, YouTube, Gmail, and
        the Google Display Network. This allows the platform to run Demand Gen and <GlossaryLink slug="performance-max" className="text-[#0B162A] hover:underline">Performance
        Max</GlossaryLink> campaigns across all of Google’s surfaces, without the need for manual uploads or
        switching between dashboards. The integration with Google’s Firebase platform, for example, enables true
        cross-channel <GlossaryLink slug="marketing-attribution" className="text-[#0B162A] hover:underline">attribution</GlossaryLink> by
        connecting web and app traffic. This means a business can track a customer from the first YouTube ad view,
        through a website visit, to an in-app sale, closing the loop on what actually drives revenue.</p>
      <p className="text-base text-white shadow-text pt-3">
        For creative production and testing, Google Performance Max includes built-in asset generation and editing
        tools. The platform’s Asset Studio lets users create high-quality images, videos, and ad copy variations
        directly inside the workflow. It supports intelligent image creation from text prompts, image-to-video
        conversion, and advanced video trimming for different placements. This is not just for show: these tools are
        tuned to output creative that fits Google’s ad policies and adapts automatically to any format or device.
        Small teams do not need to buy extra software or outsource production, everything needed to launch and test
        creative is inside the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        Google Performance Max’s AI-driven budget management is powered by features like campaign total budgets,
        budget pacing, and dynamic allocation. Campaign total budgets let a business set a fixed spend for a
        campaign flight, say, a weekend promotion or a month-long test, without worrying about daily manual
        adjustments. The system automatically optimizes spend to use the full budget by the end date, so teams do
        not leave money on the table or overspend by accident. Budget pacing tools monitor spend in real time,
        keeping campaigns on track and flagging any risk of running out early.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s targeting engine is built around granular controls for location, audience, and brand safety.
        Businesses can set exact zip codes or geographic radii, include or exclude brands, and review any
        AI-generated assets before they go live. These controls are critical for small teams who need to avoid
        wasted spend on irrelevant clicks or brand-damaging placements. Google Performance Max also includes
        detailed reporting at every level, search terms, keywords, landing pages, and creative assets, so teams can
        see what is working and make informed decisions without guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        For measurement and optimization, Google Performance Max supports offline <GlossaryLink slug="conversion-tracking" className="text-[#0B162A] hover:underline">conversion
        tracking</GlossaryLink> and enhanced conversions. This means a business can import data from in-store sales, <GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink> systems,
        or phone calls, and tie those outcomes back to specific ads or keywords. Even when data is incomplete, the
        platform uses modeling and predictive algorithms to fill gaps and keep optimization running. Seasonality
        adjustments let businesses fine-tune campaigns for local sales spikes or slow periods, so spend is always
        aligned with real market conditions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Google Performance Max’s architecture is open to new integrations as needs change. The platform already
        supports add-ons like Nano Banana for advanced creative production, and it can plug into third-party
        analytics, CRM, or scheduling tools as required. This modular approach means a business is not locked into a
        rigid workflow, it can start with the basics and layer on complexity as it grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and data privacy are built in from the start. Google Performance Max uses features like Consent
        Mode and Enhanced Conversions to respect user privacy choices and comply with data regulations. All
        measurement and reporting functions are designed to be accurate and privacy-safe, so small businesses can
        operate with confidence even as requirements evolve.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small team in Miami-Dade, Broward, or West Palm Beach, the result is a platform that plugs into what
        they already use, holds all the creative and performance data in one place, and automates the routine work
        of budget and message validation. There is no need for extra headcount or agency retainers, the architecture
        is built for self-service, but with the depth and control needed to avoid costly mistakes. Every
        integration, every workflow, and every control is there to keep campaigns efficient, focused, and ready to
        adapt as the business grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-architecture-and-integrations-that-make-google-performance-max-fit-for-small-local-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The architecture and integrations that make Google Performance Max fit for small local teams
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
              <h2 id="the-architecture-and-integrations-that-make-google-performance-max-fit-for-small-local-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The architecture and integrations that make Google Performance Max fit for small local teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
