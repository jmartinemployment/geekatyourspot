import Link from "next/link";

export default function InPracticeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out automated approval workflows involves careful planning and execution across several
        stages. Initially, it requires a thorough assessment of existing processes to identify areas where
        automation can add the most value. This assessment helps in defining the scope and objectives of the
        implementation project.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step involves setting up the technical infrastructure. This includes integrating the chosen
        tool with current systems. Melio and Plooto are known for their straightforward integration
        processes, which reduce downtime and facilitate a smoother transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data migration is a critical phase where existing records are transferred into the new system.
        Ensuring data integrity during this process is crucial to avoid discrepancies. Tools like&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-practice-stampli"
          href="/tools/accounting/accounts-payable/stampli" className="text-[#0B162A] hover:underline">
          Stampli
        </Link>&nbsp;offer features that verify the accuracy of transferred data, ensuring that the
        transition does not disrupt ongoing financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Training staff to use the new system effectively is another important aspect. It involves educating
        them on the functionalities of the new tool, like using mobile apps for on-the-go approvals,
        which&nbsp;
        <Link id="use-cases-accounting-automated-approval-workflows-practice-bill"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/bill" className="text-[#0B162A] hover:underline">
          Bill
        </Link>&nbsp;provides. This empowers employees to adapt quickly and reduces resistance to change.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, establishing a feedback loop is crucial for continuous improvement. Regularly collecting
        user feedback and monitoring system performance can help in identifying areas for refinement,
        ensuring that the workflow remains efficient and effective in the long term.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="implementing-automated-workflows-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Automated Workflows in Practice
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="implementing-automated-workflows-in-practice" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing Automated Workflows in Practice
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
