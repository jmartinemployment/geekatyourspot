export default function ImplementationSection() {

  return (
    <section className="min-h-screen bg-[#025E73] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5 place-items-center">
          <div className="col-span-5"></div>
          <div className="col-span-7">
            <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
              Implementation Considerations</h2>
            <p className="text-md text-white shadow-text pt-3">Implementing Marketo requires careful planning and consideration to ensure a smooth and successful deployment. Here
              are some key factors to consider:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>Accelerated Deployment: Marketo offers pre-built connectors and templated setups that can significantly shorten
                the go-live process. These resources help businesses quickly integrate the platform into their existing systems,
                reducing the time and effort required for deployment.</li>
              <li>Data Model Design: A well-thought-out data model is crucial for effective use of Marketo. Businesses need to map
                out their data structures and ensure that the platform aligns with their existing data management practices. This
                involves deciding how to categorize and segment customer data to maximize the platform&#39;s capabilities.</li>
              <li>Workflow and Process Configuration: Configuring workflows and processes in Marketo involves setting up approval
                chains, routing rules, and automation logic specific to the organization&#39;s needs. This customization ensures
                that the platform supports the unique marketing strategies of the business.</li>
              <li>Custom Code and Development: While Marketo does not require extensive custom coding, it offers APIs and other
                tools for businesses that need to develop bespoke solutions. This flexibility allows for tailoring the platform to
                meet specific requirements without compromising its core functionality.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">At Geek At Your Spot, we specialize in bridging the gap for clients by providing expert guidance on these
              considerations. Our consultative approach ensures that businesses implement Marketo in a way that aligns with their
              strategic goals, optimizing their marketing operations and achieving tangible results.</p>
            <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              When to Use</h2>
            <p className="text-md text-white shadow-text pt-3">Marketo is best utilized by businesses looking to enhance their marketing automation and customer engagement
              efforts. Here are some scenarios where Marketo can be particularly beneficial:</p>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>When a business needs to manage large volumes of leads and requires a robust system to score and nurture them
                effectively.</li>
              <li>When personalized and targeted marketing campaigns are essential for improving customer engagement and
                conversion rates.</li>
              <li>When a company requires detailed analytics to measure the performance of its marketing efforts and make
                data-driven decisions.</li>
              <li>When integration with existing CRM systems and other marketing tools is necessary to streamline operations and
                maintain data consistency.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">By understanding the specific needs and challenges of their marketing operations, businesses can determine if
              Marketo is the right tool to help them achieve their objectives. Its comprehensive feature set and flexibility make
              it a valuable asset for any organization looking to optimize its marketing processes.</p>
          </div>
        </div>
      </div >
    </section >
  );
}
