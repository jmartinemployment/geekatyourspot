import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faDatabase,
  faFlagUsa,
  faShieldHalved,
  faTrashCan,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function ArchitectureSection() {
  const points = [
    { icon: faShieldHalved, color: "text-white", label: "Every request signature checked" },
    { icon: faFlagUsa, color: "text-[#0B162A]", label: "US and Canada numbers only" },
    { icon: faClockRotateLeft, color: "text-white", label: "Same caller texted once per window" },
    { icon: faTrashCan, color: "text-[#0B162A]", label: "Attachments deleted, never forwarded" },
    { icon: faTriangleExclamation, color: "text-white", label: "Failures reported to you" },
    { icon: faDatabase, color: "text-[#0B162A]", label: "Every call logged in Geek-CRM" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Geek-Receptionist is built on Twilio, a telephone and text messaging service, and it runs inside
        GeekAPI, the same system that serves Geek @ Your Spot LLC. Twilio carries the calls and texts, and
        GeekAPI decides what happens to each one.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every request from Twilio must carry a valid signature, and a request without one is rejected. That
        keeps anyone from faking a call to make your number send texts.</p>
      <p className="text-base text-white shadow-text pt-3">
        The rules are built to keep texting safe. A caller is texted at most once in a set window, 10 minutes
        by default. Only numbers in the United States and Canada are texted, which blocks a common kind of text
        fraud. Replies of STOP, HELP and START are handled automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek-Receptionist does not record calls. A caller who leaves a voicemail hears a prompt that makes it
        clear a message is being recorded. Florida requires everyone on a call to agree to recording, so there
        is no silent recording.</p>
      <p className="text-base text-white shadow-text pt-3">
        When something goes wrong, you are told. If a text cannot be sent, for example because texting
        registration is still pending, you get an alert with the exact error instead of silence.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every missed call, text, reply, opt out and voicemail is written to Geek-CRM. The caller’s number finds
        or creates a lead, and each event is logged against it once, even if Twilio retries the request. If
        Geek-CRM is slow, the logging gives up after three seconds and never changes what the caller hears.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-runs-behind-the-phone-line-twilio-geek-crm-and-safety-rules" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Runs Behind the Phone Line: Twilio, Geek-CRM and Safety Rules
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
              <h2 id="what-runs-behind-the-phone-line-twilio-geek-crm-and-safety-rules-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Runs Behind the Phone Line: Twilio, Geek-CRM and Safety Rules
              </h2>
              {body}
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
