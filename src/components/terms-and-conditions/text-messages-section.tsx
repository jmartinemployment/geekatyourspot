export default function TextMessagesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        <strong>Missed-call text messages.</strong> By calling Geek @ Your Spot LLC at <a id={`terms-and-conditions-sms-tel${idSuffix}`} href="tel:+15615263512" className="text-[#0B162A] hover:underline">(561)
        526-3512</a>, you agree that if we miss your call we may send you one text message from (561) 865-6990
        about that call. If you reply, we will respond to you. These are informational messages about your
        inquiry; we send no marketing texts.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li><strong>Frequency:</strong> message frequency varies and depends on the calls you make to us.</li>
        <li><strong>Cost:</strong> message and data rates may apply.</li>
        <li><strong>Opt out:</strong> reply STOP, UNSUBSCRIBE, CANCEL, END, or QUIT and you will receive no further texts. Reply START to resubscribe.</li>
        <li><strong>Help:</strong> reply HELP, or call us at (561) 526-3512.</li>
        <li>Carriers are not liable for delayed or undelivered messages.</li>
        <li>How we handle your phone number is described in our <a id={`terms-and-conditions-sms-privacy${idSuffix}`} href="/privacy-policy#text-messages" className="text-[#0B162A] hover:underline">Privacy Policy</a>.</li>
      </ul>
    </>
  );

  return (
    <div id="text-messages">
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
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
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
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
