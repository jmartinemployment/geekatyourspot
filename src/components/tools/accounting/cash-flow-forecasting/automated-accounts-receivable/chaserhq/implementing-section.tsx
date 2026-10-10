import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing Chaserhq in a small business environment doesn&#39;t have to be a lengthy or complicated
        process. With pre-built connectors and a templated setup, Chaserhq streamlines the transition from manual to
        automated accounts receivable management. This efficiency is crucial for businesses in Miami-Dade, Broward,
        and West Palm Beach counties, where time and resources are often limited.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation process begins with a thorough assessment of the existing systems. Chaserhq integrates
        seamlessly with platforms like Xero and Stripe, minimizing disruption to your current operations. This
        compatibility means that businesses can maintain their existing financial workflows while enhancing them
        with automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next, a phased rollout ensures that the transition to Chaserhq is smooth and manageable. Initial phases
        focus on integrating core functionalities like automated invoicing and payment reminders. This phased
        approach allows businesses to adapt gradually, reducing the risk of errors and ensuring that the team is
        comfortable with the new system.</p>
      <p className="text-md text-white shadow-text pt-3">
        A key component of Chaserhq&#39;s implementation is its user-friendly interface, which requires minimal
        training for staff. This ease of use shortens the go-live timeline significantly. Employees can quickly
        learn to navigate the system, allowing them to focus on more strategic tasks rather than being bogged down
        by manual processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout the implementation, support from Geek @ Your Spot ensures that any challenges are addressed
        promptly. Their expertise in&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;implementation for small
        businesses means that they can provide tailored solutions that fit the unique needs of your business. This
        partnership not only accelerates the implementation process but also ensures that Chaserhq is configured to
        deliver maximum value.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerating-implementation-with-chaserhq">
                Accelerating Implementation with Chaserhq
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="accelerating-implementation-with-chaserhq">
                Accelerating Implementation with Chaserhq
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
