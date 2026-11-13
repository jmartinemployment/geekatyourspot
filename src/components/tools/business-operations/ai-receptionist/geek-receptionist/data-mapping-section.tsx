import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faFingerprint,
  faMessage,
  faMicrophoneLines,
  faPhone,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";

export default function DataMappingSection() {
  const points = [
    { icon: faPhone, color: "text-[#C83803]", label: "The caller's number finds or creates a lead" },
    { icon: faMessage, color: "text-white", label: "Each call and text is an activity" },
    { icon: faFingerprint, color: "text-[#BF5934]", label: "Keyed by Twilio ID, never twice" },
    { icon: faUserSlash, color: "text-[#C83803]", label: "STOP marks the number opted out" },
    { icon: faMicrophoneLines, color: "text-white", label: "Voicemail link logged" },
    { icon: faAddressBook, color: "text-[#BF5934]", label: "One record per caller" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A missed call is only useful if it turns into a record you can act on. Geek-Receptionist writes what
        happens on every call to Geek-CRM, the customer record that Geek @ Your Spot LLC runs, so your history
        does not live only in a phone log or in your memory.</p>
      <p className="text-base text-white shadow-text pt-3">
        The caller’s phone number is the starting point. When someone calls, Geek-Receptionist looks for a lead
        with that number. If one exists, the new event is added to it. If none exists, a lead is created, so a
        first time caller and a returning customer end up in the right place without anyone sorting them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Each thing that happens becomes an activity on that lead. A missed call is one. The text sent back to
        the caller is another. A reply from the caller, a voicemail, and a request to stop texting are each
        logged as their own activity, in the order they happened.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every activity is keyed by the identifier Twilio gives that call or message. If Twilio sends the same
        request twice, which can happen when a connection is slow, the second one finds the first and records
        nothing new. Your history has one entry for each real event.</p>
      <p className="text-base text-white shadow-text pt-3">
        A request to stop texting is handled with extra care. When a caller replies STOP, the number is marked
        as opted out, and the record shows it. That mark is how the system knows not to text that number again,
        and it stays on the lead rather than in anyone’s head.</p>
      <p className="text-base text-white shadow-text pt-3">
        The voicemail is logged too. You get a text with a link to the recording, and the same event is written
        to the lead, so the recording and the call it belongs to stay together.</p>
      <p className="text-base text-white shadow-text pt-3">
        Records go to the Geek-CRM account that belongs to the business. By default that is the Geek @ Your
        Spot LLC account, and it can be set to a different one.</p>
      <p className="text-base text-white shadow-text pt-3">
        None of this slows the call down. Writing to Geek-CRM gives up after three seconds, and a slow or
        unavailable record system never changes what the caller hears or whether the text goes out.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-every-call-and-text-becomes-a-record-in-geek-crm" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Every Call and Text Becomes a Record in Geek-CRM
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
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
              <h2 id="how-every-call-and-text-becomes-a-record-in-geek-crm-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Every Call and Text Becomes a Record in Geek-CRM
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
