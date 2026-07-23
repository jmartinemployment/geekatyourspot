import Link from "next/link";
import { automatedAccountsPayableContent } from "@/data/use-cases/automated-accounts-payable";

export default function ToolsSection() {
  const tools = automatedAccountsPayableContent.tools;

  if (!tools || tools.length === 0) return null;

  return (
    <section className="min-h-screen bg-black text-white py-20">
      <div className="container max-w-4xl">
        <h2 className="text-5xl font-bold mb-12">Top AI Tools</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="border border-gray-600 rounded-lg p-8 bg-gray-900"
            >
              <div className="mb-4">
                {tool.url ? (
                  <Link
                    href={tool.url}
                    className="text-2xl font-bold text-blue-400 hover:text-blue-300"
                  >
                    {tool.name}
                  </Link>
                ) : (
                  <h3 className="text-2xl font-bold">{tool.name}</h3>
                )}
              </div>

              <p className="text-gray-300 mb-6">{tool.description}</p>

              {tool.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-gray-300">
                        <strong>{feature.title}</strong>: {feature.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tool.implementation && (
                <div>
                  <h4 className="font-bold mb-2">Implementation:</h4>
                  <p className="text-sm text-gray-400">{tool.implementation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
