export default function ManualApChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        For small and medium-sized businesses, managing accounts payable manually is a significant challenge.
        The traditional methods are not only time-consuming but also vulnerable to errors. These
        inefficiencies can slow down your business operations and affect your cash flow. Invoice processing,
        approvals, and expense management often require substantial manual effort, which can lead to delays
        and inaccuracies. This can result in strained relationships with vendors and a negative impact on your
        company&#39;s financial health.</p>
      <p className="text-md text-white shadow-text pt-3">
        The manual process of handling accounts payable involves a lot of paperwork and repetitive tasks. Each
        invoice needs to be manually entered into the system, checked for accuracy, and approved before
        payment is processed. This not only consumes valuable time but also increases the risk of human error.
        Mistakes in data entry or lost paperwork can lead to late payments, which may incur penalties or
        damage supplier relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, the lack of automation means that tracking and managing expenses is cumbersome. Without a
        streamlined process, businesses may struggle to maintain accurate financial records, leading to
        potential compliance issues. The absence of real-time visibility into the accounts payable process can
        hinder decision-making and make it difficult to manage cash flow effectively.</p>
      <p className="text-md text-white shadow-text pt-3">
        In a competitive business environment, these inefficiencies can be costly. Businesses need to find
        ways to optimize their accounts payable processes to save time, reduce costs, and improve accuracy.
        This is where automation tools like Bill come into play, offering a solution to these common pain
        points.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Manual accounts payable and expense report processes are time-consuming, error-prone, and hinder
        your business&#39;s growth.&quot;&nbsp;
        <a id="tools-accounting-bill-challenges-source"
          href="https://www.bill.com/dl/guide-to-ap-and-expense-report-automation"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Bill
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-accounts-payable-processes">
                The Challenges of Manual Accounts Payable Processes
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-challenges-of-manual-accounts-payable-processes">
                The Challenges of Manual Accounts Payable Processes
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
