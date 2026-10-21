import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function KeyCapabilitiesSection() {
  const body = (
    <>
      <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
        <li>Email Campaign Creation: Mailchimp provides a wide range of templates and design tools that allow users to
          create visually appealing and effective email campaigns without needing design expertise.</li>
        <li><GlossaryLink slug="user-segmentation">Audience Segmentation</GlossaryLink>: Users can segment their audience based on various criteria such as demographics, purchase
          history, and engagement levels, ensuring that each campaign is tailored to the right recipients.</li>
        <li><GlossaryLink slug="marketing-automation">Automation</GlossaryLink>: The platform supports automated workflows, enabling businesses to send timely emails based on
          customer actions or predefined schedules. This reduces manual effort and ensures timely communication.</li>
        <li>Analytics and Reporting: Mailchimp&#39;s robust analytics tools provide insights into campaign performance,
          allowing businesses to track key metrics and make informed decisions to enhance future campaigns.</li>
        <li>Integrations: Mailchimp integrates with a variety of other platforms and tools, such as e-commerce systems and&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink> platforms, to provide a seamless marketing experience.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">Mailchimp&#39;s capabilities are designed to cater to the needs of businesses looking to enhance their marketing
        strategies through data-driven&nbsp;insights and automated processes. The platform&#39;s ability to integrate with other
        systems further enhances its utility, allowing businesses to create a unified marketing strategy across different
        channels.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">
                Key Capabilities
              </h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities-lg">
                Key Capabilities
              </h2>
              {body}
            </div>
            <div className="col-span-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
