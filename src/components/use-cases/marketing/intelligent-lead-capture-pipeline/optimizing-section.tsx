export default function OptimizingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Businesses often face the challenge of inefficient lead processing, which can result in missed
        opportunities and increased overhead. A common problem is the bottleneck created by manual data entry,
        where errors and delays occur, causing potential leads to slip through the cracks. This inefficiency
        not only wastes valuable resources but also slows down the entire sales process, affecting the bottom
        line. To overcome these hurdles, it&#39;s crucial to optimize your lead capture pipeline with
        intelligent automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek At Your Spot, an AI implementation consultancy, helps companies enhance their lead capture
        systems by tailoring AI solutions to fit specific organizational needs. This involves identifying and
        eliminating inefficiencies in the current pipeline, ensuring a smoother flow from initial contact to
        conversion. Let&#39;s explore how optimization can be achieved through strategic interventions.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Custom Workflow Configuration: Design workflows that automate repetitive tasks, reducing manual errors and freeing up sales teams to focus on higher-value activities.</li>
        <li>Data Model Design: Improve data accuracy by structuring information in a way that aligns with your business goals, facilitating better decision-making.</li>
        <li>Accelerated Deployment: Implement AI tools quickly to minimize disruption and start seeing results sooner, providing a competitive edge.</li>
      </ul>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Custom Workflow Configuration
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        One of the key strategies in optimizing pipeline performance is configuring workflows to automate
        mundane tasks. Manual data entry and lead nurturing can eat up valuable time, leading to slower
        responses and decreased engagement rates. By deploying automation, businesses can ensure that tasks
        like follow-ups and data updates happen seamlessly, reducing human error and improving consistency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek At Your Spot provides custom workflow solutions that are aligned with your company&#39;s unique
        processes. These workflows are designed to integrate with existing systems, ensuring a cohesive
        operation that requires minimal adjustment from your team. This not only streamlines operations but
        also significantly improves the speed and accuracy of lead processing.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Data Model Design
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        A well-structured data model is essential for optimizing pipeline performance. Poorly organized data
        can lead to misinformed decisions and missed opportunities. By designing data models that accurately
        reflect business priorities, companies can enhance their analytical capabilities and improve lead
        qualification processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek At Your Spot works with businesses to create data models that capture the right metrics, making
        it easier to analyze trends and predict future outcomes. This approach helps in aligning data
        management with strategic objectives, ensuring that every piece of information collected serves a
        purpose.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Accelerated Deployment
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        In the fast-paced business world, time is of the essence. Delays in deploying new systems can result
        in lost competitive advantages. Accelerated deployment of AI tools ensures that businesses can quickly
        adapt to market changes and stay ahead of competitors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek At Your Spot enables rapid implementation of AI solutions, minimizing downtime and disruption.
        This swift deployment allows companies to immediately start benefiting from automated processes,
        reducing lead processing time and improving overall efficiency.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="optimizing-pipeline-performance-for-better-results" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Optimizing Pipeline Performance for Better Results
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
              <h2 id="optimizing-pipeline-performance-for-better-results" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Optimizing Pipeline Performance for Better Results
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
