export default function CoreFunctionalitySection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Bill is designed to streamline accounts payable (AP) and expense management for small and medium-sized
        businesses. Its primary function is to automate tedious tasks like invoice processing, approvals, and
        expense reporting. This automation reduces manual effort, minimizes errors, and improves cash flow for
        businesses.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;By automating tasks such as invoice processing, approvals, and expense management, businesses can
        significantly reduce manual effort, minimize errors, and improve cash flow.&quot;&nbsp;
        <a id="tools-accounting-bill-core-functionality-source"
          href="https://www.bill.com/dl/guide-to-ap-and-expense-report-automation"
          target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">
          Bill
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s architecture includes AI-powered invoice coding, which automatically extracts and codes
        multi-line bills. This feature captures key fields with 99% accuracy, significantly reducing the time
        spent on manual entry by 20%. Additionally, Bill offers automated 2-way and 3-way matching across
        invoices, purchase orders (POs), and receipts, with configurable tolerance rules and duplicate
        detection to ensure accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another notable feature is Bill&#39;s customizable approval workflows. These workflows come with
        automated routing, real-time tracking, reminders, and mobile approval capabilities, allowing businesses
        to maintain control and visibility over the entire AP process. For payment processing, Bill supports
        various options including ACH, virtual cards, credit cards, checks, and international wire transfers
        across a vast network of 8.3 million members.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s procurement features are also robust, offering purchase requests, purchase orders, and the
        ability to have unlimited requestors without additional costs on specific plans. Furthermore, Bill
        enhances security through predictive fraud detection, monitoring transactions in real-time and having
        stopped 8 million fraud attempts in FY25.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="understanding-bills-core-functionality">
                Understanding Bill&#39;s Core Functionality
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="understanding-bills-core-functionality">
                Understanding Bill&#39;s Core Functionality
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
