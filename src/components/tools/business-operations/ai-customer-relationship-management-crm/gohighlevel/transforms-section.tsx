import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCalendarCheck,
  faFilter,
  faInbox,
  faPhoneVolume,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function TransformsSection() {
  const points = [
    { icon: faAddressBook, color: "text-white", label: "One record for every contact" },
    { icon: faInbox, color: "text-[#0B162A]", label: "Texts, email and messages in one inbox" },
    { icon: faPhoneVolume, color: "text-white", label: "Missed calls answered by text" },
    { icon: faFilter, color: "text-[#0B162A]", label: "Pipeline stages that move themselves" },
    { icon: faCalendarCheck, color: "text-white", label: "Booking pages with reminders" },
    { icon: faStar, color: "text-[#0B162A]", label: "Review requests after the job" },
  ];

  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        GoHighLevel replaces the stack of separate tools with one system built around the contact. Every person gets a single record that holds their phone number, email, notes, form answers, appointments, payments and every conversation, so nothing depends on anyone remembering what was said.</p>
      <p className="text-base text-white shadow-text pt-3">
        Its Conversations inbox brings texts, email, Facebook and Instagram messages and website chat into one view, so a reply from any channel lands in the same place. When a call goes unanswered, a workflow can text the caller automatically, which turns a missed call into the start of a conversation instead of a lost lead.</p>
      <p className="text-base text-white shadow-text pt-3">
        Pipelines show where each opportunity stands, from new lead to quoted to booked to won. Stages can move on their own when something happens, such as a customer replying, booking a time or paying an invoice, so the board reflects reality without anyone dragging cards.</p>
      <p className="text-base text-white shadow-text pt-3">
        Calendars let customers book directly from a link, with confirmations and reminders sent by text and email. After the job, a review request can go out automatically, and the contact can be tagged for a seasonal reminder later in the year.</p>
      <p className="text-base text-white shadow-text pt-3">
        HighLevel also offers AI features, including a conversation bot for text and chat and a voice agent for calls. They are billed by usage and they need careful setup and testing before real customers talk to them, so treat them as something to switch on deliberately once the basics are working.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-gohighlevel-actually-does-for-ai-customer-relationship-management-crm" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What GoHighLevel actually does for AI Customer Relationship Management (CRM)
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
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
              <h2 id="what-gohighlevel-actually-does-for-ai-customer-relationship-management-crm-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What GoHighLevel actually does for AI Customer Relationship Management (CRM)
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
