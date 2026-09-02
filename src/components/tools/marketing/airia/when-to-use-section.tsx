import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function WhenToUseSection() {
  return (
    <section className="min-h-screen bg-[#8C4E2A] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">When to Use</h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">Airia is an ideal solution for businesses looking to maximize the lifespan of their content without the constant need to create new material. It is particularly beneficial for small to medium-sized businesses that need to maintain a consistent online presence but have limited resources to do so.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">If your business is struggling with the common issue of content losing its shine shortly after publication, Airia can help revitalize these assets. By transforming existing content into new formats, Airia extends its reach and impact, ensuring that your marketing efforts continue to deliver value over time.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">Airia is also a great fit for teams that value integration and <GlossaryLink slug="marketing-automation">automation</GlossaryLink>. Its compatibility with tools like Make.com and Zapier allows for seamless workflows that reduce manual effort and enhance efficiency. This makes Airia a valuable tool for businesses aiming to streamline their content operations and achieve better results with less effort.</p>
            <p className="pt-3 text-md font-normal text-white shadow-text">In summary, Airia is best used when the goal is to breathe new life into existing content, save time, reduce costs, and enhance <GlossaryLink slug="engagement-rate">audience engagement</GlossaryLink>. By leveraging AI, Airia helps businesses maintain a dynamic and engaging content strategy without the constant pressure to produce new material.</p>
          </div>
          <div className="col-span-5 flex items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
}
