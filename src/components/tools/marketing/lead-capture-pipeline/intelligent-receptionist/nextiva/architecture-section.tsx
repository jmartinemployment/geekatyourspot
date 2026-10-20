import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva’s architecture is designed for unified communication, one platform that brings together phone
        calls, SMS, web chat, video, email, and even social media. At its core, Nextiva runs as
        an&nbsp;<GlossaryLink slug="omnichannel" className="text-[#0B162A] hover:underline">omnichannel</GlossaryLink>&nbsp;contact
        center, connecting every channel your customers use into a single agent interface. This means your team
        sees the full picture for every customer, no matter how they reach out.</p>
      <p className="text-md text-white shadow-text pt-3">
        The system does not just bolt together different tools. It natively supports multiple communication
        channels, so calls, texts, chats, and emails all flow into the same workspace. This is backed by a
        unified inbox, giving teams a single place to manage every conversation. When a customer switches from a
        web chat to a phone call, the context follows them. Your staff do not have to ask the same questions
        twice or dig for old notes, the system shows the full interaction history, including any prior
        appointments or service requests.</p>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva’s AI layer
        uses&nbsp;<GlossaryLink slug="natural-language-processing" className="text-[#0B162A] hover:underline">natural
        language processing</GlossaryLink>&nbsp;and speech recognition to understand what callers and chat users
        want. It can distinguish between a lead looking for a quote, a customer needing to reschedule, or
        someone just asking for your hours. Every interaction is logged, transcribed, and analyzed. The AI
        improves over time, learning from real conversations and feedback, so its responses get sharper and more
        relevant for your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses that rely on appointments, Nextiva integrates directly with your calendars and scheduling
        tools. When a customer books or changes an appointment, the system checks real-time availability,
        updates the schedule, and sends confirmation texts automatically. This integration is not limited to one
        type of calendar
        or&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>, Nextiva
        is designed to connect with the tools small businesses already use, so you do not have to rebuild your
        workflow from scratch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Security and compliance are not afterthoughts. Nextiva’s healthcare platform, for example, is <GlossaryLink slug="hipaa" className="text-[#0B162A] hover:underline">HIPAA</GlossaryLink>-ready with end-to-end encryption and SOC 2 certification. It can sign a Business Associate
        Agreement for clients who need it, and it supports out-of-the-box integration with Epic for medical
        practices. This means sensitive data stays protected, and you meet industry standards without extra
        effort.</p>
      <p className="text-md text-white shadow-text pt-3">
        Every call, chat, and message is stored with its own transcript and summary. Managers can review call
        records, analyze patterns, and spot where leads are dropping off. The platform’s analytics dashboard
        gives you visibility into response times, resolution rates, and customer satisfaction, by agent, by
        channel, or across the whole business. This data is not just for reporting. It powers real-time
        improvements, helping you adjust scripts, update escalation rules, and optimize how the AI handles
        different scenarios.</p>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva’s architecture is built for scale. The platform can handle dozens, or even hundreds, of calls
        and chats at once, without slowing down. During busy periods, it absorbs spikes in volume without
        needing to hire extra staff or pay for overtime. The AI answering service acts as a safety net, making
        sure no customer is left waiting, even when your team is busy or out of the office.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the HVAC team in West Palm Beach, this means Friday’s rush does not overwhelm the system. Calls,
        texts, and chats all land in the same place, and the AI handles the routine questions and bookings
        automatically. If something needs a human touch, the system routes it to the right technician or
        manager, passing along every detail. No more missed jobs because someone forgot to check the chat, or
        lost revenue from double-booked appointments.</p>
      <p className="text-md text-white shadow-text pt-3">
        Nextiva’s unified platform, real-time integrations, and smart data flow are what let small businesses
        move from a patchwork of disconnected tools to a single, reliable system. It is not just about plugging
        in another app. It is about building a foundation where every customer interaction is handled, tracked,
        and improved, so your business can grow without adding complexity or overhead.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-powers-nextiva-under-the-hood-architecture-integrations-and-data-flow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Nextiva Under the Hood: Architecture, Integrations, and Data Flow
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
              <h2 id="what-powers-nextiva-under-the-hood-architecture-integrations-and-data-flow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Powers Nextiva Under the Hood: Architecture, Integrations, and Data Flow
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
