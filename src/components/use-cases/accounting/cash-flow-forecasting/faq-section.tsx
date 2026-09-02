import { GlossaryLink } from "@/components/glossary/glossary-link";
import { FAQItem } from "@/types/use-case";

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection() {
  return (
    <section className="min-h-screen bg-[#0C1A26] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-1 gap-x-4 py-5">
          <div className="col-span-1">
            <h2 className="text-white pt-3 lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">People Also Ask</h2>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is meant by cash flow forecast?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">A <GlossaryLink slug="cash-flow-forecasting">cash flow forecast</GlossaryLink> is a financial tool used to estimate the flow of cash in and out of a business over a specific
              period. It helps organizations predict their future financial position and manage liquidity effectively by
              anticipating cash shortages or surpluses.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is the cash flow forecast system?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The cash flow forecast system refers to the processes and tools used to create cash flow forecasts. This system
              typically involves collecting data on expected cash inflows and outflows, using software to model these projections,
              and analyzing the results to inform financial decision-making.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is the difference between cash flow and cash flow forecast?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Cash flow is the actual movement of money into and out of a business, while a cash flow forecast is a projection of
              future cash flows. The forecast helps businesses plan and prepare for future cash needs, whereas cash flow reflects
              the current financial status.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">How do I make a cash flow forecast?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">To make a cash flow forecast, start by identifying all sources of cash inflows and outflows. Use historical data
              and market trends to estimate future transactions. Organize this information into a spreadsheet or forecasting
              software to project cash flow over a chosen period, adjusting assumptions as necessary.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What tools can I use for cash flow forecasting?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Popular tools for cash flow forecasting include Excel, specialized financial software like QuickBooks or Float, and
              AI-driven platforms that offer <GlossaryLink slug="analytics">predictive analytics</GlossaryLink>. These tools help automate data collection, model cash flow
              scenarios, and provide insights for better financial planning.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are the 4 forecasting models?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The four common forecasting models are qualitative, time series analysis, causal models, and simulation models.
              Each model uses different methods to predict future outcomes, ranging from expert judgment to statistical analysis
              of past data.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is another name for cash flow forecast?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Another name for a cash flow forecast is a cash flow projection. Both terms refer to the process of estimating
              future cash inflows and outflows to help manage an organization&#39;s liquidity.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are the 7 steps of forecasting?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The seven steps of forecasting typically include defining the problem, collecting data, analyzing the data,
              selecting a forecasting model, generating the forecast, validating the forecast, and implementing the results. These
              steps guide the process of creating accurate and actionable forecasts.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What is cash flow in simple terms?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">Cash flow, in simple terms, is the movement of money into and out of a business. It represents the company&#39;s
              operating liquidity and is crucial for day-to-day operations, covering expenses, and investing in growth
              opportunities.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are the three types of cashflow?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The three types of cash flow are operating cash flow, investing cash flow, and financing cash flow. Operating cash
              flow relates to the core business activities, investing cash flow involves investments in assets, and financing cash
              flow pertains to borrowing and repaying funds.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">Which AI tool is best for cash flow forecasting?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">For cash flow forecasting, AI tools like Anaplan and Adaptive Insights integrate predictive analytics to enhance
              forecasting accuracy. These tools help businesses leverage historical data and market trends to create more reliable
              cash flow projections.</p>
            <h3 className="text-white pt-2 lg:text-3xl font-black font-[var(--font-sora)] shadow-text">What are the 4 types of forecasting in business?</h3>
            <p className="pt-5 text-md font-normal text-white shadow-text">The four types of forecasting in business are qualitative forecasting, quantitative forecasting, causal modeling,
              and time series analysis. Each type employs different techniques to predict future business conditions based on
              historical data and market insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
