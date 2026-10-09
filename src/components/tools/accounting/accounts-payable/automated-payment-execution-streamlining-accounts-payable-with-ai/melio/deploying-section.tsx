export default function DeployingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Melio in a business environment involves several key steps that ensure a smooth transition
        to automated payment execution. Geek @ Your Spot, as an AI implementation consultancy, plays a crucial
        role in this process, helping businesses integrate Melio seamlessly into their existing systems. The
        process begins with a comprehensive assessment of the current payment workflows and identifying areas
        where Melio can add the most value.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the first steps in deployment is establishing connections with existing accounting software.
        Melio&#39;s pre-built connectors for QuickBooks, Xero, and NetSuite facilitate this integration,
        allowing for a two-way sync of financial data. This ensures that all transactions are recorded
        accurately and that the financial records remain up-to-date without manual intervention. Geek @ Your
        Spot assists in configuring these integrations, ensuring they align with the business&#39;s unique
        processes and requirements.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data mapping and structure are critical during deployment. Businesses need to ensure that their data
        is organized in a way that Melio can efficiently process payments. Geek @ Your Spot provides guidance
        on how to structure data for optimal performance, ensuring that all payment information is captured
        accurately and that recurring payments are set up correctly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another important aspect of deploying Melio is configuring approval workflows. Businesses can set
        payment limitations and terms by vendor, amount, and team member, which helps in sharing
        responsibility while avoiding mistakes. Geek @ Your Spot customizes these workflows to fit the specific
        needs of the business, ensuring that payments are approved and executed efficiently.</p>
      <p className="text-md text-white shadow-text pt-3">
        Training is a vital component of the deployment process. Geek @ Your Spot offers training sessions to
        ensure that the business&#39;s team is comfortable with Melio&#39;s interface and features. This
        training covers everything from setting up payments to leveraging AI tools like Agent Mel for routine
        queries. By equipping the team with the necessary skills, businesses can maximize the benefits of
        Melio and ensure a smooth operational transition.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, Geek @ Your Spot provides ongoing support to address any issues that may arise
        post-deployment. This support ensures that businesses can continue to leverage Melio&#39;s
        capabilities to streamline their payment processes, maintain accurate financial records, and improve
        overall efficiency. With Geek @ Your Spot&#39;s expertise, businesses can confidently adopt Melio and
        transform their payment execution workflows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-melio-in-your-business-environment">
                Deploying Melio in Your Business Environment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="deploying-melio-in-your-business-environment">
                Deploying Melio in Your Business Environment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
