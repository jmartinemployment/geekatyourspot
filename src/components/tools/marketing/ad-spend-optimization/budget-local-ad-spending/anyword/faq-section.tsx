export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the difference between A/B testing and Anyword’s performance prediction?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Traditional A/B testing measures how your copy performs only after it is published, which means you end up
              spending budget on ads that may not work. Anyword’s Performance Prediction Engine uses algorithms trained on
              billions of marketing data points to score and estimate conversion potential before you spend any money on
              live ads.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Anyword&apos;s prediction accuracy compare to generic models like ChatGPT?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Generic models like ChatGPT and DeepSeek score about 56% to 62% in predicting which Facebook ad copy will
              get better click-through rates. Anyword’s API and Core Platform reach 82% accuracy because they use
              specialized reinforcement learning trained on structured marketing data, not just general web text.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What elements should a small business prioritize testing first with Anyword?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Small businesses should start by testing ad headlines and email subject lines. These are the elements with
              the highest impact on conversions and the widest range of possible results, so getting AI scores for them
              first helps avoid wasting budget.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Anyword?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Anyword is an AI writing platform focused on marketing content and predicting how well that content will
              perform. It offers copy generation, brand voice controls, audience targeting, and predictive scoring to help
              marketers create and evaluate messaging.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Anyword work?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You enter your content brief, brand voice, target audience, and marketing goals. Anyword then generates
              content variations and predicts how well each will perform. It can also use your past marketing results to
              improve future content.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much does Anyword cost?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Anyword’s pricing page lists these entry-level plans: Starter at $49 per month or $39 per month with annual
              billing for one seat, and Data-Driven at $99 per month or $79 per month with annual billing for three seats.
              Starter includes 50 performance predictions and Data-Driven includes 100. Pricing and allowances can change;
              these are the figures listed on the official page reviewed.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Anyword have a free trial?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Anyword offers a seven-day free trial with a 2,500-word limit. This trial limit is separate from the
              unlimited copy generation available on paid plans.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Anyword’s Predictive Performance Score?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Anyword’s Predictive Performance Score is an AI-generated estimate of how likely a piece of copy is to
              engage or convert its intended audience. Geek @ Your Spot notes that Anyword compares your copy with similar
              marketing content to help you pick promising variations before you publish. This score is a prediction, not
              an actual campaign result or a guarantee of conversions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Anyword learn from my existing marketing campaigns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Anyword can use your past advertising, social, email, and website results to improve the content it
              generates and help you find what messaging works. Geek @ Your Spot confirms that Anyword’s Google
              Performance Max documentation describes dashboards for connected channels and training on your company’s own
              performance data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
