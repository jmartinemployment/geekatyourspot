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
              What can ActiveCampaign personalize beyond a subscriber’s first name?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Geek @ Your Spot notes that ActiveCampaign can personalize more than just a first name. It can deliver
              different content to different audience segments, trigger messages based on customer actions, and adjust
              delivery times for each contact. The platform uses customer data and engagement to build segments and tailor
              communications.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does it write personalized emails automatically?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              ActiveCampaign’s AI content generator can draft email copy from a prompt or summarize content from a website
              or blog. You can ask it to change the tone or length and edit the draft. However, this does not mean each
              subscriber gets a fully unique email. Drafting is separate from recipient-level personalization.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What customer data do I need?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Geek @ Your Spot recommends collecting contact fields, interests, email engagement, website activity, and
              purchase history. The data you gather and connect will determine how you can segment, trigger, and
              personalize your campaigns, such as sending interest-based nurture emails or post-purchase follow-ups.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can different subscribers receive different content within the same campaign?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. ActiveCampaign allows you to set up conditional content so different contacts see different messages
              within one campaign. This is rules-based personalization, not AI writing a unique email for each person.
              Check which plan includes the features you need.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can AI help identify the right audience?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              ActiveCampaign offers AI-Suggested Segments to help identify customer groups to target. The platform also
              uses engagement data to build segments. This can save you time on manual audience selection, but you should
              still check that the suggested segment fits your campaign goals.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does predictive sending work?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Predictive sending in ActiveCampaign looks at each contact’s engagement patterns and schedules emails for
              the time they are most likely to open or click. Instead of sending to everyone at once, it personalizes
              delivery times for each recipient.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does predictive sending work with a new email list?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You can turn on predictive sending even if your list is new. If there is not enough engagement history,
              ActiveCampaign uses a warm-up period with random send times to learn when contacts engage. As more data
              comes in, timing is adjusted weekly while predictive sending is active.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can emails automatically respond to customer actions?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. ActiveCampaign automations can trigger from website visits, email engagement, integration events, or
              other tracked actions. These automations can send follow-up emails and update tags, fields, or list
              membership to keep your communication in sync with each contact’s behavior.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it create a complete email sequence rather than one email?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Geek @ Your Spot confirms that ActiveCampaign can generate full email sequences using plain-language
              prompts. For example, you can ask it to create a welcome series or a win-back campaign. Before you activate
              any workflow, review the audience, triggers, timing, and each message to make sure it fits your needs.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can the AI match my business’s branding?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              ActiveCampaign’s AI Brand Kit can pull your color scheme and logo from your website to build templates. Its
              AI content tools let you adjust the tone of your emails. Geek @ Your Spot recommends checking both the look
              and the voice of the generated content before sending, since visual branding and brand voice are handled
              separately.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
