import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faRobot,
  faTableList,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export default function ComparingSection() {
  const points = [
    { icon: faHeadset, color: "text-white", label: "Live answering services" },
    { icon: faVoicemail, color: "text-[#0B162A]", label: "Voicemail and phone trees" },
    { icon: faRobot, color: "text-white", label: "AI voice receptionists" },
    { icon: faTableList, color: "text-[#0B162A]", label: "Geek-Receptionist today" },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A small business owner in South Florida comparing Geek-Receptionist is rarely starting from zero. Most
        have tried one of three approaches: a live answering service, plain voicemail or a phone menu, or an AI
        receptionist that answers calls. Each has real strengths, and Geek-Receptionist does something
        different from all of them today.</p>
      <p className="text-base text-white shadow-text pt-3">
        A live answering service puts a person on the line for every call. That is the best choice for
        sensitive calls and for callers who need a human voice, and the cost grows with the number of calls.
        Geek-Receptionist does not put a person on the line. It makes sure that a call you could not answer
        gets a reply, an alert and a record, at a size that fits a small business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Voicemail and phone menus are the usual fallback. They cost little, but many callers never leave a
        message, and the ones who do wait until you listen. A menu can frustrate a caller who wanted a quick
        answer. With Geek-Receptionist, the caller still has the option of leaving a voicemail, and they also
        get a text they can answer in their own words, which is easier than waiting for a callback.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI voice receptionists answer the call itself and talk with the caller. That is a real step up, and it
        is not what Geek-Receptionist does today. The tools on this site that answer calls with AI now include&nbsp;<Link id={`tools-business-operations-ai-receptionist-geek-receptionist-comparing-lobbystack${idSuffix}`} href="/tools/business-operations/ai-receptionist/lobbystack" className="text-[#C83803] hover:underline">LobbyStack</Link>,&nbsp;<Link id={`tools-business-operations-ai-receptionist-geek-receptionist-comparing-voksha${idSuffix}`} href="/tools/business-operations/ai-receptionist/voksha" className="text-[#C83803] hover:underline">Voksha</Link>,&nbsp;<Link id={`tools-business-operations-ai-receptionist-geek-receptionist-comparing-myaifrontdesk${idSuffix}`} href="/tools/business-operations/ai-receptionist/myaifrontdesk" className="text-[#C83803] hover:underline">My AI Front Desk</Link>,&nbsp;<Link id={`tools-business-operations-ai-receptionist-geek-receptionist-comparing-smith${idSuffix}`} href="/tools/business-operations/ai-receptionist/smith" className="text-[#C83803] hover:underline">Smith.ai</Link>&nbsp;and&nbsp;<Link id={`tools-business-operations-ai-receptionist-geek-receptionist-comparing-nextiva${idSuffix}`} href="/tools/business-operations/ai-receptionist/nextiva" className="text-[#C83803] hover:underline">Nextiva</Link>.
        If you need AI answering today, start there.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek-Receptionist is also built to keep your number. Many receptionist products ask you to move to
        their phone system or publish a new number. Here your carrier forwards the calls you do not answer, and
        your customers keep dialing the number they already know.</p>
      <p className="text-base text-white shadow-text pt-3">
        The texting rules are part of the comparison too. The text is fixed, goes only to someone who just
        called, goes at most once in a set window, and is limited to numbers in the United States and Canada.
        There is no free form messaging and no list, which keeps it a reply to a call and not a marketing tool.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the record. Every call, text, reply, opt out and voicemail is written to Geek-CRM, so you can
        see the history for each caller. Ask any option you are considering how it keeps that history, and who
        owns it afterwards.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI voice answering is planned for Geek-Receptionist as the next step, so you will not have to choose
        between a missed call reply today and a conversation later. It is marked as coming soon in the plans
        above until it is live.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-geek-receptionist-compares-to-answering-services-voicemail-and-ai-voice-receptionists" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek-Receptionist Compares to Answering Services, Voicemail and AI Voice Receptionists
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
              <h2 id="how-geek-receptionist-compares-to-answering-services-voicemail-and-ai-voice-receptionists-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek-Receptionist Compares to Answering Services, Voicemail and AI Voice Receptionists
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8 text-center">
                {points.map((point) => (
                  <li key={point.label} className="flex flex-col items-center">
                    <FontAwesomeIcon
                      icon={point.icon}
                      className={point.color}
                      style={{ width: "5.5rem", height: "5.5rem" }}
                    />
                    <p className="pt-3 text-lg font-bold uppercase tracking-wide text-white shadow-text">
                      {point.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
