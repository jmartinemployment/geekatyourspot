import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Transitioning to Zamp&#39;s&nbsp;<GlossaryLink slug="tax-compliance">tax
        compliance</GlossaryLink>&nbsp;platform is designed to be swift and seamless, minimizing disruption to
        your business operations. The key to this efficiency lies in Zamp&#39;s pre-built connectors and
        templated setup processes, which significantly shorten the time to go-live. The implementation process
        is phased, ensuring each stage is completed with precision and care.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step involves a comprehensive review of your current tax setup. Zamp&#39;s team evaluates
        existing systems and identifies the necessary integrations. With pre-built connectors for major
        platforms like Shopify, NetSuite, and QuickBooks, the integration phase is expedited. This means less
        time spent on custom development and more on ensuring your data flows smoothly between systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, Zamp&#39;s templated setup guides the configuration of your tax compliance processes. These
        templates are tailored to accommodate the specific needs of small businesses in Miami-Dade, Broward, and
        West Palm Beach counties, ensuring compliance with local regulations. This reduces the complexity of
        setting up new processes from scratch, allowing your team to focus on core business activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        The phased rollout approach further enhances the implementation process. By breaking down the transition
        into manageable segments, Zamp ensures that each component is thoroughly tested and validated before
        moving to the next stage. This methodical approach reduces the risk of errors and ensures a smooth
        transition to the new system.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the process, Zamp provides dedicated support to address any issues that arise. Their team of
        tax specialists is available to assist with troubleshooting and to ensure that your system is up and
        running efficiently. This level of support is crucial in maintaining continuity and preventing any
        disruptions to your tax compliance operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the streamlined implementation process means that businesses can be live on Zamp within a
        short timeframe, often within a week. This rapid deployment allows businesses to quickly benefit from
        Zamp&#39;s comprehensive compliance solutions, reducing the burden of managing complex tax regulations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="going-live-with-zamp-streamlined-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going Live with Zamp: Streamlined Implementation
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="going-live-with-zamp-streamlined-implementation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going Live with Zamp: Streamlined Implementation
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
