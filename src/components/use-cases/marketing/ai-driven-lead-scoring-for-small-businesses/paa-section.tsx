import Link from "next/link";

export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#023059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-12 w-full">
            <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="people-also-ask">
              People Also Ask&nbsp;<span className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">?</span>
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-is-lead-scoring">What is lead scoring?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Lead scoring is a method used to rank potential customers by assigning them scores based on their behavior and characteristics. This process helps businesses prioritize leads that are more likely to convert into sales. By focusing on high-scoring leads, companies can improve their marketing efficiency and sales outcomes.
            </p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-does-lead-scoring-work-in-a-crm">How does lead scoring work in a CRM?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              In a CRM, lead scoring works by using data from customer interactions and demographics to assign scores to leads. This data is then used to categorize leads into different levels of interest or readiness to purchase. Tools like&nbsp;
              <Link id="tools-marketing-pipedrive" href="/tools/marketing/pipedrive" className="text-[#C83803] hover:underline">
                Pipedrive
              </Link>
              &nbsp;automate this process, helping businesses focus on leads that are more likely to convert, thus saving time and resources.
            </p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-to-calculate-lead-score">How to calculate lead score?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              To calculate a lead score, businesses typically assign points to different actions and characteristics of a lead. For example, visiting a pricing page might score higher than opening an email. These points are summed to give a total score, reflecting the lead&apos;s potential value. Many businesses use CRM tools like&nbsp;
              <Link id="tools-marketing-apollo" href="/tools/marketing/Apollo" className="text-[#C83803] hover:underline">
                Apollo
              </Link>
              &nbsp;to automate and refine this scoring process.
            </p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-to-use-ai-for-lead-scoring">How to use AI for lead scoring?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              AI can enhance lead scoring by analyzing vast amounts of data quickly and identifying patterns that may not be evident to humans. Tools such as&nbsp;
              <Link id="tools-marketing-active-campaign" href="/tools/marketing/active-campaign" className="text-[#C83803] hover:underline">
                ActiveCampaign
              </Link>
              &nbsp;utilize AI to predict lead behavior, allowing businesses to focus on the most promising leads. This results in more efficient marketing efforts and higher conversion rates.
            </p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="why-score-leads">Why score leads?</h3>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Scoring leads helps businesses prioritize their efforts on the most promising prospects, which can lead to higher sales and better resource allocation. By understanding which leads are most likely to convert, businesses can tailor their marketing strategies accordingly. Using platforms like&nbsp;
              <Link id="tools-marketing-lead-squared" href="/tools/marketing/lead-squared" className="text-[#C83803] hover:underline">
                LeadSquared
              </Link>
              &nbsp;ensures that marketing and sales teams focus on high-value opportunities, ultimately leading to increased revenue and improved customer relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
