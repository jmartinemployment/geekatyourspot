export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
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
              How is this different from the email marketing I already use?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Most basic campaigns send the same message to everyone on your list. AI-assisted campaigns help you tailor
              content, spot audience groups, and suggest the best times to send. Automation can handle when messages go
              out and what happens next. Your current email tool might already offer some of these features.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How will we measure whether it’s worth the investment?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Decide on the business goal before you start, this could be qualified replies, booked appointments,
              purchases, or another action you can measure. Track your campaign costs and the results that can be clearly
              linked to your emails, compared to your starting point. Engagement numbers are useful for troubleshooting,
              but true value comes from actual business results.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will the emails sound like my business or sound AI-generated?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              AI can help write emails in your style using your examples and business details. For natural, accurate
              messages, you still need to give clear instructions and review the drafts. The goal is for AI to support
              your brand voice, not replace your judgment.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do you prevent AI from making up information?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Use only verified business details, approved offers, and clear content rules. Always review what the AI
              creates before sending it. AI should not make up prices, guarantees, testimonials, or customer stories.
              These steps lower the risk, but human oversight remains necessary.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What customer information do you need? Do I have enough data?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You need real email addresses, subscription choices, and any other info you already collect, like service
              interests, questions, or purchase history. If you have only a little data, you can still do basic audience
              targeting. More detailed personalization needs better customer info. Do not gather extra data just because
              the AI could use it.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
