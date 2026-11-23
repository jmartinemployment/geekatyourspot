import { GOHIGHLEVEL_AFFILIATE_URL } from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/affiliate-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faInbox,
  faPlug,
  faReceipt,
  faTag,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function EvaluatingSection() {
  const points = [
    { icon: faInbox, color: "text-white", label: "Leads arrive by text and message" },
    { icon: faUsers, color: "text-[#0B162A]", label: "Team that shares customers" },
    { icon: faTag, color: "text-white", label: "Price by account, not by seat" },
    { icon: faReceipt, color: "text-[#0B162A]", label: "Usage billed for texts and calls" },
    { icon: faPlug, color: "text-white", label: "Fewer separate subscriptions" },
    { icon: faGraduationCap, color: "text-[#0B162A]", label: "Time to learn a wide platform" },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The right way to judge GoHighLevel is to ask how much of your business runs on conversations. If most of your customers find you by form, text, call or message, and the sale depends on how quickly and clearly you reply, the platform is built for that. If your sales are a few large accounts handled by email and phone calls, a lighter tool may serve you better.</p>
      <p className="text-base text-white shadow-text pt-3">
        GoHighLevel’s fit is strongest when:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Leads reach you through several channels and you want one inbox for all of them.</li>
        <li>More than one person talks to customers, and you want the history to stay with the customer.</li>
        <li>You are paying for a form tool, a texting app, a calendar, an email tool and a CRM, and want fewer logins.</li>
        <li>Appointments are central to your sales, and reminders and review requests would raise your show rate.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        HighLevel prices its plans by account rather than by user, so adding a team member does not by itself raise the bill, which is a difference from most CRMs that charge for each seat. Texts, calls, email sending and AI features are billed by usage on top of the plan, and higher plans unlock more features. Plans and rates change, so check HighLevel’s current pricing page before you decide. <a id={`tools-business-operations-ai-customer-relationship-management-crm-gohighlevel-evaluating-affiliate${idSuffix}`} href={GOHIGHLEVEL_AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" className="text-[#0B162A] hover:underline">GoHighLevel</a> offers a free trial, which is a sensible way to see the inbox and the workflow builder with your own data.
        Geek @ Your Spot LLC earns a commission if you sign up through this link.</p>
      <p className="text-base text-white shadow-text pt-3">
        Flexibility is a strength and a cost. The platform can do a great deal, but the interface has many menus and the first weeks involve a real learning curve. That is one reason to have the setup done once, properly, by someone who has built these workflows before, instead of discovering the settings one mistake at a time.</p>
      <p className="text-base text-white shadow-text pt-3">
        GoHighLevel may not fit if your business needs deep sales forecasting, complex multi-stage quoting or a long enterprise sales process, or if your team is already deeply invested in another CRM that works well. Support is available through HighLevel’s help center and community, but if you want local help that knows your market, working with Geek @ Your Spot LLC as your implementer means the setup is matched to your real lead flow.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, judge GoHighLevel on three questions. Do your leads arrive through conversations? Will one shared system reduce the tools and logins you pay for? And are you willing to spend a few weeks getting the setup right so the automation works for you? If the answers are yes, the platform is likely a strong fit.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="judging-gohighlevel-fit-flexibility-and-how-its-pricing-works-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging GoHighLevel: Fit, Flexibility, and How Its Pricing Works for Small Teams
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
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
              <h2 id="judging-gohighlevel-fit-flexibility-and-how-its-pricing-works-for-small-teams-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging GoHighLevel: Fit, Flexibility, and How Its Pricing Works for Small Teams
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
