import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The decision to build a lead enrichment and predictive scoring pipeline is not a fit for every small
        business, every time. It is a strong move when you are sitting on a real volume of inbound traffic
        from the right geography and vertical, but you are missing too many of those opportunities because you
        cannot see or prioritize them. It is also the right answer when your sales team is burning hours on
        manual research, chasing dead ends, or fighting through switchboards to get to decision makers, and
        you know that every minute not spent selling is costing you pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        But this approach is not a cure-all. If your website has little traffic, or traffic mostly from
        outside your service area, no enrichment tool or scoring model will manufacture pipeline out of thin
        air. If you have not yet dialed in your ideal customer profile, if you do not know which industries,
        company sizes, or buyer roles are actually worth your team’s time, then predictive scoring will only
        automate the noise. For a business that closes most of its deals through personal referrals or
        in-person networking, the return from automating digital lead capture is limited. You cannot automate
        what does not exist.</p>
      <p className="text-md text-white shadow-text pt-3">
        For South Florida businesses seeing regular local demand but watching good-fit visitors bounce, the
        right pipeline changes the game. This is where the local specificity of tools like Apollo, Factors,
        Lusha, Snitcher, and Leadfeeder comes into play. Apollo is a fit if you are struggling to get verified
        contact information and your team wastes hours on the phone with the wrong people; it injects clean
        mobile numbers and fresh emails so your reps can skip the switchboard. Lusha is the answer if your
        challenge is bulk, turning thousands of raw, outdated contacts into a working list of real decision
        makers in seconds, rather than days. Snitcher and Leadfeeder are the right call if the problem is
        timing: you know companies are visiting your site, but sales never hears about it until it is too
        late. These tools surface the exact companies on your site, which pages they viewed, and when they
        showed up, so your team can act before interest goes cold. If you are running targeted digital
        campaigns but cannot see which clicks turn into real pipeline, Factors connects the dots, tying ad
        spend to closed revenue and flagging which accounts are heating up now.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the other hand, if your business is still figuring out product-market fit, or if the only visitors
        to your website are competitors and job seekers, this is not the moment to invest in predictive
        scoring. Wait until you have a steady stream of the right visitors, then automate. If
        your&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;is a mess, or if sales and marketing cannot
        agree on what &quot;qualified&quot; means, you will want to fix the foundations first. Predictive
        models are only as good as the data and definitions you feed them. The best pipeline in the world
        cannot rescue a business from unclear goals, broken process, or a lack of real demand.</p>
      <p className="text-md text-white shadow-text pt-3">
        For the twelve-person service business in West Palm Beach that knows its best leads are coming through
        the website but cannot reach them fast enough, building this pipeline is the difference between
        hitting quota and burning out the sales team. For the three-person consulting shop still living off
        referrals, adding automation will only add noise. The fit comes down to readiness: real demand, enough
        volume to justify automation, and clarity about what a good lead looks like. When those are in place,
        the investment in enrichment and scoring pays off in time saved, deals closed, and a sales team
        finally spending its days on the right work.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-lead-enrichment-and-predictive-scoring-are-the-right-move-and-when-they-are-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Lead Enrichment and Predictive Scoring Are the Right Move, and When They Are Not
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
              <h2 id="when-lead-enrichment-and-predictive-scoring-are-the-right-move-and-when-they-are-not" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Lead Enrichment and Predictive Scoring Are the Right Move, and When They Are Not
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
