export default function WhenToUseSection() {
  return (
    <section className="min-h-screen bg-[#8C4E2A] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">When to Use</h2>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>High Volume of Content: Businesses that produce a large amount of content can benefit from Zapier's automation capabilities to efficiently manage and distribute content across multiple platforms.</li>
              <li>Limited Resources: For small businesses with limited staff or budget, Zapier provides a cost-effective way to automate repetitive tasks, freeing up resources for more strategic activities.</li>
              <li>Need for Consistency: Ensuring consistent messaging across channels is crucial for brand integrity. Zapier automates the distribution of content, reducing the risk of errors and inconsistencies.</li>
              <li>Complex Workflows: Businesses with complex content workflows can use Zapier to streamline processes, ensuring that content is repurposed and distributed according to predefined rules and objectives.</li>
            </ul>
            <p className="pt-3 text-md font-normal text-white shadow-text">In summary, Zapier is a versatile tool that supports AI content repurposing by automating the transformation and distribution of content. It is particularly useful for businesses aiming to extend the reach and impact of their content without the need for constant new production. By integrating with tools like Jasper AI and Copy.ai, Zapier ensures that content remains relevant and engaging across all platforms.</p>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
