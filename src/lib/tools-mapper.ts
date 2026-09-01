// import { ToolPageContent } from "@/types/tool";
// import { activecampaignContent } from "@/data/tools/activecampaign";
// import { adaptiveInsightsContent } from "@/data/tools/adaptive-insights";
// import { adcreativeaiContent } from "@/data/tools/adcreativeai";
// import { adobeMixModelerContent } from "@/data/tools/adobe-mix-modeler";
// import { adobeSenseiContent } from "@/data/tools/adobe-sensei";
// import { advantageContent } from "@/data/tools/advantage";
// import { anaplanContent } from "@/data/tools/anaplan";
// import { anomaloContent } from "@/data/tools/anomalo";
// import { avalaraContent } from "@/data/tools/avalara";
// import { basisTechnologiesContent } from "@/data/tools/basis-technologies";
// import { baswareContent } from "@/data/tools/basware";
// import { boardContent } from "@/data/tools/board";
// import { canvaContent } from "@/data/tools/canva";
// import { coupaContent } from "@/data/tools/coupa";
// import { driftContent } from "@/data/tools/drift";
// import { googleAdsSmartBiddingContent } from "@/data/tools/google-ads-smart-bidding";
// import { grammarlyContent } from "@/data/tools/grammarly";
// import { greatExpectationsContent } from "@/data/tools/great-expectations";
// import { hubspotContent } from "@/data/tools/hubspot";
// import { jasperAiContent } from "@/data/tools/jasper-ai";
// import { kyribaContent } from "@/data/tools/kyriba";
// import { leadfeederContent } from "@/data/tools/leadfeeder";
// import { madgicxContent } from "@/data/tools/madgicx";
// import { mailchimpContent } from "@/data/tools/mailchimp";
// import { marketoContent } from "@/data/tools/marketo";
// import { mediusContent } from "@/data/tools/medius";
// import { monteCarloContent } from "@/data/tools/monte-carlo";
// import { omnekyContent } from "@/data/tools/omneky";
// import { openaiGpt4Content } from "@/data/tools/openai-gpt-4";
// import { optimoveContent } from "@/data/tools/optimove";
// import { qualyticsContent } from "@/data/tools/qualytics";
// import { rillionContent } from "@/data/tools/rillion";
// import { salesforceEinsteinContent } from "@/data/tools/salesforce-einstein";
// import { salesforcePardotContent } from "@/data/tools/salesforce-pardot";
// import { smartlyioContent } from "@/data/tools/smartlyio";
// import { sovosContent } from "@/data/tools/sovos";
// import { tableauAiAdobeAnalyticsContent } from "@/data/tools/tableau-ai-adobe-analytics";
// import { thomsonReutersOnesourceContent } from "@/data/tools/thomson-reuters-onesource";
// import { tipaltiContent } from "@/data/tools/tipalti";
// import { vertexContent } from "@/data/tools/vertex";

// const toolsMap: Record<string, ToolPageContent> = {
//   "activecampaign": activecampaignContent,
//   "adaptive-insights": adaptiveInsightsContent,
//   "adcreativeai": adcreativeaiContent,
//   "adobe-mix-modeler": adobeMixModelerContent,
//   "adobe-sensei": adobeSenseiContent,
//   "advantage": advantageContent,
//   "anaplan": anaplanContent,
//   "anomalo": anomaloContent,
//   "avalara": avalaraContent,
//   "basis-technologies": basisTechnologiesContent,
//   "basware": baswareContent,
//   "board": boardContent,
//   "canva": canvaContent,
//   "coupa": coupaContent,
//   "drift": driftContent,
//   "google-ads-smart-bidding": googleAdsSmartBiddingContent,
//   "grammarly": grammarlyContent,
//   "great-expectations": greatExpectationsContent,
//   "hubspot": hubspotContent,
//   "jasper-ai": jasperAiContent,
//   "kyriba": kyribaContent,
//   "leadfeeder": leadfeederContent,
//   "madgicx": madgicxContent,
//   "mailchimp": mailchimpContent,
//   "marketo": marketoContent,
//   "medius": mediusContent,
//   "monte-carlo": monteCarloContent,
//   "omneky": omnekyContent,
//   "openai-gpt-4": openaiGpt4Content,
//   "optimove": optimoveContent,
//   "qualytics": qualyticsContent,
//   "rillion": rillionContent,
//   "salesforce-einstein": salesforceEinsteinContent,
//   "salesforce-pardot": salesforcePardotContent,
//   "smartlyio": smartlyioContent,
//   "sovos": sovosContent,
//   "tableau-ai-adobe-analytics": tableauAiAdobeAnalyticsContent,
//   "thomson-reuters-onesource": thomsonReutersOnesourceContent,
//   "tipalti": tipaltiContent,
//   "vertex": vertexContent,
// };

// export function getToolContent(slug: string): ToolPageContent | null {
//   return toolsMap[slug] || null;
// }

// export function getAllToolSlugs(): string[] {
//   return Object.keys(toolsMap);
// }

// export function getAllTools(): ToolPageContent[] {
//   return Object.values(toolsMap);
// }

// export function getToolsByDepartment(department: string): ToolPageContent[] {
//   return getAllTools().filter((tool) => tool.department === department);
// }

// export function getAllDepartments(): string[] {
//   return Array.from(new Set(getAllTools().map((tool) => tool.department))).sort();
// }
