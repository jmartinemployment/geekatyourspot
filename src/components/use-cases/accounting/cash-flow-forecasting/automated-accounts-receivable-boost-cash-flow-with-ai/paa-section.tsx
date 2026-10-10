export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why is automated AR forecasting more accurate than traditional spreadsheet methods?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated Accounts Receivable (AR) forecasting is more accurate than traditional spreadsheet methods because
              it uses real-time data and advanced algorithms. These systems continuously update and analyze large volumes
              of financial data, reducing the risk of human error. Unlike spreadsheets that rely on manual input,
              automated systems can quickly identify trends and anomalies, offering a more precise forecast.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do systems handle short payments, disputes, or un-billed revenue?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated systems handle short payments, disputes, and un-billed revenue by integrating with your accounting
              software to track and categorize these exceptions. They alert users to discrepancies and provide tools for
              resolution, ensuring that all financial data is accounted for in the forecast. This integration helps
              maintain an accurate cash flow projection by automatically adjusting for these variables.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why is automated cash application critical to forecast reliability?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated cash application is critical to forecast reliability because it ensures that payments are matched
              promptly and accurately to outstanding invoices. This reduces the lag time in data entry and minimizes
              errors, providing a clear view of cash flow. By automating this process, businesses can rely on timely and
              precise financial data, which is essential for creating dependable forecasts.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can automated forecasting tools run &quot;What-If&quot; scenario simulations?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes, automated forecasting tools can run &quot;What-If&quot; scenario simulations. These tools allow
              businesses to explore different financial outcomes based on variable changes, such as altering payment terms
              or predicting the impact of market fluctuations. This capability helps businesses plan more effectively by
              visualizing potential risks and opportunities, leading to more informed decision-making.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
