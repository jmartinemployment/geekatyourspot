import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TamingTheBeastSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Imagine Sarah, a finance manager at a mid-sized retail company. Every month, she watches her
        accounts payable team slog through a mountain of invoices, each one a potential error waiting to
        happen. The process is slow, tedious, and fraught with human error. These manual tasks consume
        valuable hours that could be better spent on strategic activities. The frustration is palpable as
        delays in invoice processing ripple through the organization, affecting cash flow and vendor
        relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where <GlossaryLink slug="accounts-payable">Accounts Payable</GlossaryLink>: Automated Data
        Entry &amp; Processing comes in. By automating these repetitive tasks, businesses can drastically cut
        down on errors, speed up processing times, and free their teams to focus on higher-value work.
        Automated solutions like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-taming-dext"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/dext" className="text-[#C83803] hover:underline">
          Dext
        </Link>,&nbsp;
        Lightyear, and&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-taming-bill"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/bill" className="text-[#C83803] hover:underline">
          Bill
        </Link>&nbsp;transform the way companies handle invoices, turning what was once a cumbersome process
        into a streamlined operation. These tools ensure data accuracy, reduce manual entry errors, and
        provide real-time visibility into financial workflows, enabling businesses to operate more
        efficiently and effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pain points in traditional accounts payable processes are all too familiar. Delays, errors, and
        inefficiencies not only cost time but also money. Manual data entry often results in
        misclassification and VAT errors, leading to hours of avoidable rework each week. Businesses
        struggle with limited real-time visibility, making it challenging to manage cash flow and vendor
        relationships effectively. These issues are compounded by the high risk of human error, which can
        have significant financial implications.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated data entry and processing solutions address these challenges head-on. By integrating&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;into accounts payable workflows, companies can achieve
        over 99% accuracy in data capture, as evident with tools like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-taming-avidxchange"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange" className="text-[#C83803] hover:underline">
          AvidXchange
        </Link>&nbsp;and&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-taming-stampli"
          href="/tools/accounting/accounts-payable/automated-approval-workflows/stampli" className="text-[#C83803] hover:underline">
          Stampli
        </Link>. These platforms automate the extraction, validation, and processing of invoices,
        drastically reducing the time spent on manual tasks. The result is a more efficient, accurate, and
        transparent accounts payable process that supports better decision-making and strengthens supplier
        relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>Geek At Your Spot</strong> specializes in implementing these AI-driven solutions, helping
        businesses navigate the complexities of automation. With our expertise, companies can align their
        business objectives with the right technology, ensuring a successful transition to automated
        workflows. Our approach focuses on minimizing disruptions while maximizing the benefits of
        automation, ultimately leading to cost savings, faster processing times, and improved accuracy in
        financial operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="taming-the-accounts-payable-beast" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Taming the Accounts Payable Beast
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="taming-the-accounts-payable-beast" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Taming the Accounts Payable Beast
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
