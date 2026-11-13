import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faBuilding,
  faClock,
  faCommentDots,
  faHandPointer,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

export default function ConfiguringSection() {
  const points = [
    { icon: faPhoneVolume, color: "text-white", label: "Dial or forwarded mode" },
    { icon: faClock, color: "text-[#0B162A]", label: "Ring time from 5 to 60 seconds" },
    { icon: faHandPointer, color: "text-white", label: "Call screening on or off" },
    { icon: faArrowsRotate, color: "text-[#0B162A]", label: "Repeat window from 0 to 1,440 minutes" },
    { icon: faCommentDots, color: "text-white", label: "The text callers receive" },
    { icon: faBuilding, color: "text-[#0B162A]", label: "Your business name everywhere" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Geek-Receptionist has a short list of settings, and each one has a plain effect. You do not need to
        build call flows or edit scripts to get a working missed call reply. The settings below are set once,
        and they can be changed later when your business changes.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first setting is the mode. In Dial mode, a call rings your cell phone first, and only a call you do
        not accept is treated as missed. In Forwarded mode, your carrier sends the calls you do not answer, so
        every call that arrives is already missed. Dial mode is the default.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ring time is how long your phone rings before the call counts as missed. The default is 18 seconds, and
        it can be set anywhere from 5 to 60. Keep it shorter than the time your carrier waits before sending a
        call to your own voicemail, so the call reaches Geek-Receptionist first.</p>
      <p className="text-base text-white shadow-text pt-3">
        Call screening is on by default in Dial mode. You hear “Call for” and your business name, and you press
        any key to accept. Without it, your cell phone’s voicemail can answer the call, the call looks
        completed, and the caller would never be texted.</p>
      <p className="text-base text-white shadow-text pt-3">
        The repeat window decides how long a caller waits before they can be texted again. The default is 10
        minutes, and it can be set from 0 to 1,440, which is a full day. A caller who phones three times in a
        row gets one text, not three.</p>
      <p className="text-base text-white shadow-text pt-3">
        The text itself is the next setting. A standard message is built in, and it can be replaced with your
        own wording, with your business name filled in for you. The wording has to stay in step with what the
        carriers approved for your business, so it is changed together with that approval, not on a whim.</p>
      <p className="text-base text-white shadow-text pt-3">
        Your business name appears in the text, in the greeting, in the screening prompt and in the alerts you
        receive. Your cell phone number is where the screening call rings and where every alert and forwarded
        reply is sent.</p>
      <p className="text-base text-white shadow-text pt-3">
        The service is also built to fail in plain sight. If its configuration is incomplete or invalid, it
        stays off and reports every problem it found, rather than half working. While it is off, every request
        from Twilio gets a clear answer that it is not configured, so a mistake cannot hide behind a service
        that only seems to be running.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-you-can-configure-in-geek-receptionist-ring-time-screening-and-the-text" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What You Can Configure in Geek-Receptionist: Ring Time, Screening and the Text
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-you-can-configure-in-geek-receptionist-ring-time-screening-and-the-text-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What You Can Configure in Geek-Receptionist: Ring Time, Screening and the Text
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
