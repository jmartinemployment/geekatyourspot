import Link from "next/link";
import { ToolCard as ToolCardType } from "@/types/use-case";

interface ToolCardProps {
  tool: ToolCardType;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        {tool.url ? (
          <Link
            href={tool.url}
            className="text-2xl font-bold text-blue-600 hover:underline"
          >
            {tool.name}
          </Link>
        ) : (
          <h3 className="text-2xl font-bold">{tool.name}</h3>
        )}
      </div>

      <p className="text-gray-700 mb-6">{tool.description}</p>

      {tool.features.length > 0 && (
        <div className="mb-6">
          <h4 className="font-bold mb-3">Key Features:</h4>
          <ul className="list-disc pl-6 space-y-2">
            {tool.features.map((feature, idx) => (
              <li key={idx} className="text-gray-700">
                <strong>{feature.title}</strong>: {feature.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tool.implementation && (
        <div>
          <h4 className="font-bold mb-2">Implementation:</h4>
          <p className="text-gray-700 text-sm">{tool.implementation}</p>
        </div>
      )}
    </div>
  );
}
