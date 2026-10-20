import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rytr is built for speed, but that doesn’t mean you can skip thinking about how your content is
        structured. The first decisions you make about data inputs, templates, and language settings shape how
        well the platform fits your business. Geek @ Your Spot guides clients through these choices to avoid
        headaches later, especially when you want to scale from simple captions to more complex assets like
        email campaigns or multi-language content.</p>
      <p className="text-md text-white shadow-text pt-3">
        The starting point is always the use case. Rytr’s workflow is template-driven: you pick a use case
        (social caption, ad, product description, bio, follow-up email), then feed it the minimum required
        input. For a caption, that might be a product name and a mood; for a bio, a few key facts about the
        business or owner. The platform handles the rest, generating content that fits the structure of the
        template. The mapping here is simple: your business data goes into the fields the template expects.
        There’s no need to build a new schema or map fields across multiple systems. This is a real advantage
        for small teams that don’t have a technical admin on staff.</p>
      <p className="text-md text-white shadow-text pt-3">
        Language and tone are the two biggest mapping choices up front. Rytr lets you set a default language,
        English, Spanish, Haitian Creole, or any of 30+ others, and switch as needed for each asset. For South
        Florida businesses, this matters: you can generate a Google Business Profile blurb in English, a
        Facebook post in Spanish, and an SMS in Haitian Creole, all in one pass. Tone is just as flexible. You
        choose from over 20 preset tones (professional, casual, playful, and more), or define your own. Geek @
        Your Spot makes sure these defaults match your brand voice from day one, so you don’t end up with
        content that feels off-brand or generic.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling and approval workflows depend on how you structure your content calendar. Rytr doesn’t
        force you into a rigid system. You can generate a month of posts, review them in bulk, and schedule
        them for release on your preferred platforms. The data mapping here is about aligning Rytr’s output
        with your publishing process. If you use a spreadsheet to track posts, Geek @ Your Spot sets up Rytr
        so you can export drafts in the format you need. If you use a third-party scheduler, Rytr’s output is
        ready to drop in, no extra formatting required.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams that need to personalize content by segment, say, different email versions for different
        customer groups, the key mapping decision is how you feed Rytr your audience data. The platform
        doesn’t require a full&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;integration to get
        started. You can provide basic audience details (segment, language, product interest) as input fields,
        and Rytr generates tailored content for each. Geek @ Your Spot helps you set up these data flows so
        you can scale from one-size-fits-all messaging to true personalization, without building a new data
        pipeline.</p>
      <p className="text-md text-white shadow-text pt-3">
        The last piece is keeping your content organized as you grow. Rytr’s template system means every asset
        has a clear structure and can be regenerated or tweaked as your business changes. If you launch a new
        service or product, you update the template input and generate new copy in seconds. Geek @ Your Spot’s
        role is to make sure your templates and data inputs stay clean and consistent, so you don’t end up
        with a tangle of mismatched content down the line. The goal is always the same: get content out fast,
        keep it on-brand, and make it easy to adapt as your business evolves.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-rytr-handles-data-structure-and-mapping-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Rytr Handles Data Structure and Mapping from Day One
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-rytr-handles-data-structure-and-mapping-from-day-one" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Rytr Handles Data Structure and Mapping from Day One
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
