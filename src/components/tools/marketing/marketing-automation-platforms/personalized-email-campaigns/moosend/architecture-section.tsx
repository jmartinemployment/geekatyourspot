import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Moosend’s platform is built to handle complex segmentation, automation, and content personalization within a
        single, cloud-based environment. Its architecture is designed for small businesses that need robust <GlossaryLink slug="marketing-automation" className="text-[#0B162A] hover:underline">marketing
        automation</GlossaryLink> without the overhead of managing multiple tools or integrations. The core of
        Moosend’s system is its <GlossaryLink slug="data-model" className="text-[#0B162A] hover:underline">data
        model</GlossaryLink>, which stores contact information, behavioral data, and campaign performance in a
        unified database, powering real-time segmentation and automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the heart of Moosend is its contact database. Every subscriber record holds not just basic fields like
        email and name, but also custom fields, tags, engagement history, and purchase behavior. This data is used
        by the segmentation engine to create dynamic groups, such as all contacts who have not opened an email in 30
        days, or everyone who has purchased a certain product category (<a id={`tools-marketing-personalized-email-campaigns-moosend-architecture-source-moosend-com${idSuffix}`} href="https://moosend.com/blog/ai-email-marketing-tools/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Moosend</a>,
        as of Oct 25, 2026). The segmentation layer is tightly integrated with Moosend’s automation engine, so any
        change in a contact’s data can trigger a new workflow or move them to a different segment automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend’s workflow builder sits on top of this data model. It is a visual tool that lets you map out
        automation logic using drag-and-drop components, triggers, conditions, actions, and delays. Triggers can be
        based on list events (like a new signup), campaign actions (such as an open or click), or custom fields (for
        example, a contact’s birthday). Conditions filter who moves through each branch, and actions define what
        happens next, send an email, apply a tag, update a field, or trigger another workflow. This architecture
        means you can build highly tailored journeys without writing code or relying on external automation
        platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        Content personalization is handled through Moosend’s template editor and AI Writer. The editor supports
        dynamic content blocks, so you can show different offers or products to different segments within the same
        campaign. The AI Writer generates subject lines and email copy variations, drawing on your input for tone
        and message focus. This is all managed within the Moosend platform, so you do not need to export content to
        separate tools or connect third-party copy generators.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend’s reporting and analytics module is built into the same environment. All campaign and subscriber
        data is available for real-time reporting, letting you track performance by segment, campaign, or individual
        subscriber. You can customize reports to focus on the metrics that matter most to your business, such as
        open rates by segment, <GlossaryLink slug="conversion-rate" className="text-[#0B162A] hover:underline">conversion
        rates</GlossaryLink> for a specific workflow, or engagement trends over time. This data is not siloed; it
        feeds back into your automation and segmentation rules, so you can react quickly to changes in audience
        behavior.</p>
      <p className="text-base text-white shadow-text pt-3">
        For list management, Moosend enforces strict <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink> standards. Lists must be imported as CSV or Excel files formatted as UTF-8, with no
        special characters. This helps prevent errors and ensures your campaigns reach valid addresses. If a list
        import is rejected, Moosend recommends cleaning the list with a third-party service before re-uploading.
        This focus on data hygiene is built into the platform’s compliance and deliverability logic, reducing the
        risk of bounced emails and protecting your <GlossaryLink slug="sender-reputation" className="text-[#0B162A] hover:underline">sender
        reputation</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend does not require a patchwork of external integrations for its core functions. The platform’s
        automation, segmentation, content creation, and analytics all run natively. This is a key difference from
        platforms that depend on a mix of plug-ins or manual exports to achieve the same outcomes. For a small
        business, this means fewer moving parts, simpler onboarding, and less risk of data getting lost between
        systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform is built for scalability. Whether you have a few hundred contacts or tens of thousands,
        Moosend’s backend handles segmentation, automation, and sending at the same speed. Paid plans start at $9
        per month for unlimited emails, so you do not have to worry about escalating costs as your list grows (<a id={`tools-marketing-personalized-email-campaigns-moosend-architecture-source-moosend-com-2${idSuffix}`} href="https://moosend.com/blog/best-time-to-send-an-email/" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Moosend</a>,
        as of Oct 25, 2026). The architecture is designed to support eCommerce, <GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>,
        publishers, bloggers, and agencies, any business that needs to deliver personalized email campaigns to
        multiple segments at once.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend’s architecture is also designed for security and compliance. All data is processed and stored
        according to industry standards, and the platform’s deliverability team monitors for invalid or risky
        addresses. The system’s bounce detection and reputation protection features help keep your campaigns out of
        spam folders and maintain high open rates.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, this means a business in South Florida can deploy Moosend without investing in extra
        middleware, custom development, or a separate analytics stack. The platform holds all the data, logic, and
        content needed for automated, personalized email campaigns. As your needs grow, Moosend’s architecture
        adapts, new segments, workflows, and content types can be added without a rebuild. For teams that want to
        keep marketing operations lean and reliable, this integrated approach is the main advantage Moosend offers
        over more fragmented solutions.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="moosends-architecture" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Moosend’s architecture
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="moosends-architecture-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Moosend’s architecture
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
