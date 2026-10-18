export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do AI topic planning tools actually source their ideas, and will they just spit out the same generic topics our local competitors are using?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Top AI topic planning tools do not make up topics out of thin air. They pull from live
              clickstream data, search engine autocomplete, and what is actually showing up on search results
              pages right now. To avoid the same generic topics as your competition, the software should be
              set up with your unique brand voice and local details. For example, by adding South
              Florida-specific terms or regulations, the AI finds niche topics and long-tail questions that
              your competitors are missing.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will relying on AI-generated content plans and topics negatively impact our rankings on search engines or AI search summaries?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. Search engines penalize low-quality spam, not AI-assisted research. Using AI to find out
              what real people are asking helps you build stronger, more complete pages. This approach
              improves your content quality, which boosts your chances of being featured in both search
              results and AI-generated answers.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can these tools handle multi-channel ideation, or are they strictly limited to writing text-based blog posts?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              The data that powers these AI tools is not limited to blogs. A single cluster of high-intent
              questions can be used for blog posts, video scripts, email campaigns, or even educational social
              media slides. The same content plan can guide your team across any channel where your customers
              are active.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Our marketing coordinator is great at social media and design, but has no training in data analytics. Will they be able to manage an AI topic clustering platform?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Modern AI planning tools handle the complex data work for you. Your team does not need to learn
              analytics to use them. The software gives you clear visuals and ready-to-use content briefs.
              Your coordinator’s job becomes curating and editing topics to match your goals and local
              audience. Training takes less than two hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
