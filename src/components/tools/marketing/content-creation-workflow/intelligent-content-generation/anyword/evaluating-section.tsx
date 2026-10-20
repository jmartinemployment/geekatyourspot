import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deciding if Anyword is the right investment for your small business comes down to three things:
        whether it fits your team’s size and workflow, how well it solves your specific content problems, and
        how its pricing model lines up with your budget and growth plans. Anyword is not a generic writing
        assistant; it is a data-driven platform designed to automate and optimize content for real business
        outcomes. Here is how to weigh it.</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with fit. Anyword is built for teams that need to create and repurpose content across multiple
        channels, social, email, blogs, ads, without a dedicated in-house marketing department. If you are
        running lean, with one or two people handling all marketing, the platform’s automation and predictive
        scoring are what let you compete with larger brands. The system’s persona management and approval
        workflows mean you do not need to hire a copywriter for every audience or campaign. But if your
        business only sends an occasional newsletter or posts on social once a month, the value may not
        justify the setup.</p>
      <p className="text-md text-white shadow-text pt-3">
        Look at your pain points. Anyword’s strongest use case is for businesses stuck in the blank-page
        cycle, wasting hours on each update, or running campaigns that never seem to deliver leads. The
        platform’s predictive performance scoring takes the guesswork out of what to post or send next. It
        will not turn a business with no content strategy into a marketing powerhouse overnight, but it will
        let a small team scale up output, keep messaging consistent, and focus on what works. If your main
        challenge is keeping up with content volume or knowing which messages will actually convert, Anyword
        is a strong fit.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model is straightforward. Anyword offers a free 7-day trial, so you can see how it works
        with your own data and channels before committing. After that, you pay for the platform, there is no
        pay-per-output or metered usage for basic features. The real cost is in the initial setup and
        training: mapping your brand rules, connecting integrations, and teaching the AI with your historical
        data. This is where Geek @ Your Spot adds value, making sure you do not waste time or money on a
        misconfigured system. There are no hidden usage fees, but as with
        any&nbsp;<GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink>, you
        will want to check the vendor’s current published pricing for the latest plans and limits.</p>
      <p className="text-md text-white shadow-text pt-3">
        Judge the total cost of ownership, not just the sticker price. For a small business, the main savings
        come from hours not spent writing, editing, or managing freelancers and agencies. Anyword’s automation
        replaces recurring creative labor with a one-time setup and ongoing platform fee. If your current
        marketing spend includes agency retainers, freelance copywriters, or lost time from staff pulled off
        core duties, compare those costs to a year of Anyword. For most local businesses in South Florida, the
        break-even comes quickly if you are producing content weekly or running multiple campaigns a month.</p>
      <p className="text-md text-white shadow-text pt-3">
        Evaluate the platform’s flexibility. Anyword’s configuration can be updated as your business grows,
        new channels, new products, new customer segments, without a new contract or expensive add-ons. You
        can start with one use case, like social posts or email campaigns, and expand as you see results. If
        your business is likely to pivot or scale, this matters more than finding the cheapest tool for
        today’s needs. The platform’s integrations with tools like HubSpot, Marketo, and Salesforce
        ExactTarget mean you can connect it to your existing stack, avoiding duplicate data entry or siloed
        workflows.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, look at support and implementation. Anyword is self-serve for basic use, but the real value
        comes from a setup that matches your business’s actual processes and goals. Geek @ Your Spot handles
        the heavy lifting, mapping data, training the AI, and configuring automation rules, so your team can
        focus on results instead of troubleshooting. If you are weighing DIY against professional
        implementation, factor in the risk of wasted time or missed opportunities from a poorly configured
        rollout. For most small businesses, the added up-front investment in expert setup pays off in faster
        results and fewer headaches.</p>
      <p className="text-md text-white shadow-text pt-3">
        Anyword suits small businesses that want to look bigger, move faster, and get more from every content
        dollar. If your team is ready to automate content creation and optimization, and you are willing to
        invest in a tailored setup, the platform delivers. If your content needs are minimal or your processes
        are too rigid for automation, a lighter tool or manual approach may be a better fit. Always use the
        trial period to see how it handles your own data and workflows before making the call.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-anyword-on-fit-and-pricing-for-your-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Anyword on Fit and Pricing for Your Business
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-anyword-on-fit-and-pricing-for-your-business" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Anyword on Fit and Pricing for Your Business
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
