import { ToolPageContent } from "@/types/tool";
import { activeCampaignContent } from "@/data/tools/active-campaign";
import { adaptiveInsightsContent } from "@/data/tools/adaptive-insights";
import { adobeMixModelerContent } from "@/data/tools/adobe-mix-modeler";
import { anaplanContent } from "@/data/tools/anaplan";
import { anomaloContent } from "@/data/tools/anomalo";
import { approvalmaxContent } from "@/data/tools/approvalmax";
import { avalaraContent } from "@/data/tools/avalara";
import { avidxchangeContent } from "@/data/tools/avidxchange";
import { avidxchangePaymentExecutionContent } from "@/data/tools/avidxchange-payment-execution";
import { baswareContent } from "@/data/tools/basware";
import { billContent } from "@/data/tools/bill";
import { billPaymentExecutionContent } from "@/data/tools/bill-payment-execution";
import { boardContent } from "@/data/tools/board";
import { coupaContent } from "@/data/tools/coupa";
import { dextContent } from "@/data/tools/dext";
import { driftContent } from "@/data/tools/drift";
import { greatExpectationsContent } from "@/data/tools/great-expectations";
import { jasperAiContent } from "@/data/tools/jasper-ai";
import { kyribaContent } from "@/data/tools/kyriba";
import { leadfeederContent } from "@/data/tools/leadfeeder";
import { madgicxContent } from "@/data/tools/madgicx";
import { mailchimpContent } from "@/data/tools/mailchimp";
import { mediusContent } from "@/data/tools/medius";
import { melioContent } from "@/data/tools/melio";
import { monteCarloContent } from "@/data/tools/monte-carlo";
import { optimoveContent } from "@/data/tools/optimove";
import { qualyticsContent } from "@/data/tools/qualytics";
import { rampContent } from "@/data/tools/ramp";
import { rillionContent } from "@/data/tools/rillion";
import { sovosContent } from "@/data/tools/sovos";
import { thomsonReutersOnesourceContent } from "@/data/tools/thomson-reuters-onesource";
import { tipaltiContent } from "@/data/tools/tipalti";
import { vertexContent } from "@/data/tools/vertex";

const toolsMap: Record<string, ToolPageContent> = {
  "active-campaign": activeCampaignContent,
  "adaptive-insights": adaptiveInsightsContent,
  "adobe-mix-modeler": adobeMixModelerContent,
  "anaplan": anaplanContent,
  "anomalo": anomaloContent,
  "approvalmax": approvalmaxContent,
  "avalara": avalaraContent,
  "avidxchange": avidxchangeContent,
  "avidxchange-payment-execution": avidxchangePaymentExecutionContent,
  "basware": baswareContent,
  "bill": billContent,
  "bill-payment-execution": billPaymentExecutionContent,
  "board": boardContent,
  "coupa": coupaContent,
  "dext": dextContent,
  "drift": driftContent,
  "great-expectations": greatExpectationsContent,
  "jasper-ai": jasperAiContent,
  "kyriba": kyribaContent,
  "leadfeeder": leadfeederContent,
  "madgicx": madgicxContent,
  "mailchimp": mailchimpContent,
  "medius": mediusContent,
  "melio": melioContent,
  "monte-carlo": monteCarloContent,
  "optimove": optimoveContent,
  "qualytics": qualyticsContent,
  "ramp": rampContent,
  "rillion": rillionContent,
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
