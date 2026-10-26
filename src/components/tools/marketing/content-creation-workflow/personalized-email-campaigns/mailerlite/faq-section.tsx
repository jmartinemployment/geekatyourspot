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
              How does email automation work?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Email automation sends out pre-written emails for you, triggered by certain actions or on a set schedule.
              This means your customers get the right message at the right time, without you having to send each email by
              hand.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need a big list to start automating?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No, you do not need a large list. Automation helps even small businesses connect with every new subscriber
              or customer right away. It keeps your communication consistent and lets you grow your relationships as your
              list expands.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do I measure success?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Success is measured by how well your automated emails meet your goals. For example, if you want more webinar
              signups, track how many people register through your email sequence. If your goal is more sales, look at
              your conversion rates.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What metrics should I track?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
              <li>Open rate</li>
              <li>Click-through rate (CTR)</li>
              <li>Conversion rate</li>
              <li>Unsubscribe rate</li>
            </ul>
            <p className="text-base text-white shadow-text pt-3">
              These numbers show how engaged your audience is and how well your emails are working.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can automation feel personal?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. When you segment your audience and use personalization, your automated emails can feel just as personal
              as ones you send by hand. You can tailor content to each person’s interests or actions, making every message
              relevant.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What’s the difference between a workflow and a campaign?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              A workflow (or automation sequence) is a set of automated emails and actions triggered by something your
              customer does, like signing up or making a purchase. It guides them through a planned journey, such as a
              welcome series. A campaign is a one-time email sent to a list or segment for a specific reason, like a
              holiday sale or a newsletter. Workflows run automatically and keep going, while campaigns are usually sent
              manually for special occasions.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does MailerLite have built-in AI email-writing tools?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. MailerLite includes an AI writing assistant in its drag-and-drop editor. It can generate headlines,
              paragraphs, calls to action, and help rewrite your content. It also helps draft subject lines and
              preheaders.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What can the AI personalize?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              MailerLite’s AI can tailor prewritten text for an individual or a group, including using personalization
              variables. Dynamic emails are available on paid plans. There is a difference between generating copy for an
              audience and using subscriber data to control what each recipient gets.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will it automatically write a completely unique email for every subscriber?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. The AI writing assistant generates text in the editor for you to review and insert into a campaign. It
              does not automatically create a unique email for every recipient at send time. If you need that, the
              workflow needs separate technical validation.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I create different messages for different customer groups?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. MailerLite supports segmentation and personalization. Its paid dynamic-email feature lets you tailor
              campaigns further. AI can help draft messages for each group, and your targeting settings control who
              receives them.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can AI match my brand voice?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You can choose from Natural, Catchy, Professional, or Persuasive tones and give details about your audience,
              style, and goals. Supplying examples helps the AI match your writing style. This is guided generation, not a
              system that permanently learns your brand voice.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I use ChatGPT or Claude with MailerLite?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. MailerLite’s Model Context Protocol (MCP) lets supported AI tools work with your MailerLite account.
              You can draft and schedule campaigns, create groups, analyze results, and set up automations.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the difference between the built-in AI assistant and MCP?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
              <li>The built-in AI assistant generates and improves campaign copy inside the MailerLite editor.</li>
              <li>MCP lets an external AI tool, like ChatGPT or Claude, interact with your MailerLite account.</li>
              <li>The assistant is for writing and editing content. MCP is for broader tasks, such as comparing campaigns or
                creating drafts from outside MailerLite.</li>
              <li>The assistant depends on your plan and credits. MCP depends on account authorization and what your connected
                tool can do.</li>
            </ul>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can AI help build welcome or re-engagement campaigns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              MailerLite supports automated targeted emails. Its homepage shows MCP examples for creating automations and
              re-engagement workflows. This means AI can help set up these campaigns, but it does not run or change your
              marketing strategy on its own.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can AI analyze results and recommend improvements?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Geek @ Your Spot confirms that MailerLite’s MCP connection lets you use tools like ChatGPT and Claude
              to review campaign data and suggest ways to improve. For example, MailerLite can prompt you to compare
              recent campaigns or spot where subscribers leave an onboarding series.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What should I include in an AI prompt?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              MailerLite suggests you include details about your audience, your product or service, the tone you want, and
              the action you want readers to take. There is a 200-character limit for prompts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
