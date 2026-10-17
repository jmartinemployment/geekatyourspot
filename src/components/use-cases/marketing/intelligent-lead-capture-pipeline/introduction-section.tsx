export default function IntroductionSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manual lead capture is fraught with challenges, from costly errors in data entry to significant time
        wasted on administrative tasks. Sales teams often find themselves bogged down by repetitive processes
        that divert focus from strategic activities. This inefficiency not only delays response times but also
        risks losing potential customers to competitors who can engage more swiftly. To tackle these issues,
        organizations need a streamlined approach that minimizes errors and optimizes workforce productivity.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek At Your Spot specializes in transforming traditional lead capture processes into Intelligent Lead
        Capture Pipelines. By harnessing AI, businesses can automate and enhance lead capture, reducing manual
        intervention and improving data accuracy. This transformation enables teams to focus on nurturing
        leads rather than being stuck in the weeds of data entry.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Accelerated deployment of AI tools for faster results.</li>
        <li>Tailored data model design to suit specific business needs.</li>
        <li>Workflow configuration to ensure seamless integration into existing processes.</li>
      </ul>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Role of AI in Lead Capture
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        AI plays a pivotal role in addressing common pain points in lead capture. By automating data
        collection and validation, AI reduces the risk of human error, ensuring that the information gathered
        is both correct and complete. This leads to improved data quality, which is crucial for informed
        decision-making and effective customer engagement.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek At Your Spot employs AI not only to automate these processes but also to continuously learn and
        adapt to changing data patterns. This ensures that the lead capture system evolves alongside business
        needs, offering a scalable solution that grows with the organization.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Implementing Intelligent Lead Capture Solutions
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Implementing an Intelligent Lead Capture Pipeline involves several key steps, each aimed at enhancing
        efficiency and reducing time spent on non-value-added tasks. First, an assessment of the current lead
        capture process helps identify bottlenecks and areas for improvement. Next, Geek At Your Spot
        collaborates with businesses to design a custom solution that integrates seamlessly with existing
        systems, ensuring minimal disruption and maximum effectiveness.</p>
      <p className="text-md text-white shadow-text pt-3">
        For instance, a mid-sized company struggling with high data entry errors and slow lead processing can
        benefit significantly from this tailored approach. By leveraging AI to automate data entry and
        validation, they can expect to see a marked improvement in lead accuracy and processing speed. This
        not only enhances customer relationship management but also contributes to achieving business goals
        more efficiently.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="understanding-intelligent-lead-capture-pipelines" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Understanding Intelligent Lead Capture Pipelines
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="understanding-intelligent-lead-capture-pipelines" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Understanding Intelligent Lead Capture Pipelines
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
