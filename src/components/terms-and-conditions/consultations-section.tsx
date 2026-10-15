import Link from "next/link";

export default function ConsultationsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        You can book a free consultation through the scheduler on the site. Booking a consultation does not
        obligate you to hire us, and it does not obligate us to take on your project. Appointment times are
        shown and kept in Eastern Time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Please give accurate contact details when you book, and do not book times you do not plan to keep. If
        you need to change or cancel an appointment, call us at <a id="terms-and-conditions-consultations-tel" href="tel:+15615263512" className="text-[#0B162A] hover:underline">(561)
        526-3512</a>. We may cancel appointments that appear to be false or abusive.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Paid Engagements
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Any paid work we do for you, such as an <Link id="terms-and-conditions-consultations-audit" href="/architectural-infrastructure-audit" className="text-[#0B162A] hover:underline">Architectural
        Infrastructure Audit</Link>, an implementation, or ongoing support, is governed by a separate written
        agreement that both of us sign. That agreement describes the scope, fees, and responsibilities of the
        work. If it conflicts with these terms, the signed agreement controls for that work.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="consultations-and-client-work" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Consultations and Client Work
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="consultations-and-client-work" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Consultations and Client Work
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
