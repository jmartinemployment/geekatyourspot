import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LobbyStack is built for small businesses that need reliable, flexible call handling without the overhead
        of a full-time receptionist or the constraints of a closed platform. If your team is in Miami-Dade,
        Broward, or West Palm Beach and you want to automate intake, bookings, and lead qualification, without
        giving up control over your data or your process, LobbyStack fits. It is especially strong for
        businesses in regulated industries, privacy-conscious sectors, or those with unique call flows that do
        not fit a generic script. The open-source core means you can inspect, modify, and even self-host the
        system to meet your compliance and operational needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        LobbyStack is not for everyone. If your business depends on a human touch for every call, think
        high-stakes negotiations, sensitive medical or legal situations, or complex troubleshooting that cannot
        be scripted, a live receptionist or specialist is still the right choice. LobbyStack handles routine,
        repeatable work: answering FAQs, booking appointments, qualifying leads, and escalating only when the
        situation calls for it. For businesses that want to route every call to a person or need a rotating
        on-call list managed by a human, a traditional live service will still be the better fit.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams with zero technical resources or no interest in customizing their phone workflows,
        LobbyStack’s managed cloud plans provide an easy entry point. You get a dedicated number, a dashboard to
        review calls and outcomes, and configuration options for business hours, escalation rules, and booking
        logic. There is no setup fee, and you can test the system for free with browser minutes before
        forwarding your main line. This is often enough for small service businesses, plumbers, HVAC,
        contractors, clinics, who want to capture every opportunity without changing their existing phone
        provider or retraining staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where LobbyStack really stands out is for businesses that want to grow without getting boxed in. The
        open-source license means you are never locked into a single vendor. You control the update cycle, the
        access policies, and the retention of your call data. If your needs change, if you want to move from
        cloud hosting to your own servers, or if you need to integrate with a new tool or workflow, you can,
        without starting over. This is rare in the AI receptionist space, where most platforms force you into
        their roadmap and pricing structure.</p>
      <p className="text-base text-white shadow-text pt-3">
        There are technical requirements for self-hosting: you need a server with at least 2 vCPUs and 4 GB of
        RAM, Docker and Node.js, and accounts with your telephony and AI providers. For many small businesses,
        this is more than they want to manage, and the managed cloud will be the right choice. For those with IT
        support or a technical partner, self-hosting gives unmatched control over data location, compliance, and
        custom integrations. Agencies and resellers can also deploy LobbyStack for clients, customizing the
        experience and branding as needed.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business needs direct&nbsp;CRM&nbsp;integration,
        multi-calendar support, or more advanced analytics, LobbyStack offers an
        open&nbsp;API&nbsp;and documentation for building those
        connections. Out of the box, it integrates with Google Calendar for bookings. Email and SMS alerts are
        available on paid plans, and call summaries, transcripts, and recordings are always accessible from the
        dashboard. For businesses with more complex needs, technical teams can extend the platform without
        waiting for a vendor’s next release.</p>
      <p className="text-base text-white shadow-text pt-3">
        LobbyStack’s pricing is transparent and scales with usage. The free plan lets you test before
        committing. Starter and Pro plans cover most small business needs, and enterprise pricing is available
        for higher volume or custom deployments. There are no surprise fees, and you can move between plans or
        hosting models as your business grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, the next step is to decide what level of control, customization,
        and support you need. If you want to automate the routine, keep your data close, and avoid vendor
        lock-in, LobbyStack is the right fit. If your needs are better served by a human on every call, or if
        you need features not present in the current platform, a live service or a more specialized tool may be
        better. Either way, the decision comes down to how much of your week you want to spend chasing
        callbacks, and how much control you want over the system that answers your phone.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link href="#consultationAppointment2xl" id={`tools-marketing-intelligent-receptionist-lobbystack-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How many phone calls do you currently miss or send to voicemail each week, both during business hours and after hours?</li>
        <li>When a prospect hangs up without leaving a voicemail, what is your current process for recapturing that lead?</li>
        <li>Do you experience sudden spikes in call volume (e.g., seasonal demands, ad campaigns) that temporarily overwhelm your current staff?</li>
        <li>What is the exact sequence of events that needs to happen when a new client calls to book an appointment or request a service?</li>
        <li>Which calendar or scheduling platform do you use, and do you require the AI to write appointments directly to it?</li>
        <li>What percentage of your inbound calls are just repetitive questions regarding your location, operating hours, pricing tier, or basic services?</li>
        <li>What Customer Relationship Management (CRM), billing, or field service management software does your business rely on daily?</li>
        <li>Are you looking to unify your voice calls with other communication channels, like SMS text messaging and website live chat, into one master dashboard?</li>
        <li>Does your business require automated text-backs during a call to send digital intake forms, payment links, or address locations?</li>
        <li>What is your target market&#39;s tolerance for interacting with automated voices? Do you cater to an elite or older demographic that demands a human touch?</li>
        <li>Are there strict industry compliance guardrails (like <GlossaryLink slug="hipaa">HIPAA</GlossaryLink> for medical offices or trust account rules for lawyers) governing how client information is gathered?</li>
        <li>What specific criteria or emergency situations should trigger the AI to instantly transfer a live caller to your personal cell phone or an on-call team member?</li>
        <li>Do you prefer a predictable, fixed monthly software bill, or are you comfortable with a variable pay-per-minute or pay-per-call model as your business grows?</li>
        <li>How critical is total data ownership to your business? Do you prefer a turnkey cloud subscription, or do you want a proprietary system that your business fully owns and controls?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-lobbystack-is-for-who-should-look-elsewhere-and-the-next-step-for-south-florida-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who LobbyStack Is For, Who Should Look Elsewhere, and the Next Step for South Florida Teams
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-lobbystack-is-for-who-should-look-elsewhere-and-the-next-step-for-south-florida-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who LobbyStack Is For, Who Should Look Elsewhere, and the Next Step for South Florida Teams
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
