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
              What AI features does Moosend offer for personalized email campaigns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Moosend offers three main AI features: an AI Writer for generating and refining marketing copy, Audience
              Discovery to identify audiences based on behavior and interests, and AI-powered product recommendations to
              support more relevant suggestions and upselling in campaigns.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Moosend’s AI write subject lines and email content?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Moosend’s AI Writer can generate subject lines and main email content. You can set the content type,
              tone, and word limit, then review and refine the AI’s output before sending. The platform also documents
              AI-generated preview text during campaign setup.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does it automatically write a completely different email for every subscriber?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. Moosend does not claim that AI Writer generates a unique, full email for every recipient at send time.
              Instead, it supports AI-assisted copy creation, personalization tags, custom fields, conditional content,
              and AI-powered recommendations. These features help tailor emails but do not create unrestricted, one-to-one
              generative emails for each subscriber.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which parts of an email can I personalize?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
              <li>Subject lines, such as adding a recipient’s name or company</li>
              <li>Preview text, like referencing location</li>
              <li>Body copy using subscriber information and supported tags</li>
              <li>Images, text, and offers through conditional visibility</li>
              <li>Product recommendations using Moosend’s AI</li>
            </ul>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What customer data is needed?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Moosend uses data from subscription forms, purchase history, engagement metrics, and website analytics for
              personalization. Custom fields can include details like birthdays, age, and location. The specific data you
              need depends on your campaign goals; for example, a location-based promotion requires different information
              than a purchase-based recommendation.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can different subscribers see different offers in the same campaign?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Moosend’s conditional visibility lets you show different visuals and text to different recipients
              within the same campaign. This enables targeted offers without needing separate email designs. Conditional
              visibility is based on rules and should not be confused with AI generating the offers themselves.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Audience Discovery work?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Audience Discovery in Moosend uses AI and machine learning to find audiences based on behavior and
              preferences. It looks at product views, add-to-cart actions, and purchases to help target the right people,
              making it especially useful for ecommerce campaigns.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Moosend automate personalized follow-up emails?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Moosend can send behavior-triggered emails, like abandoned-cart messages, and lets you build automation
              workflows from scratch or use ready-made recipes. The automation decides when emails go out, while
              personalization features control what each person sees.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need coding or design skills?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Basic campaign creation in Moosend does not require coding. The platform offers a drag-and-drop editor and
              ready-made templates. However, some advanced tracking or connecting with external data may need technical
              setup, depending on what you want to do.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is Moosend useful for service businesses, or mainly ecommerce?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Moosend&apos;s personalization tools work for both service businesses and ecommerce. Service businesses can
              use custom fields, forms, personalized text, and conditional content in their campaigns. Product
              recommendations and behavior-based Audience Discovery are more for ecommerce. For local service businesses,
              the most useful features are subscriber-data personalization and automated follow-ups, not product
              recommendations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
