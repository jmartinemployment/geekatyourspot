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
              Which accounting platforms does Cash Flow Frog support?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Cash Flow Frog connects to eight platforms: QuickBooks Online, QuickBooks Desktop, Xero, Sage Intacct, Zoho
              Books, FreshBooks, Odoo, and direct bank feeds via Plaid. This broad compatibility ensures that whatever
              your business runs on, it is covered.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What if I don&#39;t use cloud accounting software?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              You can manually import your bank transactions or historical ledgers via Excel or CSV files to generate an
              automated model without software. This flexibility allows you to build a forecast from your real bank
              history, regardless of your current accounting setup.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How often does the data synchronize?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Cash Flow Frog runs an automated sync daily, ensuring your forecasts are always up-to-date. Additionally,
              users can pull real-time, on-demand updates immediately after modifying items in their ledger, keeping your
              data current.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is the integration read-only?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, the integration is read-only. This means that adjusting transaction deadlines, editing expected values,
              or launching alternative experiments inside the app will never change or disrupt your primary accounting
              ledger.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it sort cash metrics by internal company tags?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Cash Flow Frog natively supports sorting by QuickBooks Classes, locations, departments, customers,
              vendors, and projects. This prevents mixed reporting when a company has multiple arms or offices, allowing
              for detailed and organized cash flow analysis.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How long are the forecast timelines?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Cash Flow Frog maps a live, rolling 36-month operational horizon. Users can toggle the resolution
              dynamically between daily, weekly, monthly, and quarterly views depending on how immediate their cash needs
              are, providing flexibility and detailed insights.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I download or share reports?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, you can generate presentation-ready, branded financial reports and export them as PDF, Excel (.xlsx),
              or CSV files with a single click. This feature makes it easy to share insights with your team or clients.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I connect external AI tools to Cash Flow Frog?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Cash Flow Frog supports MCP (Model Context Protocol), allowing users to link the app directly
              to&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;tools like Claude, ChatGPT, Microsoft Copilot, or
              Gemini. This integration enables you to interact with your forecasts through plain conversation.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the AI interface work?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Cashflowfrog allows you to manage your cash flow by talking to AI. You can connect AI agents like Claude,
              ChatGPT, Copilot, or Gemini to work with your forecast through plain conversation. Ask questions or run
              scenarios, and your cash flow forecast updates instantly as you chat. This means you can make adjustments
              and see the changes reflected in real-time, all within the same platform.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is my data secure?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Cashflowfrog ensures your data is secure. The platform is ISO 27001 certified and fully GDPR compliant.
              It encrypts data both at rest and in transit and requires two-factor authentication (2FA) for added
              security. This comprehensive approach to data protection means you can trust that your financial information
              is handled safely.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does it handle multi-currency operations?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Cashflowfrog natively supports multi-currency operations. It allows you to consolidate different
              entities across various countries by pulling individual currency tags and applying consolidated exchange
              rates into your primary base currency. This feature simplifies managing cash flow for businesses operating
              in multiple currencies.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is there a free trial?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Cashflowfrog offers a 14-day free trial with no credit card required. This trial includes one-on-one
              onboarding and is backed by a 30-day money-back guarantee on paid plans, giving you ample time to evaluate
              the platform and ensure it meets your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
