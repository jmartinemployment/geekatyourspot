import { GOHIGHLEVEL_AFFILIATE_URL } from "@/components/tools/business-operations/ai-customer-relationship-management-crm/gohighlevel/affiliate-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faCalendarCheck,
  faDatabase,
  faHelmetSafety,
  faInbox,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function RightFitSection() {
  const groups = [
    {
      heading: "Right fit",
      items: [
        { icon: faInbox, color: "text-[#C83803]", label: "Leads by text, form and message" },
        { icon: faHelmetSafety, color: "text-white", label: "Home services and local trades" },
        { icon: faCalendarCheck, color: "text-[#BF5934]", label: "Sales that depend on appointments" },
        { icon: faUsers, color: "text-[#C83803]", label: "Teams that share customers" },
      ],
    },
    {
      heading: "Look elsewhere",
      items: [
        { icon: faUser, color: "text-white", label: "A few customers, handled by one person" },
        { icon: faBuildingColumns, color: "text-[#BF5934]", label: "Large enterprise sales cycles" },
        { icon: faDatabase, color: "text-[#C83803]", label: "A CRM you already use well" },
      ],
    },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        GoHighLevel is built for small businesses that win work through conversations and appointments, and that lose it when a reply comes too late. If you run a home services company, a clinic or salon, a real estate or insurance office, or any local business where the phone, texts and web forms bring in the leads, the platform’s inbox, calendar and automation are aimed at your day.</p>
      <p className="text-base text-white shadow-text pt-3">
        It is a strong fit when more than one person talks to customers, because the history stays with the customer, and when you want the first reply, the reminder and the review request to happen without anyone remembering to send them. It is also a good fit if you currently pay for several separate tools and want to consolidate.</p>
      <p className="text-base text-white shadow-text pt-3">
        It is not for everyone. If you have a handful of customers and one person who knows each of them, a spreadsheet may be all you need today. If your sales are long, high-value and handled by a dedicated sales team that needs forecasting and detailed quoting, you may need a CRM built for that. If a CRM you already use works well for you, switching has a cost that has to be earned.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step is to compare your lead flow with what the platform automates. If your pain is slow replies, scattered leads and no-shows, it is worth a close look. If it is not, you will save time and money by choosing something simpler.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business matches that profile, take a look at <a id={`tools-business-operations-ai-customer-relationship-management-crm-gohighlevel-right-fit-affiliate${idSuffix}`} href={GOHIGHLEVEL_AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" className="text-[#C83803] hover:underline">GoHighLevel</a> directly.
        Geek @ Your Spot LLC earns a commission if you sign up through this link.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last step is to be clear about how your leads arrive today. Answer these questions when <a href="#consultationAppointment2xl" id={`tools-business-operations-ai-customer-relationship-management-crm-gohighlevel-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Where do most of your leads come from: calls, texts, forms or messages?</li>
        <li>How many people reply to customers, and which tools do they use now?</li>
        <li>Which calendar do you book appointments in?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-should-choose-gohighlevel-and-who-should-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Choose GoHighLevel and Who Should Not
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
              <div className="flex w-full flex-col gap-10 text-center">
                {groups.map((group) => (
                  <div key={group.heading}>
                    <h3 className="border-b-4 border-white pb-2 text-xl font-black font-[var(--font-sora)] uppercase tracking-widest text-white shadow-text">
                      {group.heading}
                    </h3>
                    <ul className="flex flex-col items-center gap-8 pt-8">
                      {group.items.map((item) => (
                        <li key={item.label} className="flex flex-col items-center">
                          <FontAwesomeIcon
                            icon={item.icon}
                            className={item.color}
                            style={{ width: "5.5rem", height: "5.5rem" }}
                          />
                          <p className="pt-3 text-lg font-bold uppercase tracking-wide text-white shadow-text">
                            {item.label}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-7">
              <h2 id="who-should-choose-gohighlevel-and-who-should-not-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Should Choose GoHighLevel and Who Should Not
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
