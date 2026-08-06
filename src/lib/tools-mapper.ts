import { ToolPageContent } from "@/types/tool";
import { activecampaignContent } from "@/data/tools/activecampaign";
import { adaptiveInsightsContent } from "@/data/tools/adaptive-insights";
import { adobeSenseiContent } from "@/data/tools/adobe-sensei";
import { anaplanContent } from "@/data/tools/anaplan";
import { avalaraContent } from "@/data/tools/avalara";
import { baswareContent } from "@/data/tools/basware";
import { boardContent } from "@/data/tools/board";
import { canvaContent } from "@/data/tools/canva";
import { coupaContent } from "@/data/tools/coupa";
import { driftContent } from "@/data/tools/drift";
import { grammarlyContent } from "@/data/tools/grammarly";
import { hubspotContent } from "@/data/tools/hubspot";
import { jasperAiContent } from "@/data/tools/jasper-ai";
import { kyribaContent } from "@/data/tools/kyriba";
import { leadfeederContent } from "@/data/tools/leadfeeder";
import { mailchimpContent } from "@/data/tools/mailchimp";
import { marketoContent } from "@/data/tools/marketo";
import { mediusContent } from "@/data/tools/medius";
import { openaiGpt4Content } from "@/data/tools/openai-gpt-4";
import { rillionContent } from "@/data/tools/rillion";
import { salesforcePardotContent } from "@/data/tools/salesforce-pardot";
import { sovosContent } from "@/data/tools/sovos";
import { thomsonReutersOnesourceContent } from "@/data/tools/thomson-reuters-onesource";
import { tipaltiContent } from "@/data/tools/tipalti";
import { vertexContent } from "@/data/tools/vertex";

const toolsMap: Record<string, ToolPageContent> = {
  "activecampaign": activecampaignContent,
  "adaptive-insights": adaptiveInsightsContent,
  "adobe-sensei": adobeSenseiContent,
  "anaplan": anaplanContent,
  "avalara": avalaraContent,
  "basware": baswareContent,
  "board": boardContent,
  "canva": canvaContent,
  "coupa": coupaContent,
  "drift": driftContent,
  "grammarly": grammarlyContent,
  "hubspot": hubspotContent,
  "jasper-ai": jasperAiContent,
  "kyriba": kyribaContent,
  "leadfeeder": leadfeederContent,
  "mailchimp": mailchimpContent,
  "marketo": marketoContent,
  "medius": mediusContent,
  "openai-gpt-4": openaiGpt4Content,
  "rillion": rillionContent,
  "salesforce-pardot": salesforcePardotContent,
  "sovos": sovosContent,
  "thomson-reuters-onesource": thomsonReutersOnesourceContent,
  "tipalti": tipaltiContent,
  "vertex": vertexContent,
};

export function getToolContent(slug: string): ToolPageContent | null {
  return toolsMap[slug] || null;
}

export function getAllToolSlugs(): string[] {
  return Object.keys(toolsMap);
}

export function getAllTools(): ToolPageContent[] {
  return Object.values(toolsMap);
}

export function getToolsByDepartment(department: string): ToolPageContent[] {
  return getAllTools().filter((tool) => tool.department === department);
}

export function getAllDepartments(): string[] {
  return Array.from(new Set(getAllTools().map((tool) => tool.department))).sort();
}
