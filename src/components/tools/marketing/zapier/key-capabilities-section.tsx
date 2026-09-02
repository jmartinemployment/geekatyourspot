import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">Key Capabilities</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">Zapier excels in automating workflows by connecting disparate apps and services, making it a versatile tool for <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink>. Its key capabilities include:</p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>App Integration: Zapier integrates with over 3,000 apps, including popular <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> and management tools like Jasper AI, Copy.ai, and ContentStudio. This extensive integration capability allows businesses to automate the flow of content between different platforms.</li>
              <li>Automated Workflows: Zapier's automation engine enables users to set up workflows, known as "Zaps," which trigger actions across connected apps. For instance, a Zap could automatically post a newly repurposed article to various social media platforms, saving time and reducing manual errors.</li>
              <li>Customizable Triggers and Actions: Users can define specific triggers and actions to tailor workflows to their unique needs. This flexibility allows for precise control over how and when content is repurposed and distributed.</li>
              <li>Scalability: Zapier's infrastructure supports automation at scale, making it suitable for businesses of all sizes. Whether you're a small business or a large enterprise, Zapier can handle the volume and complexity of your content repurposing needs.</li>
              <li>Ease of Use: With a user-friendly interface and no coding required, Zapier makes it easy for anyone to set up and manage automated workflows. This accessibility ensures that businesses can quickly implement automation without extensive technical expertise.</li>
            </ul>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
