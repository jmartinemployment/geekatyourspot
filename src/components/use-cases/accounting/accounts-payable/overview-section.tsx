import Image from "next/image";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-base font-normal text-white shadow-text">
        In the bustling world of corporate finance, the <GlossaryLink slug="accounts-payable" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">accounts payable</GlossaryLink> department often resembles a well-oiled machine,
        tirelessly processing invoices, scrutinizing spreadsheets, and balancing budgets. Yet, beneath this veneer of
        efficiency lies a complex web of manual processes and potential bottlenecks. Enter automated accounts payable
        systems, digital innovations poised to revolutionize financial operations by enhancing accuracy, reducing human
        error, and accelerating workflow.
      </p>
      <p className="pt-3 text-base font-normal text-white shadow-text">
        Imagine a scenario where invoices are automatically captured, verified, and approved within minutes, freeing up
        valuable time for finance professionals to focus on strategic decision-making rather than routine paperwork.
        Automated accounts payable solutions offer this promise by integrating advanced technologies such as artificial
        intelligence and <GlossaryLink slug="machine-learning" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">machine learning</GlossaryLink>, transforming what was once a labor-intensive task into a streamlined, efficient
        process. As businesses increasingly seek to optimize their financial operations, understanding the intricacies and
        benefits of these automated systems becomes imperative.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="211"
                height="211"
                src="/images/accounting/use-cases/accounts-payable/Transforming-Financial-Operations-Automated-Accounts-Payable.avif"
                alt="A finance professional approves an invoice on a tablet in front of a wall screen showing an automated accounts payable dashboard." />
            </div>
            <div className="col-span-7">
              <h2 id="transforming-financial-operations-with-automated-accounts-payable" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Financial Operations with Automated Accounts Payable
              </h2>
            </div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/accounting/use-cases/accounts-payable/Transforming-Financial-Operations-Automated-Accounts-Payable.avif"
                alt="A finance professional approves an invoice on a tablet in front of a wall screen showing an automated accounts payable dashboard." />
            </div>
            <div className="col-span-7">
              <h2 id="transforming-financial-operations-with-automated-accounts-payable-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Transforming Financial Operations with Automated Accounts Payable
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
