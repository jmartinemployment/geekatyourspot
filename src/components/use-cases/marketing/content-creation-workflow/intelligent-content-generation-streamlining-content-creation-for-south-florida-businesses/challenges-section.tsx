import Link from "next/link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The real friction in content creation for small businesses isn’t a lack of ideas or ambition. It’s the
        stack of operational failures that show up in daily work, making even basic marketing tasks feel like
        heavy lifting. The blank page is the first wall. Owners and office managers sit down to update their
        Google Business Profile or social feed but end up staring at an empty box because there’s no time to
        write, no one to delegate to, and the last post is months old. For micro-businesses or solo operators,
        writing a handful of Instagram captions a month becomes a major drain, not because it’s hard but
        because there’s no process, no template, and everything starts from zero.</p>
      <p className="text-md text-white shadow-text pt-3">
        Even when someone gets past the blank screen, the next trap is repetitive, shallow content. Service
        descriptions on websites stay as one-liners for years because nobody has time to flesh them out, and
        what’s published could belong to any business in town. Emails intended to follow up with leads either
        never go out or are so generic they disappear into the void, “Just checking in!” does nothing to move
        the sale forward. Seasonal or event-based content, like Black Friday offers or posts about local
        happenings, always comes late or not at all. The result is a digital presence that looks abandoned,
        even for businesses doing great work behind the scenes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Teams that do try to scale up content quickly hit new bottlenecks. Social pages get abandoned after a
        burst of activity because the process is too manual and creative burnout sets in. Owners may get one
        post out, but tailoring it for each network, Instagram, LinkedIn, Facebook, becomes a time sink, so
        they end up posting the same thing everywhere or skipping channels altogether. Social media managers
        who want to track which posts are driving real leads get stuck guessing, since they can’t see which
        content is actually working and which is just filling space.</p>
      <p className="text-md text-white shadow-text pt-3">
        For larger teams, the problems multiply. Content gets produced in isolation: one person writes a blog
        post, another handles Facebook, and someone else does email, but there’s no connection between them.
        Articles get started and never finished, or worse, stitched together from unrelated AI outputs that
        don’t match the business’s real voice or facts. The result is a pile of half-finished drafts,
        conflicting descriptions, and messaging that changes from one channel to the next. Even
        well-intentioned efforts to use AI tools often backfire, businesses enter the same background
        information into every prompt, get copy that invents services or credentials, or end up with articles
        that never answer the customer’s main question.</p>
      <p className="text-md text-white shadow-text pt-3">
        On the visual side, the pain is just as bad. Owners with a real product or service have no easy way to
        produce campaign visuals, short videos, or even simple, on-brand images. Each new campaign or offer
        means starting from scratch, explaining the brand again, and hoping someone on the team can cobble
        together something that looks professional. Images and videos often don’t match the message or the
        season, and if a business wants to refresh product shots or create variants for different platforms,
        the cost and effort are too high. The end result is a scattered, inconsistent digital storefront, one
        that does nothing to help the business stand out or convert visitors into customers.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real failure isn’t just inefficiency. It’s the erosion of trust and opportunity. When every
        content task is a manual project, the business falls behind on local events, misses leads, and lets
        competitors with more resources take up all the digital oxygen. The business’s real expertise, answers
        to customer questions, unique processes, and hard-won knowledge, never makes it past the inbox or the
        job site. And the team, already stretched thin, spends more time fighting the process than growing the
        business. That’s the state of play for most small businesses in Miami-Dade, Broward, and Palm Beach
        that haven’t overhauled their&nbsp;<Link id={`use-cases-marketing-intelligent-content-generation-challenges-ai-content-creation-workflow${idSuffix}`} href="/use-cases/marketing/ai-content-creation-workflow" className="text-[#C83803] hover:underline">content creation workflow</Link>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-content-creation-breaks-down-for-small-teams-today" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Content Creation Breaks Down for Small Teams Today
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-content-creation-breaks-down-for-small-teams-today-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Content Creation Breaks Down for Small Teams Today
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
