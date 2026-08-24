export default function ImplementationSection() {
  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text" id="implementation-considerations">
                Implementation Considerations
              </h2>
              <p className="text-md text-white shadow-text pt-3">Implementing OpenAI GPT-4 into your content creation workflow involves several considerations to ensure a smooth and effective integration. Here are key aspects to focus on:</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerated-deployment">Accelerated Deployment</h3>
              <p className="text-md text-white shadow-text pt-3">GPT-4 offers pre-built connectors and templates that can significantly shorten the deployment time. These resources allow for a phased rollout, ensuring that teams can gradually adapt to the new system without disrupting existing processes.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="data-model-design">Data Model Design</h3>
              <p className="text-md text-white shadow-text pt-3">When designing data structures, it&#39;s important to consider how GPT-4 will interact with your existing content databases. Proper mapping and structuring of data will optimize the model&#39;s performance and ensure accurate content generation.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="workflow-and-process-configuration">Workflow and Process Configuration</h3>
              <p className="text-md text-white shadow-text pt-3">Configuring GPT-4 to align with your specific content workflows is crucial. This includes setting up approval chains, content routing, and automation logic tailored to your organization&#39;s needs.</p>
              <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="custom-code-and-development">Custom Code and Development</h3>
              <p className="text-md text-white shadow-text pt-3">While GPT-4 is primarily a configuration-based tool, it offers an API that allows for further customization and integration into bespoke applications. This flexibility can be leveraged to extend the tool&#39;s capabilities and tailor it to specific business requirements.</p>
              <p className="text-md text-white shadow-text pt-3">By focusing on these areas, Geek At Your Spot helps clients bridge the gap between their current content creation processes and the enhanced capabilities offered by GPT-4. This consultative approach ensures that the transition is seamless and that the tool is used to its full potential.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#8C4E2A] text-white">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">
                When to Use
              </h2>
              <p className="text-md text-white shadow-text pt-3">Determining when to use OpenAI GPT-4 depends on your specific content creation needs and objectives. Here are scenarios where GPT-4 can provide significant value:</p>
              <p className="text-md text-white shadow-text pt-3">High Volume Content Production: If your team needs to produce large amounts of content quickly, GPT-4 can automate the drafting process, allowing writers to focus on editing and finalizing pieces.</p>
              <p className="text-md text-white shadow-text pt-3">Quality Enhancement: When precision and clarity are critical, GPT-4&#39;s language enhancement capabilities ensure that content is polished and professional.</p>
              <p className="text-md text-white shadow-text pt-3">Creative Brainstorming: For teams looking to generate new ideas or explore different angles on a topic, GPT-4 offers a wealth of creative suggestions and prompts.</p>
              <p className="text-md text-white shadow-text pt-3">By aligning GPT-4&#39;s capabilities with your content goals, you can leverage its strengths to achieve better outcomes, whether you&#39;re aiming to increase output, improve quality, or inspire creativity.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
