export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">Key Capabilities</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">Airia is equipped with a range of features designed to enhance content repurposing efforts. These capabilities make it a versatile tool for businesses aiming to extend the lifespan of their content while maintaining quality and consistency.</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>Content Transformation: Airia can convert a single piece of content into various formats, such as social media posts, video scripts, and infographics. This flexibility allows businesses to reach different audience segments without creating new content from scratch.</li>
              <li>Seamless Integration: The tool integrates smoothly with platforms like Make.com and Zapier, enabling automated workflows that save time and reduce manual effort. This integration ensures that content repurposing tasks are handled efficiently, freeing up resources for other strategic activities.</li>
              <li>User-Friendly Interface: Airia is designed with ease of use in mind, making it accessible for teams with varying levels of technical expertise. Its intuitive interface allows users to quickly set up and manage content repurposing tasks without extensive training.</li>
              <li>Cost-Effective Solutions: With affordable pricing plans, Airia is an attractive option for small businesses and teams looking to maximize their content strategy without incurring high costs. This makes it possible for businesses to achieve significant results even with limited budgets.</li>
              <li>Quality Assurance: Airia ensures that repurposed content maintains the original quality and tone, reducing the risk of errors and inconsistencies. This capability is crucial for businesses that prioritize brand consistency across different channels.</li>
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
