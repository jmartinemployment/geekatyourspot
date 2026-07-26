import { FAQItem } from "@/types/use-case";

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection() {
  return (
    <section className="min-h-screen bg-[#0C1A26] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-1 gap-x-4 py-5">
          <div className="col-span-1"></div>
          <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
            People Also Ask</h2>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            How to build a lead pipeline?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            Building a lead pipeline involves identifying potential customers and nurturing them until they are ready to buy.
            First, define your target audience. Then, use marketing strategies like content marketing, social media, and email
            campaigns to attract interest. Capture contact information using lead forms and engage leads with personalized
            follow-ups.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            How to create a lead capture form?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            To create a lead capture form, start by deciding what information you need from potential leads, such as name and
            email. Use a simple design to avoid overwhelming users. Ensure the form is easy to find on your website and consider
            offering an incentive for filling it out, like a free eBook or discount.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            How to develop a pipeline?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            Developing a pipeline involves setting up processes for moving leads through different stages until they are ready
            to purchase. Start by mapping out each stage of your sales process. Then, use CRM tools to track lead progress and
            automate communication. Regularly review and refine the pipeline to improve conversion rates.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            What is the lead capture process?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            The lead capture process involves attracting potential customers and collecting their information for follow-up. It
            typically starts with generating interest through marketing efforts, then capturing details via forms or landing
            pages. The information is then used to nurture leads until they are ready to make a purchase.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            How to build a good pipeline?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            To build a good pipeline, ensure it is structured and scalable. Identify key stages from lead awareness to sale
            closure, and use CRM software to manage and track leads. Regularly analyze the pipeline&#39;s performance to
            identify bottlenecks and optimize for efficiency.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            What are the 5 stages of a sales pipeline?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            The 5 stages of a sales pipeline often include: 1) Lead Generation - attracting potential customers, 2) Lead
            Qualification - assessing if leads fit your criteria, 3) Proposal - presenting your offering, 4) Negotiation -
            discussing terms, and 5) Closing - finalizing the sale.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            What are the 5 stages of pipeline?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            The 5 stages of a pipeline generally refer to stages in a process, which can include: 1) Prospecting, 2) Initial
            Contact, 3) Qualification, 4) Proposal, and 5) Closing. Each stage represents a step in moving a lead from initial
            interest to a completed transaction.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            What is a lead pipeline?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            A lead pipeline is a structured process used by businesses to track and manage potential customers as they move
            through the sales process. It helps in organizing leads, ensuring follow-up, and increasing the likelihood of
            converting them into paying customers.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            What are the three types of pipelines?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            The three main types of pipelines include: 1) Sales Pipelines, which track potential sales opportunities, 2)
            Marketing Pipelines, which manage leads generated through marketing efforts, and 3) Project Pipelines, which oversee
            the flow of tasks and projects within an organization.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            How to design a pipeline system?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            Designing a pipeline system requires identifying the key stages and processes your organization needs to track. Map
            out each stage and define the criteria for moving leads through the stages. Use software tools to automate and
            monitor the pipeline, ensuring data is consistently updated and accessible.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            What is the formula for pipeline?
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            The formula for a sales pipeline typically involves calculating the value of potential sales at each stage of the
            pipeline. This is often done by multiplying the probability of closing a deal at each stage by the deal&#39;s
            expected value, helping to forecast potential revenue.
          </p>
          <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">
            How to develop a project pipeline
          </h3>
          <p className="pt-5 text-md font-normal text-white shadow-text">
            To develop a project pipeline, start by outlining the key phases of project development, such as planning,
            execution, and completion. Use project management tools to track progress and allocate resources. Regularly review
            the pipeline to ensure projects are on track and adjust plans as needed.
          </p>
        </div>
      </div>
    </section>
  );
}
