import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Upfront data structure and mapping decisions are the foundation for getting real value from Anyword.
        Small businesses often underestimate how much their existing content, audience data, and brand rules
        shape the output of an AI-driven platform. Anyword is only as smart as the data you give it, and the
        way you organize that data from the start determines how quickly you see results and how well the
        content matches your goals.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first mapping decision is which channels and data sources to connect. Anyword’s integrations cover
        major marketing platforms, email marketing, CRMs, social media, and ad networks. The platform pulls in
        past campaigns, performance metrics, and customer profiles. For a business that runs Facebook ads,
        LinkedIn posts, and HubSpot email campaigns, connecting all three means Anyword can analyze what
        messaging, formats, and audience segments have actually worked. That data feeds the AI’s
        recommendations, so you are not starting from scratch.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is audience segmentation. Anyword lets you define customer personas based on demographics,
        purchase history, or engagement patterns. The more granular you are, segmenting by age, gender,
        location, or even specific pain points, the more personalized the AI’s content suggestions become. If
        your business has a mix of local clients and broader online leads, you can map these as separate
        audiences. Anyword will then generate and score content variants for each, so you are not wasting time
        or budget on one-size-fits-all messaging.</p>
      <p className="text-base text-white shadow-text pt-3">
        Brand guidelines are another critical structure to set up at the start. Anyword supports explicit
        mapping of your tone of voice, approved word lists, and key messaging pillars. This is not just about
        uploading a PDF of your brand book. You enter rules directly into the platform, what language to use
        or avoid, which topics to emphasize, even how to handle compliance or sensitive claims. Once set,
        these rules apply to all content generated, across every channel. For teams that have struggled with
        inconsistent messaging or off-brand posts, this mapping step locks in consistency from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        Content templates and workflow rules are mapped up front as well. Anyword’s templated approach means
        you can standardize how blog posts, emails, or ads are structured. You decide what sections every post
        must include, what calls to action to use, and how content moves from draft to approval to publish.
        This mapping is especially valuable for small teams with limited oversight, once the workflow is
        defined, the AI follows it every time, reducing errors and missed steps.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="data-quality">Data quality</GlossaryLink>&nbsp;also matters. Anyword’s predictive
        scoring and optimization features rely on clean, complete data. If your campaign history is full of
        duplicates, missing values, or outdated contacts, the AI’s suggestions will be less accurate. Geek @ Your Spot LLC helps clients assess and clean their data before importing it. This upfront work pays off in
        more precise targeting and higher-performing content from the start.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Connect every relevant marketing channel and data source, not just one or two.</li>
        <li>Segment your audience with detail, age, gender, location, purchase history, or custom tags.</li>
        <li>Map brand guidelines as actionable rules in Anyword, not just as reference documents.</li>
        <li>Standardize content templates and workflow steps for each content type.</li>
        <li>Clean and validate your campaign and contact data before importing.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        The payoff for getting these mapping decisions right is clear. Your AI-generated content is targeted,
        on-brand, and ready to publish with minimal review. Your team spends less time fixing errors or
        rewriting off-target drafts. And because Anyword’s predictions are built on your own data, the
        platform gets smarter and more effective with every campaign you run.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-mapping-and-structure-decisions-set-the-stage-for-anywords-success" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Mapping and Structure Decisions Set the Stage for Anyword’s Success
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
              <h2 id="how-data-mapping-and-structure-decisions-set-the-stage-for-anywords-success-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Mapping and Structure Decisions Set the Stage for Anyword’s Success
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
