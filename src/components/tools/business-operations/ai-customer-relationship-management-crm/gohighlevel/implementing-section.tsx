import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faEnvelopeCircleCheck,
  faFileImport,
  faFilter,
  faGears,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function ImplementingSection() {
  const points = [
    { icon: faPhone, color: "text-[#C83803]", label: "Phone number and texting registered first" },
    { icon: faEnvelopeCircleCheck, color: "text-white", label: "Email sending authenticated" },
    { icon: faFileImport, color: "text-[#BF5934]", label: "Contacts imported and cleaned" },
    { icon: faFilter, color: "text-[#C83803]", label: "Pipeline built around how you sell" },
    { icon: faGears, color: "text-white", label: "Three starter workflows tested" },
    { icon: faCalendarCheck, color: "text-[#BF5934]", label: "One lead source live first" },
  ];

  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with GoHighLevel is less about turning on features than about doing a few slow things early. Registering your business for text messaging and authenticating your sending domain for email can take days, so they come first, while you build everything else.</p>
      <p className="text-base text-white shadow-text pt-3">
        The second step is your existing contacts. Export them from your current tools, put each person on one row, format phone numbers consistently and remove duplicates before you import. Importing a messy list into a new system only moves the mess.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes the pipeline. Name the stages after how your business really sells, such as New Lead, Contacted, Quote Sent, Booked and Won, and give each stage an owner. A pipeline with ten stages that nobody uses is worse than one with five that everyone does.</p>
      <p className="text-base text-white shadow-text pt-3">
        Then build three starter workflows: the instant reply to a new lead, appointment reminders, and a review request after the job. Test each one with your own phone and email before any customer sees it. Many problems, such as a message sent twice or a reminder at the wrong hour, show up in the first test.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, go live with one lead source first, usually your website form, and watch it for a week. Once the replies and bookings look right, add the next source, such as missed calls or Facebook messages. Switching everything on at once makes it hard to see what is working.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-the-path-to-a-clean-go-live-with-gohighlevel" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens the Path to a Clean Go-Live with GoHighLevel
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-the-path-to-a-clean-go-live-with-gohighlevel-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens the Path to a Clean Go-Live with GoHighLevel
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
