export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Helmhq streamlines the complexities of traditional spreadsheet management, returning valuable hours to your
        week. By automating data entry and processing, Helmhq eliminates the need for repetitive manual tasks,
        reducing the risk of human error and freeing up time for strategic decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of Helmhq&#39;s standout features is its ability to turn chaotic payment schedules into a structured,
        drag-and-drop dashboard. This visual interface simplifies cash flow management, allowing businesses to track
        and predict financial outcomes with ease. The result is a clearer picture of financial health, enabling you
        to make informed decisions without the constant worry of unexpected cash shortages.</p>
      <p className="text-md text-white shadow-text pt-3">
        With Helmhq, the days of manually updating spreadsheet layouts are over. Instead, the platform offers a
        centralized system that automatically updates and syncs data across all financial activities. This ensures
        that you always have access to the most current information, reducing the need for constant oversight and
        manual corrections.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Helmhq supports seamless integration with various CMS platforms like Wordpress, Webflow, and
        Wix, as well as Google Business Profile, Analytics, and Search Console. These integrations ensure that your
        financial data is always in sync with your business operations, providing a comprehensive view of your
        financial landscape.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, this means a significant reduction in the time spent managing spreadsheets and more
        time available for growth-oriented activities. Helmhq&#39;s automation capabilities allow you to focus on
        strategy rather than the minutiae of data entry, ultimately driving greater efficiency and productivity
        across your operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="automated-spreadsheet-data-what-helmhq-removes-from-your-week">
                Automated Spreadsheet Data: What Helmhq Removes from Your Week
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="automated-spreadsheet-data-what-helmhq-removes-from-your-week">
                Automated Spreadsheet Data: What Helmhq Removes from Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
