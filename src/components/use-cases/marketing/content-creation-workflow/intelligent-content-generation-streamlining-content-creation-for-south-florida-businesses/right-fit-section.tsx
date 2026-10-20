import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Content Generation is the right choice when a small business needs to publish consistent,
        high-quality marketing content across channels but cannot afford to build out a full creative team or
        keep up with agency costs. If your team is stuck in the bottleneck described earlier, where client
        work always displaces marketing, the blank page never gets filled, and your digital presence lags
        behind competitors, this system is designed to break that cycle. It is built for lean teams in
        Miami-Dade, Broward, and Palm Beach who need to look and operate like agencies without the payroll or
        project management overhead.</p>
      <p className="text-md text-white shadow-text pt-3">
        But it is not the answer for every business or every situation. Intelligent Content Generation works
        when you have clear business objectives for your content, some existing data to pull from (even if it
        is just your own service descriptions and past emails), and the ability to review and approve outputs
        quickly. If your team has no time or interest in reviewing drafts, or if you need highly regulated,
        technical, or legal copy that must be signed off by a compliance team, this approach will disappoint.
        AI-generated content still needs a human in the loop, someone who knows the local market, can spot a
        nuance the model misses, and is willing to update business facts as things change.</p>
      <p className="text-md text-white shadow-text pt-3">
        If you are producing two Instagram posts and one Google Business Profile update a month, Rytr’s low
        monthly cost and template catalog make it the better fit. When the main friction is the blank page,
        not scale, Rytr’s pre-built templates for social captions, short emails, and product blurbs are enough
        to get over the hump. For small teams looking to automate higher-volume, multi-channel output, blog
        articles, emails, and ad campaigns, tools like Jasper, Writesonic, and Copy.ai bring more firepower,
        but they also require more setup, more data, and a willingness to standardize your messaging.</p>
      <p className="text-md text-white shadow-text pt-3">
        If your business is highly visual, boutiques, restaurants, property managers, Imagine is the answer
        for producing a steady flow of branded images and short video assets. It is not a quick fix for
        businesses that have no approved product photos, brand guidelines, or willingness to review creative
        drafts. If you have a pile of recorded calls, webinars, or training videos gathering dust, Castmagic
        turns that &quot;lost time&quot; into blog posts, email sequences, and social posts, but it cannot
        invent your marketing voice from scratch. You still need to guide the output, pick what matters, and
        review the results.</p>
      <p className="text-md text-white shadow-text pt-3">
        Some businesses are tempted to try every tool at once. That usually backfires. The right fit is a
        system that matches your actual workflow and the volume you need. If you only need two blog posts a
        month, Scalenut or Koala can produce those efficiently with a workflow that draws from your real
        service details and local expertise. If you are running paid ads on top of organic content, Anyword’s
        predictive scoring and audience-specific copy optimization can save real dollars, but only if you have
        the traffic and volume to benefit
        from&nbsp;<GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B
        testing</GlossaryLink>.</p>
      <p className="text-md text-white shadow-text pt-3">
        In short, Intelligent Content Generation is the right call when your business is losing time and leads
        to manual work, when your real constraint is bandwidth (not ideas), and when you have enough data and
        buy-in to review outputs as part of your weekly routine. It is the wrong call if you are looking for a
        magic bullet that removes all human intervention, if you do not have a clear business objective for
        your content, or if you are not ready to maintain the system once it is up and running. The businesses
        that see the most value are the ones that treat this as a process change, not just a new tool to bolt
        onto the old way of working.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the team in the opening story, the right call was clear: their workload and lead flow demanded a
        content system that could run in the background, turning real customer questions and business updates
        into weekly posts, emails, and offers, without pulling them off billable work. They were able to step
        up their digital presence and keep their focus on clients, because the system fit their actual
        workflow and ambition.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-intelligent-content-generation-is-the-right-call-and-when-it-isnt" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Intelligent Content Generation Is the Right Call, and When It Isn’t
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
              <h2 id="when-intelligent-content-generation-is-the-right-call-and-when-it-isnt-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Intelligent Content Generation Is the Right Call, and When It Isn’t
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
