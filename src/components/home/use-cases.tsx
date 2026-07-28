import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFunnelDollar,
    faBellConcierge,
    faTag,
    faUsersBetweenLines,
    faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
//
//   interface UseCasesSectionProps {
//     items: BlogPost[];
//   }
//{ items }: UseCasesSectionProps
export function UseCasesSection() {

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
                                <Link id="home-use-cases-accounting-automated-accounts-payable"
                                    href="/use-cases/accounting/accounts-payable/automated-accounts-payable"
                                    className="hover:opacity-90 transition-opacity">
                                    <h4 className="font-bold lg:text-lg shadow-text">Automated Accounts Payable</h4>
                                </Link>
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
                                <Link
                                    id=""
                                    href="/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting"
                                    className="hover:opacity-90 transition-opacity">
                                    <h4 className="font-bold lg:text-lg shadow-text">Cash Flow Forecasting</h4>
                                </Link>
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
                                <h4 className="font-bold lg:text-lg shadow-text">Tax Compliance & Regulations</h4>
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
                                AI Marketing Workflow
                            </h3>
                            <p className="text-xs shadow-text"><strong>Palm Beach & Broward Counties</strong></p>
                            <p className="text-xs shadow-text">
                                South Florida small-business owners who want practical AI to save time, improve lead follow-up, and make marketing more consistent.
                                </p>
                            <ol>
                                <h4 className="font-bold lg:text-lg shadow-text">AI Content Creation and Repurposing for Small Businesses</h4>
                                <ul className="list-disc text-sm list- pl-3 ">
                                    <li className="pl-.5">
                                        <strong className="">AI Content Creation: </strong>
                                        AI Marketing Content Workflow
                                        is a repeatable system for turning ideas, customer questions, and source material into publishable marketing assets with AI, then repurposing them across channels. The most effective workflows use AI for brainstorming, drafting, repurposing, and scheduling rather than treating it as a one-off writing tool.  Top AI Content Creation Tools: Jasper, ChatGPT, Claude.
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm">AI Content Repurposing: </strong>
                                        AI content repurposing strategies are about turning one strong asset into multiple channel-specific pieces, like blog posts into social captions, email sequences, video scripts, or summaries. The most effective strategies start with high-performing evergreen content, then adapt it for different formats while keeping the core message consistent.
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm">Bulk Social Media Scheduling: </strong>
                                        AI tools write a month of platform-specific posts, hashtags, and captions in minutes.  Top AI Bulk Social Media Scheduling Tools: Buffer, Hootsuite, SocialBee, or CoSchedule.
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm">SEO Blog and Article Generation: </strong>
                                        AI-powered SEO blog and article generation automates keyword research, content brief creation, long-form drafting, and on-page optimization.  Top AI Blog & Article Generator Tools: Surfer SEO, ChatGPT / Claude, Frase, HubSpot AI, or Keyword Insights.
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm">Personalized Email Campaigns: </strong>
                                        AI tailors subject lines and body copy for different audience segments at the same time.  Top AI Email Campaign Tools: Klaviyo, Mailchimp, HubSpot Marketing Hub, Twilio SendGrid, or Copy.ai.
                                    </li>
                                    <ul>
                                        <li>
                                        </li>
                                    </ul>
                                </ul>
                                <Link
                                    id={gtmLinkIdFromHref("/use-cases/marketing/intelligent-lead-capture-pipeline", "Lead Capture Pipeline")}
                                    href="/use-cases/marketing/intelligent-lead-capture-pipeline"
                                    className="hover:opacity-90 transition-opacity" >
                                    <h4 className="font-bold lg:text-lg shadow-text">Lead Capture Pipeline</h4>
                                </Link>
                                <ul className="list-disc text-xs list- pl-3 ">
                                    <li className="pl-.5">
                                        <strong className="text-sm">Smart Chatbots: </strong>
                                        Marketing teams use smart AI chatbots to run campaigns around the clock, sort and qualify leads, deliver personal product tips, and recover lost sales.  Top AI Chatbot Tools: Intercom, Tidio, or HubSpot.
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm">Lead Scoring: </strong>
                                        AI lead scoring replaces static, manual point systems with dynamic machine learning models. It analyzes historical conversions, real-time intent, and firmographics to rank prospects by purchase readiness. Top AI Lead Tools: HubSpot, Salesforce Einstein, 6sense, Clay, or MadKudu.
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm">Voice Assistants: </strong>
                                        <ul>
                                            <li>
                                                24/7 marketing, or "always-on" marketing, uses digital automation to engage customers around the clock. By running continuous systems rather than isolated campaigns, businesses achieve an average ROI of $5.44 for every $1 spent, driving higher lead volumes and non-stop global reach.  Top AI Voice Tools: Retell AI, Bland AI, Synthflow AI, PolyAI, or ElevenLabs Conversational AI.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <h4 className="font-bold lg:text-lg shadow-text">Ad Spend Optimization</h4>
                                <ul className="list-disc text-xs list- pl-3 ">
                                    <li className="pl-.5">
                                        <strong className="text-sm">Dynamic Creative Optimization: </strong>
                                        AI tests variations of ad copy, imagery, and video angles to identify which combinations drive the lowest cost-per-lead.  Top AI Dynamic Creative Optimization Tools: Meta Advantage+ , Omneky,  Smartly.io, AdCreative.ai or Jasper.
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm">Automated Rules & Bidding: </strong>
                                        Autonomous scripts adjust bidding caps and pause ad fatigue instances instantly without requiring manual oversight.  Top AI Automated Bidding Tools: Google Ads Smart Bidding, HubSpot, Salesforce Einstein, or Basis Technologies.
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm">Real-Time Budget Reallocation: </strong>
                                        Continuously monitor campaign performance across channels, automatically pulling funds from underperforming ad sets and shifting them to high-converting lead campaigns.  Top AI Real-Time Budget Reallocation Tools: Madgicx, Adobe Mix Modeler, Optimove, or Tableau AI / Adobe Analytics.
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm">Data Quality Assessments: </strong>
                                        Build automated validation scripts that scan decentralized data sources for completeness, accuracy, and formatting errors before the data is exposed to an LLM.  Top AI Data Quality Tools: Monte Carlo, Anomalo, Great Expectations, or Qualytics.
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


