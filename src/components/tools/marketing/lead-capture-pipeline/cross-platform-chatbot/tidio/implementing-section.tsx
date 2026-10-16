import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Tidio in a real small business environment does not mean weeks of custom coding or a parade
        of consultants. The platform is built for teams that cannot spare a developer for every change and
        need to see results in days, not months. What shortens go-live with Tidio is a mix of pre-built
        integrations, a visual builder for automations, and a phased approach that matches how a small team
        actually works.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first thing that cuts time is Tidio’s native support for the main channels your customers already
        use. Website chat, email, WhatsApp, Instagram, and Messenger all connect out of the box. There is no
        need to wire up separate plugins or chase down third-party connectors for each channel. The shared
        inbox is ready as soon as you connect your accounts. For e-commerce, especially Shopify, the
        integration goes deeper: agents see cart and order data right in the chat, which means no manual
        lookup or context switching.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once channels are connected, the next step is setting up the AI assistant and automation flows.
        Tidio’s Lyro AI agent does not require you to write scripts or code. Instead, it learns directly from
        your help articles, website content, and Q&amp;A pairs you provide. You can import knowledge from a
        CSV, PDF, or even pull in an existing Zendesk help center. The Flows builder is visual, drag, drop,
        and connect blocks to set up lead capture, qualification, or cart recovery. With over 40 pre-built
        templates, many businesses start by activating a few key flows and customizing them only as needed.
        This approach means the basic system is live in hours, not days.</p>
      <p className="text-md text-white shadow-text pt-3">
        Phased rollout matters for small teams. You do not have to launch every channel and automation on day
        one. Most clients start with website chat and email, then add WhatsApp or Instagram as they see value.
        The system does not force you to migrate all support at once. You can test the Lyro AI agent on a
        subset of questions or let it handle only the most common topics, handing off to a human when it does
        not know the answer. This incremental approach reduces risk and lets your team build confidence in the
        system before scaling up.</p>
      <p className="text-md text-white shadow-text pt-3">
        What also shortens the path to value is that Tidio’s automations are no-code. You do not need to wait
        on IT for every change. Marketing or support teams can adjust flows, add new triggers, or update
        responses directly in the dashboard. When a new campaign launches or a policy changes, the update is
        immediate and does not interrupt live service. This flexibility is key for small businesses that need
        to react fast without breaking the system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integrations with your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, email marketing, or
        e-commerce tools are handled through pre-built connectors. Tidio supports direct connections to
        platforms like HubSpot, Drip, Front, ActiveCampaign, and more. For most small businesses, this means
        lead data and conversation history flow into your sales pipeline without manual re-entry. Where a
        connector is not available, Tidio’s Flows can push data
        via&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or into third-party tools with a few clicks.
        This keeps your customer records up to date and avoids the mess of copy-paste.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last piece is training and support. Tidio’s own documentation and the Geek @ Your Spot team’s
        onboarding process are both designed for non-technical users. Most teams get their first flows live
        using the templates, then refine them as they see what customers actually ask. Because the system is
        visual and changes are instant, you do not need to schedule downtime or freeze other projects. This is
        especially important for South Florida businesses that cannot afford to pause operations for a tech
        rollout.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, going live with Tidio is not a one-size-fits-all project. The platform’s pre-built
        connectors, visual automation builder, and phased rollout model are what make it practical for small
        teams with limited resources. Each step, channel setup, knowledge import, flow activation,
        and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;integration, is designed to be as close to
        plug-and-play as possible. Most importantly, your team stays in control the whole time, able to adjust
        and improve without waiting on outside help.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="rolling-out-tidio-what-actually-gets-you-live-and-what-speeds-it-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Tidio: What Actually Gets You Live and What Speeds It Up
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
              <h2 id="rolling-out-tidio-what-actually-gets-you-live-and-what-speeds-it-up" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Tidio: What Actually Gets You Live and What Speeds It Up
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
