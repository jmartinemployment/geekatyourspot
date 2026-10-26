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
              What is Brevo?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Brevo is a customer engagement platform that brings together email marketing, SMS, WhatsApp, marketing
              automation, CRM, and transactional messaging. It also includes live chat, chatbots, appointment scheduling,
              and tools to help manage customer relationships.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is Brevo free?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Brevo offers a free plan that does not require a credit card. Once your account is approved for
              sending, you can send up to 300 emails per day. This is a daily limit, not a monthly pool.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What paid plans does Brevo offer?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Brevo lists four paid tiers in addition to its free plan. Starter is for basic email and multichannel
              marketing. Standard adds automated marketing campaigns and removes Brevo branding. Professional is for
              advanced, data-driven marketing and includes more user seats and channels. Enterprise is for large,
              customized operations and offers features like multi-account management and dedicated onboarding.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Brevo automate lead capture and follow-up?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Brevo provides signup forms to collect leads and trigger follow-up emails. The Standard plan adds
              unlimited multi-step workflows, with triggers based on website behavior and custom events to segment
              contacts and send messages.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Brevo include a CRM?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Brevo includes CRM and sales features with its marketing tools. Sales features cover contact and
              account enrichment, deal creation, and sales email help. Sales Essentials and Sales Advanced are listed as
              add-ons, so check which sales features are included in your plan.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Brevo send transactional emails?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. All Brevo plans include transactional email features through SMTP and REST APIs. These support messages
              like order confirmations and password resets. Brevo also offers webhooks, SDKs, and developer documentation
              for integration.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Brevo support SMS and WhatsApp marketing?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Brevo supports both SMS and WhatsApp marketing, but availability and costs depend on your plan. SMS
              credits are sold separately, and WhatsApp is listed as an extra channel in the Professional plan. Email
              subscriptions do not include all messaging channels by default.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What tools does Brevo integrate with?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Brevo integrates with more than 150 digital tools, including Shopify, WordPress, Stripe, and Zapier. It also
              provides APIs and SDKs for custom integrations.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What AI features does Brevo offer?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Brevo’s Aura AI covers marketing, sales, analytics, and customer conversations. For marketing, it can
              generate email copy, suggest audience segments, optimize send times, and recommend products. In sales, it
              helps enrich contact and account details, create deals, and draft sales emails. For analytics, it answers
              business data questions in plain language. It also summarizes customer chats and helps draft replies. Not
              all features are in every plan; for example, AI segmentation and the AI Data Analyst are listed under the
              Professional plan.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Brevo score leads or contacts?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The Professional plan includes contact scoring based on engagement, purchases, and behavior. These
              scores can trigger automations or help build targeted segments. This is different from the segmentation
              features in lower plans.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
