import Image from "next/image";

export default function KeyCapabilitiesSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center py-5">
          <div className="col-span-7">
            <h2 className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
              Key Capabilities</h2>
            <ul className="text-md text-white shadow-text list-disc list-outside pl-3 space-y-2 pt-3">
              <li>User-Friendly Interface: Canva&#39;s intuitive drag-and-drop design tools make it accessible to users with
                varying levels of design experience. This ease of use helps teams quickly produce high-quality visuals without
                extensive training.</li>
              <li>Extensive Template Library: With thousands of customizable templates, Canva provides a wide range of starting
                points for different types of content, from social media posts to business presentations.</li>
              <li>Collaboration Features: Canva supports real-time collaboration, allowing multiple users to work on a design
                simultaneously. This feature is crucial for teams that need to align on branding and messaging quickly.</li>
              <li>Integration Capabilities: Canva integrates with various platforms such as social media networks and cloud
                storage services, streamlining the process of sharing and storing designs.</li>
              <li>AI-Powered Design Suggestions: Canva&#39;s AI-driven tools provide users with design suggestions to enhance
                their creations, helping to ensure that the final product is both visually appealing and on-brand.</li>
              <li>Batch Processing: This feature allows users to create multiple designs at once, which is particularly useful for
                campaigns that require consistent visuals across different channels.</li>
            </ul>
            <p className="text-md text-white shadow-text pt-3">These capabilities make Canva an ideal solution for businesses looking to optimize their content creation
              workflows. By leveraging its features, teams can produce high-quality visuals quickly and efficiently, ensuring that
              their marketing efforts are both impactful and consistent.</p>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  );
}
