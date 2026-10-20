import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What accounting systems does Dryrun integrate with?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Dryrun integrates seamlessly with leading mid-market ERPs and accounting systems, including NetSuite, Sage
              Intacct, Microsoft Dynamics 365 Business Central, and QuickBooks Online.
              Automated&nbsp;API&nbsp;syncs continuously pull live bank balances,
              open invoices, and vendor bills directly into Dryrun, eliminating manual copy-paste errors and static export
              routines.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does it handle complex corporate structures?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Dryrun is specifically engineered to manage complex, multi-entity corporate structures, multi-unit
              operations, and project-based cash flows. It allows finance teams to maintain detailed, segment-level
              tracking for individual projects, locations, or subsidiaries, while automatically aggregating data into a
              consolidated, real-time corporate roll-up.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it manage multi-currency operations?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Dryrun simplifies international financial management through automated multi-currency forecasting and
              multi-entity consolidation. Live exchange rate feeds automatically convert international transaction data
              into a unified base currency, providing an up-to-the-minute, consolidated view of group-wide liquidity
              across international subsidiaries.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What makes Dryrun different from &quot;black-box&quot; AI forecasting tools?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Dryrun combines automated&nbsp;ERP&nbsp;data syncing with complete
              manual override control, allowing finance teams to manually tweak transactional details, adjust individual
              due dates, or add custom cash injections without altering the underlying ledger records. This
              human-in-the-loop capability eliminates the rigid constraints of &quot;black
              box&quot;&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;tools.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I sync it with a CRM?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Dryrun can sync with CRMs like&nbsp;<Link id="tools-accounting-spreadsheet-data-dryrun-faq-pipedrive" href="/tools/marketing/pipedrive" className="text-[#C83803] hover:underline">Pipedrive</Link>. This allows users to layer unclosed deals over their live
              ledger data to see cash outcomes before deals close, providing a forward-looking view that goes beyond
              traditional accounting entries.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What forecasting horizons does it provide?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Dryrun features a dual-timeline framework, mapping hyper-granular, 13-week short-term operational views
              side-by-side with long-term, multi-year strategic budgeting models. This setup helps track both immediate
              survival and future expansion.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do the &quot;what-if&quot; scenarios display?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Dryrun allows finance teams to layer unlimited simultaneous scenarios on a single graphic timeline. Users
              can easily toggle separate models to see visual variance analysis graphs instantly, helping them evaluate
              potential risks and strategic opportunities in real time.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does it display overdue invoices?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Past-due invoices are highlighted in bright red, visibly calculating exactly how many days late an entry is.
              This feature helps teams see the precise point where late payments trigger shortfalls, allowing for
              proactive cash flow management.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Dryrun support multi-user collaboration?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Dryrun is designed to support multi-user collaboration. It provides a cloud-based, centralized platform
              that acts as a single source of truth for financial planning. With enterprise role-based access control,
              finance leaders, department heads, and operational managers can review budgets, contribute assumptions, and
              model scenarios according to their permissions. This setup fosters collaboration across departments,
              allowing teams to work together seamlessly during executive reviews and board meetings.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Are the reports presentation-ready?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Dryrun offers executive-ready visual reporting that is designed to be presentation-ready. It transforms
              complex financial data into clear, visual reports that bridge the communication gap between finance teams
              and executive leadership. With features like variable zoom capabilities, users can easily switch from
              high-level overviews to detailed transaction line items, ensuring clarity without clutter. This allows
              finance leaders to enter meetings prepared to answer dynamic questions and make strategic decisions
              efficiently.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
