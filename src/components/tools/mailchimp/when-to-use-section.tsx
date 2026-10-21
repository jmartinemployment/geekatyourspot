export default function WhenToUseSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">Mailchimp is particularly useful for businesses that aim to enhance their email marketing efforts through automation and data-driven strategies. It is an ideal solution for small to medium-sized businesses that need a cost-effective and user-friendly platform to manage their marketing campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">Businesses looking to save time and reduce manual marketing efforts through automation.</p>
      <p className="text-base text-white shadow-text pt-3">Companies that want to leverage data insights to improve customer engagement and campaign performance.</p>
      <p className="text-base text-white shadow-text pt-3">Mailchimp&#39;s versatility and ease of use make it a valuable tool for any business looking to streamline their marketing processes and achieve tangible results. By utilizing Mailchimp, businesses can enjoy increased efficiency, reduced costs, and enhanced customer satisfaction.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4">
            <div className="col-span-7">
              <h2 className="text-white text-left text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">
                When to Use
              </h2>
            </div>
            <div className="col-span-5"></div>
            <div className="col-span-12">
              {body}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use-lg">
                When to Use
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
