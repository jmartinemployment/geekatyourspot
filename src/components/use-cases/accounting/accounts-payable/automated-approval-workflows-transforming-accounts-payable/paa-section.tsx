/**
 * Questions buyers ask about routing invoices for approval. The page builds its FAQPage
 * structured data from this same list, so the markup can never drift from what the page shows.
 */
export const APPROVAL_QUESTIONS = [
  {
    question: "What is an invoice approval workflow?",
    answer:
      "An invoice approval workflow is the set of rules that sends each invoice to the right people for sign-off before it is paid. Automation applies those rules on its own, so an invoice reaches its approver the day it arrives instead of waiting in an inbox.",
  },
  {
    question: "How does automated approval routing work?",
    answer:
      "The software reads each invoice's vendor, amount, department, and GL code, then sends it to the approver your rules name. An invoice that matches its purchase order can move straight through, and one over a set amount goes to a second approver.",
  },
  {
    question: "Who should approve vendor invoices?",
    answer:
      "The person accountable for the spend should approve it, usually the budget owner for the department that ordered the goods or services. Larger invoices often need a second sign-off from the owner or controller.",
  },
  {
    question: "What are approval thresholds?",
    answer:
      "Approval thresholds are dollar limits that decide how many approvers an invoice needs. For example, an invoice under one limit needs only the department head, while an invoice above it also needs the owner.",
  },
  {
    question: "What happens when an approver is out of the office?",
    answer:
      "Approval software lets each approver name a delegate, and it escalates an invoice that waits too long. A vacation then does not hold up a payment or cost an early payment discount.",
  },
  {
    question: "Can approvers sign off from a phone?",
    answer:
      "Yes. Approval tools such as Bill, Ramp, and ApprovalMax have mobile apps, so an approver can open the invoice, check it, and approve or reject it from a phone.",
  },
  {
    question: "How do approval workflows prevent fraud and duplicate payments?",
    answer:
      "Every invoice needs a named approver before it can be paid, and every decision is logged with who made it and when. Most tools also flag an invoice that repeats a vendor's invoice number or amount, so the same bill is not paid twice.",
  },
  {
    question: "Does it work with QuickBooks, Xero, or Sage?",
    answer:
      "Most of the approval tools on this page connect to QuickBooks Online and Xero, and some also connect to Sage. Which connections a tool offers varies, so we confirm the connector for your accounting system before setup.",
  },
  {
    question: "What must be configured before going live?",
    answer:
      "Before going live, you set the approval rules: who approves which vendors, departments, and amounts, the thresholds that add a second approver, the delegates for time off, and how long an invoice can wait before it escalates.",
  },
] as const;

export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            {APPROVAL_QUESTIONS.map(({ question, answer }) => (
              <div key={question}>
                <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
                <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                  {question}
                </h3>
                <p className="text-md text-white shadow-text pt-3">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
