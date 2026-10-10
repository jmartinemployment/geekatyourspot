import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Upflow revolutionizes how businesses handle accounts receivable by removing inefficiencies and automating
        routine tasks. This transformation allows finance teams to focus on strategic initiatives rather than manual
        follow-ups and data entry, ultimately saving time and reducing errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key benefits of Upflow is its ability to automate the entire collections process. By setting up
        automated reminder sequences, businesses can ensure that invoices are followed up on promptly, without the
        need for manual intervention. This not only speeds up collections but also reduces the workload on finance
        teams, allowing them to allocate their time to more strategic tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow also provides real-time analytics and dashboards that offer insights into the performance of
        collections efforts. This transparency enables finance teams to make data-driven decisions, improving cash
        flow and reducing Days Sales Outstanding (DSO). With Upflow, businesses can track the effectiveness of their
        collections strategies and adjust them as needed to optimize performance.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with existing&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems ensures that
        Upflow&#39;s forecasts are always based on the most current data. This eliminates the need for manual data
        entry and ensures that forecasts reflect the true state of receivables. As a result, businesses can avoid
        the pitfalls of outdated information and make more accurate financial plans.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, Upflow&#39;s platform supports customer segmentation, allowing businesses to tailor their
        collections strategies to different client types. High-value clients can be prioritized, ensuring that
        critical payments are received on time. This targeted approach not only improves cash flow but also enhances
        customer relationships by providing a more personalized experience.</p>
      <p className="text-md text-white shadow-text pt-3">
        By automating routine tasks and providing actionable insights, Upflow frees up valuable resources within
        finance teams. This enables businesses to focus on growth and strategic planning, rather than being bogged
        down by the minutiae of collections management. The result is a more efficient and effective accounts
        receivable process that supports business objectives and enhances financial stability.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-upflow-transforms-automated-accounts-receivable-management">
                How Upflow Transforms Automated Accounts Receivable Management
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-upflow-transforms-automated-accounts-receivable-management">
                How Upflow Transforms Automated Accounts Receivable Management
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
