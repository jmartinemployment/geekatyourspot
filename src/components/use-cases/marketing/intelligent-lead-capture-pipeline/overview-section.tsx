import Image from "next/image";

export default function OverviewSection() {
  const title = "Automated Accounts Payable";
  const heroSummary = "Revolutionize your financial operations with automated accounts payable solutions that enhance efficiency and accuracy."
  const heroImage = "";


  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/marketing/use-cases/intelligent-lead-capture-pipeline/intelligent-lead-capture-pipeline-0.avif"
                alt="Introduction to Automated Accounts Payable" />
            </div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
                Transforming Lead Generation with Intelligent Automation
              </h2>
              <p className="text-md text-white shadow-text pt-3">
                In the world of lead generation, manual data entry often becomes a bottleneck. Sales teams spend countless hours
                tediously entering information, only to encounter data errors that can cost businesses potential clients. The
                frustration of these repetitive tasks not only slows down the sales process but also increases the risk of missing
                out on valuable opportunities. This is where the Intelligent Lead Capture Pipeline makes a difference. By automating
                the lead capture process, businesses can minimize errors and free up their sales teams to focus on building
                relationships and closing deals.</p>
              <p className="text-md text-white shadow-text pt-3">
                The Intelligent Lead Capture Pipeline leverages AI to streamline the lead generation process. It captures data
                accurately and efficiently, reducing the time spent on manual tasks. This means sales teams can now allocate more
                time to strategic activities that directly contribute to revenue growth. The result? Faster lead processing, fewer
                errors, and an overall increase in sales potential.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
