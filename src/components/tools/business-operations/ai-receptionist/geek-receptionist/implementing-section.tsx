import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faClipboardCheck,
  faHandshake,
  faMobileScreen,
  faPhoneVolume,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

export default function ImplementingSection() {
  const points = [
    { icon: faMobileScreen, color: "text-[#C83803]", label: "Keep your own number" },
    { icon: faPhoneVolume, color: "text-white", label: "Your carrier forwards unanswered calls" },
    { icon: faClipboardCheck, color: "text-[#BF5934]", label: "Your business registered for texting" },
    { icon: faSliders, color: "text-[#C83803]", label: "Ring time and screening set" },
    { icon: faCircleCheck, color: "text-white", label: "Test it from a second phone" },
    { icon: faHandshake, color: "text-[#BF5934]", label: "Set up with Geek @ Your Spot LLC" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        There are two ways to run Geek-Receptionist. In the first, you keep your existing business number. Your
        carrier forwards the calls you do not answer to Geek-Receptionist, so every call that arrives there is
        already a missed call. In the second, a call rings your cell phone through a Geek-Receptionist number
        first, and only the calls you do not accept trigger the text.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first way suits a business that wants to keep the number its customers already know. Nothing about
        your published number changes, and your own phone still rings first. The second way suits a business
        that is happy to publish the Geek-Receptionist number as its main line.</p>
      <p className="text-base text-white shadow-text pt-3">
        Forwarding unanswered calls is a setting on your phone line, and the steps differ by carrier. AT&amp;T
        and T-Mobile use one kind of code, Verizon uses another, and each has its own way to check the setting
        and to turn it off. Geek @ Your Spot LLC walks you through the right one for your carrier and checks
        that it works.</p>
      <p className="text-base text-white shadow-text pt-3">
        Texting customers from a business number in the United States requires registration with the carriers.
        Each business is registered for it, and the way callers agree to the text is the greeting they hear.
        Until that approval comes through, calls and voicemail work and the text waits, and you are told the
        exact reason if a text cannot go out.</p>
      <p className="text-base text-white shadow-text pt-3">
        Twilio, the service that carries the calls, needs a few things pointed at Geek-Receptionist: the number
        that receives calls, the address for incoming calls, and the address for incoming texts. It also needs
        the messaging service that holds the number to pass replies along instead of deciding where they go. If
        that last setting is wrong, caller replies are silently dropped, so Geek @ Your Spot LLC checks it
        during setup.</p>
      <p className="text-base text-white shadow-text pt-3">
        Texting is limited to the United States and Canada in Twilio as well as in the service itself, so two
        separate settings agree on the same rule.</p>
      <p className="text-base text-white shadow-text pt-3">
        You choose how long your phone rings before a call counts as missed, whether you screen calls, and how
        long a caller waits before they can be texted again. Those are covered in the next sections.</p>
      <p className="text-base text-white shadow-text pt-3">
        Then you test it. Call your business from a second phone and let it ring. The calling phone hears the
        greeting and gets the text, and you get an alert that a call was missed. Reply to the text and check
        that the reply reaches your cell phone. Call again and leave a voicemail, and check that you get a text
        with a link to the recording.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="setting-up-geek-receptionist-on-your-own-number" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Setting Up Geek-Receptionist on Your Own Number
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="setting-up-geek-receptionist-on-your-own-number-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Setting Up Geek-Receptionist on Your Own Number
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
