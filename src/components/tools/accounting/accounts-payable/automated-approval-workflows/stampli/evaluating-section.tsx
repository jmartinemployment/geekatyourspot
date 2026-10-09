import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Stampli for automating your approval workflows, the fit for your business is crucial.
        Stampli excels in streamlining&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;(AP) processes,
        particularly for small businesses looking to reduce manual workload. It offers dynamic approval
        workflows that adapt to your existing systems without overwhelming your team with complexity. This
        adaptability is key for businesses that want to maintain flexibility while enhancing efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        Stampli&#39;s pricing model is not explicitly detailed in the available data, but it&#39;s important
        to consider the overall cost of ownership. This includes setup time, training, and ongoing usage fees.
        For small businesses, the affordability of Stampli can be weighed against the time savings and error
        reductions it provides. Unlike some competitors that may require extensive IT resources for setup and
        maintenance, Stampli is designed to integrate smoothly with existing systems, minimizing additional
        costs.</p>
      <p className="text-md text-white shadow-text pt-3">
        In evaluating Stampli, it&#39;s also essential to compare it with other tools that offer automated
        approval workflows. While Stampli provides robust features like configurable invoice approval routing
        and AI-powered invoice processing, tools like ApprovalMax and Bill also offer competitive solutions.
        These alternatives might focus more on specific integrations or feature sets, so understanding your
        business&#39;s unique needs is key to making the right choice.</p>
      <p className="text-md text-white shadow-text pt-3">
        Stampli&#39;s predefined approval routing stands out by automatically directing documents to the right
        reviewers based on business rules and spending authority. This feature reduces the manual intervention
        required in traditional AP processes, which often leads to errors and delays. The automation ensures
        that approvals are documented and auditable, providing a single source of truth for your financial
        operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering a move from manual to automated workflows, Stampli offers a significant
        reduction in processing time and administrative burden. By automating repetitive tasks, Stampli frees
        up staff to focus on strategic activities, potentially increasing productivity and reducing costs.
        This transition not only improves operational efficiency but also enhances compliance and visibility
        across the organization.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-stampli-for-automated-approval-workflows">
                Evaluating Stampli for Automated Approval Workflows
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-stampli-for-automated-approval-workflows">
                Evaluating Stampli for Automated Approval Workflows
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
