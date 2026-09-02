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
              <p className="text-md text-white shadow-text pt-3">Airia is a powerful AI tool designed to transform the way you manage and repurpose your content. With the ever-growing need to keep content fresh and engaging, Airia helps businesses extend the life of their existing assets by converting them into multiple formats. This not only saves time but also reduces costs and increases <GlossaryLink slug="engagement-rate">audience engagement</GlossaryLink>.</p><p className="text-md text-white shadow-text pt-3">Imagine you have a blog post that initially attracts a lot of attention but quickly fades into obscurity. Airia can take that single piece of content and transform it into a series of social media updates, a podcast script, or even an infographic. This approach ensures that your content continues to deliver value long after its initial publication, maximizing its reach and impact without the need to start from scratch each time.</p><p className="text-md text-white shadow-text pt-3">Airia stands out in the crowded field of AI <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink> tools by offering a user-friendly interface and affordable plans suitable for small teams. It provides a seamless experience by integrating easily with platforms like Make.com and Zapier, allowing for automated workflows that further enhance efficiency. With Airia, you can focus more on strategic <GlossaryLink slug="marketing-automation">content creation</GlossaryLink> while letting AI handle the heavy lifting of repurposing.</p><p className="text-md text-white shadow-text pt-3">While tools like Jasper AI and Copy.ai also offer content transformation capabilities, Airia's focus on ease of use and integration makes it particularly appealing for businesses looking to streamline their content management processes. By leveraging AI, Airia helps businesses maintain a consistent online presence, reduce errors, and ultimately achieve better results in their marketing efforts.</p>
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
              <p className="text-md text-white shadow-text pt-3">Airia is a powerful AI tool designed to transform the way you manage and repurpose your content. With the ever-growing need to keep content fresh and engaging, Airia helps businesses extend the life of their existing assets by converting them into multiple formats. This not only saves time but also reduces costs and increases audience engagement.</p><p className="text-md text-white shadow-text pt-3">Imagine you have a blog post that initially attracts a lot of attention but quickly fades into obscurity. Airia can take that single piece of content and transform it into a series of social media updates, a podcast script, or even an infographic. This approach ensures that your content continues to deliver value long after its initial publication, maximizing its reach and impact without the need to start from scratch each time.</p><p className="text-md text-white shadow-text pt-3">Airia stands out in the crowded field of AI content repurposing tools by offering a user-friendly interface and affordable plans suitable for small teams. It provides a seamless experience by integrating easily with platforms like Make.com and Zapier, allowing for automated workflows that further enhance efficiency. With Airia, you can focus more on strategic content creation while letting AI handle the heavy lifting of repurposing.</p><p className="text-md text-white shadow-text pt-3">While tools like Jasper AI and Copy.ai also offer content transformation capabilities, Airia's focus on ease of use and integration makes it particularly appealing for businesses looking to streamline their content management processes. By leveraging AI, Airia helps businesses maintain a consistent online presence, reduce errors, and ultimately achieve better results in their marketing efforts.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
