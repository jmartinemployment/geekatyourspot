import { ToolPageContent } from "@/types/tool";
import { activeCampaignContent } from "@/data/tools/active-campaign";
import { adaptiveInsightsContent } from "@/data/tools/adaptive-insights";
import { adobeMixModelerContent } from "@/data/tools/adobe-mix-modeler";
import { adpContent } from "@/data/tools/adp";
import { anaplanContent } from "@/data/tools/anaplan";
import { anomaloContent } from "@/data/tools/anomalo";
import { apolloContent } from "@/data/tools/apollo";
import { approvalmaxContent } from "@/data/tools/approvalmax";
import { avidxchangeContent } from "@/data/tools/avidxchange";
import { avidxchangePaymentExecutionContent } from "@/data/tools/avidxchange-payment-execution";
import { baswareContent } from "@/data/tools/basware";
import { billContent } from "@/data/tools/bill";
import { billAccountsReceivableContent } from "@/data/tools/bill-accounts-receivable";
import { billApprovalWorkflowsContent } from "@/data/tools/bill-approval-workflows";
import { billFraudDuplicatePaymentControlsContent } from "@/data/tools/bill-fraud-duplicate-payment-controls";
import { billPaymentExecutionContent } from "@/data/tools/bill-payment-execution";
import { boardContent } from "@/data/tools/board";
import { botpenguinContent } from "@/data/tools/botpenguin";
import { cashflowfrogContent } from "@/data/tools/cashflowfrog";
import { cashflowfrogIntelligentResourcePlanningContent } from "@/data/tools/cashflowfrog-intelligent-resource-planning";
import { chaserhqContent } from "@/data/tools/chaserhq";
import { clockworkContent } from "@/data/tools/clockwork";
import { coupaContent } from "@/data/tools/coupa";
import { daptaContent } from "@/data/tools/dapta";
import { deelContent } from "@/data/tools/deel";
import { dextContent } from "@/data/tools/dext";
import { driftContent } from "@/data/tools/drift";
import { dryrunContent } from "@/data/tools/dryrun";
import { factorsContent } from "@/data/tools/factors";
import { fathomhqContent } from "@/data/tools/fathomhq";
import { floatappContent } from "@/data/tools/floatapp";
import { greatExpectationsContent } from "@/data/tools/great-expectations";
import { takethehelmContent } from "@/data/tools/takethehelm";
import { takethehelmIntelligentResourcePlanningContent } from "@/data/tools/takethehelm-intelligent-resource-planning";
import { taxcloudContent } from "@/data/tools/taxcloud";
import { taxcloudMultiStateSalesTaxNexusContent } from "@/data/tools/taxcloud-multi-state-sales-tax-nexus";
import { taxjarContent } from "@/data/tools/taxjar";
import { taxjarMultiStateSalesTaxNexusContent } from "@/data/tools/taxjar-multi-state-sales-tax-nexus";
import { thetaxvaletContent } from "@/data/tools/thetaxvalet";
import { thetaxvaletMultiStateSalesTaxNexusContent } from "@/data/tools/thetaxvalet-multi-state-sales-tax-nexus";
import { gustoContent } from "@/data/tools/gusto";
import { hootsuiteContent } from "@/data/tools/hootsuite";
import { hyperwriteaiContent } from "@/data/tools/hyperwriteai";
import { invoicedContent } from "@/data/tools/invoiced";
import { justworksContent } from "@/data/tools/justworks";
import { jasperAiContent } from "@/data/tools/jasper-ai";
import { jiravContent } from "@/data/tools/jirav";
import { kyribaContent } from "@/data/tools/kyriba";
import { leadfeederContent } from "@/data/tools/leadfeeder";
import { lobbystackContent } from "@/data/tools/lobbystack";
import { lushaContent } from "@/data/tools/lusha";
import { madgicxContent } from "@/data/tools/madgicx";
import { mailchimpContent } from "@/data/tools/mailchimp";
import { manychatContent } from "@/data/tools/manychat";
import { mediusContent } from "@/data/tools/medius";
import { melioContent } from "@/data/tools/melio";
import { melioApprovalWorkflowsContent } from "@/data/tools/melio-approval-workflows";
import { monteCarloContent } from "@/data/tools/monte-carlo";
import { myaifrontdeskContent } from "@/data/tools/myaifrontdesk";
import { myaifrontdeskCrossPlatformChatbotContent } from "@/data/tools/myaifrontdesk-cross-platform-chatbot";
import { nextivaContent } from "@/data/tools/nextiva";
import { optimoveContent } from "@/data/tools/optimove";
import { smithContent } from "@/data/tools/smith";
import { snitcherContent } from "@/data/tools/snitcher";
import { tidioContent } from "@/data/tools/tidio";
import { vokshaContent } from "@/data/tools/voksha";
import { qualyticsContent } from "@/data/tools/qualytics";
import { quadernoContent } from "@/data/tools/quaderno";
import { quadernoMultiStateSalesTaxNexusContent } from "@/data/tools/quaderno-multi-state-sales-tax-nexus";
import { quickbooksContent } from "@/data/tools/quickbooks";
import { rampContent } from "@/data/tools/ramp";
import { rampApprovalWorkflowsContent } from "@/data/tools/ramp-approval-workflows";
import { rillionContent } from "@/data/tools/rillion";
import { ripplingContent } from "@/data/tools/rippling";
import { scalenutContent } from "@/data/tools/scalenut";
import { semrushContent } from "@/data/tools/semrush";
import { sovosContent } from "@/data/tools/sovos";
import { stampliContent } from "@/data/tools/stampli";
import { thomsonReutersOnesourceContent } from "@/data/tools/thomson-reuters-onesource";
import { tipaltiContent } from "@/data/tools/tipalti";
import { tipaltiFraudDuplicatePaymentControlsContent } from "@/data/tools/tipalti-fraud-duplicate-payment-controls";
import { upflowContent } from "@/data/tools/upflow";
import { versapayContent } from "@/data/tools/versapay";
import { vertexContent } from "@/data/tools/vertex";
import { zampContent } from "@/data/tools/zamp";
import { zampMultiStateSalesTaxNexusContent } from "@/data/tools/zamp-multi-state-sales-tax-nexus";

const toolsMap: Record<string, ToolPageContent> = {
  "active-campaign": activeCampaignContent,
  "adaptive-insights": adaptiveInsightsContent,
  "adobe-mix-modeler": adobeMixModelerContent,
  "adp": adpContent,
  "anaplan": anaplanContent,
  "anomalo": anomaloContent,
  "apollo": apolloContent,
  "approvalmax": approvalmaxContent,
  "avidxchange": avidxchangeContent,
  "avidxchange-payment-execution": avidxchangePaymentExecutionContent,
  "basware": baswareContent,
  "bill": billContent,
  "bill-accounts-receivable": billAccountsReceivableContent,
  "bill-approval-workflows": billApprovalWorkflowsContent,
  "bill-fraud-duplicate-payment-controls": billFraudDuplicatePaymentControlsContent,
  "bill-payment-execution": billPaymentExecutionContent,
  "board": boardContent,
  "botpenguin": botpenguinContent,
  "cashflowfrog": cashflowfrogContent,
  "cashflowfrog-intelligent-resource-planning": cashflowfrogIntelligentResourcePlanningContent,
  "chaserhq": chaserhqContent,
  "clockwork": clockworkContent,
  "coupa": coupaContent,
  "dapta": daptaContent,
  "deel": deelContent,
  "dext": dextContent,
  "drift": driftContent,
  "dryrun": dryrunContent,
  "factors": factorsContent,
  "fathomhq": fathomhqContent,
  "floatapp": floatappContent,
  "great-expectations": greatExpectationsContent,
  "takethehelm": takethehelmContent,
  "takethehelm-intelligent-resource-planning": takethehelmIntelligentResourcePlanningContent,
  "taxcloud": taxcloudContent,
  "taxcloud-multi-state-sales-tax-nexus": taxcloudMultiStateSalesTaxNexusContent,
  "taxjar": taxjarContent,
  "taxjar-multi-state-sales-tax-nexus": taxjarMultiStateSalesTaxNexusContent,
  "thetaxvalet": thetaxvaletContent,
  "thetaxvalet-multi-state-sales-tax-nexus": thetaxvaletMultiStateSalesTaxNexusContent,
  "gusto": gustoContent,
  "hootsuite": hootsuiteContent,
  "hyperwriteai": hyperwriteaiContent,
  "invoiced": invoicedContent,
  "justworks": justworksContent,
  "jasper-ai": jasperAiContent,
  "jirav": jiravContent,
  "kyriba": kyribaContent,
  "leadfeeder": leadfeederContent,
  "lobbystack": lobbystackContent,
  "lusha": lushaContent,
  "madgicx": madgicxContent,
  "mailchimp": mailchimpContent,
  "manychat": manychatContent,
  "medius": mediusContent,
  "melio": melioContent,
  "melio-approval-workflows": melioApprovalWorkflowsContent,
  "monte-carlo": monteCarloContent,
  "myaifrontdesk": myaifrontdeskContent,
  "myaifrontdesk-cross-platform-chatbot": myaifrontdeskCrossPlatformChatbotContent,
  "nextiva": nextivaContent,
  "optimove": optimoveContent,
  "qualytics": qualyticsContent,
  "quaderno": quadernoContent,
  "quaderno-multi-state-sales-tax-nexus": quadernoMultiStateSalesTaxNexusContent,
  "quickbooks": quickbooksContent,
  "ramp": rampContent,
  "ramp-approval-workflows": rampApprovalWorkflowsContent,
  "rillion": rillionContent,
  "rippling": ripplingContent,
  "scalenut": scalenutContent,
  "semrush": semrushContent,
  "smith": smithContent,
  "snitcher": snitcherContent,
  "sovos": sovosContent,
  "stampli": stampliContent,
  "thomson-reuters-onesource": thomsonReutersOnesourceContent,
  "tidio": tidioContent,
  "tipalti": tipaltiContent,
  "tipalti-fraud-duplicate-payment-controls": tipaltiFraudDuplicatePaymentControlsContent,
  "upflow": upflowContent,
  "versapay": versapayContent,
  "vertex": vertexContent,
  "voksha": vokshaContent,
  "zamp": zampContent,
  "zamp-multi-state-sales-tax-nexus": zampMultiStateSalesTaxNexusContent,
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
