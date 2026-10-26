import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite stands out for small businesses that want true email personalization and automation without the
        complexity or cost of enterprise tools. Unlike bulk email platforms or heavyweight marketing suites,
        MailerLite is built to deliver relevant, targeted campaigns that a local team can actually manage. It does
        this by focusing on practical automation features, easy segmentation, and templates that keep branding
        consistent, while staying accessible to non-technical users.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small-business owners in Miami-Dade, Broward and Palm Beach counties are comparing MailerLite to tools
        like <Link id={`tools-marketing-personalized-email-campaigns-mailerlite-comparing-mailchimp${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailchimp" className="text-[#0B162A] hover:underline">Mailchimp</Link>, <Link id={`tools-marketing-personalized-email-campaigns-mailerlite-comparing-getresponse${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse" className="text-[#0B162A] hover:underline">GetResponse</Link>, <Link id={`tools-marketing-personalized-email-campaigns-mailerlite-comparing-activecampaign${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign" className="text-[#0B162A] hover:underline">ActiveCampaign</Link>,
        or Klaviyo. These platforms all offer automation and segmentation, but the experience and focus are not the
        same. MailerLite’s edge is its balance: it gives you the core automation and personalization features you
        need, without the bloat or learning curve of an all-in-one CRM or the high price tag of enterprise
        platforms. You do not need a dedicated marketing manager to run MailerLite effectively.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where basic email platforms fall short is in follow-up and relevance. Sending the same newsletter to
        everyone, or relying on static lists, means your emails get ignored. MailerLite’s automation engine lets you
        trigger campaigns based on real customer actions, like signing up for a specific offer, clicking a link, or
        making a purchase. This is a step up from platforms that only segment by broad demographic fields or require
        manual list management. You can build dynamic segments and trigger sequences that adapt to how each
        subscriber behaves, so every message feels timely and personal.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that have tried larger marketing suites and found them overwhelming, MailerLite is intentionally
        simpler. It delivers the features that matter for personalized email campaigns, like reusable templates,
        drag-and-drop design, and an AI writing assistant, without burying you in menus or configuration screens.
        Unlike platforms that gate essential automation behind expensive tiers, MailerLite makes its automation
        builder and segmentation tools available on plans sized for small business budgets. If you have ever
        abandoned a tool because it took weeks to set up, or because you needed developer help to make a change,
        MailerLite is designed to avoid those pain points.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite also fits better with the way small businesses actually work. You can connect signup forms and
        landing pages directly to the right audience segments and workflows, so every new lead gets the right
        follow-up, without manual sorting. Its reporting dashboard ties campaign performance directly to sales and
        engagement, so you can see what is working and what needs adjustment. For businesses that run ecommerce
        shops on platforms like Shopify, WooCommerce, Wix, or Squarespace, MailerLite’s integrations let you
        automate follow-up based on shopping behavior and track sales from each campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real difference is in how MailerLite handles the repetitive, error-prone tasks that slow down small
        teams. Where other platforms might require you to build every sequence from scratch, MailerLite’s template
        library, AI-assisted copy, and visual automation builder let you launch campaigns in hours, not days. You
        can set up triggers and content blocks that adapt to each subscriber, so you are not stuck rewriting the
        same email over and over.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compared to competitors that focus on enterprise features or require a dedicated technical resource,
        MailerLite is built for teams that want to get results fast and keep overhead low. It is not the right fit
        for businesses that need deep CRM integration, <GlossaryLink slug="sms-marketing" className="text-[#0B162A] hover:underline">SMS</GlossaryLink> automation,
        or custom-coded journeys across dozens of channels. For small businesses that want professional, consistent,
        and relevant email marketing, without the complexity or cost of a full marketing suite, MailerLite is a
        practical, proven choice.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-mailerlite-compares-to-other-marketing-automation-platforms-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MailerLite compares to other marketing automation platforms for small businesses
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-mailerlite-compares-to-other-marketing-automation-platforms-for-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How MailerLite compares to other marketing automation platforms for small businesses
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
