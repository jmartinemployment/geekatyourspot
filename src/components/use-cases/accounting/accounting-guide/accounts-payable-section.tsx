import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function AccountsPayableSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        <GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">Accounts
        payable</GlossaryLink> is where most manual work hides, and four of the five failure points live
        there. Modern payables automation splits the work into four stages, and each stage has tools built for
        it. Our <Link id="use-cases-accounting-accounts-payable-p-ap" href="/use-cases/accounting/accounts-payable/automated-accounts-payable" className="text-[#0B162A] hover:underline">Accounts
        Payable</Link> guide covers the whole function in depth.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Capture: Ending the Manual Friction Trap
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Capture tools read invoices and receipts so nobody has to type them. <Link id="use-cases-accounting-accounts-payable-dext" href="/tools/accounting/accounts-payable/automated-data-entry-processing/dext" className="text-[#0B162A] hover:underline">Dext</Link> pulls
        data from receipts, bills, and invoices and categorizes it before it reaches the ledger. <Link id="use-cases-accounting-accounts-payable-avid-de" href="/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange" className="text-[#0B162A] hover:underline">AvidXchange</Link> extracts,
        matches, and routes invoice data and connects to your existing accounting system. <Link id="use-cases-accounting-accounts-payable-bill-de" href="/tools/accounting/accounts-payable/automated-data-entry-processing/bill" className="text-[#0B162A] hover:underline">Bill</Link> codes
        invoices with AI and passes them into approval workflows you configure. Each document is stored with
        the entry it created, so an auditor can see the source behind every expense. Our <Link id="use-cases-accounting-accounts-payable-p-de" href="/use-cases/accounting/accounts-payable/automated-data-entry-processing" className="text-[#0B162A] hover:underline">Intelligent
        Data Entry &amp; Processing</Link> guide compares them in detail.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Approve: Clearing the Approval Bottleneck
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Approval tools route each bill to the right person and record every decision. <Link id="use-cases-accounting-accounts-payable-approvalmax" href="/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax" className="text-[#0B162A] hover:underline">ApprovalMax</Link> builds
        approval paths with several steps for businesses on Xero and QuickBooks Online. <Link id="use-cases-accounting-accounts-payable-stampli" href="/tools/accounting/accounts-payable/automated-approval-workflows/stampli" className="text-[#0B162A] hover:underline">Stampli</Link> keeps
        the conversation about each invoice attached to the invoice itself, so questions and answers become
        part of the record. <Link id="use-cases-accounting-accounts-payable-bill-ap" href="/tools/accounting/accounts-payable/automated-approval-workflows/bill" className="text-[#0B162A] hover:underline">Bill</Link>, <Link id="use-cases-accounting-accounts-payable-melio-ap" href="/tools/accounting/accounts-payable/automated-approval-workflows/melio" className="text-[#0B162A] hover:underline">Melio</Link>,
        and <Link id="use-cases-accounting-accounts-payable-ramp-ap" href="/tools/accounting/accounts-payable/automated-approval-workflows/ramp" className="text-[#0B162A] hover:underline">Ramp</Link> let
        approvers act from a phone, so an owner on a job site in Doral or at a client meeting in Boca Raton no
        longer holds up the queue. Our <Link id="use-cases-accounting-accounts-payable-p-appr" href="/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable" className="text-[#0B162A] hover:underline">Intelligent
        Approval Workflows</Link> guide explains how to set the rules.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Pay: Scheduling Payments Without the Scramble
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Payment tools send money on the right date by the right method and record it in the ledger
        automatically. <Link id="use-cases-accounting-accounts-payable-bill-pay" href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill" className="text-[#0B162A] hover:underline">Bill</Link>, <Link id="use-cases-accounting-accounts-payable-melio-pay" href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio" className="text-[#0B162A] hover:underline">Melio</Link>,
        and <Link id="use-cases-accounting-accounts-payable-ramp-pay" href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp" className="text-[#0B162A] hover:underline">Ramp</Link> handle
        ACH transfers, checks, and card payments for small businesses. <Link id="use-cases-accounting-accounts-payable-avid-pay" href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange" className="text-[#0B162A] hover:underline">AvidXchange</Link> serves
        businesses with higher invoice volumes, and <Link id="use-cases-accounting-accounts-payable-tipalti-pay" href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti" className="text-[#0B162A] hover:underline">Tipalti</Link> adds
        supplier onboarding and tax form collection, including <strong>W-9</strong> forms, for businesses that
        pay many vendors or contractors. Scheduled payments protect <strong>early payment discounts</strong> and
        avoid late fees. The <Link id="use-cases-accounting-accounts-payable-p-pay" href="/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai" className="text-[#0B162A] hover:underline">Intelligent
        Payment Execution</Link> guide covers the details.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Protect: Catching the Leak and the Fraud
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Protection tools look for the patterns people miss. <Link id="use-cases-accounting-accounts-payable-medius" href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius" className="text-[#0B162A] hover:underline">Medius</Link> uses
        AI to flag duplicate invoices and suspicious payment activity before money leaves the account. <Link id="use-cases-accounting-accounts-payable-tipalti-fraud" href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti" className="text-[#0B162A] hover:underline">Tipalti</Link> validates
        supplier details and applies payment controls across your vendor list. <Link id="use-cases-accounting-accounts-payable-bill-fraud" href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill" className="text-[#0B162A] hover:underline">Bill</Link> checks
        for duplicate invoices as bills come in. Paired with a simple rule that any change to a vendor’s bank
        details requires a phone call to a known number, these tools close the door that email fraud depends
        on. Read <Link id="use-cases-accounting-accounts-payable-p-fraud" href="/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs" className="text-[#0B162A] hover:underline">Intelligent
        Fraud &amp; Duplicate Payment Controls</Link> for the full set of controls.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="accounts-payable-capture-approve-pay-and-protect" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Accounts Payable: Capture, Approve, Pay, and Protect
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="accounts-payable-capture-approve-pay-and-protect" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Accounts Payable: Capture, Approve, Pay, and Protect
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
