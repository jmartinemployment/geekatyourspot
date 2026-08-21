export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-7">
            <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
              Key Capabilities</h2>
            <p className="text-md text-white shadow-text pt-3">Marketo offers a range of powerful features designed to support marketing automation and improve campaign outcomes.
              Here are some of its key capabilities:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Lead Management: Marketo enables businesses to capture, score, and nurture leads effectively. This helps in
                identifying high-quality prospects and moving them through the sales funnel efficiently.</li>
              <li>Email Marketing: The platform provides tools for creating and managing email campaigns, including A/B testing,
                dynamic content, and automated workflows. This ensures that messages are timely, relevant, and personalized.</li>
              <li>Customer Engagement: Marketo facilitates personalized customer interactions across multiple channels, such as
                email, social media, and web. This enhances customer satisfaction and loyalty.</li>
              <li>Analytics and Reporting: Users can access detailed insights into campaign performance, customer behavior, and
                ROI. This data-driven approach helps in optimizing marketing strategies and achieving better results.</li>
              <li>Integration Capabilities: Marketo seamlessly integrates with a variety of third-party applications, including
                CRM systems, social media platforms, and web analytics tools. This integration streamlines workflows and enhances
                data accuracy.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">These capabilities make Marketo a versatile tool for marketers aiming to enhance their campaigns&#39; efficiency
              and effectiveness. By automating key processes and providing valuable insights, Marketo empowers businesses to
              achieve their marketing goals with greater precision and less effort.</p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
