import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Upflow revolutionizes the way small businesses handle automated accounts receivable by integrating
        seamlessly with existing systems and providing real-time insights. At the core of Upflow&#39;s
        functionality is its ability to build cash flow forecasts based on actual payment behaviors rather than
        assumptions. This is crucial for businesses that have experienced the frustration of inaccurate forecasts
        due to reliance on invoice due dates.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform uses billing cohort collection rates to project cash inflows. This means Upflow calculates
        what percentage of invoices are collected in the first, second, and third months, offering a realistic
        view of cash flow. The forecast updates automatically as your&nbsp;
        <GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;data syncs,
        eliminating the need for manual data entry and ensuring that financial decisions are based on the most
        current information available.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow&#39;s architecture is designed to integrate directly with ERP systems, allowing for a continuous
        flow of live receivables data. This integration ensures that forecasts are always current and that the
        accounts receivable process is streamlined. The platform&#39;s ability to connect with tools like Stripe
        and Chargebee further enhances its utility, enabling businesses to manage customer invoices and payments
        efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key feature of Upflow is its comprehensive dashboard, which combines&nbsp;
        <GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow forecasting</GlossaryLink>&nbsp;with
        accounts receivable management. This integration means that improvements in collections processes
        directly enhance forecast accuracy. For example, a more proactive approach to following up on overdue
        invoices not only speeds up cash collection but also refines future forecasts, making them more
        reliable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow also supports multi-channel collection reminders and customer segmentation, allowing businesses
        to tailor their collection strategies based on customer behavior and risk profiles. Automated workflows
        ensure that follow-ups are consistent and timely, reducing the chances of invoices becoming overdue. This
        level of automation not only saves time but also reduces the risk of human error, which can be costly in
        financial management.</p>
      <p className="text-md text-white shadow-text pt-3">
        By providing a real-time overview of accounts receivable, Upflow empowers finance teams to make informed
        decisions quickly. The platform&#39;s analytics tools offer insights into key metrics like Days Sales
        Outstanding (DSO) and Collection Effectiveness Index (CEI), enabling teams to track performance and
        adjust strategies as needed. This data-driven approach is essential for maintaining healthy cash flow and
        reducing financial risks.</p>
      <p className="text-md text-white shadow-text pt-3">
        In essence, Upflow transforms the traditional accounts receivable process into a more efficient,
        automated system. By leveraging real payment data and integrating seamlessly with existing tools, it
        helps businesses in Miami-Dade, Broward, and West Palm Beach counties optimize their cash flow
        forecasting and accounts receivable management. This not only enhances financial stability but also
        supports strategic growth initiatives.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-upflow-works-the-mechanics-behind-automated-accounts-receivable">
                How Upflow Works: The Mechanics Behind Automated Accounts Receivable
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-upflow-works-the-mechanics-behind-automated-accounts-receivable">
                How Upflow Works: The Mechanics Behind Automated Accounts Receivable
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
