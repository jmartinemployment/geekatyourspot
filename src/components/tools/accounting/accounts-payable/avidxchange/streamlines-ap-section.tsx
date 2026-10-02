export default function StreamlinesApSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange offers a comprehensive solution for automating accounts payable (AP) processes,
        specifically designed to reduce manual tasks and enhance efficiency. Leveraging AI and machine
        learning, the platform captures data from invoice headers and line-item levels, ensuring precise data
        entry without human intervention. This not only minimizes errors but also saves significant time for AP
        teams, allowing them to focus on more strategic tasks. The system is built to integrate seamlessly with
        existing workflows, offering a paperless environment that reduces operational costs and fraud
        risks.</p>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange&#39;s automation capabilities extend to the entire invoice processing cycle. The platform
        automates data extraction, matching, and routing, ensuring that invoices are handled accurately and
        efficiently. This automation is supported by a robust framework that provides visibility and control
        over the AP workflow, enabling businesses to maintain oversight while reducing the workload on their
        teams. The platform&#39;s AI-driven approach ensures that every step, from capture to payment, is
        streamlined and error-free.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also enhances supplier payment processes, ensuring faster, easier, and more secure
        transactions. By integrating with existing AP systems, AvidXchange allows businesses to monetize
        electronic payments at scale without the need to change their banking or accounting systems. This
        adaptability is crucial for businesses looking to modernize their AP processes without disrupting their
        current operations.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;AvidXchange automates your B2B payments and integrates with your existing AP process so you can
        monetize electronic payments at scale—without changing banks or accounting systems.&quot;&nbsp;
        <a id="tools-accounting-avidxchange-streamlines-source"
          href="https://www.avidxchange.com/corporate-payments/"
          target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">
          AvidXchange
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        In addition to automation, AvidXchange provides custom and automated approval workflows, which are
        essential for maintaining control and efficiency. These workflows are designed to match current
        approval processes, reducing inefficiencies and ensuring that all invoices are processed in a timely
        manner. With 24/7 visibility into real-time data, businesses can make informed decisions quickly,
        further enhancing their operational efficiency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-avidxchange-streamlines-ap-processes">
                How AvidXchange Streamlines AP Processes
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-avidxchange-streamlines-ap-processes">
                How AvidXchange Streamlines AP Processes
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
