import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced transforms the automated accounts receivable process by automating tasks that traditionally require
        significant manual effort. With Invoiced, the entire invoice-to-cash cycle becomes a seamless operation,
        reducing the need for staff to engage in repetitive tasks and allowing them to focus on more strategic
        initiatives.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key advantages of Invoiced is its ability to automate invoice generation and distribution.
        Businesses no longer need to manually create invoices or worry about sending them on time. Invoiced handles
        this automatically, ensuring that invoices are sent promptly and accurately. This not only saves time but
        also minimizes the risk of errors that can occur with manual handling.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced also enhances the follow-up process by automating collections sequences. Instead of staff writing
        individual emails to chase payments, Invoiced uses&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>-driven
        collections sequences to follow up on unpaid invoices. This ensures timely reminders and reduces the time
        spent on manual follow-ups, leading to faster payment collections and improved cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform&#39;s AI capabilities extend to payment matching, where Invoiced automatically reconciles
        incoming payments with outstanding invoices. This eliminates the need for manual reconciliation, reducing
        the likelihood of errors and freeing up staff to concentrate on more value-added activities. By automating
        this process, businesses can accelerate their month-end financial close and have a clearer view of their
        cash flow.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Invoiced by Flywire has you covered — you can automate your entire invoice-to-cash lifecycle to get
        paid more quickly, slashing days sales outstanding and boosting your collection effectiveness index while
        reducing the time and cost associated with cash application and automated reconciliation.&quot;&nbsp;
        <a id="tools-accounting-accounts-receivable-invoiced-transforms-source"
          href="https://www.invoiced.com/solutions/use-cases/invoiced-to-cash"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Invoiced
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced&#39;s comprehensive automation of the accounts receivable process not only improves efficiency but
        also enhances decision-making. With real-time insights and accurate forecasting, businesses can make
        informed financial decisions that support growth and stability. This transformation allows small businesses
        to operate more effectively, reducing the administrative burden and positioning them for long-term success.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-invoiced-transforms-automated-accounts-receivable">
                How Invoiced Transforms Automated Accounts Receivable
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-invoiced-transforms-automated-accounts-receivable">
                How Invoiced Transforms Automated Accounts Receivable
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
