import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced automates the automated accounts receivable process from start to finish, streamlining each step to
        save time and reduce errors. The platform begins by generating invoices automatically based on predefined
        schedules or specific triggers. This ensures timely billing and minimizes the administrative burden on your
        finance team. Once invoices are created, they are sent via email, portal, or mail, depending on the
        client&#39;s preference.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step involves payment collection. Invoiced supports a wide range of payment methods, including ACH,
        credit cards, and SEPA, providing flexibility to cater to various client preferences. Payments are processed
        on schedule, and the system automatically matches them to open invoices using
        CashMatch&nbsp;<GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>, which
        reads payment details and applies them accurately.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced&#39;s Smart Chasing feature then takes over, running AI-driven collections sequences to follow up
        on unpaid invoices. This reduces the time spent manually chasing payments and increases the rate of on-time
        collections. The platform also allows for the configuration of dunning cadences, ensuring that follow-ups
        are timely and appropriate for each customer segment.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final step in the process is reconciliation. Invoiced automatically syncs payment and invoice data back
        to the&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;in
        real-time, maintaining accurate financial records and providing real-time visibility into outstanding
        invoices and cash inflows. This seamless integration with existing systems ensures that your finance team
        can focus on strategic tasks rather than data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the process, Invoiced provides real-time analytics and reporting capabilities, offering insights
        into collections performance, payment trends, and cash flow forecasts. With these tools, businesses can make
        informed decisions and optimize their accounts receivable operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-invoiced-works-step-by-step-process">
                How Invoiced Works: Step-by-Step Process
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-invoiced-works-step-by-step-process">
                How Invoiced Works: Step-by-Step Process
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
