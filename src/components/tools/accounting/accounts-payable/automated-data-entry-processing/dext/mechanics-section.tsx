export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Dext is designed to streamline accounting processes by leveraging advanced automation techniques. At
        the core of Dext&#39;s functionality is its ability to automate data capture, which forms the backbone
        of a scalable practice. This automation reduces manual handling, enhances consistency, and provides
        real-time visibility into financial data. By capturing data automatically from receipts, bills, and
        invoices, Dext minimizes the risk of human error and ensures that records are structured with over
        99% accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dext&#39;s AI Assist feature takes automation a step further by learning from user decisions,
        preferences, and edits. This feature surfaces suggestions on how to automate repetitive tasks,
        allowing users to focus on more strategic activities. The AI Assist is built into the Dext platform,
        ensuring that every suggestion it provides is transparent and reviewable, which keeps users in
        control. This human-in-the-loop approach allows the system to continuously learn and improve its
        accuracy and consistency over time.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Automated data capture is the foundation of a scalable practice because it reduces manual
        handling, improves consistency, and gives firms real-time visibility.&quot;&nbsp;
        <a id="tools-accounting-dext-mechanics-source"
          href="https://dext.com/us/blog/single/ai-and-automation-in-accounting-how-to-build-a-smarter-scalable-practice-with-dext"
          target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">
          Dext
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, Dext integrates with over 36 accounting solutions, enabling seamless connectivity with
        existing systems. This integration ensures that data flows smoothly between platforms, reducing the
        need for manual data entry and reconciliation. The platform also includes features like smart
        matching of documents to bank transactions and embedded workflows that enhance data management
        efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key feature of Dext is its ability to surface discrepancies while they are still small
        corrections, rather than allowing them to become significant issues. This proactive approach helps
        maintain the integrity of financial records and reduces the need for time-consuming corrections
        later on. Additionally, Dext&#39;s automation allows practices to manage a larger client base without
        needing to expand their team, thus increasing efficiency and scalability.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-mechanics-behind-dexts-automation">
                The Mechanics Behind Dext&#39;s Automation
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-mechanics-behind-dexts-automation">
                The Mechanics Behind Dext&#39;s Automation
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
