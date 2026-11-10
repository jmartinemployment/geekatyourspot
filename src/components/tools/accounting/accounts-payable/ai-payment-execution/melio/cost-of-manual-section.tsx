import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCalendarXmark,
  faCircleExclamation,
  faCopy,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

export default function CostOfManualSection() {
  const costs = [
    { icon: faRepeat, color: "text-[#C83803]", label: "The same payments recreated monthly" },
    { icon: faCalendarXmark, color: "text-white", label: "Scrambling to meet due dates" },
    { icon: faCopy, color: "text-[#BF5934]", label: "Vendor details entered again and again" },
    { icon: faCircleExclamation, color: "text-[#C83803]", label: "Room for error with every re-entry" },
    { icon: faBook, color: "text-white", label: "Payment runs connected to your books" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses, managing routine vendor payments can be a time-consuming task. Each month, the
        same payments need to be recreated, whether it&#39;s rent or regular service retainers. This
        repetition eats up valuable time that could be better spent on strategic activities. Instead of
        focusing on growth, business owners or office managers find themselves caught up in the minutiae of
        payment processes.</p>
      <p className="text-base text-white shadow-text pt-3">
        One major issue is the lack of a streamlined process for handling these payments. Without a
        consistent system for scheduling payments ahead of time, businesses often scramble to meet due dates.
        This lack of foresight can lead to late fees and strained vendor relationships. Moreover, each bill is
        paid individually, rather than in an organized batch, which further complicates the workflow and
        increases the likelihood of errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another significant challenge is the manual re-entry of payment details. Staff members often have to
        input the same vendor and bill information into QuickBooks multiple times, which is both tedious and
        prone to mistakes. This duplication of effort not only wastes time but also increases the risk of
        discrepancies in financial records. The absence of a system that links scheduled payments directly to
        accounting software exacerbates this issue, leading to inefficiencies and potential financial
        inaccuracies.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that rely on manual payment execution, the process is fraught with opportunities for
        error. Each payment detail must be entered again in the accounting system, creating additional work
        and opening the door to mistakes. This repetitive cycle not only drains resources but also limits the
        ability to focus on more impactful business activities.</p>
      <p className="text-base text-white shadow-text pt-3">
        Melio offers a solution to these challenges by automating the payment execution process. By setting up
        scheduled payment runs that are connected to your books, Melio eliminates the need for manual
        intervention in routine bill payments. This automation ensures that payments are made on time, without
        the need for constant oversight from business owners. The result is a more efficient workflow that
        frees up time for strategic initiatives and reduces the risk of errors.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-payment-execution">
                The Cost of Manual Payment Execution
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-payment-execution-lg">
                The Cost of Manual Payment Execution
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8 text-center">
                {costs.map((cost) => (
                  <li key={cost.label} className="flex flex-col items-center">
                    <FontAwesomeIcon
                      icon={cost.icon}
                      className={cost.color}
                      style={{ width: "5.5rem", height: "5.5rem" }}
                    />
                    <p className="pt-3 text-lg font-bold uppercase tracking-wide text-white shadow-text">
                      {cost.label}
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
