import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse automates the full process of personalized email campaigns by connecting lead sources,
        segmenting contacts, and delivering timely, relevant messages without manual intervention. Every step, from
        the moment a lead enters through a form or ad to the ongoing sequence of follow-ups, is handled through
        automation, so small teams can focus on results instead of repetitive tasks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The mechanics start with how GetResponse collects leads. The platform connects directly to website forms,
        landing pages, and integrations like Facebook Lead Ads. This means every new contact is automatically added
        to your email list, removing the need to export or manually enter data. For example, when someone fills out
        a form on your site or responds to a Facebook ad, GetResponse captures their information and stores it in
        your contact database instantly.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once a lead is captured, GetResponse segments each contact in real time. It does this using tags, engagement
        scores, and custom fields, tracking what actions a contact takes, such as opening an email, clicking a link,
        or abandoning a cart. The platform can use this data to group contacts based on shared behaviors or
        interests, so each segment receives messaging tailored to their stage in the buying journey. This
        segmentation is automatic: as soon as a contact meets set criteria, they move into the right segment without
        anyone on your team having to sort or update lists by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse’s automation engine is what turns segmentation into action. You set up workflows that trigger
        emails or other messages based on specific events or time intervals. For example, a new lead might receive a
        welcome series spread over several days, while a shopper who leaves items in their cart gets a reminder with
        a personalized offer. These workflows can be as simple or as complex as needed, and they run continuously.
        This ensures no lead slips through the cracks, and every contact receives a journey mapped to their own
        actions, not a one-size-fits-all sequence.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s AI-powered content tools further streamline campaign creation. GetResponse includes an AI
        email writer that drafts subject lines and body copy based on your campaign goals. You can edit, refine, and
        personalize these drafts to match your brand’s voice before sending. This cuts hours of writing and editing
        from the process, especially for teams without a dedicated copywriter. The AI also follows email best
        practices, so messages are clear and engaging, but it leaves room for you to adjust tone or add custom
        details.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="dynamic-content" className="text-[#0B162A] hover:underline">Dynamic content</GlossaryLink> blocks
        allow each email to display different images, text, or <GlossaryLink slug="product-recommendations" className="text-[#0B162A] hover:underline">product
        recommendations</GlossaryLink> depending on the recipient’s profile or recent behavior. For example, a
        contact who browsed a particular category on your site might see related products in their next email, while
        someone who just signed up receives a special welcome offer. This level of personalization is handled
        automatically through rules you set, so every message feels relevant without hand-coding each variation.</p>
      <p className="text-base text-white shadow-text pt-3">
        A/B testing is built into the workflow. You can test different subject lines, content, or send times to see
        what resonates best with each segment. GetResponse tracks open rates, clicks, and conversions, providing
        clear reports so you know which messages are working and where to optimize. Over time, the platform helps
        you refine your campaigns for higher engagement and more sales, without needing to pull manual reports or
        guess at what’s effective.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that need to manage multiple campaigns or lists, GetResponse supports running several <GlossaryLink slug="lead-generation" className="text-[#0B162A] hover:underline">lead
        generation</GlossaryLink> and <GlossaryLink slug="lead-nurturing" className="text-[#0B162A] hover:underline">nurture
        campaigns</GlossaryLink> at once. Each campaign can be set up with its own sequence, triggers, and
        segmentation rules. This is especially useful for businesses with distinct customer groups or product lines,
        as it ensures each audience receives messaging that matches their needs and interests.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse also handles transactional and one-off emails, such as order confirmations, shipping updates,
        and limited-time offers. These can be triggered automatically by events in your store or <GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>,
        ensuring fast, consistent communication that builds trust and keeps customers informed.</p>
      <p className="text-base text-white shadow-text pt-3">
        The user experience is designed for small teams. GetResponse offers a drag-and-drop email editor, so you do
        not need to know HTML or rely on a designer for every message. Templates are available for different
        industries and campaign types, and every email is mobile-optimized by default. This means your messages look
        good on any device, and you do not have to spend extra time on formatting or troubleshooting display issues.</p>
      <p className="text-base text-white shadow-text pt-3">
        In practice, a small business can set up a lead capture form, link it to an automated welcome sequence, and
        let GetResponse handle the rest, from segmenting new contacts to sending the right follow-up at the right
        time. Teams no longer need to chase down leads or remember to send each message. Instead, they can focus on
        responding to engaged prospects and closing sales, with the confidence that every contact is receiving a
        tailored, timely experience.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a marketing system that works in the background, turning more leads into conversations and
        sales without adding to your team’s workload. For small businesses in West Palm Beach, Broward, and
        Miami-Dade, this is how GetResponse delivers on the promise of true personalized email campaigns, relevant,
        automated, and always on time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="getresponse-automates-every-step-from-lead-capture-to-tailored-follow-up" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                GetResponse automates every step from lead capture to tailored follow-up
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="getresponse-automates-every-step-from-lead-capture-to-tailored-follow-up-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                GetResponse automates every step from lead capture to tailored follow-up
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
