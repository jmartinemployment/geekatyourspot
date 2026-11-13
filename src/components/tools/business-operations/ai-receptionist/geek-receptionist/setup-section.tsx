import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faClipboardCheck,
  faHandshake,
  faMobileScreen,
  faPhoneVolume,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";

export default function SetupSection() {
  const points = [
    { icon: faMobileScreen, color: "text-white", label: "Keep your own number" },
    { icon: faPhoneVolume, color: "text-[#0B162A]", label: "Your carrier forwards unanswered calls" },
    { icon: faClipboardCheck, color: "text-white", label: "Your business registered for texting" },
    { icon: faSliders, color: "text-[#0B162A]", label: "Ring time and screening set" },
    { icon: faCircleCheck, color: "text-white", label: "Test it from a second phone" },
    { icon: faHandshake, color: "text-[#0B162A]", label: "Set up with Geek @ Your Spot LLC" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        There are two ways to run Geek-Receptionist. In the first, you keep your existing business number. Your
        carrier forwards the calls you do not answer to Geek-Receptionist, so every call that arrives there is
        already a missed call. In the second, a call rings your cell phone through a Geek-Receptionist number
        first, and only the calls you do not accept trigger the text. The first suits a business that wants to
        keep the number its customers already know.</p>
      <p className="text-base text-white shadow-text pt-3">
        Forwarding unanswered calls is a setting on your phone line, and the steps differ by carrier. Geek @ Your
        Spot LLC walks you through it and checks that it works.</p>
      <p className="text-base text-white shadow-text pt-3">
        Texting customers from a business number in the United States requires registration with the carriers.
        Until that approval comes through, calls and voicemail work and the text-back waits, and you are told
        the exact reason if a text cannot go out.</p>
      <p className="text-base text-white shadow-text pt-3">
        You choose how long your phone rings before a call counts as missed, whether you screen calls, and how
        long a caller waits before they can be texted again. Then you test it. Call your business from a second
        phone, let it ring, and check that the text arrives and your alert comes through.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="setting-up-geek-receptionist-on-your-own-number" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Setting Up Geek-Receptionist on Your Own Number
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
              <h2 id="setting-up-geek-receptionist-on-your-own-number-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Setting Up Geek-Receptionist on Your Own Number
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
