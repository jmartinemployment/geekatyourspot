import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EmailCampaignsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        <Link id={`use-cases-marketing-marketing-automation-platforms-email-campaigns-pillar${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#0B162A] hover:underline">AI Personalized Email Campaigns</Link> is the job most people picture when they hear marketing automation, and it is where the contact records earn their keep. The platform sends each contact the message their behavior calls for, on a schedule a rule decides, instead of sending the whole list the same newsletter on the same Tuesday. The pillar walks through what gets personalized, how <GlossaryLink slug="email-segmentation" className="text-[#0B162A] hover:underline">segmentation</GlossaryLink> works when the data is thin, what a sequence looks like, and how to keep approval in a person's hands when the sends are automatic.</p>
      <p className="text-base text-white shadow-text pt-3">
        Six email platforms are reviewed. <Link id={`use-cases-marketing-marketing-automation-platforms-email-campaigns-getresponse${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/getresponse" className="text-[#0B162A] hover:underline">GetResponse</Link>, <Link id={`use-cases-marketing-marketing-automation-platforms-email-campaigns-mailchimp${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailchimp" className="text-[#0B162A] hover:underline">Mailchimp</Link>, <Link id={`use-cases-marketing-marketing-automation-platforms-email-campaigns-mailerlite${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/mailerlite" className="text-[#0B162A] hover:underline">MailerLite</Link>, and <Link id={`use-cases-marketing-marketing-automation-platforms-email-campaigns-moosend${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/moosend" className="text-[#0B162A] hover:underline">Moosend</Link> are the four most likely to appear in a quote to a South Florida small business, and each review checks the vendor's AI claims at the plan that business would buy. <Link id={`use-cases-marketing-marketing-automation-platforms-email-campaigns-activecampaign${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/activecampaign" className="text-[#0B162A] hover:underline">ActiveCampaign</Link> and <Link id={`use-cases-marketing-marketing-automation-platforms-email-campaigns-brevo${idSuffix}`} href="/tools/marketing/marketing-automation-platforms/personalized-email-campaigns/brevo" className="text-[#0B162A] hover:underline">Brevo</Link> are the fifth and sixth. ActiveCampaign sits closer to a full platform because its CRM and automation builder reach into the lead scoring job below, and Brevo adds texts and WhatsApp to the same contact list, with a free plan of 9,000 emails a month to start on. Before you take any of the six at their word on <GlossaryLink slug="open-rate" className="text-[#0B162A] hover:underline">open rates</GlossaryLink> and revenue lift, our post <Link id={`use-cases-marketing-marketing-automation-platforms-email-campaigns-blog${idSuffix}`} href="/blog/marketing/marketing-automation-platforms/what-miami-businesses-miss-without-local-ai-automation" className="text-[#0B162A] hover:underline">What Miami Businesses Miss Without Local AI Automation</Link> goes through what the vendors themselves report, where the numbers come from, and where they stop applying to a list of a few thousand contacts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Email is where most businesses should expect their first measurable result, because it works from contacts you already have. It is also where a thin CRM shows first. If the records have a name and an address and nothing else, there is nothing to personalize on, and the platform will send a blast with a first name in it and call that personalization. The pillar's assessment checks the fields before it recommends a tool.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="ai-personalized-email-campaigns-send-the-right-message" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Personalized Email Campaigns Send the Right Message
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="ai-personalized-email-campaigns-send-the-right-message-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                AI Personalized Email Campaigns Send the Right Message
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
