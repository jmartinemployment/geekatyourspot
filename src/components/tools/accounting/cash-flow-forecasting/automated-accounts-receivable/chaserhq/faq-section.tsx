import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How long does it take to improve your accounts receivable process?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              You can see measurable progress in 90 days with a focused plan. The process unfolds in three phases: assess
              and stabilize in the first 30 days, automate and optimize in the next 30, and scale and succeed in the final
              30. Most teams reduce their Days Sales Outstanding (DSO) by 15–20% within this timeframe.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the first step to reducing late payments?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Begin by auditing your current process and cleaning up debtor data. Map out each stage from invoice to
              payment, identify who is responsible for each step, and segment customers by their payment history and risk
              level. Accurate and segmented data is crucial for effective automation later on.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does automation reduce days sales outstanding (DSO)?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automation ensures consistent and timely reminders across different channels, prioritizes high-risk accounts
              using&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>, and eliminates the delays and gaps of manual
              processes. Businesses automating more than half of their receivables workflows have reduced DSO by about a
              third, speeding up cash flow by roughly 19 days.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which accounts receivable KPIs should you track?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Key performance indicators to track include average DSO, the percentage of overdue invoices, and the average
              time between an invoice&#39;s due date and your first follow-up.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are payment reminders and what is their role in accounts receivable?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Payment reminders alert customers about outstanding invoices and encourage them to pay. They play a vital
              role in ensuring timely payments, improving cash flow, reducing DSO, minimizing manual follow-up,
              maintaining customer relationships, and providing clear communication.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How can automated payment collection reminders help you get paid?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated payment reminders boost on-time payments by sending timely notifications, escalating follow-ups
              for overdue invoices, and offering a secure online payment portal. This reduces late payments and enhances
              cash flow efficiency, as seen in improved DSO metrics.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Chaser&#39;s payment reminders be sent automatically?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, Chaser provides a comprehensive set of automation tools that allow businesses to schedule and send
              payment reminders automatically. You can set up recurring schedules, customize the content and timing of
              each reminder, and trigger reminders based on specific events like invoice due dates or payment delays.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Chaser predict exactly when an invoice will be paid?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Chaser predicts when an invoice will be paid by comparing contractual due dates with predicted payment
              dates. It calculates the customer&#39;s average payment delay from paid-invoice history and applies it to
              outstanding invoice due dates. This method separates due cash from predicted cash, allowing businesses to
              see the gap between what is contractually due and what is likely to be received based on customer behavior.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are &quot;Recommended Chasing Times&quot; and how do they impact the forecast?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              &quot;Recommended Chasing Times&quot; are optimal times and days suggested by Chaser&#39;s AI to send
              payment reminders based on analysis of payment behaviors. This feature increases the likelihood of payment
              by reaching out to customers when they are most likely to respond. Businesses using this feature typically
              see payments fulfilled three days faster on average, demonstrating the effectiveness of timely, targeted
              communication.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does automated invoice grouping prevent data distortion in my forecast?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated invoice grouping in Chaser helps prevent data distortion by ensuring that all relevant
              communication and actions are attached to the invoice. This includes chasing schedules, expected payment
              dates, and any disputes. By keeping all information connected, finance teams can respond to likely
              shortfalls with accurate, up-to-date data, preventing misjudgments in cash flow forecasts.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does the Customer Billing Portal interface with cash forecasting?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The Customer Billing Portal in Chaser integrates with cash forecasting by providing real-time visibility
              into receivables data based on actual customer payment behavior. This integration ensures that forecasts
              reflect how customers pay, offering a reliable prediction of incoming cash and supporting precise financial
              planning.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens to the cash flow forecast if an invoice remains entirely uncollected?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              If an invoice remains uncollected, it can lead to a higher risk of bad debt and affect the accuracy of cash
              flow forecasts. Chaser&#39;s integration with accounting systems ensures that forecasts are regularly
              updated, but uncollected invoices need proactive follow-up to mitigate risks and maintain forecast accuracy.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does setting up Chaser&#39;s forecasting require complex ERP engineering?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Setting up Chaser&#39;s forecasting does not require
              complex&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;engineering. It integrates seamlessly with
              existing systems through CSV uploads, allowing businesses to populate receivables data without extensive
              technical adjustments. This simplicity ensures that small businesses can adopt the tool without needing
              significant IT resources.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Chaser mitigate credit risk before an invoice is even generated?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Chaser mitigates credit risk by assessing customer creditworthiness and streamlining dispute resolution
              before invoices are generated. This proactive approach helps businesses avoid extending credit to unreliable
              clients and ensures that payments are received faster, reducing the time spent chasing invoices and allowing
              teams to focus on core business activities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
