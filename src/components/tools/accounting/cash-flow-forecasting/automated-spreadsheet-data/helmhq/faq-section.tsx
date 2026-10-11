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
              What cloud accounting ledgers does Helm support?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Helm connects via direct&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;integrations with QuickBooks
              Online, Xero, and Sage Accounting. This allows for seamless data synchronization and easy management of your
              financial information.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How often does Helm refresh my numbers?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Helm automatically runs an absolute data sync with your connected ledger every night. Users can also
              manually push a real-time refresh button during the day if they’ve just edited invoices or added
              transactions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Helm manage multi-currency entities?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Helm dynamically pulls multiple currencies, applying prevailing exchange rates so multi-national or
              multi-branch operators can get unified dashboard reporting.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What makes Helm different from other forecasting tools?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Most applications display data as horizontal lines of text. Helm uses an entirely visual, drag-and-drop
              timeline interface. It transforms dry entries into movable graphic items that non-financial users can easily
              understand.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I pay vendors directly from Helm?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Thanks to a strategic partnership integration with Veem, users can organize their bills, drag them onto
              target settlement dates inside the forecast, and execute the actual cash payouts directly from Helm&#39;s
              payables workspace.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does dragging an item inside Helm alter my real accounting books?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. Adjusting transaction dates or altering timelines inside Helm only modifies the visual forecast layers.
              Your live QuickBooks, Xero, or Sage files remain untouched.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What forecasting horizons are available?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Helm supports localized 1-month, 3-month, 6-month, and 1-year forecasting views out of the box. This
              flexibility allows businesses to plan effectively for both short-term and long-term financial goals.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Helm predict when customers will actually pay?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Helm bypasses static due dates by calculating an Average Days Receivable (ADR) and Average Days Payable
              (ADP) behavioral metric for every individual client and vendor. It automatically projects payments based on
              historical transaction habits.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the &quot;Helm Health Score&quot;?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The &quot;Helm Health Score&quot; is a color-coded percentage metric displayed right on the dashboard. A
              score over 70% indicates strong cash positioning, giving advisors and small businesses a clear health
              indicator at a glance.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can firms use Helm for multiple clients?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Helm features a centralized partner dashboard built explicitly for accounting professionals and
              fractional CFOs to manage all of their client company profiles under a single master secure log-in.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
