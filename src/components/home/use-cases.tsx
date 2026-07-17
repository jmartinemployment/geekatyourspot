import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFunnelDollar,
  faBellConcierge,
  faTag,
  faUsersBetweenLines,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { departmentIcon } from "@/lib/departmentIcons";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { BlogPost } from "@/services/geekApiService";

  interface UseCasesSectionProps {
    items: BlogPost[];
  }

export function UseCasesSection({ items }: UseCasesSectionProps) {
    
  return (
    <>
    <article id="use-cases-section" className="w-full bg-[#025E73] min-h-screen py-5 hidden md:block scroll-mt-24" >
      <div className="grid grid-cols-1 container mb-5">
        <div className="col-span-full">
          <h2 className="text-white text-[12vw] sm:text-6xl md:text-7xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
            <Link
              id={gtmLinkIdFromHref("/use-cases", "home-title")}
              href="/use-cases"
              className="hover:opacity-90 transition-opacity"
            >
              Artificial<br />
              Intelligence<br />
              <span className="text-[#8C2703] shadow-text">Use Cases</span>
            </Link>
          </h2>
        </div>
      </div>
    <div className="grid grid-cols-12 container">
        <div className="col-span-6 flex flex-col items-center justify-center py-5 bg-[#023059] scroll-mt-24">
            <FontAwesomeIcon
                icon={faCalculator}
                width={256}
                height={256}
                className="text-white mb-4"
            />
            <p className="text-white font-bold text-3xl leading-[0.95] shadow-text">Accounting</p>

        </div>
        <div className="col-span-6 bg-[#CBCBCB] px-5 py-5 scroll-mt-24">
            <div>
                <h3 className="text-3xl font-bold shadow-text">
                    Accounting
                </h3>
                <p className="text-xs">
                    Tell me your technology stack (QuickBooks, Xero, NetSuite) the number of vendors, and transaction volumes, for a prioritized roadmap.
                </p>
                <ol>
                    <h4 className="font-bold lg:text-lg shadow-text">Automated Accounts Payable</h4>
                    <ul className="list-disc text-xs list- pl-3 ">
                        <li className="pl-.5">
                            <strong className="text-sm">Automated Data Entry &amp; Processing: </strong>
                                Utilize OCR (Optical Character Recognition) Technology to automatically extract data from invoices and vendor payments then populate corresponding fields in your AP system with high accuracy.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Approval Workflows: </strong>
                                Configure automated, rule-based approval workflows that automatically route invoices to the correct manager based on preset dollar thresholds or departments.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Early-Payment Discounts & Late Fees: </strong>
                                Automate your payment execution so you can schedule payments in advance, taking advantage of early-pay discounts and ensuring you never miss a deadline.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Risk of Fraud & Duplicate Payments: </strong>
                                Implement three-way matching (comparing Purchase Order, Receiving Report, and Invoice) and use digital payment rails like virtual cards, which offer higher security and built-in fraud protections.
                        </li>
                    </ul>
                    <h4 className="font-bold lg:text-lg shadow-text">Cash Flow Forecasting</h4>
                    <ul className="list-disc text-xs list- pl-3 ">
                        <li className="pl-.5">
                            <strong className="text-sm">Accounts Receivable: </strong>
                            Require 30-50% upfront deposits on large orders and enforce automated payment reminders through accounting software. You can also offer early payment discounts, like 2% off for payments received within 10 days.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Enterprise Resource Planning: </strong>
                                Direct integrations with platforms like NetSuite or Intuit Enterprise Suite feed live payables, receivables, and scheduled transactions into dynamic forecasting tables. Platforms such as Transformance AI pull live AR and AP signals to predict invoice-level cash timing and highlight forecast-to-actual variances.
                        </li>
                    </ul>
                    <Link
                    id={gtmLinkIdFromHref("/use-cases/accounting/streamlining-tax-compliance-regulations-through-ai-implementation", "tax-compliance")}
                    href="/use-cases/accounting/streamlining-tax-compliance-regulations-through-ai-implementation"
                    className="hover:opacity-90 transition-opacity">
                        <h4 className="font-bold lg:text-lg shadow-text">Tax Compliance & Regulations</h4>
                    </Link>
                    <ul className="list-disc text-xs list- pl-3 ">
                        <li className="pl-.5">
                            
                            <strong className="text-sm">Payroll Tax & Worker Misclassification: </strong>
                                 Use verified payroll platforms like Paychex or automated systems that handle filings and withholding in real time to ensure IRS compliance.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Multi-State Sales Tax Nexus: </strong>
                                 Track sales volume per state using cloud accounting software like QuickBooks Online to flag the exact moment you cross economic nexus thresholds.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Quarterly Deadlines & Estimated Payments: </strong>
                                QuickBooks Online software estimates your quarterly tax liabilities based on real-time income. You can then export these figures to schedule payments.  ADP MyTax can calculate what you owe and automatically remit timely payments on a schedule you choose.
                        </li>
                    </ul>   
                </ol>
            </div>
        </div>
        <div className="col-span-6 bg-[#CBCBCB] px-5 py-5 scroll-mt-24">
            <h3 className="text-3xl font-bold shadow-text">
                Customer Service
            </h3>
             <p className="text-xs">
                High-priority targets for improvement include fixing support responsiveness, eliminating repetition, reducing after-hours delays, and introducing self-service options.
            </p>
                <ol>
                    <h4 className="font-bold lg:text-lg shadow-text">High volume, Limited Staff</h4>
                    <ul className="list-disc text-xs list- pl-3 ">
                        <li className="pl-.5">
                            <strong className="text-sm">Chatbots, Interactive Voice Response  : </strong>
                                Answer FAQs, capture details, deflect tickets 24/7. Phone Interactive Voice Response (IVR) systems can route calls by topic, provide recorded answers to FAQs, and prioritize high-value customers, reducing wait times and misrouted calls.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Repetition Fatigue: </strong>
                                Use omnichannel helpdesks to unify all communications into a single, centralized dashboard. Solutions like Freshdesk give support reps a 360-degree view of previous interactions so customers never have to repeat themselves.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">"After-Hours" Silence: </strong>
                                Deploy basic AI-driven or rule-based chatbots to handle basic, routine inquiries and route after-hours requests. You can set up automation workflows via ManyChat or HubSpot to instantly acknowledge customer messages and set expectations for when a human will respond.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Self-Service Options: </strong>
                                Build a comprehensive Knowledge Base or FAQ page on your website. Use website builders like Squarespace or Shopify to embed these self-service portals directly into your checkout and contact pages.
                        </li>
                    </ul>
                </ol>
        </div>
        <div className="col-span-6 flex flex-col items-center justify-center py-5 bg-[#024059] scroll-mt-24">
            <FontAwesomeIcon
              icon={faBellConcierge}
                width={256}
                height={256}
                className="text-white mb-4"
            />
            <p className="text-white font-bold text-3xl leading-[0.95] shadow-text">Customer Service</p>
        </div>
        <div className="col-span-6 flex flex-col items-center justify-center py-5 bg-[#8C4E2A] scroll-mt-24">
            <FontAwesomeIcon
                icon={faFunnelDollar}
                width={256}
                height={256}
                className="text-white mb-4"
            />
            <p className="text-white font-bold text-3xl leading-[0.95] shadow-text">Marketing</p>

        </div>
        <div className="col-span-6 bg-[#CBCBCB] px-5 py-5 scroll-mt-24">
            <div>
                <h3 className="text-3xl font-bold shadow-text">
                    Marketing
                </h3>
                <p className="text-xs">
                    The most common small business AI marketing use cases combine automated content engines, 24/7 lead capture, and self-optimizing ad tools to drive revenue without manual maintenance.
                </p>
                <ol>
                    <h4 className="font-bold lg:text-lg shadow-text">The "Always-On" Lead Capture Pipeline</h4>
                    <ul className="list-disc text-xs list- pl-3 ">
                        <li className="pl-.5">
                            <strong className="text-sm">Conversational AI Bots: </strong>
                                Deploy AI platforms like Intercom or Drift to instantly interact with leads the moment they hit your pricing page.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Automate Lead Routing and Alerts: </strong>
                                Integrate automated distribution tools (like Chili Piper or RevenueHero) with your CRM to instantly assign leads based on territory, language, and capacity caps.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Real-Time Notifications: </strong>
                                 Set up triggers to alert sales reps immediately via SMS or messaging apps (e.g., Slack) the second an Ideal Customer Profile (ICP) lead fills out a form.
                        </li>
                    </ul>
                    <h4 className="font-bold lg:text-lg shadow-text">Prompt and Context Engineering</h4>
                    <ul className="list-disc text-xs list- pl-3 ">
                        <li className="pl-.5">
                            <strong className="text-sm">Reference Libraries": </strong>
                             Feed AI models strict style guides, glossaries, and examples of your best-performing, human-written content to prevent tone drifting.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Role-Based Directives: </strong>
                            Instead of asking an AI to "write a blog post," instruct it to act as an "industry-specific expert who relies on lived B2B experience".
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Review & Refine Workflows: </strong>
                             Train teams to use AI for initial brainstorming or data-gathering, but mandate that humans rewrite, edit, and fact-check the output to inject a distinct point of view.
                        </li>
                    </ul>
                    <h4 className="font-bold lg:text-lg shadow-text">Data Quality and Integration Issues</h4>
                    <ul className="list-disc text-xs list- pl-3 ">
                        <li className="pl-.5">
                            <strong className="text-sm">Automated RAG and Semantic Ingestion: </strong>
                                Programmatically tag internal files by author, target audience, and sensitivity level. The AI then filters its data pool based on who it is writing for.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Siloed and Decentralized Data: </strong>
                                Deploy self-contained Model Context Protocol (MCP) servers directly on top of individual departmental databases (e.g., separate servers for Sales, Marketing, and Accounting).
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Auto-Pruning Datasets: </strong>
                                Schedule automated data-cleaning scripts to remove outdated product specs or obsolete brand guidelines so the AI never references them.
                        </li>
                        <li className="pl-.5">
                            <strong className="text-sm">Data Quality Assessments: </strong>
                                Build automated validation scripts that scan decentralized data sources for completeness, accuracy, and formatting errors before the data is exposed to an LLM.
                        </li>
                    </ul>   
                </ol>
            </div>
        </div>
    </div>
    </article>

        </>
        )
}
// function departmentSectionId(departmentSlug: string): string {
//   return `use-cases-section-${departmentSlug}`;
// }

// function useCaseSectionId(departmentSlug: string, useCaseSlug: string): string {
//   return `use-case-section-${departmentSlug}-${useCaseSlug}`;
// }

// function departmentLinkId(departmentSlug: string, variant: "panel" | "title"): string {
//   return gtmLinkIdFromHref(`/use-cases/${departmentSlug}`, variant);
// }

// function useCaseLinkId(departmentSlug: string, useCaseSlug: string): string {
//   return gtmLinkIdFromHref(`/use-cases/${departmentSlug}/${useCaseSlug}`);
// }