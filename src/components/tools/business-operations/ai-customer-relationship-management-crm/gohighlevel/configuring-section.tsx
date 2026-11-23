import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faClock,
  faCommentSms,
  faGears,
  faRobot,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

export default function ConfiguringSection() {
  const points = [
    { icon: faGears, color: "text-white", label: "Triggers, waits and conditions" },
    { icon: faClock, color: "text-[#0B162A]", label: "Business hours and quiet hours" },
    { icon: faCommentSms, color: "text-white", label: "Opt-out handled automatically" },
    { icon: faRobot, color: "text-[#0B162A]", label: "AI told what it may and may not say" },
    { icon: faUserLock, color: "text-white", label: "Permissions set for each user" },
    { icon: faClipboardList, color: "text-[#0B162A]", label: "History to trace every step" },
  ];

  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        GoHighLevel is configured by building, not coding. You pick a trigger, add actions, waits and conditions, and the visual builder lays them out in order. Most small businesses never need custom code, although an API and a custom code action exist for the cases that do.</p>
      <p className="text-base text-white shadow-text pt-3">
        Texting rules are the first thing to get right. Set quiet hours so messages do not go out late at night, use merge fields so each text names the customer and your business, and make sure a reply of STOP removes the person from every sequence. These settings protect your customers and your phone number’s reputation.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you use the AI bot, you control what it knows and what it does. You give it only approved information: your services, hours, service areas and the common answers you are happy to share. You decide whether it checks your calendar and books a time, or lets the visitor request a time that your office confirms. You also tell it when to hand off to a person, for example for pricing disputes, complaints or anything it cannot answer.</p>
      <p className="text-base text-white shadow-text pt-3">
        Then test what it should not answer. Ask it about an exact code requirement for an installation, a firm price for a job it has not seen, or whether a repair is safe. A good answer is a polite hand-off to your office, not a guess. Run these tests with awkward questions before the bot talks to a real customer.</p>
      <p className="text-base text-white shadow-text pt-3">
        Follow-up needs two rules. Send follow-up messages only to customers who agreed to receive them, and stop the invitations to book as soon as the customer schedules an appointment. Nobody likes being messaged over and over after they have already taken action.</p>
      <p className="text-base text-white shadow-text pt-3">
        Set user roles so staff see what they need and nothing more, and decide who is notified when a new lead arrives or when a conversation needs a person. The workflow history then lets you check, for any contact, which messages were sent and why, which makes troubleshooting a matter of reading a list.</p>
      <p className="text-base text-white shadow-text pt-3">
        Configuration is also where the platform stops being generic. The same GoHighLevel account behaves very differently for a roofing company with long quotes and for a salon with short appointments, and the difference is entirely in how the pipelines, workflows and messages are set up.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-gohighlevel-s-workflows-texting-and-ai-for-local-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring GoHighLevel’s Workflows, Texting and AI for Local Small Businesses
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="configuring-gohighlevel-s-workflows-texting-and-ai-for-local-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Configuring GoHighLevel’s Workflows, Texting and AI for Local Small Businesses
              </h2>
              {body()}
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
