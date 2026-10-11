import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When assessing automated spreadsheet data solutions, small businesses in Miami-Dade, Broward, and West Palm
        Beach often consider multiple platforms. Helmhq stands out by offering a comprehensive suite of features
        that streamline operations, integrate seamlessly with existing systems, and provide robust support for
        content management and SEO optimization. Its capability to automate complex workflows without requiring
        additional hires is a significant advantage for businesses looking to scale efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq competes with other tools that offer similar automation capabilities, like Cash Flow Frog and Float,
        which are known for their focus
        on&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow
        forecasting</GlossaryLink>. However, Helmhq offers a more integrated approach, combining content management,
        SEO, and analytics within a single platform. This integration means that businesses do not have to juggle
        multiple applications or face the challenges of syncing data across disparate systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of Helmhq&#39;s key differentiators is its ability to maintain consistency across all content outputs.
        Its centralized content calendar allows for seamless planning, scheduling, and tracking, reducing the risk
        of errors and ensuring that content strategies align with business goals. This feature is particularly
        beneficial for agencies and small businesses that manage multiple clients or locations, as it supports
        scalability without increasing complexity.</p>
      <p className="text-md text-white shadow-text pt-3">
        While other tools may offer similar features, Helmhq&#39;s integration with platforms like WordPress,
        Webflow, and Wix enhances its utility for businesses heavily reliant on CMS platforms. Additionally, its
        Google Analytics and Search Console integrations provide valuable insights into content performance and
        search visibility, allowing businesses to make data-driven decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses prioritizing content consistency and SEO, Helmhq&#39;s AI-driven capabilities, such
        as&nbsp;<GlossaryLink slug="predictive-analytics" className="text-[#0B162A] hover:underline">predictive
        analytics</GlossaryLink>&nbsp;and automated content generation, offer a level of sophistication that many
        competitors lack. These features enable businesses to adapt quickly to market changes and maintain a
        competitive edge in their digital marketing efforts.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, while there are several tools available for automating spreadsheet data and forecasting cash
        flow, Helmhq&#39;s comprehensive feature set and seamless integrations make it a compelling choice for small
        businesses aiming to enhance efficiency and scale operations. Its ability to streamline content management
        and provide actionable insights through integrated analytics sets it apart from more narrowly focused
        solutions.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-helmhq-among-competing-solutions">
                Evaluating Helmhq Among Competing Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-helmhq-among-competing-solutions">
                Evaluating Helmhq Among Competing Solutions
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
