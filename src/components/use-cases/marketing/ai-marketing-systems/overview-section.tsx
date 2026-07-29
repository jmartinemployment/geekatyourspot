import Image from "next/image";

export default function OverviewSection() {
  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-0.avif"
                alt="Transforming Marketing Challenges into Opportunities" />
            </div>
            <div className="col-span-7">
              <h2 id="transforming-marketing-challenges-into-opportunities" className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
                Transforming Marketing Challenges into Opportunities
              </h2>
              <p className="text-md text-white shadow-text pt-3">In the fast-paced world of business-to-business (B2B) marketing, many organizations face the uphill battle of
                juggling multiple campaigns, analyzing vast amounts of data, and keeping up with ever-changing consumer behaviors.
                This often leads to wasted hours, increased costs, and missed opportunities as marketing teams struggle to adapt to
                the demands of the market. The traditional methods, reliant on manual processes and gut instincts, often fall short
                in delivering the precision and speed required for success.</p>
              <p className="text-md text-white shadow-text pt-3">Enter AI Marketing Systems. These intelligent solutions streamline marketing efforts by automating repetitive
                tasks, providing actionable insights from data, and personalizing customer interactions at scale. With AI,
                businesses can accelerate their campaign deployment, reduce errors, and ultimately drive more sales. By adopting AI
                Marketing Systems, small to medium-sized enterprises can level the playing field, allowing them to compete with
                larger counterparts more effectively and efficiently.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
