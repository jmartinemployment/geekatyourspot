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
              What makes Anyword different from generic AI writing tools?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Anyword stands out because it is built for performance. Unlike standard tools that just generate
              text, Anyword uses A/B-tested data and predictive analytics. Its Data-driven Editor scores and
              evaluates copy before it goes live, predicting conversion success with up to 82% accuracy for
              specific audiences, marketing channels, and campaign goals.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Anyword Content Intelligence?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Anyword Content Intelligence reviews your live, published content and compares it to Anyword’s
              marketing performance data. It highlights ways to optimize your copy right away and guides
              future content rules across your main marketing channels.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which marketing use cases does Anyword support natively?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Anyword offers modules for SEO blog content, personalized website messaging, social media asset
              creation, and automated email generation. Each is designed to help you scale content and target
              your ideal customers.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I apply a custom Brand Voice to my AI content?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Anyword has a Brand Voice hub where you set your messaging rules, audience profiles, and
              guidelines. This keeps your content consistent across all marketing teams.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Anyword integrate with other AI applications?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Anyword includes MCP connectors so you can use its performance predictions, talking points,
              and brand voices directly in tools like ChatGPT, Notion, and Google Gemini.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is there an Anyword Chrome Extension?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. The Chrome Extension lets you use performance scoring and copy optimization in your web
              workflows to increase sign-ups, leads, and ad conversions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Anyword provide an API?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Anyword has a Gen-AI Content Performance API. It lets developers add performance
              predictions, A/B insights, and retrieval-augmented generation to their own business apps or
              agents.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is customer data used to train public AI models?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. Anyword keeps your data isolated. Your company’s inputs are never used to train third-party
              AI models, so your data and intellectual property stay protected.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What compliance certifications does Anyword hold?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Anyword&#39;s infrastructure meets SOC 2, ISO 27001, GDPR, and HIPAA requirements. It also
              offers enterprise security features such as single sign-on and role-based permissions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
