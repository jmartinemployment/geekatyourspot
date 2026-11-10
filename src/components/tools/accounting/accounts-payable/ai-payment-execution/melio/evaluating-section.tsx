import { MELIO_AFFILIATE_URL } from "@/components/tools/accounting/accounts-payable/melio-affiliate-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faHandPointer,
  faMoneyCheckDollar,
  faTag,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function EvaluatingSection() {
  const factors = [
    { icon: faTag, color: "text-[#C83803]", label: "Straightforward pricing" },
    { icon: faArrowsRotate, color: "text-white", label: "QuickBooks and Xero sync" },
    { icon: faHandPointer, color: "text-[#BF5934]", label: "A user friendly interface" },
    { icon: faMoneyCheckDollar, color: "text-[#C83803]", label: "ACH, card, wire and check payments" },
    { icon: faTriangleExclamation, color: "text-white", label: "Limits for highly custom needs" },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When considering Melio for AI Payment Execution, small businesses must assess its fit for their
        specific needs and financial constraints. Melio stands out with its straightforward pricing model,
        which is ideal for businesses looking to automate without breaking the bank. While specific pricing
        details aren&#39;t available here, Melio&#39;s approach generally involves transparent costs without
        hidden fees, making it easier for businesses to budget effectively. You can see&nbsp;<a id={`tools-accounting-payment-execution-melio-evaluating-affiliate${idSuffix}`} href={MELIO_AFFILIATE_URL} target="_blank" rel="sponsored noopener noreferrer" className="text-[#C83803] hover:underline">Melio</a>&nbsp;for yourself before you decide.
        Geek @ Your Spot LLC earns a commission if you sign up through this link.</p>
      <p className="text-base text-white shadow-text pt-3">
        Melio&#39;s integration capabilities are a key factor in its fit for small businesses. It offers
        seamless synchronization with popular accounting software like QuickBooks and Xero, which eliminates
        the need for dual data entry and ensures your financial data is always up to date. This integration
        not only saves time but also reduces errors, a significant advantage for businesses that rely on
        accurate financial reporting.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses considering alternatives, it&#39;s important to weigh Melio against other AI Payment Execution tools. Competitors may offer similar features, but Melio&#39;s strength lies in its
        user-friendly interface and the ability to manage payments efficiently. The ability to handle various
        payment methods, including ACH, card, wire transfers, and checks, provides flexibility that can be
        crucial for businesses with diverse payment needs.</p>
      <p className="text-base text-white shadow-text pt-3">
        While Melio excels in many areas, it&#39;s not without its limitations. Businesses with highly complex
        payment needs or those requiring extensive customization might find other solutions more suitable.
        However, for small to medium-sized enterprises, Melio&#39;s balance of features and ease of use often
        makes it a compelling choice.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, when evaluating Melio for AI Payment Execution, businesses should consider its
        compatibility with existing systems, the simplicity of its pricing model, and its ability to
        streamline payment processes. By focusing on these aspects, businesses can determine if Melio aligns
        with their operational goals and financial plans.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-melio-fit-and-pricing-considerations">
                Evaluating Melio: Fit and Pricing Considerations
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-melio-fit-and-pricing-considerations-lg">
                Evaluating Melio: Fit and Pricing Considerations
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8 text-center">
                {factors.map((factor) => (
                  <li key={factor.label} className="flex flex-col items-center">
                    <FontAwesomeIcon
                      icon={factor.icon}
                      className={factor.color}
                      style={{ width: "5.5rem", height: "5.5rem" }}
                    />
                    <p className="pt-3 text-lg font-bold uppercase tracking-wide text-white shadow-text">
                      {factor.label}
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
