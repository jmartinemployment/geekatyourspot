import Image from "next/image";

export default function OverviewSection() {
    const title = "Automated Accounts Payable";
    const heroSummary = "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy."
    const heroImage =""; 


  return (
    <>
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/accounting/use-cases/accounts-payable/Transforming-Financial-Operations-Automated-Accounts-Payable.avif"
                alt="Introduction to Automated Accounts Payable" />
          </div>
          <div className="col-span-7">
            <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
              Transforming Financial Operations with Automated Accounts Payable
            </h2>
              <p className="text-md text-white shadow-text">
                In the bustling world of corporate finance, the accounts payable department often resembles a well-oiled machine,
                tirelessly processing invoices, scrutinizing spreadsheets, and balancing budgets. Yet, beneath this veneer of
                efficiency lies a complex web of manual processes and potential bottlenecks. Enter automated accounts payable
                systems, digital innovations poised to revolutionize financial operations by enhancing accuracy, reducing human
                error, and accelerating workflow.
              </p>
              <p className="pt-3 text-md font-normal text-white shadow-text">
                Imagine a scenario where invoices are automatically captured, verified, and approved within minutes, freeing up
                  valuable time for finance professionals to focus on strategic decision-making rather than routine paperwork.
                  Automated accounts payable solutions offer this promise by integrating advanced technologies such as artificial
                  intelligence and machine learning, transforming what was once a labor-intensive task into a streamlined, efficient
                  process. As businesses increasingly seek to optimize their financial operations, understanding the intricacies and
                  benefits of these automated systems becomes imperative.
              </p>
          </div>
          </div> 
        </div>
    </section>
    </>
  );
}
