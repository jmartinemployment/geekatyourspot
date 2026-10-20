export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every week, small business owners in South Florida lose hours to the grind of content creation. The
        real cost is not just the time spent writing, but the opportunities missed while staring at a blank
        screen. When you run a local service or retail business, every minute spent drafting Instagram
        captions or product blurbs is time not spent serving clients, closing sales, or managing staff. The
        pressure to appear everywhere, on social, in Google search, in email, never lets up. Yet the resources
        to do it well just are not there.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most small teams try to solve this content gap in one of two ways. They either take it on themselves,
        squeezing writing into the end of a long day, or they consider hiring outside help. The first approach
        leads to burnout and inconsistent output. The second, hiring a marketing agency or freelancer, often
        comes with a price tag that wipes out the margin on a month’s worth of sales. Neither path scales. As
        a result, content gets pushed off the to-do list. Social feeds go quiet. Google Business Profiles stay
        stuck on generic, half-finished descriptions. Follow-up emails to leads are either never sent or are
        so bland they get ignored.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is not just a matter of marketing polish. When content creation breaks down, so does the lead
        pipeline. If your website and social channels look neglected, local customers assume your business is
        not active or not invested. That means fewer inquiries, lower trust, and a widening gap between you
        and bigger competitors who have the budget for constant updates. The cost is not only in lost leads,
        but also in the stress and frustration of knowing what you should be doing but never having the time
        or energy to do it.</p>
      <p className="text-md text-white shadow-text pt-3">
        Consider the Friday afternoon for a Miami salon owner. She has a list of five updates to make, a
        holiday promotion, a new service description, a batch of Instagram posts, and a couple of follow-up
        emails to last week’s leads. Each piece is small, but together they represent two hours she does not
        have. She puts it off, hoping to catch up over the weekend, but the time never comes. By Monday, the
        opportunity is gone. Multiply this scenario across dozens of small businesses and the pattern is
        clear: content creation is the bottleneck that holds back growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        The problem is not a lack of ideas. Most owners know what they want to say. The real block is the time
        it takes to move from idea to finished, channel-ready content. Every asset, whether it is a 50-word
        Instagram caption or a product description, requires starting from scratch, finding the right words,
        and making sure it fits the brand’s voice. For a team with no dedicated marketing headcount, this
        means content either happens late, happens badly, or does not happen at all.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual content creation also means every channel is a new mountain to climb. A description that works
        for Google may not work for Facebook. An email that sounds personal in English may fall flat in
        Spanish or Haitian Creole, both of which are critical in Miami-Dade. Without the ability to quickly
        adapt content for each audience and platform, owners are forced to pick one channel and let the rest
        slide. The risk is not just stagnation, but falling behind as competitors fill the digital space you
        leave empty.</p>
      <p className="text-md text-white shadow-text pt-3">
        Agency sticker shock is the final nail in the coffin for many small teams. Even the most basic monthly
        package from a local marketing firm can cost thousands. For micro-businesses producing only five or
        ten short pieces a month, this is not justifiable. The result is a cycle of trying to do it all
        in-house, burning out, and then doing nothing. The opportunity cost, lost leads, missed sales, and the
        steady erosion of digital presence, adds up fast. Inconsistent content is not just a marketing
        problem; it is a revenue problem.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-content-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content by Hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-content-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Costs to Keep Doing Content by Hand
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
