import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Content Planning makes sense for small teams in South Florida when their bottleneck is not
        just writing speed, but the chaos that comes from guessing what to create, how to coordinate it, and
        why it matters. If your team is losing hours every week to manual planning, scattered spreadsheets,
        and rewriting content for every channel, then this approach is built for you. It is not for every
        situation. If your marketing is light, say one blog a month and some sporadic social posts, and you
        are not trying to win new business or grow traffic, the overhead of rolling out a full intelligent
        planning system will not pay off. The cost is not just the tool. It is the time you spend mapping your
        business goals, cleaning up your data, and changing how your team works. For a one-person operation,
        or for teams who only need the basics, a Notion board or a simple calendar can be enough.</p>
      <p className="text-md text-white shadow-text pt-3">
        The right fit for Intelligent Content Planning is a small business with a real need to show up in
        search, attract leads, and coordinate across channels, where the current workflow means missed
        deadlines, rework, or lost opportunities. If your team keeps circling back to the same planning
        problems, or if you are burning out trying to keep up with competitors who seem to publish everywhere
        at once, this is the inflection point where the investment pays off. HyperWrite stands out in settings
        where staff are stuck rewriting the same kinds of emails or proposals, or where context switching
        between browser tabs and apps kills focus. Its inline, predictive writing and voice-matching features
        make it a fit for small teams who need to sound consistent and respond fast without losing accuracy.</p>
      <p className="text-md text-white shadow-text pt-3">
        MarketMuse is the right call if your business is already producing content but never seems to rank for
        anything that drives leads. If you have tried keyword research tools and ended up fighting for phrases
        you cannot win, MarketMuse’s personalized difficulty and topical authority analysis help you avoid
        those traps. This is not for the business that just wants to publish for the sake of activity; it is
        for teams that need to know which topics their competitors missed and where they can actually break
        through. If you have no content footprint yet, or if you are not planning to build one, MarketMuse’s
        advanced mapping is overkill.</p>
      <p className="text-md text-white shadow-text pt-3">
        Scalenut is for the local business that needs to break out of traditional Google-only thinking and be
        cited in AI-driven platforms like ChatGPT, Gemini, or Perplexity. If your traffic is flat or dropping,
        and you keep hearing that your brand is invisible in AI answers, Scalenut’s cluster strategy and AI
        visibility tracking are the right fit. This is especially useful if your business has multiple
        locations, or if you need to dominate specific service or geographic niches, like tech consultancies
        targeting Brickell or Fort Lauderdale. If your entire business is word-of-mouth and you do not care
        about digital visibility, Scalenut’s value is limited.</p>
      <p className="text-md text-white shadow-text pt-3">
        Hootsuite is the call when your team is drowning in social media chaos, random posting times, missed
        trends, and no system for approvals. If you are tired of last-minute social posts and want to know
        what is trending locally, Hootsuite’s AI-powered insights and automated scheduling are a strong fit.
        The platform shines when you need to keep brand voice consistent across many contributors and avoid
        the risk of off-brand or unapproved posts. For teams managing only one or two channels, or those with
        no compliance or approval needs, Hootsuite may be more platform than you require.</p>
      <p className="text-md text-white shadow-text pt-3">
        Semrush is the answer for small businesses guessing at what to write or burning time repurposing
        content for each channel. When you cannot afford to waste resources on blogs that never rank,
        Semrush’s search intelligence and&nbsp;<GlossaryLink slug="content-repurposing">content
        repurposing</GlossaryLink>&nbsp;tools help you create and adapt content that matches both what your
        audience wants and what search engines reward. If you are not interested in ranking or expanding your
        digital footprint, and your content is only for current clients, the full stack of Semrush features
        may be more than you need.</p>
      <p className="text-md text-white shadow-text pt-3">
        This approach is not a fit for businesses looking for a silver bullet or a shortcut. The teams who see
        Intelligent Content Planning deliver are ready to invest in setting clear business goals, cleaning up
        their data, and changing how their people work. If you are not willing to make those shifts, or if the
        business is not at the growth stage where content can drive real value, then a lighter touch is safer.
        For those who are ready, the payoff is a system that scales content, cuts wasted time, and positions
        your business to be found not just by search engines, but by every answer engine your customers trust.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-intelligent-content-planning-is-the-right-move-and-when-it-is-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Intelligent Content Planning Is the Right Move, and When It Is Not
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
              <h2 id="when-intelligent-content-planning-is-the-right-move-and-when-it-is-not" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When Intelligent Content Planning Is the Right Move, and When It Is Not
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
