export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">Key Capabilities</h2>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>Content Transformation: Copy.ai can convert a single piece of content into various formats such as social media posts, emails, and video scripts. This capability ensures that the original content reaches a wider audience across different platforms.</li>
              <li>AI-Driven Suggestions: The tool provides intelligent suggestions for repurposing content, taking into account the context and tone of the original material. This feature helps in maintaining the integrity of the message while adapting it to new formats.</li>
              <li>User-Friendly Interface: Copy.ai is designed with simplicity in mind, making it easy for users to navigate and utilize its features without requiring extensive technical knowledge.</li>
              <li>Cost-Effective Plans: The tool offers affordable pricing options, particularly beneficial for small businesses and startups looking to leverage AI technology without incurring high costs.</li>
              <li>Collaboration Features: Copy.ai supports team collaboration, allowing multiple users to work on content projects simultaneously. This feature enhances productivity and ensures consistency in content output.</li>
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
