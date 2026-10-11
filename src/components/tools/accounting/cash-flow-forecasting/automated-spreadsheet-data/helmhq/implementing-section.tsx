import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Helmhq is a structured yet flexible process that ensures seamless integration into your
        existing environment. The journey begins with a thorough assessment of your current systems and workflows,
        identifying key areas where Helmhq can deliver the most impact. This initial stage is crucial as it sets the
        foundation for a smooth transition, minimizing disruptions and maximizing efficiency.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the standout features that shortens the go-live timeline is Helmhq&#39;s pre-built connectors. These
        connectors facilitate seamless integration with popular platforms like WordPress, Webflow, and Wix, among
        others. By leveraging these ready-made integrations, businesses can bypass the often time-consuming custom
        development phase, accelerating the overall deployment process.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation process follows a phased rollout strategy. This approach allows for incremental
        deployment, ensuring each phase is fully operational before moving to the next. It begins with the core
        functionalities that deliver immediate value, such as automation of content operations
        and&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>. As these systems
        stabilize, additional features and integrations are gradually introduced, allowing teams to adapt and
        optimize their workflows progressively.</p>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq&#39;s templated setup further expedites the go-live process. By providing a framework that can be
        tailored to specific business needs, it reduces the time spent on configuring the system from scratch. This
        templated approach ensures consistency across different deployments while allowing for customization where
        necessary to meet unique business requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the go-live process, Geek @ Your Spot plays a pivotal role in bridging the gap between your
        current systems and the new capabilities offered by Helmhq. Their expertise in configuration, data mapping,
        and integration ensures that the transition is not only smooth but also aligns with your strategic goals.
        Their hands-on support during this phase is invaluable, providing guidance and troubleshooting to address
        any challenges that may arise.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-the-go-live-process-with-helmhq">
                Streamlining the Go-Live Process with Helmhq
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="streamlining-the-go-live-process-with-helmhq">
                Streamlining the Go-Live Process with Helmhq
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
