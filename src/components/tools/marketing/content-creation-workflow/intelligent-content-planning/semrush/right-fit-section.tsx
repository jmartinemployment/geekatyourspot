import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Semrush is designed for small local businesses that need to make every marketing hour count. If your
        team is small, maybe just one or two people handling all your content, email, and social, you are
        exactly who Semrush is built for. The platform&#39;s workflow is simple enough for non-technical users
        but deep enough to give you an edge over larger competitors with bigger budgets. Its strength is in
        removing the manual grind from intelligent content planning, not just the writing, so you can focus on
        growth instead of guesswork.</p>
      <p className="text-md text-white shadow-text pt-3">
        The businesses that see the most value are those who want to tie their content directly to what their
        local audience is searching for. If you are tired of writing blogs that go unread, or your emails keep
        missing the mark, Semrush gives you the data and automation to change that. You do not need to be an
        SEO expert, the platform routes your workflow automatically, flags issues with prioritized fixes, and
        helps you repurpose content across every channel without extra tools. For teams who want to understand
        why traffic dropped this week or which competitor is suddenly ranking, Semrush delivers those answers
        in real time, not after the fact.</p>
      <p className="text-md text-white shadow-text pt-3">
        Semrush is also a fit for teams who want to manage everything from one place. If you are juggling
        multiple tools for keyword research, scheduling, and reporting, Semrush centralizes it all. Its
        integrations with Google Analytics, Search Console, and Google Ads mean you do not have to switch tabs
        or export spreadsheets just to see what is working. The platform is modular: you can start with the
        essentials and add more as you grow, without the risk of overpaying for features you do not use.
        Pricing starts at $139.95 per month for the SEO Toolkit, with Semrush One (which bundles the AI
        Visibility Toolkit) at $199.95 per month. Local listing management is available at $60 per location,
        so even a single-location business can afford a professional setup.</p>
      <p className="text-md text-white shadow-text pt-3">
        There are cases where Semrush is not the answer. If your business is a large enterprise with dozens of
        locations, highly complex workflows, or needs deep technical SEO for multiple global domains, you may
        outgrow the small business toolkits and need the enterprise suite. Semrush offers those, but they are
        priced and configured differently. On the other end, if your only need is to generate a quick social
        caption or a one-off blog post with no strategy or tracking, a lightweight AI writer or a free
        scheduling tool might be enough. Semrush is built for small businesses that want to win on search and
        AI discovery, not for teams looking for a &quot;set it and forget it&quot; tool or a barebones writing
        app.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step for a business in Miami-Dade, Broward, or West Palm Beach is not just to buy software
        but to get Semrush configured for their real workflow. This is where Geek @ Your Spot LLC comes in. The
        right implementation is not just about turning on features, it is about mapping your data, connecting
        your existing tools, and setting up the rules that match how your business already works. A team that
        tries to &quot;DIY&quot; Semrush may get the basics running, but they risk missing out on the
        platform&#39;s biggest strengths: automation, brand consistency, and actionable insights. Geek @ Your Spot LLC specializes in building the&nbsp;<GlossaryLink slug="data-model">data
        models</GlossaryLink>&nbsp;and integrations that let Semrush deliver on its promise, so you get a
        content engine that matches your team&#39;s size, your local market, and your growth goals.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small team already stretched thin, the difference shows up in the first month: fewer hours lost
        to manual planning, more content actually seen by customers, and a real understanding of what drives
        results. The right fit is not about features alone, it is about whether the platform adapts to your
        business, your audience, and your local market. Semrush, when set up by a partner who knows your
        environment, does exactly that.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link id={`tools-marketing-intelligent-content-planning-semrush-right-fit-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Walk me through your current process from the moment someone says &#39;we need a piece of content on X&#39; to the moment it goes live. Where does the process typically stall?</li>
        <li>Who is actually doing the writing and optimization? Is it an in-house generalist, a dedicated copywriter, or a rotating group of freelance contractors?</li>
        <li>When local customers look for your services online, are you fighting head-to-head against massive corporate players with huge budgets, or are you mostly competing with other local independent businesses?</li>
        <li>How critical is immediate search visibility (SEO and AI Search summaries) to your quarterly revenue goals versus staying top-of-mind on social media channels?</li>
        <li>Are you creating content strictly for a traditional company blog, or are you looking to turn these insights into short-form videos, email newsletters, and localized social media campaigns?</li>
        <li>How much does your target audience&#39;s behavior shift by neighborhood or culture? For example, do you need to alter your topic strategy between a corporate Brickell audience and a luxury Palm Beach demographic?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-gets-the-most-from-semrush-and-when-to-look-elsewhere" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Gets the Most from Semrush, and When to Look Elsewhere
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-gets-the-most-from-semrush-and-when-to-look-elsewhere-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Gets the Most from Semrush, and When to Look Elsewhere
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
