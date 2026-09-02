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
              <p className="text-md text-white shadow-text pt-3">Make.com stands as a robust platform for automating workflows and processes, particularly in the realm of AI <GlossaryLink slug="content-repurposing">content repurposing</GlossaryLink>. As businesses strive to extend the life and reach of their content, Make.com offers a seamless way to integrate various applications and automate repetitive tasks. This tool is especially beneficial for small teams looking to maximize efficiency without incurring high costs.</p><p className="text-md text-white shadow-text pt-3">In the context of AI content repurposing, Make.com can automate the transformation of content across different formats. For example, it can help distribute a blog post into a series of social media updates or convert a podcast episode into a blog article. This <GlossaryLink slug="marketing-automation">automation</GlossaryLink> not only saves time but also ensures consistency across platforms, reducing the likelihood of errors and increasing <GlossaryLink slug="engagement-rate">audience engagement</GlossaryLink>.</p><p className="text-md text-white shadow-text pt-3">Make.com offers a user-friendly interface that allows users to create complex workflows without needing to write code. This is particularly advantageous for small businesses that may not have dedicated IT resources. By connecting with tools like Jasper AI and Copy.ai, Make.com can further enhance the content repurposing process, allowing for easy integration of <GlossaryLink slug="machine-learning">AI-driven</GlossaryLink> content transformation capabilities.</p><p className="text-md text-white shadow-text pt-3">The platform's ability to integrate with a wide range of applications means that users can tailor their workflows to meet specific business needs. Whether it's automating the distribution of content across multiple channels or streamlining internal approval processes, Make.com provides the flexibility needed to keep content fresh and engaging. With affordable plans and scalable options, it is an ideal choice for businesses looking to optimize their content strategy without a significant investment.</p>
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
              <p className="text-md text-white shadow-text pt-3">Make.com stands as a robust platform for automating workflows and processes, particularly in the realm of AI content repurposing. As businesses strive to extend the life and reach of their content, Make.com offers a seamless way to integrate various applications and automate repetitive tasks. This tool is especially beneficial for small teams looking to maximize efficiency without incurring high costs.</p><p className="text-md text-white shadow-text pt-3">In the context of AI content repurposing, Make.com can automate the transformation of content across different formats. For example, it can help distribute a blog post into a series of social media updates or convert a podcast episode into a blog article. This automation not only saves time but also ensures consistency across platforms, reducing the likelihood of errors and increasing audience engagement.</p><p className="text-md text-white shadow-text pt-3">Make.com offers a user-friendly interface that allows users to create complex workflows without needing to write code. This is particularly advantageous for small businesses that may not have dedicated IT resources. By connecting with tools like Jasper AI and Copy.ai, Make.com can further enhance the content repurposing process, allowing for easy integration of AI-driven content transformation capabilities.</p><p className="text-md text-white shadow-text pt-3">The platform's ability to integrate with a wide range of applications means that users can tailor their workflows to meet specific business needs. Whether it's automating the distribution of content across multiple channels or streamlining internal approval processes, Make.com provides the flexibility needed to keep content fresh and engaging. With affordable plans and scalable options, it is an ideal choice for businesses looking to optimize their content strategy without a significant investment.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
