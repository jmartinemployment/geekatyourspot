import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse stands out among email marketing platforms for small businesses needing personalized email
        campaigns: it automates every step from lead capture to follow-up, while many alternatives still require
        manual effort or force you to cobble together several tools. Where other platforms may offer bulk sending or
        basic <GlossaryLink slug="autoresponder" className="text-[#0B162A] hover:underline">autoresponders</GlossaryLink>,
        GetResponse brings together lead forms, landing pages, segmentation, and automation in one system that is
        built for teams with limited time and technical resources.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main alternatives a buyer weighs here are manual email processes, entry-level email tools, and other
        all-in-one marketing platforms. Manual processes are the most common fallback: collecting leads from website
        forms or social media, then copying those contacts into a spreadsheet or email list, and sending the same
        message to everyone. This approach costs hours each week, introduces errors, and nearly always means
        prospects receive generic, untimely follow-up. Even when a team manages to personalize messages, it rarely
        happens at scale, so most leads never see anything tailored to them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Entry-level email tools such as <Link id={`tools-marketing-personalized-email-campaigns-getresponse-comparing-mailchimp${idSuffix}`} href="/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailchimp" className="text-[#0B162A] hover:underline">Mailchimp</Link> or <Link id={`tools-marketing-personalized-email-campaigns-getresponse-comparing-mailerlite${idSuffix}`} href="/tools/marketing/content-creation-workflow/personalized-email-campaigns/mailerlite" className="text-[#0B162A] hover:underline">MailerLite</Link> provide
        basic newsletter sending, some templates, and simple automation, but they often require manual import of
        contacts, lack robust segmentation, or limit automation to scheduled blasts. These tools can work for a
        business just starting out, but as soon as you want to segment by behavior, send different journeys based on
        actions, or connect multiple lead sources, their limitations show. For example, a business might capture
        leads from a Facebook ad, but getting those contacts into a personalized nurture sequence means exporting
        from one tool, importing into another, and setting up separate campaigns for each segment, a process that is
        both time-consuming and error-prone.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse addresses these gaps by connecting lead capture (from website forms, landing pages, and
        integrations like Facebook Lead Ads) directly to the automation engine. This means every new contact can be
        instantly segmented and added to the right sequence, with no manual handoff. The platform’s segmentation and
        tagging features go beyond the basics, letting you group contacts by behavior, engagement, or custom fields
        in real time. With unlimited tags and automatic segment creation, small teams do not have to spend hours
        filtering lists or building one-off campaigns for every scenario.</p>
      <p className="text-base text-white shadow-text pt-3">
        When compared to more advanced <GlossaryLink slug="marketing-automation-platform" className="text-[#0B162A] hover:underline">marketing
        automation platforms</GlossaryLink> like <Link id={`tools-marketing-personalized-email-campaigns-getresponse-comparing-activecampaign${idSuffix}`} href="/tools/marketing/active-campaign" className="text-[#0B162A] hover:underline">ActiveCampaign</Link> or
        Klaviyo, GetResponse’s main strength for small businesses is its balance of power and ease of use. It does
        not require a dedicated marketing ops person to set up: the drag-and-drop editor, customizable templates,
        and AI-powered email writer allow non-technical users to build campaigns that look polished and feel
        personal. Where some platforms require knowledge of HTML or complex workflow logic, GetResponse is designed
        so a small business owner or marketing coordinator can configure and launch campaigns with minimal training.</p>
      <p className="text-base text-white shadow-text pt-3">
        A key differentiator is the AI campaign generator, which can create landing pages, welcome emails, and
        newsletters based on your goals and audience data. This is not just a shortcut for writing copy: it means
        you can launch new campaigns quickly, test different offers, and keep your marketing agile without waiting
        for outside help. The AI-generated content is highly accurate in grammar and structure, but you can always
        edit and personalize it to match your brand’s tone. For sensitive or high-stakes campaigns, you still have
        full control to review and refine before sending.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse’s automation features are not limited to email. You can set up workflows that trigger based on
        user actions, such as signing up, clicking a link, or abandoning a cart, and send follow-up emails, tag
        contacts, or move them to new segments automatically. This is essential for businesses that want to nurture
        leads over time, send targeted offers, or recover lost sales without manual intervention. The abandoned cart
        recovery and behavior-based automation features are especially valuable for ecommerce or service businesses
        trying to drive more conversions from their existing traffic.</p>
      <p className="text-base text-white shadow-text pt-3">
        Deliverability is another area where GetResponse compares favorably. The platform reports a 99%
        deliverability rate, meaning your messages are far more likely to reach the inbox rather than get lost in
        spam (<a id={`tools-marketing-personalized-email-campaigns-getresponse-comparing-source-getresponse-com${idSuffix}`} href="https://www.getresponse.com/customers/red-hot-marketing-case-study" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">GetResponse</a>,
        as of Oct 25, 2026). This is not a given with lower-cost or less established providers, and it directly
        impacts the effectiveness of every campaign you run.</p>
      <p className="text-base text-white shadow-text pt-3">
        In terms of integrations, GetResponse offers direct connections to tools like Facebook Lead Ads and
        Leadpages, and its landing pages and forms are built to work seamlessly with its own automation engine. This
        reduces the need for third-party connectors or manual data transfers, which are common pain points in
        pieced-together systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        Unlike some competitors that lock advanced automation or segmentation behind expensive tiers or require
        annual contracts, GetResponse offers a free plan for up to 500 contacts, with paid plans starting at $15.58
        per month. This makes it accessible for small businesses that want to start small and scale up as they grow.
        Advanced features like unlimited newsletters, landing pages, and automation workflows are included in higher
        tiers, but even the entry-level plans cover all the basics needed for effective personalized email
        campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small teams in South Florida, the real advantage of GetResponse is that it gives you the automation and
        segmentation you need to compete with larger businesses, without the complexity or overhead. It is not the
        right fit for businesses wanting a full CRM, deep <GlossaryLink slug="sms-marketing" className="text-[#0B162A] hover:underline">SMS</GlossaryLink> automation,
        or multi-channel marketing beyond email and basic landing pages, those needs may point to a more specialized
        or enterprise platform. But for owners and teams focused on getting more from their email list, responding
        faster, and converting more leads without extra staff, GetResponse is purpose-built for the job.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-getresponse-compares-to-other-approaches-for-personalized-email-campaigns" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How GetResponse compares to other approaches for personalized email campaigns
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
              <h2 id="how-getresponse-compares-to-other-approaches-for-personalized-email-campaigns-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How GetResponse compares to other approaches for personalized email campaigns
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
