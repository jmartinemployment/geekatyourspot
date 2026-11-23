import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faFilter,
  faGears,
  faPlug,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

export default function ArchitectureSection() {
  const points = [
    { icon: faDatabase, color: "text-white", label: "Contacts with custom fields" },
    { icon: faFilter, color: "text-[#0B162A]", label: "Opportunities in pipelines" },
    { icon: faGears, color: "text-white", label: "Workflows run the rules" },
    { icon: faPlug, color: "text-[#0B162A]", label: "Google, Facebook and Stripe connected" },
    { icon: faCode, color: "text-white", label: "API and webhooks" },
    { icon: faUserLock, color: "text-[#0B162A]", label: "Roles and permissions" },
  ];

  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        GoHighLevel is a cloud platform organized around accounts that HighLevel calls sub-accounts or locations. An agency can run many of them, but a small business normally has one, and everything below lives inside it. You do not need an IT team, because the platform is hosted and updated by HighLevel.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the center are contacts. Each contact holds standard fields such as name, phone and email, plus custom fields you define, such as job type, service address or quote amount. Tags mark status that cuts across everything, such as customer, past customer or do not text. Opportunities connect a contact to a stage in a pipeline, and conversations, appointments, forms and payments all hang off the same record.</p>
      <p className="text-base text-white shadow-text pt-3">
        Workflows are the rules engine. A workflow starts with a trigger, such as a form submission or a missed call, and runs actions, waits and conditions, such as send a text, wait one day, check whether the customer replied, and move the opportunity. The workflow history shows which steps ran for each contact, which makes problems traceable.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform connects to Google for calendars and business messages, to Facebook and Instagram for messaging, and to payment processors such as Stripe. It also includes its own phone numbers and email sending, billed by usage. For anything else, it supports an API, webhooks and connectors such as Zapier and Make, so your accounting and other tools can exchange data with it.</p>
      <p className="text-base text-white shadow-text pt-3">
        Users sign in with roles that control what each person can see and change, and contacts can be exported, so your customer list is never locked inside the platform. A mobile app lets you reply to customers and see your pipeline from the job site.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="gohighlevel-s-architecture-contacts-pipelines-workflows-and-what-the-platform-holds" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                GoHighLevel’s Architecture: Contacts, Pipelines, Workflows and What the Platform Holds
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
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
              <h2 id="gohighlevel-s-architecture-contacts-pipelines-workflows-and-what-the-platform-holds-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                GoHighLevel’s Architecture: Contacts, Pipelines, Workflows and What the Platform Holds
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
