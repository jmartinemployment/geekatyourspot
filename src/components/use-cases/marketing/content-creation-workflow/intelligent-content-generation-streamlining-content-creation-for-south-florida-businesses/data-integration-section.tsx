import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataIntegrationSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Before any Intelligent Content Generation system can deliver, the data has to be there, and it has to
        be in shape to use. This is not a technicality. For a small business in South Florida, it means
        pulling together customer lists, product catalogs, service menus, team bios, and brand guidelines that
        are often scattered across spreadsheets, emails, and old websites. The system cannot generate
        accurate, on-brand content if it has to guess what you offer, where you serve, or who your customers
        are. If this step is skipped or rushed, every draft the AI produces will carry the same gaps and
        mistakes.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first phase of the Geek @ Your Spot rollout is a&nbsp;<GlossaryLink slug="data-quality">data
        quality</GlossaryLink>&nbsp;assessment. That means a methodical review: what data do you have, where
        does it live, what’s missing, what’s out of date, and what needs to be standardized? Even the most
        advanced tool, whether it’s Jasper, Koala, or Scalenut, cannot create credible, differentiated content
        if the data behind it is stale or fragmented. The point is not to create a perfect database, but to
        get the essentials right: clean service descriptions, accurate contact details, brand language, and
        up-to-date promotions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration comes next. Here, success depends on connecting your new content engine with the tools you
        already use. For most small businesses, that means plugging into Google Business Profile, a website
        CMS, social media accounts, and email platforms. For example, if you want to push a new blog post
        written in Frase or Writesonic straight to your WordPress site, the integration needs to support it.
        If you need Facebook and Instagram posts to go out on schedule, Hootsuite or Publer should be able to
        pull from your content calendar without manual intervention. When you want to update product
        descriptions across Shopify and Google listings, the AI needs reliable access to your live catalog,
        otherwise, your promotions will go out of sync.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real challenge with integration is not technical setup. It’s mapping the business’s real workflow.
        A retail shop in Miami Beach may have a point-of-sale system, a&nbsp;<Link id="use-cases-marketing-intelligent-content-generation-data-integration-mailchimp" href="/tools/marketing/mailchimp" className="text-[#C83803] hover:underline">Mailchimp</Link>&nbsp;list, and an Instagram
        account, but the data between them rarely matches. The implementation team’s job is to make sure the
        right fields talk to each other and that updates flow in both directions. When a new service is added
        to your booking platform, a system like Koala or Copy.ai should recognize it and pull it into the next
        round of promotions or email campaigns. When a customer leaves a review, the content engine should be
        able to surface that testimonial in new blog posts or landing pages, not leave it buried in Yelp.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data protection matters just as much. Anyword and Castmagic, for example, work best when they can
        access actual customer conversations, call transcripts, or sales notes. But every integration must
        handle private information carefully, no accidental leaks to public channels, no exposure of sensitive
        data to third-party tools. The implementation plan needs to spell out what is shared, who approves it,
        and how updates are reviewed before going live.</p>
      <p className="text-md text-white shadow-text pt-3">
        The payoff is a marketing engine that runs on facts, not guesswork. When the system has access to your
        real offers, your team’s bios, and your most common customer questions, tools like Rytr, Jasper, and
        Scalenut can generate content that sounds like you and sells like you. Your blog posts answer the
        questions your sales team hears every week. Your emails reflect your real promotions and seasonal
        offers. Your Instagram captions reference actual events, not generic holidays. None of this happens by
        accident. It takes a clear plan for&nbsp;<GlossaryLink slug="data-quality">data
        quality</GlossaryLink>&nbsp;and integration, and it takes a team to make sure the system is always
        learning from your business as it grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-data-and-the-integration-a-real-environment-has-to-supply" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data and the Integration a Real Environment Has to Supply
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-data-and-the-integration-a-real-environment-has-to-supply" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data and the Integration a Real Environment Has to Supply
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
