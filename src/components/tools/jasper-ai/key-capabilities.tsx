export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] font-black font-[var(--font-sora)] shadow-text">
              Key Capabilities</h2>
            <p className="text-md text-white shadow-text pt-3">Jasper AI offers a suite of capabilities that make it a standout tool in the realm of automated content creation.
              These features are specifically designed to address common challenges faced by content creators and marketers.</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>AI-Powered Content Generation: Jasper AI uses advanced algorithms to generate content that aligns with user
                specifications. Whether it&apos;s creating blog posts or drafting emails, the AI ensures the output is coherent and
                relevant.</li>
              <li>Customizable Templates: The platform provides a variety of templates that users can customize to fit their
                specific needs, making it easier to start new projects and maintain consistency across different types of content.
              </li>
              <li>SEO Optimization: Jasper AI assists in optimizing content for search engines, helping businesses improve their
                online visibility and attract more organic traffic.</li>
              <li>Multilingual Support: Jasper AI supports multiple languages, enabling businesses to reach a broader audience and
                cater to diverse markets.</li>
              <li>Collaboration Tools: The platform includes features that facilitate collaboration among team members, allowing
                for seamless communication and efficient workflow management.</li>
              <li>Performance Analytics: Jasper AI provides insights into content performance, helping users understand what works
                and what doesn&apos;t, and allowing for data-driven improvements.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">These capabilities make Jasper AI a versatile tool for any business looking to enhance its content strategy. By
              automating key aspects of content creation, Jasper AI not only boosts productivity but also ensures that the output
              meets the high standards expected in competitive markets.</p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
