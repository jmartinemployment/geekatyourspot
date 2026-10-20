import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small business owners in South Florida are not short on AI writing tools to choose from. The field is
        crowded:&nbsp;<Link id={`tools-marketing-intelligent-content-generation-rytr-comparing-jasper${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper" className="text-[#0B162A] hover:underline">Jasper</Link>,&nbsp;<Link id={`tools-marketing-intelligent-content-generation-rytr-comparing-writesonic${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic" className="text-[#0B162A] hover:underline">Writesonic</Link>,&nbsp;<Link id={`tools-marketing-intelligent-content-generation-rytr-comparing-copy${idSuffix}`} href="/tools/marketing/content-creation-workflow/intelligent-content-generation/copy" className="text-[#0B162A] hover:underline">Copy.ai</Link>, and others all promise to help with Intelligent Content
        Generation. But for a lean team with five to ten pieces of content to produce each month, an Instagram
        caption here, a Google Business Profile update there, the difference between these platforms is not
        just feature count or brand recognition. It’s about fit for purpose, cost, and how much work actually
        disappears from your week.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr stands out for one reason: it is built for the micro-business or solo operator who cannot justify
        $49–$182 per month for content automation, but still needs to keep a steady stream of digital assets
        live. Rytr’s pricing starts at $9 per month, a figure that removes the friction from the buying
        decision for most local teams. There is no need to debate whether this tool will pay for itself, you
        can buy a month’s access for less than a lunch meeting. The free tier, with a 10,000-character monthly
        cap, is enough for a handful of short posts, making it viable for even the smallest operation to test
        and use at scale without a credit card.</p>
      <p className="text-md text-white shadow-text pt-3">
        Where other platforms focus on long-form blog posts or enterprise workflows, Rytr is optimized for
        high-frequency, low-volume tasks: social captions, product blurbs, email follow-ups, and Google
        Business Profile descriptions. Its core workflow centers on pre-built templates, over 40 of them, each
        targeted at a specific micro-asset. This is not a blank-canvas writing tool that expects you to know
        what you want to say. Instead, Rytr asks for a few details, lets you pick a tone and language, and
        generates ten variations in seconds. For a business owner who just wants three Instagram posts and a
        fresh About Us paragraph before the end of the day, that is a major shift.</p>
      <p className="text-md text-white shadow-text pt-3">
        Rytr’s approach to tone and language is another point of separation. While some competitors offer tone
        sliders and a few language options, Rytr supports over 30 languages and 20+ preset tones, with the
        ability to customize further. This is especially relevant in Miami-Dade, Broward, and West Palm Beach,
        where Spanish, Haitian Creole, and English may all be required for the same campaign. You do not need
        to pay extra or switch platforms to reach each segment of your market, Rytr handles it in one
        sequence. The tone controls mean you can generate a playful social caption, a professional LinkedIn
        post, and a casual follow-up email from the same core message, without rewriting by hand.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those comparing Rytr to
        full-service&nbsp;<GlossaryLink slug="marketing-automation" className="text-[#0B162A] hover:underline">marketing
        automation</GlossaryLink>&nbsp;suites, the distinction is clear. Rytr does not claim to manage your
        entire&nbsp;CRM,
        run analytics, or automate cross-channel ad spend. It is not a replacement for a full-stack marketing
        agency or a tool for content strategists looking to orchestrate multi-stage campaigns with integrated
        reporting. What it does is remove the “blank page” bottleneck and the repetitive writing tasks that
        eat up evenings and weekends. For a small business, this is not a limitation, it is the right fit for
        the job at hand.</p>
      <p className="text-md text-white shadow-text pt-3">
        The other side of the comparison is with the DIY approach: writing everything yourself, or hiring a
        local freelancer or agency. The cost difference is stark. Agencies quote $1,000 or more per month for
        even a simple content retainer. Freelancers may be more affordable, but still require rounds of
        briefing, review, and payment, none of which is instant or predictable. Rytr’s automation means you
        can generate, revise, and publish in one sitting, for a fixed, low monthly fee. For many, that is the
        difference between actually keeping your social and web presence fresh, and letting it go stale for
        another quarter.</p>
      <p className="text-md text-white shadow-text pt-3">
        Some platforms pitch themselves as “all-in-one” solutions, but for a small business just trying to
        keep up with basic digital marketing, complexity is not a selling point. Rytr’s value is in its
        minimal training curve and its focus on the core tasks that move the needle, captions, descriptions,
        and follow-ups. It is not the tool for a 20-person marketing team looking to coordinate a national
        campaign. It is the tool for the salon owner, the local accountant, the boutique manager, or the solo
        realtor who needs to look present online without hiring a staff or learning a new discipline.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Rytr’s place among content tools is defined by its low barrier to entry, targeted feature
        set, and focus on the actual jobs that small businesses need to get done. It does not try to be
        everything for everyone. It is the “get it done” tool for those who need to publish, not plan. For the
        small business owner in South Florida, that is the difference between a tool that sits unused and one
        that pays for itself in the first week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-rytr-stacks-up-against-other-content-tools-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Rytr Stacks Up Against Other Content Tools for Small Businesses
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-rytr-stacks-up-against-other-content-tools-for-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Rytr Stacks Up Against Other Content Tools for Small Businesses
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
