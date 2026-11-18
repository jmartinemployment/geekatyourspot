export default function TextMessagesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        When you book an appointment by calling our business line at <a id={`privacy-policy-sms-tel${idSuffix}`} href="tel:+15618656990" className="text-[#0B162A] hover:underline">(561)
        865-6990</a>, our AI receptionist asks whether you would like a text message confirming it. If you
        agree, we send one text from that number, to the number you called from, asking you to reply YES.
        We send the confirmation only after you reply YES. We use your phone number and your reply only to
        confirm your appointment.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li><strong>Message frequency varies.</strong> We send one request and one confirmation for each appointment you ask us to confirm by text. We send no marketing texts.</li>
        <li><strong>Message and data rates may apply.</strong></li>
        <li>Reply <strong>STOP</strong> to opt out at any time, or <strong>HELP</strong> for help.</li>
        <li><strong>Twilio</strong> delivers our text messages and calls on our behalf.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        <strong>No mobile information will be shared with third parties or affiliates for marketing or
        promotional purposes.</strong> We do not sell or share your SMS opt-in data or personal information
        with third parties for marketing purposes. Text messaging originator opt-in data and consent will
        not be shared with any third parties. We never buy, rent, or import phone numbers.</p>
    </>
  );

  return (
    <div id="text-messages">
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Text Messages (SMS)
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Text Messages (SMS)
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
