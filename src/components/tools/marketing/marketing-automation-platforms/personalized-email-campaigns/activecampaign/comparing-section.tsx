import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign stands out for small businesses in South Florida who need deep personalization, reliable
        follow-up, and real-time data coordination, but do not want a complex or enterprise-heavy platform. The
        difference shows up in how ActiveCampaign automates the handoffs between sales, marketing, and customer
        data, while many alternatives either focus on one channel or require more manual work to connect the dots.
        Where other tools offer basic automation or simple list segmentation, ActiveCampaign’s unified CRM and
        automation engine lets a small team run sophisticated, personalized email campaigns that adapt to live
        customer behavior, without needing a dedicated IT staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses weighing email marketing platforms see choices like <Link id={`tools-marketing-personalized-email-campaigns-activecampaign-comparing-mailchimp${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailchimp" className="text-[#0B162A] hover:underline">Mailchimp</Link>,
        Klaviyo, <Link id={`tools-marketing-personalized-email-campaigns-activecampaign-comparing-getresponse${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse" className="text-[#0B162A] hover:underline">GetResponse</Link>,
        or <Link id={`tools-marketing-personalized-email-campaigns-activecampaign-comparing-mailerlite${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailerlite" className="text-[#0B162A] hover:underline">MailerLite</Link>.
        These products can handle basic bulk sends and simple triggered emails. But when it comes to true
        personalization, tailoring content and timing to each contact, based on real-time signals from your CRM,
        e-commerce, or website activity, ActiveCampaign is built to go further. Its automation builder connects lead
        scoring, behavioral triggers, and multi-step workflows, so a single customer’s journey can adapt as they
        open emails, visit your site, or interact with your sales team.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business, the real test is not just whether a tool can send emails, but whether it can help you
        respond quickly to real leads, prioritize your best prospects, and stop letting opportunities slip away.
        ActiveCampaign’s pipeline management and lead scoring are tightly integrated with its email and automation
        features. This means you can set up rules that move a contact into a follow-up sequence when they hit a
        certain score, or trigger a personalized offer when someone visits a pricing page or abandons a cart.
        Competing platforms often require you to stitch together separate tools for CRM, email, and automation,
        which adds cost and complexity, and usually means more leads get lost between systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integrations are another dividing line. ActiveCampaign offers over 900 integrations, including direct
        connections to Shopify, Facebook Custom Audiences, Salesforce, and Typeform (<a id={`tools-marketing-personalized-email-campaigns-activecampaign-comparing-source-activecampaign-com${idSuffix}`} href="https://www.activecampaign.com/compare/salesforce" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">ActiveCampaign</a>,
        as of Oct 26, 2026). This matters for small businesses in Miami-Dade, Broward, and Palm Beach counties who
        already use these platforms and want their marketing automation to plug in without custom development. Some
        alternatives limit you to a handful of integrations or charge extra for advanced connections, which can slow
        down your rollout or force workarounds that add manual steps.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and optimization set ActiveCampaign apart for teams who want actionable insights, not just
        dashboards. Its real-time reporting toolkit surfaces trends and campaign performance as data comes in,
        rather than making you wait for end-of-month exports. Autonomous Insights go further by flagging
        underperforming sequences and recommending automation tweaks inside the dashboard. This is especially useful
        for small teams who do not have a dedicated analyst, ActiveCampaign points out what to fix, so you can act
        quickly and improve results without a lot of manual analysis. By contrast, many platforms focus on
        historical reporting or require you to export data for deeper analysis, which slows down your response to
        what’s happening now.</p>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign’s approach to automation is both broader and more flexible than most competitors. Its visual
        automation builder supports conditional flows, multi-channel triggers (email, SMS, CRM updates), and even
        lets you test entire workflows (A/B/C/D/E testing) to see which path performs best. For a small business,
        this means you can start with a simple welcome sequence and grow into more complex journeys as you learn
        what works. Other platforms may offer prebuilt templates, but often limit you to basic logic or a single
        channel at a time. ActiveCampaign is designed to scale with you, so you do not hit a ceiling when your
        campaigns get more sophisticated.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that need to keep their customer data compliant and secure, ActiveCampaign’s platform
        includes features like HIPAA-ready CRM and detailed permission controls. This is not always the case with
        entry-level email tools, which may not offer the same level of control or auditability, a concern for
        regulated industries or anyone handling sensitive customer information.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some platforms compete on price or simplicity, offering a low-cost entry point for basic campaign needs. But
        the tradeoff is often in the depth of automation, the flexibility to adapt as your business grows, or the
        ability to connect with your full customer data. ActiveCampaign’s pricing starts at $50 per month for the
        CRM add-on, which puts it in reach for most small businesses ready to move past basic list sends and into
        real <GlossaryLink slug="personalized-marketing" className="text-[#0B162A] hover:underline">personalized
        marketing</GlossaryLink> (<a id={`tools-marketing-personalized-email-campaigns-activecampaign-comparing-source-activecampaign-com-2${idSuffix}`} href="https://www.activecampaign.com/compare/campaign-monitor" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">ActiveCampaign</a>,
        as of Oct 26, 2026). For those who only need to send occasional newsletters or simple blasts, a lighter tool
        may be enough. But for any team that wants to automate follow-up, segment by behavior, and see what’s
        working in real time, ActiveCampaign delivers more out of the box, and without the complexity or overhead of
        enterprise solutions.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, ActiveCampaign is the right fit for small businesses who want to connect their sales, marketing,
        and customer data, automate personalized follow-up, and make decisions based on live campaign performance.
        It stands apart from entry-level tools by offering deep automation, real-time insights, and broad
        integrations within a single platform, making it a practical choice for teams who want to do more with less
        manual effort.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-activecampaign-compares-to-other-marketing-automation-platforms-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How ActiveCampaign compares to other marketing automation platforms for small businesses
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
              <h2 id="how-activecampaign-compares-to-other-marketing-automation-platforms-for-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How ActiveCampaign compares to other marketing automation platforms for small businesses
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
