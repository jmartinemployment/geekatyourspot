import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Moosend is best suited for small businesses in Miami-Dade, Broward, and Palm Beach counties that need to
        automate personalized email campaigns without hiring a dedicated marketing team. The platform’s strengths
        are most visible for teams who already have a subscriber list, but struggle to send relevant follow-ups or
        segment their audience by interest, engagement, or buying stage. If your current process means sending the
        same email to everyone, or if you are losing track of who to follow up with and when, Moosend can turn that
        list into an active pipeline that runs itself.</p>
      <p className="text-base text-white shadow-text pt-3">
        The businesses that get the most value from Moosend are those with a clear need to scale their email
        marketing without adding staff or burning out the team. This includes eCommerce stores, SaaS providers,
        publishers, bloggers, and agencies, sectors where list growth and engagement are critical, but resources are
        limited. If you want to nurture leads, recover abandoned carts, or re-engage inactive contacts with minimal
        manual effort, Moosend’s automation and segmentation tools will save you hours each week and help you move
        beyond one-size-fits-all messaging.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend is also a strong fit for teams that want to experiment and iterate. Its pre-built automation
        recipes, templates, and AI writer mean you can test new campaigns, segmentations, or content variations
        quickly, without starting from scratch each time. If you are not sure what will resonate with each segment,
        Moosend’s analytics and reporting features make it easy to see what works and adjust your approach. For
        businesses where marketing is just one of many hats worn by a small team, this ability to try, learn, and
        refine is a practical advantage.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Moosend is not the right solution for every business. If you need a full CRM with sales pipeline
        management, deep integration with in-house systems, or support for channels beyond email and landing pages,
        you may need to look at broader marketing suites or platforms with native CRM modules. For example,
        businesses that rely heavily on <GlossaryLink slug="sms-marketing">SMS</GlossaryLink>, social media
        automation, or advanced sales workflows may find that Moosend’s focus on email leaves gaps compared to tools
        like ActiveCampaign or Mailchimp. Similarly, if your team already uses a platform with robust integrations
        or you require highly customized reporting across multiple channels, Moosend may not cover every need out of
        the box.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another consideration is data structure and technical constraints. Moosend requires that imported lists be
        in CSV or Excel format, UTF-8 encoded, and free of special characters. If your data sources are messy or you
        rely on complex, multi-table exports, some upfront work will be needed to clean and import your contacts.
        For most small businesses, this is a one-time task, but for those with highly fragmented or legacy data, it
        can add time to deployment.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams that want to move quickly, Moosend’s setup is straightforward: connect your list, configure
        segments and triggers, and start automating follow-ups. The learning curve is manageable, especially with
        the help of a consultant who understands both the tool and your business context. Geek @ Your Spot
        specializes in guiding small businesses through this process, from mapping your current data to configuring
        automation that matches your real workflows. The goal is to get campaigns running with minimal disruption
        and to build a foundation that can grow as your business does.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you are considering Moosend, the next step is to look at your current process and identify where manual
        effort is costing you most, whether that’s in sending follow-ups, segmenting lists, or drafting new
        campaigns. Moosend’s automation and AI features are designed to remove those bottlenecks, so your team can
        focus on strategy and customer relationships rather than repetitive tasks. For South Florida businesses who
        want to make every email count, Moosend offers a practical path to more consistent, effective, and scalable
        marketing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`tools-marketing-personalized-email-campaigns-moosend-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What is the main result you want: more appointments, more completed purchases, repeat business, or
          reactivating past customers?</li>
        <li>Who would receive these emails, new inquiries, subscribers, existing customers, inactive customers, or
          people who have never contacted you?</li>
        <li>Where are you losing opportunities today, after an inquiry, after a quote, before checkout, or after the
          first purchase?</li>
        <li>What do you want someone to do after reading the email?</li>
        <li>What follow-up do you send now, and where does it stop?</li>
        <li>How many contacts do you have, and where did they come from?</li>
        <li>How are subscription permissions, <GlossaryLink slug="opt-out">unsubscribes</GlossaryLink>, and
          do-not-contact records documented?</li>
        <li>Besides names and email addresses, what do you know about each contact?</li>
        <li>Is that information stored in one system or spread across spreadsheets, inboxes, and other applications?</li>
        <li>Do different customers need different offers or messages? Give me two examples.</li>
        <li>Which customer details should never be sent to an AI service or included in an email?</li>
        <li>What should start an <GlossaryLink slug="email-sequence">email sequence</GlossaryLink>, a form submission,
          appointment, quote request, purchase, or period of inactivity?</li>
        <li>Should everyone receive the same sequence, or should it change based on their interests and actions?</li>
        <li>What should stop the emails, a reply, booking, purchase, unsubscribe, or staff intervention?</li>
        <li>What email, CRM, website, booking, and online-store systems do you already use?</li>
        <li>Do you need only email, or also landing pages, forms, SMS, or other channels?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-benefits-most-from-moosend-who-should-look-elsewhere-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who benefits most from Moosend, who should look elsewhere, and what to do next
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-benefits-most-from-moosend-who-should-look-elsewhere-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who benefits most from Moosend, who should look elsewhere, and what to do next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
