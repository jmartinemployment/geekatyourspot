import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewToolSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white text-right text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
                </div>
            <div className="col-span-12">
              <p className="text-md text-white shadow-text pt-3">Copy.ai is a powerful tool designed to help businesses repurpose their content efficiently. In a digital landscape where content can quickly become outdated, Copy.ai offers a solution by transforming existing material into various formats. This capability extends the lifespan of content, ensuring it remains relevant and engaging for a longer period. The tool is particularly useful for small businesses that may not have the resources to constantly produce new content. By utilizing <GlossaryLink slug="machine-learning">AI-driven</GlossaryLink> <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink>, businesses can save time and reduce costs, all while maintaining <GlossaryLink slug="engagement-rate">audience engagement</GlossaryLink>.</p><p className="text-md text-white shadow-text pt-3">AI content repurposing involves taking a single piece of content, such as a blog post, and converting it into multiple formats like social media updates, newsletters, or even podcasts. This process not only maximizes the reach of the original content but also helps in maintaining consistency across different channels. Copy.ai excels in this domain by providing user-friendly features that simplify the repurposing process. The tool's AI algorithms are designed to understand the context of the original content and generate new versions that retain the core message while adapting to the new format.</p><p className="text-md text-white shadow-text pt-3">In comparison to other tools like Jasper AI, Copy.ai focuses on ease of use and affordability, making it a preferred choice for small teams. While Jasper AI offers similar capabilities, Copy.ai stands out with its straightforward interface and cost-effective plans. This makes it accessible to businesses that are just starting to explore AI-driven content strategies.</p><p className="text-md text-white shadow-text pt-3">Copy.ai is not just about repurposing content; it's about enhancing the overall content strategy. By allowing businesses to make the most of their existing assets, Copy.ai helps in maintaining a steady flow of content without the need for constant new creations. This approach not only saves time but also contributes to a more sustainable and efficient content strategy.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview</h2>
              <p className="text-md text-white shadow-text pt-3">Copy.ai is a powerful tool designed to help businesses repurpose their content efficiently. In a digital landscape where content can quickly become outdated, Copy.ai offers a solution by transforming existing material into various formats. This capability extends the lifespan of content, ensuring it remains relevant and engaging for a longer period. The tool is particularly useful for small businesses that may not have the resources to constantly produce new content. By utilizing AI-driven content repurposing, businesses can save time and reduce costs, all while maintaining audience engagement.</p><p className="text-md text-white shadow-text pt-3">AI content repurposing involves taking a single piece of content, such as a blog post, and converting it into multiple formats like social media updates, newsletters, or even podcasts. This process not only maximizes the reach of the original content but also helps in maintaining consistency across different channels. Copy.ai excels in this domain by providing user-friendly features that simplify the repurposing process. The tool's AI algorithms are designed to understand the context of the original content and generate new versions that retain the core message while adapting to the new format.</p><p className="text-md text-white shadow-text pt-3">In comparison to other tools like Jasper AI, Copy.ai focuses on ease of use and affordability, making it a preferred choice for small teams. While Jasper AI offers similar capabilities, Copy.ai stands out with its straightforward interface and cost-effective plans. This makes it accessible to businesses that are just starting to explore AI-driven content strategies.</p><p className="text-md text-white shadow-text pt-3">Copy.ai is not just about repurposing content; it's about enhancing the overall content strategy. By allowing businesses to make the most of their existing assets, Copy.ai helps in maintaining a steady flow of content without the need for constant new creations. This approach not only saves time but also contributes to a more sustainable and efficient content strategy.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
