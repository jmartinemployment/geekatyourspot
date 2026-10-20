import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying BotPenguin as your cross-platform chatbot means making a few key decisions about how your
        customer data flows between channels, the chatbot, and
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or sales database. These choices are not
        just technical, they shape how quickly your team can follow up, what context you have on each lead,
        and how much manual cleanup you avoid later. BotPenguin’s integrations and field mapping tools are
        built to keep this process simple, but getting it right upfront is what makes the system work smoothly
        from day one.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is deciding what information you want to capture from every conversation, no matter
        where it starts. For most small businesses, that means collecting the basics: name, contact details
        (phone, email), inquiry type, and any qualifying information your sales team needs before a follow-up
        call. BotPenguin’s flow builder lets you set these as required fields in every chat, whether the lead
        comes in through WhatsApp, Instagram, your website, or SMS. You can also add custom questions for
        products, services, or booking details that matter to your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once you know what to capture, the next decision is how to map each answer to
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;or sales system. BotPenguin’s integration
        tools let you match chatbot fields to the exact parameters in HubSpot,
        Zoho&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, Nutshell, or other supported platforms. For
        example, you can map the “budget range” question in your WhatsApp flow directly to the “Budget” field
        in your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>, or connect “product interest” from an
        Instagram DM to the right pipeline stage. This mapping is done visually, no code, just drag and drop
        fields to their destinations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Field mapping matters most when you are capturing leads from multiple channels at once. Without it, a
        phone number from a website chat might end up in a different column than one from a Facebook Messenger
        inquiry, making it hard to track the same person across platforms. BotPenguin merges contact profiles
        across channels into a single view, so a customer who messages you on Instagram today and WhatsApp
        next week is recognized as the same lead. This keeps your pipeline clean and ensures your team does
        not waste time on duplicate entries or repeated questions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another decision is how to handle custom fields or qualification logic unique to your business.
        BotPenguin’s builder supports adding as many custom fields as you need, and you can set rules to
        trigger different follow-up actions based on answers. For example, if a lead selects “urgent” in a
        support chat, you can route them directly to a live agent or flag them for priority follow-up. If you
        run campaigns with unique tags or sources, BotPenguin can capture UTM parameters or campaign IDs and
        sync them to your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;for later analysis.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses in South Florida with a mix of English and Spanish-speaking customers, BotPenguin can
        be configured to capture language preference or run parallel flows in both languages. This ensures
        that lead data is consistent, regardless of which flow or channel the customer uses. It also means
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;stays organized, with every lead tagged by
        language, source, and qualification status from the moment they enter the system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, BotPenguin’s&nbsp;<GlossaryLink slug="unified-inbox">unified inbox</GlossaryLink>&nbsp;and
        data mapping make it easier to report on lead sources, response times, and conversion rates. Because
        every chat, DM, and website inquiry is tagged and mapped the same way, you can pull accurate reports
        without manual sorting or reconciliation. For a small business, this means you see which channels
        drive the most qualified leads, how quickly your team responds, and where to focus your marketing
        budget for the best results.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, the upfront decisions about data structure and field mapping in BotPenguin are what let the
        platform deliver on its promise: one pipeline, every channel, and no missed details. Setting this up
        right at the start saves hours every week, keeps
        your&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;clean, and gives your team the context they
        need to close more deals without extra admin work. Geek @ Your Spot LLC handles this mapping as part of
        every deployment, making sure your lead capture pipeline is both robust and easy to manage from day
        one.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-decisions-that-matter-when-deploying-botpenguin" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Matter When Deploying BotPenguin
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-decisions-that-matter-when-deploying-botpenguin" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Structure and Mapping Decisions That Matter When Deploying BotPenguin
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
