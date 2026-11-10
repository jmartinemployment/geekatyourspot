import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImport,
  faGauge,
  faMoneyBillTransfer,
  faPlug,
  faRepeat,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

export default function ArchitectureSection() {
  const points = [
    { icon: faPlug, color: "text-white", label: "QuickBooks, Xero and NetSuite sync" },
    { icon: faGauge, color: "text-[#0B162A]", label: "One central dashboard" },
    { icon: faMoneyBillTransfer, color: "text-white", label: "ACH, card and wire options" },
    { icon: faRobot, color: "text-[#0B162A]", label: "Agent Mel, the AI assistant" },
    { icon: faRepeat, color: "text-white", label: "Recurring payments" },
    { icon: faFileImport, color: "text-[#0B162A]", label: "Invoices imported from Meta and Amazon Business" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Melio stands out with its robust architecture designed to streamline AI Payment Execution. At
        its core, Melio integrates seamlessly with existing accounting software like QuickBooks, Xero, and
        NetSuite. This integration ensures that all financial data flows smoothly between systems, reducing
        the need for manual data entry and minimizing errors. The two-way sync feature is particularly
        beneficial as it keeps all records updated in real-time, ensuring accuracy and efficiency in financial
        operations.</p>
      <p className="text-base text-white shadow-text pt-3">
        A key component of Melio&#39;s architecture is its centralized dashboard, which consolidates all
        payment activities into a single interface. This dashboard provides businesses with a comprehensive
        view of their cash flow, allowing them to monitor, schedule, and optimize payments easily. The ability
        to schedule payments in advance ensures that businesses can manage their cash flow effectively,
        avoiding late fees and maintaining healthy vendor relationships.</p>
      <p className="text-base text-white shadow-text pt-3">
        Melio also offers flexibility in payment methods, accommodating various business needs. Whether
        it&#39;s ACH transfers, credit card payments, or wire transfers, Melio supports multiple options,
        giving businesses the flexibility to choose the most suitable method for each transaction. This
        flexibility extends to vendors who may not traditionally accept card payments, as Melio allows
        payments to be made by card, ensuring timely vendor payments while managing cash flow efficiently.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another standout feature is Melio&#39;s&nbsp;
        AI&nbsp;capabilities,
        which streamline the accounts payable process. The platform&#39;s AI assistant, Agent Mel, aids in
        onboarding and answering routine AP questions, freeing up team members to focus on strategic tasks.
        This AI-driven approach reduces the time spent on manual searches and data entry, significantly
        enhancing operational efficiency.</p>
      <p className="text-base text-white shadow-text pt-3">
        Melio&#39;s architecture is further strengthened by its ability to handle recurring payments.
        Businesses can set up recurring billing for regular expenses, ensuring these payments are processed
        consistently and on time. This feature is particularly useful for routine transactions like rent or
        supplier payments, providing peace of mind and predictability in cash flow management.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&#39;s integration capabilities extend to other business tools, such as Meta and Amazon
        Business, where invoices can be automatically imported into Melio. This automation eliminates the need
        for manual uploads, saving time and reducing errors. With these integrations, businesses can maintain
        a seamless workflow, ensuring all financial data is accurately captured and processed.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="melios-architecture-and-mechanics">
                Melio&#39;s Architecture and Mechanics
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="melios-architecture-and-mechanics-lg">
                Melio&#39;s Architecture and Mechanics
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8 text-center">
                {points.map((point) => (
                  <li key={point.label} className="flex flex-col items-center">
                    <FontAwesomeIcon
                      icon={point.icon}
                      className={point.color}
                      style={{ width: "5.5rem", height: "5.5rem" }}
                    />
                    <p className="pt-3 text-lg font-bold uppercase tracking-wide text-white shadow-text">
                      {point.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
