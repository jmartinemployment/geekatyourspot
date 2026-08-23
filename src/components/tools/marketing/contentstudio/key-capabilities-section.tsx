export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">Key Capabilities</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">ContentStudio offers a range of features designed to enhance the content repurposing process, making it a powerful tool for businesses aiming to extend their content's lifecycle. Here are some of its key capabilities:</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>AI-Powered Content Transformation: ContentStudio uses AI algorithms to transform existing content into various formats. This includes turning blog posts into social media snippets, creating visual content from text, and more. This capability ensures that your content can reach different audience segments effectively.</li>
              <li>Content Scheduling and Automation: The platform allows users to schedule and automate the distribution of content across multiple channels. This feature reduces manual workload and ensures consistent posting, which is crucial for maintaining audience engagement.</li>
              <li>Integration with Popular Platforms: ContentStudio integrates seamlessly with major social media networks and content management systems. This integration facilitates the easy sharing and management of repurposed content, enhancing workflow efficiency.</li>
              <li>Content Curation and Discovery: Besides repurposing, ContentStudio offers tools for content curation and discovery, enabling users to find trending topics and relevant content ideas that can be adapted and repurposed to fit their audience's interests.</li>
              <li>Analytics and Insights: The platform provides analytics tools to track the performance of repurposed content. These insights help businesses understand which formats and channels are most effective, allowing for data-driven decisions in future content strategies.</li>
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
