import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentSms,
  faFilter,
  faGears,
  faLayerGroup,
  faScaleBalanced,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function ComparingSection() {
  const points = [
    { icon: faLayerGroup, color: "text-white", label: "CRM, texting and booking in one" },
    { icon: faUsers, color: "text-[#0B162A]", label: "No per-user seat charge" },
    { icon: faCommentSms, color: "text-white", label: "Two-way texting built in" },
    { icon: faScaleBalanced, color: "text-[#0B162A]", label: "Weighed against HubSpot and Keap" },
    { icon: faFilter, color: "text-white", label: "Pipedrive keeps sales simple" },
    { icon: faGears, color: "text-[#0B162A]", label: "More setup than a basic CRM" },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in South Florida have many CRM options. GoHighLevel sits among HubSpot, <Link id={`tools-business-operations-ai-customer-relationship-management-crm-gohighlevel-comparing-pipedrive${idSuffix}`} href="/tools/marketing/pipedrive" className="text-[#0B162A] hover:underline">Pipedrive</Link>, Keap and Zoho, and each one makes different trade-offs. The honest comparison starts with what you need the system to do on a normal Tuesday, not with the longest feature list.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main difference is breadth. GoHighLevel puts a CRM, two-way texting, email, a booking calendar, forms, a website and funnel builder and a workflow builder in one account. Most of the alternatives are strong at one part of that and rely on add-ons or connected apps for the rest, which can mean more subscriptions and more places for data to fall out of sync.</p>
      <p className="text-base text-white shadow-text pt-3">
        Pricing works differently as well. Many CRMs charge for each user seat, so costs climb as the team grows. HighLevel prices by account and bills usage for messaging and AI, so the cost follows how much you send rather than how many people log in. Which model is cheaper depends on your team size and message volume, so price both for your own numbers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Other tools win in places. Pipedrive is popular with sales teams because its pipeline is simple and focused. HubSpot has a large ecosystem and polished marketing and reporting tools, and Keap is aimed squarely at small business automation. Zoho offers a wide suite with a lot of flexibility. If your need is a clean sales pipeline and little else, a simpler tool can be the better choice.</p>
      <p className="text-base text-white shadow-text pt-3">
        GoHighLevel’s edge is for a business that lives on inbound conversations and appointments and wants the first reply, the reminder and the follow-up to happen on their own. Whichever tool you choose, the results depend on the setup, which is why Geek @ Your Spot LLC configures the platform around your actual lead flow.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-gohighlevel-compares-to-other-crm-platforms" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How GoHighLevel Compares to Other CRM Platforms
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-gohighlevel-compares-to-other-crm-platforms-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How GoHighLevel Compares to Other CRM Platforms
              </h2>
              {body("-lg")}
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
