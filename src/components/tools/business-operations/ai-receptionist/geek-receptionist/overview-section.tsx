import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentSms,
  faPhoneSlash,
  faReply,
  faRobot,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export default function OverviewSection() {
  const points = [
    { icon: faPhoneSlash, color: "text-[#C83803]", label: "A call goes unanswered" },
    { icon: faCommentSms, color: "text-white", label: "One text goes to the caller" },
    { icon: faBell, color: "text-[#BF5934]", label: "You get an alert" },
    { icon: faVoicemail, color: "text-[#C83803]", label: "The caller can leave a voicemail" },
    { icon: faReply, color: "text-white", label: "Replies come to your cell phone" },
    { icon: faRobot, color: "text-[#BF5934]", label: "AI voice answering is next" },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        It is a Tuesday afternoon in Broward County. A plumber is under a customer’s sink, the office line
        rings, and nobody is free to pick up. The caller waits through the voicemail greeting, hangs up, and
        dials the next plumber on the list. By the time the owner checks messages that evening, the job has gone
        to someone else. For small businesses across Miami-Dade, Broward and Palm Beach, an unanswered phone is
        an everyday problem.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek-Receptionist is the phone service from Geek @ Your Spot LLC that deals with exactly that moment.
        When a call goes unanswered, the caller hears a short greeting and gets one text message in your
        business’s name. You get an alert on your cell phone, the caller can leave a voicemail, and if the
        caller texts back, the reply is forwarded straight to you. Every call and text is also logged in
        Geek-CRM, so you can see who called and when.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI voice answering is the next step. The plans and prices further down this page are for it, and they
        are marked as coming soon until it is live. What runs today is the missed call handling described on
        this page, and it works with the business number you already have.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are comparing options, the&nbsp;<Link id={`tools-business-operations-ai-receptionist-geek-receptionist-overview-ai-receptionist${idSuffix}`} href="/use-cases/business-operations/ai-receptionist" className="text-[#C83803] hover:underline">AI Receptionist</Link>&nbsp;use case
        explains what a small business should decide before choosing a tool, and the other tools on this site
        cover products that answer calls with AI today.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
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
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
