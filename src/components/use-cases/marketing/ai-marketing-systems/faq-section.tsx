import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

export default function FAQSection() {
  return (
    <section className="min-h-screen bg-[#0C1A26] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 py-5">
          <div className="col-span-6 py-10">
            <h2 className="text-white pt-3 lg:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask</h2>
          </div>
          <div className="col-span-6 mx-auto">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              width={128}
              height={128}
              className="text-white"
            />
          </div>
          <div className="col-span-6 pt-5">
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="what-is-ai-business-workflow">What is AI business workflow?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">An AI business workflow is a series of steps where artificial intelligence automates tasks and processes to improve
              efficiency. This can include data analysis, customer interactions, and marketing efforts, all designed to save time
              and reduce manual work. AI workflows allow businesses to streamline operations, make data-driven decisions, and
              enhance customer experiences.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="how-are-small-businesses-using-ai-for-marketing">How are small businesses using AI for marketing?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">Small businesses use AI for marketing by automating customer service with chatbots, personalizing email campaigns,
              and optimizing ad placements. AI helps in analyzing customer data to create targeted marketing strategies, leading
              to better engagement and higher conversion rates. This approach helps small businesses compete with larger companies
              by providing efficient and cost-effective marketing solutions.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="what-is-the-ai-marketing-process">What is the AI marketing process?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">The AI marketing process involves using artificial intelligence to collect and analyze data, automate marketing
              tasks, and personalize customer interactions. It includes steps like identifying target audiences, setting goals,
              creating content, and using AI tools to optimize campaigns. This process helps businesses deliver more relevant
              content, improve customer experiences, and increase return on investment.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="what-is-an-ai-workflow-in-simple-terms">What is an AI workflow in simple terms?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">An AI workflow is a set of automated steps powered by artificial intelligence to complete tasks. In simple terms,
              it’s like having a virtual assistant that handles repetitive or complex processes, freeing up time for more
              strategic work. AI workflows can be applied to various business functions, making operations more efficient and
              reducing human error.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="how-do-i-start-ai-marketing">How do I start AI marketing?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">To start AI marketing, begin by identifying your marketing goals and the areas where AI can add value. Choose AI
              tools that fit your needs, such as chatbots for customer service or analytics platforms for data insights. Implement
              these tools in your marketing strategy and monitor their performance to make adjustments as needed. Training your
              team on these tools will also help maximize their effectiveness.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="what-is-the-3-3-3-rule-in-marketing">What is the 3 3 3 rule in marketing?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">The 3 3 3 rule in marketing is not a widely recognized concept and may refer to a specific strategy or guideline
              unique to certain businesses or contexts. It is important to clarify the context in which this rule is applied to
              understand its relevance and application.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="which-ai-tool-is-best-for-small-business">Which AI tool is best for small business?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">The best AI tool for a small business depends on its specific needs and goals. For example, HubSpot offers
              comprehensive marketing automation, while Hootsuite is great for social media management. Google Analytics provides
              valuable insights into customer behavior. Each tool serves different purposes, so businesses should evaluate their
              objectives and choose tools that align with their marketing strategies.</p>
          </div>
          <div className="col-span-6 pt-5">
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="what-is-the-30-rule-for-ai">What is the 30% rule for AI?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">The 30% rule for AI is often mentioned in the context of setting realistic expectations for AI implementation
              success. It suggests that businesses should expect AI to automate or improve about 30% of tasks initially, while the
              rest still requires human oversight and input. This helps in planning for gradual integration and managing change
              effectively.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="why-do-85-of-ai-projects-fail">Why do 85% of AI projects fail?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">Many AI projects fail due to unclear objectives, lack of proper data, and insufficient understanding of AI
              capabilities. Other reasons include inadequate planning, poor change management, and not aligning AI projects with
              business goals. Successful AI implementation requires clear goals, quality data, and ongoing evaluation to ensure
              the technology meets the desired outcomes.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="what-is-the-golden-rule-of-marketing">What is the golden rule of marketing?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">The golden rule of marketing is to understand and meet the needs of your customers. This involves knowing your
              audience, delivering value, and building strong relationships. By focusing on customer satisfaction and engagement,
              businesses can foster loyalty and drive growth. AI can assist in this process by providing insights and
              personalizing customer interactions.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="what-are-the-top-5-marketing-strategies">What are the top 5 marketing strategies?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">The top 5 marketing strategies include content marketing, social media marketing, email marketing, search engine
              optimization (SEO), and pay-per-click (PPC) advertising. These strategies help businesses reach their target
              audience, engage customers, and drive sales. AI tools can enhance these strategies by providing data insights,
              automating tasks, and personalizing customer experiences.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text-dark-blue" id="what-is-the-70-20-10-rule-in-marketing">What is the 70 20 10 rule in marketing?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text-dark-blue">The 70 20 10 rule in marketing suggests that 70% of a business&#39;s marketing efforts should focus on what is
              currently working, 20% on new strategies that could improve performance, and 10% on experimenting with innovative
              ideas. This approach helps in maintaining a balance between tried-and-tested methods and new opportunities for
              growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
