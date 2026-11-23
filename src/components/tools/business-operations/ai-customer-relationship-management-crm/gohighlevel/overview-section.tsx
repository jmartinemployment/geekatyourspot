import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCalendarCheck,
  faClock,
  faCommentSms,
  faInbox,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

export default function OverviewSection() {
  const points = [
    { icon: faInbox, color: "text-[#C83803]", label: "Leads in four different places" },
    { icon: faClock, color: "text-white", label: "Replies that come hours late" },
    { icon: faAddressBook, color: "text-[#BF5934]", label: "One record for every customer" },
    { icon: faCommentSms, color: "text-[#C83803]", label: "Texts and email in one inbox" },
    { icon: faCalendarCheck, color: "text-white", label: "Appointments booked automatically" },
    { icon: faRobot, color: "text-[#BF5934]", label: "AI that answers the first message" },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A plumber in Boynton Beach finishes a job at 4 p.m., sits in the truck and sees three new leads: a form submission, a Facebook message and a missed call with no voicemail. One of them is already an hour old. By the time the owner replies that evening, one of those people has booked a competitor. Nothing was wrong with the business. The leads landed in four different places, and nothing told anyone who should follow up, when, or how.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-business-operations-ai-customer-relationship-management-crm-gohighlevel-overview-uc${idSuffix}`} href="/use-cases/business-operations/ai-customer-relationship-management-crm" className="text-[#C83803] hover:underline">AI Customer Relationship Management (CRM)</Link> fixes that by putting every contact, conversation and appointment into one record, then letting rules and AI handle the first reply, the reminders and the follow-up. In South Florida, customers message at night, ask three companies for a quote at once and expect an answer in minutes. Speed to the first reply is often the difference between a booked job and a lost one.</p>
      <p className="text-base text-white shadow-text pt-3">
        GoHighLevel is an all-in-one platform that combines a CRM with pipelines, two-way texting and email, a booking calendar, forms, a website and funnel builder, review requests and a workflow builder. HighLevel first built it for marketing agencies, and the same toolset suits a small business that wants one system in place of five subscriptions. It also includes AI features, such as a bot that answers texts and web chat and a voice agent that answers calls.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot LLC, based in West Palm Beach and serving Miami-Dade, Broward and Palm Beach counties, sets up GoHighLevel so the pipeline stages, texting rules and automations match how your business actually sells, not the template defaults. This page explains what the platform does, how it is built, what it costs to run and who should use it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
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
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
