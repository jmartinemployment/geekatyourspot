import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ReceptionistSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">An AI receptionist answers every inbound call on the first ring and holds a natural conversation with the caller. It is not a phone tree. The caller says what they need in their own words, and the receptionist answers from your <GlossaryLink slug="knowledge-base" className="text-[#C83803] hover:underline">knowledge base</GlossaryLink>: your hours, your services, your service area, and the questions your staff already answer every day.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>It asks the qualifying questions you choose, such as the type of job, the address, and the timeline, and records every answer.</li>
        <li>It checks your calendar and books the appointment while the caller is still on the line.</li>
        <li>It answers several calls at the same time, so nobody hears a busy signal during a rush.</li>
        <li>It transfers the call to a person, with a summary, whenever your rules say a human should take over.</li>
        <li>It sends your team a written summary of every call, including the ones that came in overnight.</li>
      </ul>
      <h3 className="text-white pt-6 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">Top AI Receptionist Tools</h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li><Link id={`use-cases-business-operations-front-desk-receptionist-dapta${idSuffix}`} href="/tools/business-operations/ai-receptionist/dapta" className="text-[#C83803] hover:underline">Dapta</Link> runs voice and text from one platform, so the same AI that answers your calls also answers your messages.</li>
        <li><Link id={`use-cases-business-operations-front-desk-receptionist-geek-receptionist${idSuffix}`} href="/tools/business-operations/ai-receptionist/geek-receptionist" className="text-[#C83803] hover:underline">Geek-Receptionist</Link> is the phone service from Geek @ Your Spot LLC. It texts every caller you miss, alerts you and takes a voicemail today, with AI voice answering planned next.</li>
        <li><Link id={`use-cases-business-operations-front-desk-receptionist-lobbystack${idSuffix}`} href="/tools/business-operations/ai-receptionist/lobbystack" className="text-[#C83803] hover:underline">LobbyStack</Link> is a customizable receptionist for businesses that want to control exactly how each type of call is handled.</li>
        <li><Link id={`use-cases-business-operations-front-desk-receptionist-myaifrontdesk${idSuffix}`} href="/tools/business-operations/ai-receptionist/myaifrontdesk" className="text-[#C83803] hover:underline">My AI Front Desk</Link> is a self-serve receptionist built to answer calls, capture leads, and book appointments for small businesses.</li>
        <li><Link id={`use-cases-business-operations-front-desk-receptionist-nextiva${idSuffix}`} href="/tools/business-operations/ai-receptionist/nextiva" className="text-[#C83803] hover:underline">Nextiva</Link> puts the AI receptionist inside a full business phone system that brings your communication channels together.</li>
        <li><Link id={`use-cases-business-operations-front-desk-receptionist-smith${idSuffix}`} href="/tools/business-operations/ai-receptionist/smith" className="text-[#C83803] hover:underline">Smith.ai</Link> combines AI call handling with live human receptionists who step in when a call needs a person.</li>
        <li><Link id={`use-cases-business-operations-front-desk-receptionist-voksha${idSuffix}`} href="/tools/business-operations/ai-receptionist/voksha" className="text-[#C83803] hover:underline">Voksha</Link> is built to answer every call and capture every caller as a lead.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-ai-receptionist-answers-your-phone" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The AI Receptionist Answers Your Phone
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-ai-receptionist-answers-your-phone-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The AI Receptionist Answers Your Phone
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
