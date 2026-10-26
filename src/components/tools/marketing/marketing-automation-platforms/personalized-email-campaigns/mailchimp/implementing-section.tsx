import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Launching Mailchimp for personalized email campaigns in a small business environment is a structured,
        stepwise process that can be shortened by using Mailchimp’s pre-built connectors, guided templates, and
        phased rollout options. The main factors that speed up go-live are Mailchimp’s drag-and-drop editor, its
        library of automation templates, and its direct integrations with platforms like Shopify, WooCommerce, and
        Canva. This means most teams can move from setup to their first live campaign in days, not weeks, provided
        the right data is available and the initial mapping is handled well.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is connecting Mailchimp to your existing systems. For most small businesses in South Florida,
        this means linking Mailchimp to your ecommerce platform (such as Shopify or WooCommerce), CRM (like
        Salesforce or QuickBooks Online), and website forms. Mailchimp’s integrations are built to be plug-and-play,
        so you do not need a developer to sync customer data, purchase history, or behavioral triggers. This direct
        connection is what allows Mailchimp to automate abandoned cart emails, welcome series, and post-purchase
        follow-ups without manual list exports or uploads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once connected, Mailchimp’s onboarding walks you through importing your contacts, mapping fields (like name,
        email, purchase history), and segmenting your audience. The platform’s guided setup includes templated
        automation flows, such as welcome sequences and cart reminders, so you do not have to build these from
        scratch. For example, a retail business can use a pre-built abandoned cart flow and customize only the
        timing and offer, rather than designing the entire sequence. This cuts hours off the timeline compared to
        manual setup.</p>
      <p className="text-base text-white shadow-text pt-3">
        A phased rollout is the safest way to go live for most small teams. Mailchimp’s free plan allows you to
        validate your campaigns with up to 250 contacts and 500 sends per month, making it practical to test
        messaging, timing, and segmentation on a small group before scaling (<a id={`tools-marketing-personalized-email-campaigns-mailchimp-implementing-source-mailchimp-com${idSuffix}`} href="https://mailchimp.com/pricing/marketing/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Mailchimp</a>,
        as of Oct 25, 2026). If you hit the free plan’s limits, Mailchimp pauses sending but does not lock you out
        of the platform, giving you time to adjust before moving to a paid tier. This avoids the sudden price jumps
        or forced migrations that can derail a rollout with other tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that want to move quickly, Mailchimp’s drag-and-drop email builder and AI-driven content tools
        mean you can launch campaigns without a design or coding background. The platform’s subject line helper and
        generative AI for copywriting give real-time feedback and suggestions, so you do not need to spend hours
        wordsmithing each message. This is especially valuable for small teams that do not have a dedicated
        marketer: you get industry-informed recommendations on subject lines, send times, and content, all built
        into the editor.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing is a key step before any campaign goes live. Mailchimp’s platform lets you send test emails, preview
        dynamic content, and check that all personalization tags render correctly. For every automation, you can
        trigger the sequence yourself to see the full customer journey, ensuring that no step is missed and that
        each message lands as intended. This is not just about catching typos, it is about making sure the right
        customer gets the right message at the right time, every time.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last part of going live is monitoring your first campaigns and making quick adjustments. Mailchimp’s
        analytics dashboard surfaces open rates, <GlossaryLink slug="click-through-rate">click rates</GlossaryLink>,
        and revenue <GlossaryLink slug="marketing-attribution">attribution</GlossaryLink> in real time. The
        platform’s AI-driven recommendations highlight what is working and what needs to be changed, so you do not
        have to dig through reports to find out why a campaign underperformed. For small businesses, this means you
        can iterate quickly, improving each campaign with less guesswork and fewer costly mistakes.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, going live with Mailchimp is faster and less risky when you use its built-in integrations,
        guided templates, and phased approach. Most of the manual work, connecting systems, segmenting lists,
        building automations, and optimizing content, is handled through Mailchimp’s interface. For teams in
        Miami-Dade, Broward, and Palm Beach counties, this means you can shift from planning to live campaigns in a
        fraction of the time it would take with a generic tool or a manual process. The key is to start with a clean
        data import, use Mailchimp’s pre-built assets, and validate on a small group before scaling up.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="going-live-with-mailchimp" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going live with Mailchimp
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="going-live-with-mailchimp-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going live with Mailchimp
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
