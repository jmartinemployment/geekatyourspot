import Link from "next/link";

export default function RealitiesOfImplementationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out an automated data entry and processing system in accounts payable is a multifaceted
        process that requires careful planning. The first step involves assessing your current workflow to
        identify bottlenecks and areas ripe for automation. Only then can you sequence the rollout in a way
        that complements existing processes rather than disrupts them.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration with existing systems is another critical aspect. Tools like&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-realities-avidxchange"
          href="/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange" className="text-[#0B162A] hover:underline">
          AvidXchange
        </Link>&nbsp;excel in this area by offering seamless integration with numerous accounting systems,
        allowing for a smoother transition and less disruption to daily operations. Ensuring that data flows
        correctly between your new and existing systems is necessary to avoid errors and ensure data
        integrity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data quality is paramount. Before automating, it&#39;s essential to clean and validate current data.&nbsp;
        <Link id="use-cases-accounting-automated-data-entry-processing-realities-stampli"
          href="/tools/accounting/stampli" className="text-[#0B162A] hover:underline">
          Stampli
        </Link>&nbsp;offers robust data extraction capabilities that can help maintain high data quality by
        automating the capture and validation of invoice data. This step is crucial to prevent garbage in,
        garbage out scenarios that can undermine the whole system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, focus on the people involved. Automation changes workflows, and these changes can be
        unsettling. Providing training and support is essential to help your team adapt. Early adopters
        within the organization can become champions of the new system, helping others adjust and understand
        the benefits. The goal is to ensure that the transition is seen as a positive development rather than
        a threat.</p>
      <p className="text-md text-white shadow-text pt-3">
        In conclusion, implementing an automated accounts payable system involves more than just technology.
        It requires a strategic approach to sequencing, data management, and people management to ensure a
        successful transition.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-realities-of-implementation-sequence-data-and-people" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Realities of Implementation: Sequence, Data, and People
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
              <h2 id="the-realities-of-implementation-sequence-data-and-people" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Realities of Implementation: Sequence, Data, and People
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
