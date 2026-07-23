import { ToolPageContent } from "@/types/tool";
import { tipaltiContent } from "@/data/tools/tipalti";
import { baswareContent } from "@/data/tools/basware";
import { coupaContent } from "@/data/tools/coupa";
import { mediusContent } from "@/data/tools/medius";

const toolsMap: Record<string, ToolPageContent> = {
  tipalti: tipaltiContent,
  basware: baswareContent,
  coupa: coupaContent,
  medius: mediusContent,
};

export function getToolContent(slug: string): ToolPageContent | null {
  return toolsMap[slug] || null;
}

export function getAllToolSlugs(): string[] {
  return Object.keys(toolsMap);
}
