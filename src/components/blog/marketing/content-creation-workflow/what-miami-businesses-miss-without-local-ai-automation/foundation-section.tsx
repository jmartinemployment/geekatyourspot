import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function FoundationSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A strong implementation of Personalized Email Campaigns is built on decisions about data, ownership, and
        mapping that cannot be fixed later. The difference between a system that runs itself and one that needs
        constant rescue is set before the first email is ever sent. The choices you make about the data you feed in,
        the logic that maps contacts to journeys, and who owns each step decide whether automation delivers or
        creates new headaches.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data is where most failures begin. If your contact records are missing key fields, like the source of the
        inquiry, recent purchase history, or service interests, segmentation and personalization become impossible.
        Brevo’s <GlossaryLink slug="behavioral-segmentation" className="text-[#0B162A] hover:underline">behavioral
        segmentation</GlossaryLink> and reputation management features matter only if your data is complete enough
        to group and target meaningfully. Moosend and MailerLite will automate follow-up sequences, but they can
        only personalize content as far as your records allow. A small business that imports a messy list or ignores <GlossaryLink slug="list-hygiene" className="text-[#0B162A] hover:underline">list
        hygiene</GlossaryLink> will quickly find campaigns stalling in spam or hitting the wrong audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mapping the customer journey is the next point of no return. If you treat all leads alike, you default to
        generic automation, the very problem this approach was meant to solve. GetResponse and ActiveCampaign both
        let you build distinct flows for different segments: new inquiries, repeat customers, or high-value
        prospects. But if you do not map out which actions or profile fields <GlossaryLink slug="trigger" className="text-[#0B162A] hover:underline">trigger</GlossaryLink> which
        journey, even the best platform will fall back to send-all behavior. This is especially true when automating
        proposals or post-purchase follow-up, where the timing and message must fit the customer’s stage.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ownership is the third critical factor. If automation is “everyone’s job,” it ends up being no one’s. Decide
        early who owns the data cleanup, who approves message content, and who is responsible for monitoring
        results. Mailchimp and MailerLite both offer reporting dashboards that make it easy for a small team to spot
        issues quickly, but only if someone is accountable for watching them. Without clear ownership, even the most
        advanced AI features cannot save a campaign that is drifting off course.</p>
      <p className="text-base text-white shadow-text pt-3">
        Platform behavior shapes what can be fixed and what cannot. For example, Mailchimp’s AI can suggest
        improvements to subject lines and send times, but it cannot guess which contacts belong in which segment if
        the data is not there. Brevo’s <GlossaryLink slug="email-deliverability" className="text-[#0B162A] hover:underline">deliverability</GlossaryLink> tools
        can keep your messages out of spam, but only if the list is kept clean from the start. ActiveCampaign’s lead
        scoring and CRM integration will surface your hottest prospects, but only if you have mapped out the scoring
        rules and connected the relevant sales data.</p>
      <p className="text-base text-white shadow-text pt-3">
        A solid implementation starts with the right data, mapped to clear journeys, and owned by someone who will
        keep it running. The technology can automate almost everything else, but these early decisions determine
        whether the system scales, adapts, and proves value over time, or whether it stalls as another half-finished
        project on the side of someone’s desk.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-separates-a-strong-personalized-email-campaigns-implementation-from-one-that-stalls" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What separates a strong Personalized Email Campaigns implementation from one that stalls
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-separates-a-strong-personalized-email-campaigns-implementation-from-one-that-stalls-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What separates a strong Personalized Email Campaigns implementation from one that stalls
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
