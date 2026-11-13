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
        GeekAPI, the same system that serves Geek @ Your Spot LLC. Twilio carries the calls and the texts, and
        GeekAPI decides what happens to each one. That means one service and one address answer every call,
        instead of a separate system that has to be kept in step.</p>
      <p className="text-base text-white shadow-text pt-3">
        Twilio calls GeekAPI each time something happens. A call arrives, the owner’s leg of the call ends, a
        voicemail is finished, or a caller replies by text. Each of those is its own request, and each one is
        handled the same way every time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every request from Twilio must carry a valid signature, and a request without one is rejected. That
        keeps anyone from faking a call to make your number send texts, and it keeps the only way into the
        service limited to Twilio itself.</p>
      <p className="text-base text-white shadow-text pt-3">
        The rules are built to keep texting safe. The same caller is texted at most once in a set window, 10
        minutes by default. Only numbers in the United States and Canada are texted, which blocks a common kind
        of text fraud where a service is tricked into sending messages to expensive foreign numbers. Replies of
        STOP, HELP and START are handled automatically.</p>
      <p className="text-base text-white shadow-text pt-3">
        The message itself is fixed. It goes only to someone who just called your business, it is one message in
        your business’s name, and there is no way to type a free form message or send to a list. That keeps it a
        reply to a call, not marketing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek-Receptionist does not record calls. A caller who leaves a voicemail hears a prompt that makes it
        clear a message is being recorded. Florida requires everyone on a call to agree to recording, so there
        is no silent recording of any kind.</p>
      <p className="text-base text-white shadow-text pt-3">
        Replies are handled with the same care. When a caller texts back, the words are forwarded to your cell
        phone. Any picture or file attached to the reply is deleted and never forwarded, so the service only
        ever moves words.</p>
      <p className="text-base text-white shadow-text pt-3">
        When something goes wrong, you are told. If a text cannot be sent, for example because texting
        registration is still pending, you get an alert with the exact error instead of silence. A problem
        that would otherwise be easy to miss shows up on the phone you already carry.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every missed call, text, reply, opt out and voicemail is written to Geek-CRM. The caller’s number finds
        or creates a lead, and each event is logged against it once, even if Twilio sends the same request
        again. If Geek-CRM is slow, the logging gives up after three seconds and never changes what the caller
        hears.</p>
      <p className="text-base text-white shadow-text pt-3">
        One limit is worth knowing. The short memory of who was just texted, and which calls are being screened,
        is held in the running service and starts fresh after a restart. The record in Geek-CRM is not affected
        by that.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-runs-behind-the-phone-line-twilio-geek-crm-and-safety-rules" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Runs Behind the Phone Line: Twilio, Geek-CRM and Safety Rules
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
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
              <h2 id="what-runs-behind-the-phone-line-twilio-geek-crm-and-safety-rules-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Runs Behind the Phone Line: Twilio, Geek-CRM and Safety Rules
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
