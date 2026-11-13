import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faDatabase,
  faEye,
  faMobileScreen,
  faRobot,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";

export default function TransformsSection() {
  const points = [
    { icon: faEye, color: "text-white", label: "You see every missed call" },
    { icon: faDatabase, color: "text-[#0B162A]", label: "You stop being the only memory" },
    { icon: faComments, color: "text-white", label: "Callbacks start mid conversation" },
    { icon: faScaleBalanced, color: "text-[#0B162A]", label: "Texting rules handled for you" },
    { icon: faMobileScreen, color: "text-white", label: "Your number stays yours" },
    { icon: faRobot, color: "text-[#0B162A]", label: "AI voice answering comes next" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Without Geek-Receptionist, a missed call is a silent event. You find out later, if at all, by scrolling
        a call log and guessing which numbers matter. The caller has no idea whether anyone saw the call, so
        they do what anyone would do and try someone else.</p>
      <p className="text-base text-white shadow-text pt-3">
        With it, every missed call becomes a visible event within moments. You get an alert on your cell phone
        that a call was missed and that a text went out, so you know the caller has already been acknowledged.
        You can decide what to do next while the customer is still waiting.</p>
      <p className="text-base text-white shadow-text pt-3">
        You stop being the only memory in the business. The caller’s number, the time of the call, the text,
        any reply, any voicemail and any request to stop texting are all recorded in Geek-CRM, so nothing
        depends on you remembering a call from three days ago.</p>
      <p className="text-base text-white shadow-text pt-3">
        You stop returning cold callbacks. A caller who replies to the text gives you what they need before you
        pick up the phone, so your callback starts in the middle of the conversation instead of at the
        beginning. A caller who leaves a voicemail gives you a recording you can play from a link in a text.</p>
      <p className="text-base text-white shadow-text pt-3">
        You stop worrying about texting rules. The greeting tells the caller about the text, a STOP is honored
        automatically, the same caller is not texted again inside a set window, and only numbers in the United
        States and Canada are texted.</p>
      <p className="text-base text-white shadow-text pt-3">
        You keep control of your number and your phone. Nothing replaces your phone system, nothing is added to
        your customers’ to do list, and your cell phone stays the place where alerts and replies arrive.</p>
      <p className="text-base text-white shadow-text pt-3">
        What it does not do yet is answer the call itself. That is the AI voice step. Until it is live, a
        missed call still ends in a text and a voicemail, not a conversation, and this page says so on purpose.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-geek-receptionist-removes-from-your-week" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Geek-Receptionist Removes from Your Week
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
              <h2 id="what-geek-receptionist-removes-from-your-week-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Geek-Receptionist Removes from Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
