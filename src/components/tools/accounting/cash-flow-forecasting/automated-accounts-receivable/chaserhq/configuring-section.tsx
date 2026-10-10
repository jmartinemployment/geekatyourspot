import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq offers a robust configuration environment tailored to streamline accounts receivable processes. For
        small businesses in Miami-Dade, Broward, and West Palm Beach counties, this customization is crucial. It
        begins with setting up approval chains, which are essential for ensuring that all financial transactions are
        properly vetted before execution. These chains can be configured to route invoices to the appropriate
        decision-makers based on factors such as invoice amount or client category, ensuring that no payment is
        processed without the necessary oversight.</p>
      <p className="text-md text-white shadow-text pt-3">
        Routing in Chaserhq is another critical feature. It allows for the automatic direction of tasks and
        notifications to the relevant team members. This feature minimizes delays by ensuring that each step in the
        receivables process is handled by the right person at the right time. For example, overdue invoices can be
        automatically escalated to senior staff, ensuring prompt action is taken to address potential cash flow
        issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automation logic within Chaserhq further enhances efficiency. Users can set specific conditions under which
        automated actions are triggered. This might include sending reminders for overdue payments or generating
        reports for management review. By automating these repetitive tasks, businesses can significantly reduce the
        time spent on manual follow-ups, allowing staff to focus on more strategic activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Chaserhq&#39;s extension mechanism is primarily through its integration capabilities. The platform
        integrates seamlessly with systems like Xero and Stripe, allowing for a unified financial management
        experience. While Chaserhq does not offer a
        traditional&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;or SDK for custom development, its
        existing integrations and configurable options provide ample flexibility for most small business needs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot plays a vital role in configuring these features to match the unique needs of each client.
        By understanding the specific workflows and challenges of a business, Geek @ Your Spot can tailor
        Chaserhq&#39;s setup to optimize performance and ensure that the system aligns perfectly with existing
        processes. This bespoke configuration not only enhances operational efficiency but also ensures that the
        transition to an automated system is smooth and effective.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-chaserhq-for-optimal-use">
                Configuring Chaserhq for Optimal Use
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="configuring-chaserhq-for-optimal-use">
                Configuring Chaserhq for Optimal Use
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
