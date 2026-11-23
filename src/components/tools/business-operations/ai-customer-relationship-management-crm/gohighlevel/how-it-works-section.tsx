import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBolt,
  faBullseye,
  faCalendarCheck,
  faComments,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorksSection() {
  const points = [
    { icon: faBullseye, color: "text-white", label: "Lead arrives from any source" },
    { icon: faBolt, color: "text-[#0B162A]", label: "Instant text and email reply" },
    { icon: faComments, color: "text-white", label: "Conversation stays in one thread" },
    { icon: faCalendarCheck, color: "text-[#0B162A]", label: "Customer books a time" },
    { icon: faBell, color: "text-white", label: "Reminders cut no-shows" },
    { icon: faStar, color: "text-[#0B162A]", label: "Review request after the job" },
  ];

  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The path starts when a lead arrives from a form, an ad, a call, a text or a message. GoHighLevel matches the phone number or email to an existing contact or creates a new one, and places an opportunity in the first stage of the pipeline, usually called New Lead.</p>
      <p className="text-base text-white shadow-text pt-3">
        A workflow then fires. Within a minute, the lead can receive a text and an email that name your business and offer a next step, while you or a team member gets a notification and the lead is assigned to the right person. This first reply is where most small businesses gain the most, because it happens even when nobody is free to answer.</p>
      <p className="text-base text-white shadow-text pt-3">
        When the customer replies, the answer lands in the same conversation thread. An AI bot, if you have turned one on, can answer routine questions about hours, service areas and what to expect, and save the answers it collects, such as the job type or address, into fields on the contact. A person can step in at any time.</p>
      <p className="text-base text-white shadow-text pt-3">
        Booking comes next. The customer picks a time from your calendar, gets a confirmation, and receives reminders before the appointment. The opportunity moves to Booked on its own. If the customer never replies, a follow-up sequence sends a few messages over several days and then stops.</p>
      <p className="text-base text-white shadow-text pt-3">
        The most common setup mistake is a sequence that keeps texting after the customer has answered, so every follow-up sequence should end on a reply, a booking or an opt-out. After the job, the workflow can request payment and a review, move the opportunity to Won and tag the contact for future campaigns.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-gohighlevel-handles-a-new-lead-from-first-contact-to-booked-appointment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How GoHighLevel Handles a New Lead from First Contact to Booked Appointment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-gohighlevel-handles-a-new-lead-from-first-contact-to-booked-appointment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How GoHighLevel Handles a New Lead from First Contact to Booked Appointment
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
