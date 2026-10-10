import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward, and West Palm Beach counties, choosing the right automated
        accounts receivable solution can be challenging. Invoiced stands out by offering a comprehensive platform
        that automates the entire invoice-to-cash process. It integrates seamlessly with popular accounting systems
        like QuickBooks and NetSuite, ensuring real-time data synchronization and reducing manual data entry. This
        capability is crucial for businesses looking to streamline operations and improve cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced&#39;s&nbsp;<GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>-driven
        features, such as CashMatch AI and Smart Chasing, provide a significant edge. These tools automate payment
        matching and follow-up processes, reducing the days sales outstanding (DSO) by an average of 14 days. This
        improvement in cash flow management is particularly beneficial for businesses that struggle with delayed
        payments and high DSO.</p>
      <p className="text-md text-white shadow-text pt-3">
        Compared to other solutions, Invoiced offers a user-friendly interface and powerful reporting capabilities.
        With over 30 pre-built reports and the ability to create custom reports, businesses can gain insights into
        their accounts receivable performance. This functionality allows for better financial decision-making and
        forecasting, which is essential for small businesses aiming to optimize their financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        While other platforms may require extensive customization and professional services to implement changes,
        Invoiced is designed for ease of use. Businesses can make workflow changes and updates directly without
        involving IT departments or incurring additional costs. This flexibility is a significant advantage for
        small businesses with limited resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        In terms of pricing, Invoiced provides transparent subscription plans without the need for lengthy
        negotiations. This straightforward approach allows businesses to model their return on investment easily,
        making it a practical choice for those looking to implement an automated accounts receivable system quickly
        and efficiently.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-invoiced-compares-to-other-automated-accounts-receivable-solutions">
                How Invoiced Compares to Other Automated Accounts Receivable Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-invoiced-compares-to-other-automated-accounts-receivable-solutions">
                How Invoiced Compares to Other Automated Accounts Receivable Solutions
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
