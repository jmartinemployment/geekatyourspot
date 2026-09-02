import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function ImplementationSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-9 w-full">
            <h2
              className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
              id="implementation-considerations"
            >
              Implementation Considerations
            </h2>
          </div>
          <div className="col-span-12">
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Implementing Apollo for <GlossaryLink slug="machine-learning">AI</GlossaryLink>-powered <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> works best when teams plan around deployment speed, data quality, workflow automation, and extensibility. With the right preparation, Geek At Your Spot can help you integrate Apollo without disrupting your current sales operations.
            </p>
            <h3
              className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
              id="accelerated-deployment"
            >
              Accelerated Deployment
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Apollo is built for fast go-live thanks to pre-built connectors for popular <GlossaryLink slug="crm">CRM</GlossaryLink> platforms and a user-friendly interface that requires minimal training. Because it integrates with existing systems rather than replacing them, Geek At Your Spot can guide you through setup, documentation, and onboarding to minimize infrastructure changes and accelerate time to value.
            </p>
            <h3
              className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
              id="data-model-design"
            >
              Data Model Design
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Accurate scoring depends on a well-designed data model that maps the right lead attributes and maintains consistency across sources. Apollo offers flexible mapping and analytics to refine criteria over time, so teams should identify key scoring signals, clean and normalize data, and let Geek At Your Spot help tailor the model to your business objectives.
            </p>
            <h3
              className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
              id="workflow-configuration"
            >
              Workflow and Process Configuration
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Apollo automates lead routing, approval chains, and follow-up tasks, but those workflows need clear rules to be effective. Define routing criteria based on score thresholds, configure automated alerts and notifications, and establish a review cadence so Geek At Your Spot can help you adjust processes as your pipeline and business needs evolve.
            </p>
            <h3
              className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text"
              id="custom-development"
            >
              Custom Code and Development
            </h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              While Apollo is highly configurable and often eliminates the need for custom code, it also supports extensions and custom development for unique requirements. When you need niche integrations, bespoke business logic, or custom dashboards and reporting, Geek At Your Spot can build on Apollo&apos;s <GlossaryLink slug="api">APIs</GlossaryLink> to extend functionality without compromising stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
