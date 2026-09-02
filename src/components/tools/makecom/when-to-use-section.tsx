import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Make.com is particularly beneficial for businesses that need to repurpose content efficiently and effectively. Here are scenarios where Make.com can be a valuable asset:</p><ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3"><li>Small Teams with Limited Resources: For small businesses or teams without extensive IT support, Make.com provides an accessible way to automate content workflows without requiring technical expertise. Its no-code interface allows users to set up and manage workflows independently.</li><li>Content-Heavy Operations: Businesses that produce a large volume of content can use Make.com to streamline the repurposing process. By automating the transformation and distribution of content, they can maintain a consistent presence across multiple platforms without overextending their resources.</li><li>Need for Consistency Across Platforms: Ensuring that content is consistent and error-free across various channels is challenging. Make.com’s <GlossaryLink slug="marketing-automation">automation</GlossaryLink> capabilities help maintain this consistency by synchronizing data in real-time and applying uniform transformations to content.</li><li>Desire to Maximize Content Lifespan: Businesses looking to extend the reach and impact of their content will find Make.com’s capabilities particularly useful. By repurposing content into different formats, businesses can engage with their audience in new ways and maximize the lifespan of their content assets.</li></ul><p className="text-md text-white shadow-text pt-3">In conclusion, Make.com is an invaluable tool for businesses aiming to enhance their content strategy through automation. By simplifying the process of <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink>, it allows businesses to focus on creating high-quality content while ensuring that their existing assets continue to deliver value over time.</p>
            </div>
          </div>
        </div >
      </section >
      <section className="min-h-screen bg-[#8C4E2A] text-white hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When to Use</h2>
              <p className="text-md text-white shadow-text pt-3">Make.com is particularly beneficial for businesses that need to repurpose content efficiently and effectively. Here are scenarios where Make.com can be a valuable asset:</p><ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3"><li>Small Teams with Limited Resources: For small businesses or teams without extensive IT support, Make.com provides an accessible way to automate content workflows without requiring technical expertise. Its no-code interface allows users to set up and manage workflows independently.</li><li>Content-Heavy Operations: Businesses that produce a large volume of content can use Make.com to streamline the repurposing process. By automating the transformation and distribution of content, they can maintain a consistent presence across multiple platforms without overextending their resources.</li><li>Need for Consistency Across Platforms: Ensuring that content is consistent and error-free across various channels is challenging. Make.com’s automation capabilities help maintain this consistency by synchronizing data in real-time and applying uniform transformations to content.</li><li>Desire to Maximize Content Lifespan: Businesses looking to extend the reach and impact of their content will find Make.com’s capabilities particularly useful. By repurposing content into different formats, businesses can engage with their audience in new ways and maximize the lifespan of their content assets.</li></ul><p className="text-md text-white shadow-text pt-3">In conclusion, Make.com is an invaluable tool for businesses aiming to enhance their content strategy through automation. By simplifying the process of content repurposing, it allows businesses to focus on creating high-quality content while ensuring that their existing assets continue to deliver value over time.</p>
            </div>
            <div className="col-span-5"></div>
          </div>
        </div >
      </section >
    </>
  );
}
