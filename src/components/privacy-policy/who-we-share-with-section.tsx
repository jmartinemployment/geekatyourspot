export default function WhoWeShareWithSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        We share personal information only with the companies that help us run the site and the booking
        process, and only so that they can do that work for us.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li><strong>Google</strong> provides Google Calendar, where your appointment is saved with your name and email address. Google also provides Google Analytics, which processes the visit data described above.</li>
        <li><strong>Resend</strong> delivers the confirmation email we send when you book.</li>
        <li><strong>Vercel</strong> hosts the site and handles the requests your browser makes to it.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        We may also disclose information when a law, a court order, or a government request requires it, or
        when we need to protect our rights, our clients, or the public. If Geek @ Your Spot LLC is ever sold
        or merged with another company, the information we hold may transfer to the new owner, who will remain
        bound by this policy for the information collected under it.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-we-share-it-with" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who We Share It With
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-we-share-it-with" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who We Share It With
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
