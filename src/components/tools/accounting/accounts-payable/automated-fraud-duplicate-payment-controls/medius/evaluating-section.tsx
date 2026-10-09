import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Medius for Automated Fraud &amp; Duplicate Payment Controls, small businesses in
        Miami-Dade, Broward, and West Palm Beach counties should focus on how the platform aligns with their
        specific needs. Medius offers a comprehensive solution that integrates seamlessly with existing
        systems, making it a strong contender for businesses seeking to enhance their&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Medius excels in identifying and preventing invoice fraud through advanced&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;and&nbsp;
        <GlossaryLink slug="machine-learning">machine learning</GlossaryLink>. These technologies analyze
        large volumes of data in real-time, spotting patterns and anomalies that might indicate fraudulent
        activity. This capability is crucial for businesses looking to protect their financial assets from
        sophisticated cyber threats. The platform continuously learns from new data, improving its detection
        capabilities over time, which means it becomes more effective as it processes more transactions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing models for Medius are typically flexible, accommodating the varying needs of small to
        medium-sized businesses. While specific pricing details are not disclosed, businesses can expect a
        model that scales with their operational needs, providing cost-effectiveness as usage increases. This
        scalability is a significant advantage for businesses anticipating growth or fluctuations in
        transaction volume.</p>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating Medius, businesses should also consider the platform&#39;s integration capabilities.
        Medius is designed to work with existing&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems,
        reducing the need for extensive overhauls or disruptions to current workflows. This integration
        ensures that businesses can implement Automated Fraud &amp; Duplicate Payment Controls without
        significant downtime or additional infrastructure costs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, Medius offers a robust set of features tailored to enhance fraud detection and payment
        accuracy. These include anomaly detection, real-time alerts, and automated vendor onboarding
        workflows. Each feature is designed to streamline processes and reduce the likelihood of errors or
        fraudulent activities slipping through unnoticed.</p>
      <p className="text-md text-white shadow-text pt-3">
        In comparison to other tools, Medius stands out for its comprehensive approach to fraud prevention.
        While other platforms may offer similar features, Medius&#39;s ability to continuously learn and
        adapt makes it particularly effective. Businesses should weigh this adaptability alongside their
        specific needs and existing systems to determine if Medius is the right fit.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-medius-for-automated-fraud-duplicate-payment-controls">
                Evaluating Medius for Automated Fraud &amp; Duplicate Payment Controls
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-medius-for-automated-fraud-duplicate-payment-controls">
                Evaluating Medius for Automated Fraud &amp; Duplicate Payment Controls
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
