export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text">
              Key Capabilities</h2>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Automated Image Tagging: Adobe Sensei uses AI to analyze and tag images automatically, which simplifies the
                process of organizing large media libraries.</li>
              <li>Content Personalization: The platform can tailor content to individual user preferences in real-time, enhancing
                user engagement and satisfaction.</li>
              <li>Intelligent Editing Suggestions: Adobe Sensei provides smart suggestions for edits, helping users refine their
                designs quickly and effectively.</li>
              <li>Automated Content Generation: It can generate content variations automatically, allowing creators to explore
                multiple design options without starting from scratch.</li>
              <li>Seamless Integration: Adobe Sensei works within Adobe&#39;s creative suite, ensuring a cohesive workflow without
                the need to switch between different applications.</li>
              <li>Enhanced Search Capabilities: The platform improves search functionality within Adobe tools, making it easier to
                find and reuse assets.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">Adobe Sensei&#39;s capabilities are designed to enhance both the speed and quality of content creation. By
              automating the tagging of images, users can keep their media libraries organized with minimal effort. This is
              particularly beneficial for large teams managing extensive collections of digital assets. The platform&#39;s ability
              to personalize content in real-time means that businesses can deliver more relevant experiences to their audiences,
              which is crucial for maintaining competitive advantage in today&#39;s fast-paced digital landscape.</p>
            <p className="text-md text-white shadow-text pt-3">Intelligent editing suggestions and automated content generation are two features that significantly reduce the
              time spent on manual design tasks. These capabilities allow creative professionals to focus on more strategic
              elements of their projects, such as conceptual development and storytelling. Furthermore, Adobe Sensei&#39;s
              seamless integration with Adobe&#39;s suite of creative tools ensures that users can leverage these AI-driven
              features without disrupting their existing workflows.</p>
            <p className="text-md text-white shadow-text pt-3">The enhanced search capabilities offered by Adobe Sensei also play a vital role in improving efficiency. By
              enabling users to quickly locate and reuse assets, the platform helps prevent duplication of effort and ensures that
              valuable resources are utilized effectively. Overall, the key capabilities of Adobe Sensei make it an indispensable
              tool for organizations seeking to enhance their creative processes and deliver high-quality content consistently.
            </p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
