import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faFileCircleCheck,
  faMapLocationDot,
  faScaleBalanced,
  faTableCells,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function OverviewSection() {
  const points = [
    { icon: faTableCells, color: "text-[#C83803]", label: "Workers tracked in spreadsheets" },
    { icon: faScaleBalanced, color: "text-white", label: "Employee or contractor, unclear" },
    { icon: faTriangleExclamation, color: "text-[#BF5934]", label: "Penalty and audit exposure" },
    { icon: faMapLocationDot, color: "text-[#C83803]", label: "Work across county lines" },
    { icon: faFileCircleCheck, color: "text-white", label: "Filings handled on time" },
    { icon: faBell, color: "text-[#BF5934]", label: "Real-time rule updates" },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        On a Monday morning in Miami, the owner of a ten-person HVAC company sits at her desk, buried in a
        tangle of spreadsheets and half-completed tax forms. She’s got three workers who come and go with the
        busy season, two who live in Broward but spend half their week installing units in Palm Beach, and a
        part-time bookkeeper who insists she’s a contractor. With each payroll run, the risk rises: one wrong
        tick in the employee type column, one forgotten state filing, and the business could face thousands in
        penalties or a full-blown audit.</p>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`tools-accounting-ai-payroll-tax-gusto-overview-ai-payroll-tax${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-payroll-tax" className="text-[#C83803] hover:underline">AI Payroll Tax</Link>&nbsp;is the single greatest administrative threat facing small
        businesses in South Florida’s fast-moving, gig-driven service markets. Without a full HR or legal team,
        most owners try to keep up with shifting IRS rules, Florida reemployment tax, and the difference between W-2
        employees and 1099 contractors on their own. The reality: the rules are strict, penalties stack up fast,
        and over ten percent of employers in the region misclassify their workers each year. Even a signed
        contract or a past year with no issues does not protect against audits if the classification or filings
        are wrong.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost is real: misclassifying just one employee as a contractor means the business could owe back
        taxes, unpaid overtime, benefits, and a cascade of state and federal penalties. Missing a local or
        multi-state tax deposit deadline can bring a 10% IRS penalty plus interest. These are not abstract risks.
        A single error can wipe out months of profit, trigger a payroll freeze, or even put the business at
        risk of closure. In South Florida, where seasonal surges and cross-county work are the norm, every
        payroll cycle is a compliance minefield.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is why Geek @ Your Spot LLC, based right here in West Palm Beach and serving Broward and Miami-Dade,
        builds automated payroll tax and worker classification workflows using the top tools on the market,
        including Gusto. Automation means every worker is classified up front, every tax filing is handled on
        time, and real-time updates keep your business in the clear, no matter how often your team changes or
        where they work. For small businesses facing the chaos of manual compliance, this is the difference
        between sleepless nights and peace of mind.</p>
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
