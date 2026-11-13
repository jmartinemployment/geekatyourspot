import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentSms,
  faHandPointer,
  faPhone,
  faReply,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorksSection() {
  const points = [
    { icon: faPhone, color: "text-white", label: "Your line rings first" },
    { icon: faHandPointer, color: "text-[#0B162A]", label: "Press a key to accept" },
    { icon: faCommentSms, color: "text-white", label: "One text to a missed caller" },
    { icon: faBell, color: "text-[#0B162A]", label: "An alert to your cell phone" },
    { icon: faVoicemail, color: "text-white", label: "Voicemail with a recording link" },
    { icon: faReply, color: "text-[#0B162A]", label: "Caller replies reach you" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Here is what happens when someone calls your business. Your own line rings first, or the call rings your
        cell phone through Geek-Receptionist, depending on how it is set up. If you answer, the call connects
        and nothing else happens. No text is sent and no alert goes out.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you do not answer, the caller hears a short greeting. It tells them that your business is texting
        them about their call, that message and data rates may apply, and that they can reply STOP to opt out.
        They can also leave a voicemail after the tone. A caller who was not texted, for example because they
        called again inside the repeat window, hears only an invitation to leave a message, so the greeting
        never promises a text that was not sent.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the same moment, the caller gets one text message in your business’s name, and you get an alert on
        your cell phone that a call was missed and the text went out. When the caller leaves a voicemail, you
        get a text with a link to the recording.</p>
      <p className="text-base text-white shadow-text pt-3">
        Callers often reply to the text. Those replies are forwarded to your cell phone, so you can answer in
        your own words. Attachments are deleted and never forwarded, so only words reach you.</p>
      <p className="text-base text-white shadow-text pt-3">
        You can also turn on call screening. When a call rings your cell phone, you hear your business name and
        press any key to accept. Without screening, your cell phone’s own voicemail can pick up, which makes the
        call look answered, and the caller would never get the text.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-geek-receptionist-handles-a-missed-call" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek-Receptionist Handles a Missed Call
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
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
              <h2 id="how-geek-receptionist-handles-a-missed-call-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Geek-Receptionist Handles a Missed Call
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
