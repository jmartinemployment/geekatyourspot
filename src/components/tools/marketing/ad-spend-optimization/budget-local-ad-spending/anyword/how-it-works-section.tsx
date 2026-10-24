import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Anyword turns ad copywriting from a guessing game into a controlled, data-driven workflow. The platform
        generates, tests, and grades every ad message before it ever goes live, so small businesses spend their
        budget only on copy proven to resonate with their audience. Each step is built to save time, reduce manual
        effort, and make every dollar count.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with a simple input. You enter basic details about your product or service, no need for
        lengthy creative briefs or technical know-how. Anyword then prompts you to select the type of asset you want
        to create, such as a Facebook ad, Google Search headline, landing page, or email subject line. This
        selection sets the structure and length of the copy to fit the requirements of the chosen channel. For small
        teams, this means no more wasted time formatting headlines or guessing what each platform wants.</p>
      <p className="text-base text-white shadow-text pt-3">
        After you choose your channel, Anyword uses its AI engine to instantly generate multiple variations of your
        message. Each version is tuned to the tone and style you specify, whether that’s friendly, direct, urgent,
        or formal. The platform can match your brand’s voice using pre-set options or by learning from sample text
        you provide. This step ensures your ads sound consistent and professional, even if you do not have a
        dedicated copywriter on staff.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real value comes in the next phase: predictive scoring. As soon as Anyword creates copy variations, it
        assigns each one a Predictive Performance Score. This score is not a random guess, it is based on analysis
        of millions of dollars in historical ad spend and real conversion outcomes. The score tells you which
        message is most likely to drive clicks, calls, or signups for your specific audience and channel. For a
        local business with a $15-a-day budget, this means you can filter out weak copy before you pay for a single
        impression.</p>
      <p className="text-base text-white shadow-text pt-3">
        You can click into each score to see detailed insights. The platform shows how each copy version is expected
        to perform compared to similar ads in your industry. You can switch the scoring dataset to match your
        business type, so a plumber in Miami can see performance benchmarks specific to home services, not just
        general ads. Anyword also provides demographic breakdowns, such as which age or gender group is most likely
        to respond to each headline. This helps you tailor your message even further, focusing your spend on the
        segments that matter most.</p>
      <p className="text-base text-white shadow-text pt-3">
        If a copy variant’s score is low, you don’t have to settle. Anyword gives you a “boost performance” option,
        which rewrites the message to improve its predicted results. You choose whether to keep the copy close to
        your original or let the AI be more creative. The tool iterates as many times as you need, so you can keep
        refining until you hit a score you are comfortable with.</p>
      <p className="text-base text-white shadow-text pt-3">
        When you are ready to launch, you select the winning variation and push it live. Because every headline and
        description has already been validated against real-world data, you avoid the trap of spending your budget
        on messages that fall flat. For teams without the time or budget for manual A/B testing, this is a major
        shift: you get the benefits of high-volume testing without the cost or delay.</p>
      <p className="text-base text-white shadow-text pt-3">
        Anyword’s workflow does not stop at ads. The same process applies to landing pages, emails, and blog posts.
        Each asset is scored and optimized before publishing, and you can use the platform’s persona builder to
        create customer profiles in a click. The AI can then tailor copy to address specific pain points or
        motivations, making your campaigns more relevant to local South Florida audiences.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that want to go deeper, Anyword offers benchmarking tools. By integrating your own marketing
        data, you can compare new copy to your past campaigns. The system ranks each new message against your
        historical winners, so you know if you are improving or repeating old mistakes. This <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink> is especially useful for small businesses running multiple campaigns a year but lacking
        the resources for detailed analytics.</p>
      <p className="text-base text-white shadow-text pt-3">
        The end result is a step-by-step process where every ad, email, or landing page is created, scored, and
        refined before it ever reaches your audience. Small teams no longer have to risk their entire week’s budget
        on untested ideas. Instead, they get a repeatable method for producing high-performing copy, tuned for their
        audience and validated before a single click is paid for.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-anywords-step-by-step-process-validates-ad-copy-before-you-spend-a-dollar" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword’s step-by-step process validates ad copy before you spend a dollar
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-anywords-step-by-step-process-validates-ad-copy-before-you-spend-a-dollar-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Anyword’s step-by-step process validates ad copy before you spend a dollar
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
