export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
          <div className="col-span-7">
            <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="key-capabilities">
              Key Capabilities
            </h2>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              Claude offers a range of features that make it a powerful tool for SEO blog and article generation. These capabilities are designed to streamline the content creation process, enhance SEO performance, and improve overall content quality.
            </p>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
              <li>Automated Keyword Research: Claude simplifies the process of finding the right keywords for your content. By analyzing search trends and competition, it suggests keywords that can help improve your content&apos;s visibility and ranking on search engines.</li>
              <li>Content Drafting and Optimization: Claude assists in drafting content that is not only engaging but also optimized for SEO. It ensures that the content aligns with search engine algorithms, which is crucial for improving ranking and driving traffic.</li>
              <li>Integration with Other Tools: Claude integrates with tools like Surfer SEO and ChatGPT. This allows users to leverage additional features such as content analysis and advanced language processing, enhancing the overall quality and SEO performance of the content.</li>
              <li>User-Friendly Interface: Claude&apos;s interface is designed to be intuitive, making it easy for users to navigate and utilize its features effectively. This is particularly beneficial for small teams or businesses without dedicated SEO specialists.</li>
              <li>Scalable Solutions: Whether you&apos;re a small business or a larger organization, Claude can scale to meet your content creation needs. Its flexible features and affordable plans make it accessible to a wide range of users.</li>
            </ul>
            <p className="pt-3 text-md font-normal text-white shadow-text">
              By leveraging these capabilities, Claude helps businesses produce content that is not only relevant and engaging but also optimized for search engines. This leads to improved visibility, higher rankings, and ultimately, increased traffic and sales.
            </p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
