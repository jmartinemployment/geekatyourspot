
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
              Is the connection secure?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Float uses the official Xero&nbsp;API&nbsp;with a secure,
              read-only connection. This means Float cannot change, add, or remove anything in your Xero account. You can
              disconnect at any time if needed.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What does Float import from Xero?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float imports bank accounts, credit cards, invoices, bills, repeating invoices and bills, draft invoices (if
              you choose), transactions, and journals. It does not import the overall budget, purchase orders, quotes, or
              tracking categories.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Float integrate with Xero?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Connecting Float to Xero is quick, taking about three minutes. Once connected, Float automatically imports
              your data every 24 hours.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How often does the data sync and what exactly gets pulled from my accounting system?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float syncs with your accounting platform every 24 hours. You can also manually sync anytime to update your
              forecast with recent changes. Each sync pulls the latest reconciled bank balances, invoices, bills, and bank
              transactions, ensuring your forecast is based on cleared data, not estimates.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Float handle security, permissions, and governance?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float uses role-based permissions to control access to your forecast. You can assign roles such as Admin,
              Editor, and Viewer to manage who can view, edit, or manage the forecast.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which banks does Float integrate with?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float doesn&#39;t connect directly to banks. Instead, it retrieves bank transaction data through your
              accounting platform, meaning it works with any bank your accounting software syncs with.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What software does Float connect with?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float connects with Xero, QuickBooks Online, and FreeAgent through a read-only, one-way API hook. This means
              Float can pull data from these accounting platforms but does not write back to them.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How often does it update?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float syncs data with your accounting platform every 24 hours. However, finance teams can also trigger
              manual, real-time refreshes during the business day to ensure the forecast reflects the most recent changes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why is my starting balance wrong?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float pulls its starting balance from the reconciled cash balance in your accounting software. If your books
              are not fully reconciled in Xero or QuickBooks Online, Float may assume that outstanding bills and invoices
              are unpaid, affecting the accuracy of the forecast.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do budgets work alongside actual transactions?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float evaluates each ledger line and uses the larger of the budgeted estimate or the actual transaction
              data. For instance, if you budget $15,000 for an expense but receive a $10,000 invoice, Float retains the
              $15,000 forecast. If the invoice is $18,000, Float updates the forecast to reflect the actual $18,000.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I import an existing budget from Excel?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Direct Excel budget uploads are not supported. However, you can copy and paste figures into Float using the
              &quot;Spreadsheet Input&quot; tab to quickly set up your model.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the &quot;Cash-Only&quot; design philosophy?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float models immediate liquid cash movements using the direct method. It starts from actual bank balances
              and excludes non-cash metrics, focusing on when real capital enters or leaves your bank accounts.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What forecasting timelines are available?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float offers dynamic forecasting horizons, including a 13-week operational view for short-term planning and
              a 36-month strategic rolling forecast for long-term planning.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How many &quot;what-if&quot; scenarios can I model?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float allows you to model up to 8 simultaneous scenario layers. This feature lets you track cash variance by
              adding scenarios like late payments or changes in headcount, without altering your ledger records.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Float support multi-entity consolidation?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Float supports multi-entity consolidation. You can combine the cash flows of multiple businesses into a
              single consolidated view while retaining individual entity breakdowns. This feature is useful for business
              groups and accountants managing multiple clients.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are the built-in collaboration controls?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Float includes role-based user permissions with three access levels: Admin, Editor, and Viewer. It also
              offers live commenting and inline @mention notifications on specific budget lines. This keeps internal cash
              decisions organized directly inside the forecast, reducing reliance on email chains.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
