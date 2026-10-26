import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChoosingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The choice most small businesses face is between one platform that does a passable job of all four tasks and three or four specialist tools connected to a shared CRM. The all-in-one route is simpler to run and cheaper to start. ActiveCampaign, GetResponse, Mailchimp, and Brevo each cover email, basic automation, and a contact list that can carry scores, and most of them draft copy. The specialist route gets a better tool for each job, at the cost of integrations that someone has to own. A connected set of tools is only a platform if the connections actually move the contact fields both ways, and that is the first thing our assessment tests.</p>
      <p className="text-base text-white shadow-text pt-3">
        Four questions decide it. How many contacts do you have, and how fast is the list growing, because every platform prices on that number and the all-in-one tiers climb quickly. What does your CRM hold today, field by field, because personalization and scoring can only use what is there. Who approves a draft and a send, and how long does that take, because an automation that waits on an owner for a week is not automation. And what is the one outcome you would measure the project by, in bookings, quotes, or orders, because a platform chosen without that number will be judged on <GlossaryLink slug="open-rate">open rates</GlossaryLink>, and open rates do not pay anyone.</p>
      <p className="text-base text-white shadow-text pt-3">
        Our work follows the same four phases on every one of these projects. We align on that outcome first. We assess the data, which usually means reading the CRM export and the email list and saying plainly what they can and cannot support. We select and architect the platform, starting with the job the data can already feed and leaving the others for a second phase. And we run a pilot measured in the outcome you named before anything rolls out across the business. Answer these questions when <a href="#consultationAppointment2xl" id={`use-cases-marketing-marketing-automation-platforms-choosing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking your free consultation</a>, and bring the CRM export if you can.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How many contacts are on the list now, and how many were added in the last ninety days?</li>
        <li>Which fields does the CRM hold for a typical contact, and which of them are reliably filled in?</li>
        <li>Which of the four jobs is done by hand today, by whom, and for how many hours a week?</li>
        <li>What is the one number that would tell you the platform paid for itself?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="choosing-one-platform-or-connecting-several" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Choosing One Platform or Connecting Several
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="choosing-one-platform-or-connecting-several-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Choosing One Platform or Connecting Several
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
