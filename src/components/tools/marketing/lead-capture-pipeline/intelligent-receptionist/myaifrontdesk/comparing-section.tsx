import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida weighing My AI Front Desk are not comparing it to nothing. They are
        deciding between hiring a live receptionist, paying for a traditional answering service, sticking with
        voicemail, or picking another AI tool. Each comes with its own trade-offs. My AI Front Desk’s value is
        not that it is the only option, but that it removes the pain points the others leave behind.</p>
      <p className="text-md text-white shadow-text pt-3">
        Live receptionists are ideal in theory: a real person who knows your business, greets callers by name,
        and handles requests with empathy. In practice, the cost is out of reach for most solo operators and
        micro-teams. Even part-time, a front desk hire means payroll, training, and coverage gaps for lunch,
        sick days, and after hours. The result is often a patchwork: some calls answered, some missed, and a
        calendar that never quite fills up. For many, the cost is not just the wage, but the lost revenue from
        calls that slip through after 5pm or when the only staffer is tied up with a customer.</p>
      <p className="text-md text-white shadow-text pt-3">
        Traditional answering services promise to fill those gaps, but their model is built around per-minute
        billing and generic scripting. The agent on the other end may not know your business beyond a script,
        and callers sense it. Pickup is not always instant, and messages often lack the detail needed for real
        follow-up. Worse, the cost rises fast during busy periods, and coverage outside business hours is
        limited or comes at a premium. The result: a bill that grows with your success, but a customer
        experience that rarely improves.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voicemail is the fallback, but it is a black hole for leads. Most callers do not leave a message. They
        hang up and call the next company on their list. This is not just a missed opportunity; it is a direct
        transfer of revenue to your competitors. For small teams, the cost is compounded by the time spent
        checking messages, calling back, and trying to piece together context from half-heard voicemails or
        incomplete details.</p>
      <p className="text-md text-white shadow-text pt-3">
        Other AI receptionist tools and chatbots exist, but most are either too limited or too complex for small
        businesses. Some require heavy setup, force callers through rigid menu trees, or only handle web chat
        but not phone calls. Others charge by the seat or restrict key features to higher pricing tiers.
        Integration with existing calendars and CRMs is often an afterthought, and many cannot handle more than
        one call at a time. The result is a tool that promises automation but still lets leads slip through the
        cracks when volume spikes or a caller needs to book an appointment in real time.</p>
      <p className="text-md text-white shadow-text pt-3">
        My AI Front Desk is built to answer these gaps directly. Unlike traditional services, it does not charge
        per minute or per user. Its monthly and annual plans are flat-priced, with no contract and no hardware
        required. Every call is answered instantly, no matter the time of day or how many calls come in at once.
        The AI speaks more than 20 languages, auto-detects the caller’s language, and responds in a natural,
        human-sounding voice. Callers do not know they are speaking to AI unless you choose to tell them.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where other tools stop at message taking, My AI Front Desk qualifies leads, books appointments live on
        your existing calendar (Google, Outlook, Calendly), and syncs every conversation to
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>. For
        routine questions, hours, directions, pricing, the AI answers from your content, not a generic script.
        If the query is complex or needs a human touch, the AI escalates the call or chat with the full
        conversation history attached, so your team picks up with all the context.</p>
      <p className="text-md text-white shadow-text pt-3">
        Unlike most competitors, My AI Front Desk handles calls, texts, emails, and web chats in one system,
        turning every interaction into structured data for analytics and follow-up. It supports missed call
        text-backs, so if you cannot answer, the AI sends a text within seconds to keep the lead engaged and
        offer a booking link or further help. This is not just a patch for after-hours coverage, it is a way to
        capture leads that would otherwise be lost to voicemail or a slow callback.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where some AI tools offer only web chat or require a new phone number, My AI Front Desk lets you keep
        your current number and forwards calls with a simple setup. Native integrations cover Google Calendar,
        Outlook, Calendly, HubSpot, Salesforce, Pipedrive, Zoho, Shopify, and Zapier. This means leads,
        bookings, and transcripts flow directly into the systems you already use, with no manual entry or
        copy-paste.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real difference is in what My AI Front Desk takes off your plate. It does not just automate a
        script; it closes the loop from first ring to booked appointment or qualified lead, with every detail
        logged. Instead of paying for every minute or every seat, you pay for a service that scales with your
        business and never takes a break. For small teams in Miami-Dade, Broward, and Palm Beach, this is not
        just a replacement for the front desk. It is a way to compete with larger firms, capture every
        opportunity, and run a business that never sleeps.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-my-ai-front-desk-stands-against-traditional-answering-services-live-receptionists-and-other-ai-tools" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where My AI Front Desk Stands Against Traditional Answering Services, Live Receptionists, and Other AI Tools
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-my-ai-front-desk-stands-against-traditional-answering-services-live-receptionists-and-other-ai-tools" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where My AI Front Desk Stands Against Traditional Answering Services, Live Receptionists, and Other AI Tools
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
