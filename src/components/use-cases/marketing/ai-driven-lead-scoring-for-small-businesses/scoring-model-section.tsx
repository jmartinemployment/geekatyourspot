import Link from "next/link";

export default function ScoringModelSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Small businesses often face challenges with identifying the most promising leads due to limited resources and time constraints. Without a clear scoring model, sales teams may waste time on leads that will not convert, leading to reduced efficiency and missed opportunities. A simple 100-point scoring model helps prioritize efforts by evaluating leads based on specific criteria that align with your business goals.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Creating a scoring model begins with defining what makes a lead valuable. This involves assessing various factors such as fit, intent, and engagement. The model assigns points to each factor, leading to a total score out of 100. This approach offers a straightforward way to determine lead quality, enabling sales teams to focus on high-potential prospects.
      </p>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        An effective lead scoring model consists of both positive and negative criteria. Positive criteria add points, indicating a higher likelihood of conversion, while negative criteria subtract points, signaling potential disqualification. Let&apos;s explore how to structure these criteria.
      </p>
      <h3 id="define-positive-criteria" className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Define Positive Criteria
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Positive criteria in a scoring model highlight attributes that increase the likelihood of a lead converting into a customer. These include factors such as geographic fit, business type alignment, and specific engagement actions.
      </p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Fit - Inside service area: +20 points</li>
        <li>Fit - Matches target service/business type: +20 points</li>
        <li>Intent - Requests pricing, quote, demo, or consultation: +25 points</li>
        <li>Intent - Books an appointment: +30 points</li>
        <li>Behavior - Visits a high-intent page twice in 7 days: +10 points</li>
        <li>Engagement - Replies to email/SMS or calls back: +15 points</li>
      </ul>
      <h4 id="integrating-data-with-tools" className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Integrating Data with Tools
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Utilizing AI tools like&nbsp;
        <Link id="tools-marketing-active-campaign" href="/tools/marketing/active-campaign" className="text-[#0B162A] hover:underline">
          ActiveCampaign
        </Link>
        &nbsp;can streamline the integration of these positive criteria. ActiveCampaign&apos;s capability to track signals and automate tasks allows businesses to seamlessly incorporate lead scoring into their marketing workflows.
      </p>
      <h3 id="incorporate-negative-criteria" className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Incorporate Negative Criteria
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Negative criteria help identify leads that may not be worth pursuing, allowing teams to focus their efforts elsewhere. These criteria typically involve factors that indicate a lower chance of conversion.
      </p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Disqualification - Outside service area: −30 points</li>
        <li>Disqualification - Invalid contact information/spam indicator: −50 points</li>
      </ul>
      <h4 id="automate-identification-with-ai" className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Automate Identification with AI
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        AI tools such as&nbsp;
        <Link id="tools-marketing-apollo" href="/tools/marketing/Apollo" className="text-[#0B162A] hover:underline">
          Apollo
        </Link>
        &nbsp;and&nbsp;
        <Link id="tools-marketing-6sense" href="/tools/marketing/6sense" className="text-[#0B162A] hover:underline">
          6sense
        </Link>
        &nbsp;can help automate the identification of negative criteria. These tools use machine learning to flag leads that fall outside desired parameters, ensuring the sales team focuses on qualified prospects.
      </p>
      <h3 id="evaluate-and-adjust-scoring-model" className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Evaluate and Adjust Scoring Model
      </h3>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Once your scoring model is implemented, it&apos;s crucial to evaluate its effectiveness regularly. This involves monitoring conversion rates and adjusting criteria as needed to reflect changes in business priorities or market conditions.
      </p>
      <h4 id="using-feedback-for-continuous-improvement" className="text-white pt-2 text-[4vw] sm:text-2xl lg:text-2xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Using Feedback for Continuous Improvement
      </h4>
      <p className="pt-3 text-md font-normal text-white shadow-text">
        Feedback from sales and marketing teams can provide valuable insights into the model&apos;s performance. Regular analysis of lead conversion data helps refine the scoring criteria, ensuring the model remains aligned with business objectives. Tools like&nbsp;
        <Link id="tools-marketing-pipedrive" href="/tools/marketing/pipedrive" className="text-[#0B162A] hover:underline">
          Pipedrive
        </Link>
        &nbsp;and&nbsp;
        <Link id="tools-marketing-lead-squared" href="/tools/marketing/lead-squared" className="text-[#0B162A] hover:underline">
          LeadSquared
        </Link>
        &nbsp;play a crucial role in facilitating this continuous improvement by offering detailed analytics and reporting capabilities.
      </p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center">
            </div>
            <div className="col-span-7">
              <h2 id="build-a-simple-100-point-scoring-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Build a simple 100-point scoring model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center">
            </div>
            <div className="col-span-7">
              <h2 id="build-a-simple-100-point-scoring-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Build a simple 100-point scoring model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
