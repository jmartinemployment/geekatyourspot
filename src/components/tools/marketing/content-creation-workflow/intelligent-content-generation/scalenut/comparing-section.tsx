export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in South Florida face a choice at the crossroads of content automation: stick with
        manual effort, hire a traditional agency, or adopt a specialized AI platform like Scalenut. Each route
        brings its own trade-offs. Manual writing drains time and rarely delivers the regular cadence search
        engines and customers expect. Agency services promise polish but come with high recurring costs and
        often generic, one-size-fits-all drafts that miss the mark for local expertise. Scalenut takes a
        different path, automating the entire flow from initial idea to SEO-ready article, but with controls
        that keep content grounded in the business’s real voice, services, and customer needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where many AI tools focus on speed alone, Scalenut’s workflow is built for relevance and structure. A
        typical platform in this space might generate a quick draft from a prompt, but Scalenut walks the user
        through a full sequence: defining the topic, building a detailed outline, benchmarking against top
        competitors, and producing a draft that matches both SEO and brand guidelines. This stepwise process
        is what moves a draft from a generic summary to a finished, publishable asset that actually represents
        the business. The difference becomes clear when a Miami insurance agency, for example, can feed its
        unique terminology and compliance requirements into Scalenut and get back articles that sound like
        their office wrote them, not a robot.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut also stands out in how it handles the common failures that trip up other approaches. When a
        bookkeeping firm in Miami-Dade starts articles but never finishes them, Scalenut’s title-outline-draft
        sequence keeps the process moving and ensures nothing stalls at the halfway mark. For teams that
        answer customer questions all week but never turn them into educational content, Scalenut’s research
        and outline tools make it simple to turn technician notes or client FAQs into structured blog posts.
        And for owners frustrated by AI tools that spit out surface-level content, Scalenut’s competitor
        benchmarking, keyword clustering, and prompt coverage features ensure every piece is both deep and
        discoverable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing and accessibility are also points of comparison. While agency retainers can run into the
        thousands per month and some AI platforms charge by the word or restrict features behind higher tiers,
        Scalenut’s published plans start at $12 per month, with higher tiers for teams that need more volume
        or advanced features. This means a small business can automate content at a price point that fits a
        South Florida budget, without sacrificing the controls needed to stay on brand and compliant.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another area where Scalenut differentiates itself. Many AI tools operate as silos,
        requiring users to copy and paste between platforms or lose formatting and metadata in the process.
        Scalenut connects directly with WordPress and other common tools, and its brand kit, prompt library,
        and workspace management features let businesses manage multiple brands or locations without losing
        consistency. This is especially important for businesses with more than one service line or office, as
        it keeps content quality high across all channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Scalenut’s approach to automation is not about removing people from the loop, it’s about
        returning hours to the team by removing the repetitive, manual steps that slow down publishing. Where
        a traditional agency or a basic AI writer might leave a business owner with a pile of drafts to edit,
        Scalenut’s workflow, optimization tools, and brand controls mean that what comes out is much closer to
        ready. That’s the difference between a Friday afternoon spent fixing AI gibberish and one spent
        closing sales or following up with clients.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, Scalenut is not just another AI writing tool. It is designed to solve the real workflow
        problems that small teams face when trying to scale content without scaling headcount or cost. For
        businesses that have tried manual writing, agency retainers, or basic AI generators and found them
        lacking, Scalenut offers a structured, locally relevant, and affordable alternative that keeps the
        business in control of its message.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-scalenut-compares-to-other-content-generation-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Scalenut Compares to Other Content Generation Approaches
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-scalenut-compares-to-other-content-generation-approaches" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Scalenut Compares to Other Content Generation Approaches
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
