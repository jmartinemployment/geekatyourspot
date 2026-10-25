import Link from "next/link";
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFunnelDollar,
    faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";

export function UseCasesSection() {

    return (
        <>
            <article id="use-cases-section" className="w-full bg-[#025E73] min-h-screen py-5 lg:hidden" >
                <div className="grid grid-cols-1 container mb-5">
                    <div className="col-span-full">

                        <h2 className="hover:text-[#0B162A] text-white text-[12vw] sm:text-6xl md:text-7xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                            Artificial{" "}<br />
                            Intelligence{" "}<br />
                            <span className="hover:text-[#0B162A] text-[#C83803] shadow-text">Use Cases</span>
                        </h2>


                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 container">
                    <div className="col-span-full bg-[#CBCBCB] shadow-xl">
                        <Card className="bg-[#CBCBCB] pt-0 shadow-xl gap-1">
                            <CardHeader className="bg-[#023059] py-2">
                                <CardTitle>
                                    <Link
                                        id={gtmLinkIdFromHref("/use-cases/accounting")}
                                        href="/use-cases/accounting">
                                        <h3 className="text-3xl text-white hover:text-[#C83803] font-bold shadow-text inline">
                                            AI Accounting
                                        </h3>
                                    </Link>
                                </CardTitle>
                                <CardAction>
                                    <FontAwesomeIcon
                                        icon={faCalculator}
                                        width={36}
                                        height={36}
                                        className="text-white shadow-xl ml-55 mb-2 inline"
                                    />
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <p className="text-black text-xs text-shadow">
                                    AI accounting systems use machine learning and automation to handle bookkeeping, scan invoices, categorize transactions, and speed up financial reporting. These platforms reduce manual data entry and minimize human error.
                                </p>
                                <Link id="home-use-cases-accounting-automated-accounts-payable"
                                    href="/use-cases/accounting/accounts-payable/ai-ap-automation-software"
                                    className="hover:underline">
                                    <h4 className="text-black text-base hover:text-[#C83803] font-bold">
                                        AI AP Automation Software
                                    </h4>
                                    <p className="text-black text-xs text-shadow">
                                        You face heavy administrative burdens in accounts payable (AP) due to limited staff, manual data entry errors, slow approval bottlenecks, high risks of payment fraud, and tedious vendor management.
                                    </p>
                                </Link>
                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-data-entry-processing"
                                            href="/use-cases/accounting/accounts-payable/ai-document-processing"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Document Processing:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs">
                                            Stop burning billable hours on manual data entry.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Data Entry Processing Tools:
                                        </h6>
                                        <p className="text-black text-xs whitespace-nowrap">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-data-entry-processing/dext", "Dext")}
                                                href="/tools/accounting/accounts-payable/automated-data-entry-processing/dext"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Dext
                                            </Link>,&nbsp;
                                            Corpay,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-data-entry-processing/bill", "Bill")}
                                                href="/tools/accounting/accounts-payable/automated-data-entry-processing/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange", "AvidXchange")}
                                                href="/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                AvidXchange
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti", "Tipalti data entry")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-approval-workflows"
                                            href="/use-cases/accounting/accounts-payable/ai-approval-workflow"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Approval Workflow:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs">
                                            Take the bottlenecks out of your business without losing control.                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Approval Workflow Tools:
                                        </h6>
                                        <p className="text-black text-xs">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax", "ApprovalMax")}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                ApprovalMax
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/bill", "Bill")}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/melio", "Melio")}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/melio"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Melio
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/ramp", "Ramp")}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/stampli", "Stampli")}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/stampli"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Stampli
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-payment-execution"
                                            href="/use-cases/accounting/accounts-payable/ai-automatic-bill-pay"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Automatic Bill Pay:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs">
                                            Control exactly how and when your cash moves, automatically.                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Payment Execution Tools:
                                        </h6>
                                        <p className="text-xs">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio", "Melio")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Melio
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill", "Bill")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange", "AvidXchange")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                AvidXchange
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp", "Ramp")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti", "Tipalti")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-fraud-duplicate-payment-controls"
                                            href="/use-cases/accounting/accounts-payable/ai-fraud-duplicate-payment-controls"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Fraud &amp; Duplicate Payment Controls:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs ">
                                            Stop financial leaks before they walk out the door.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Fraud & Duplicate Payment Controls Tools:
                                        </h6>
                                        <p className="text-xs">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius", "Medius")}
                                                href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Medius
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti", "Tipalti")}
                                                href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/stampli", "Stampli fraud controls")}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/stampli"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Stampli
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill", "Bill")}
                                                href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp", "Ramp fraud controls")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <Link
                                    id="home-use-cases-accounting-automated-cash-flow-forecasting"
                                    href="/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting"
                                    className="hover:text-[#C83803] hover:underline">
                                    <h4 className="text-black font-bold text-base">
                                        AI Cash Flow Forecasting
                                    </h4>
                                </Link>
                                <p className="text-black text-xs">
                                    See around corners and never run out of cash.
                                </p>
                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-accounts-receivable"
                                            href="/use-cases/accounting/cash-flow-forecasting/ai-accounts-receivable-software"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Accounts Receivable Software:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs ">
                                            Get paid faster without ever chasing a client again.                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Accounts Receivable Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq", "Chaserhq")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Chaserhq
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced", "Invoiced")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Invoiced
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay", "Versapay")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Versapay
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow", "Upflow")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Upflow
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill", "Bill")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-spreadsheet-data"
                                            href="/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Spreadsheet Data:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs ">
                                            Turn static rows of cells into a dynamic, living business playbook.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Spreadsheet Replacement Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog", "Cashflowfrog")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Cashflowfrog
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork", "Clockwork")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Clockwork
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun", "Dryrun")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Dryrun
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp", "Floatapp")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Floatapp
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm", "Take the Helm")}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Take the Helm
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-intelligent-resource-planning"
                                            href="/use-cases/accounting/cash-flow-forecasting/ai-financial-planning-software"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Financial Planning Software:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs ">
                                            Get big-enterprise efficiency without the big-enterprise price tag.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Resource Planning Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog", "Cashflowfrog")}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Cashflowfrog
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq", "Fathom")}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Fathom
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav", "Jirav")}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Jirav
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks", "QuickBooks Online Advanced")}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks Online Advanced
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm", "Take the Helm")}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Take the Helm
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <Link id="home-use-cases-accounting-tax-compliance-regulations"
                                    href="/use-cases/accounting/tax-compliance-regulations"
                                    className="hover:underline">
                                    <h4 className="text-black hover:text-[#C83803] font-bold text-base">
                                        Tax Compliance & Regulations
                                    </h4>
                                </Link>
                                <p className="text-black text-xs ">
                                    Turn tax season into just another Tuesday.
                                </p>                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-complex-and-changing-laws"
                                            href="/use-cases/accounting/tax-compliance-regulations/ai-tax-law"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Tax Law:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs ">
                                            Stop guessing your way through complex tax codes.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Tax Law Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno", "Quaderno")}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Quaderno
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud", "TaxCloud")}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxCloud
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar", "TaxJar")}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxJar
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/thetaxvalet", "TaxValet")}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/thetaxvalet"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxValet
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp", "Zamp")}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zamp
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-payroll-tax-worker-misclassification"
                                            href="/use-cases/accounting/tax-compliance-regulations/ai-payroll-software"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Payroll Software:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs ">
                                            Take the liability and absolute dread out of payroll administration.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Payroll Tax Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp", "ADP")}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                ADP
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel", "Deel")}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Deel
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto", "Gusto")}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Gusto
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks", "Justworks")}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Justworks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling", "Rippling")}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Rippling
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-multi-state-sales-tax-nexus"
                                            href="/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-sm font-bold shadow-text">
                                                AI Multi-State Sales Tax:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-xs ">
                                            Expand your market without inheriting a compliance nightmare.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Intelligent Multi-State Sales Tax Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno", "Quaderno")}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Quaderno
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud", "TaxCloud")}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxCloud
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar", "TaxJar")}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxJar
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet", "TaxValet")}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxValet
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp", "Zamp")}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zamp
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-full bg-[#CBCBCB] shadow-xl">
                        <Card className="bg-[#CBCBCB] pt-0 shadow-xl gap-2">
                            <CardHeader className="bg-[#0B162A] py-2">
                                <CardTitle>
                                    <Link
                                        id={gtmLinkIdFromHref("/use-cases/marketing", "AI Marketing")}
                                        href="/use-cases/marketing">
                                        <h3 className="text-white text-3xl hover:text-[#C83803] font-bold shadow-text">
                                            AI Marketing Systems
                                        </h3>
                                    </Link>
                                </CardTitle>
                                <CardAction>
                                    <FontAwesomeIcon
                                        icon={faFunnelDollar}
                                        width={36}
                                        height={36}
                                        className="text-white shadow-xl ml-55 mb-2 inline"
                                    />
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <p className="text-black text-xs shadow-text">
                                    It is for South Florida small business owners who want practical AI to save time, improve lead follow-up, and make marketing more consistent.
                                </p>
                                <div>
                                    <Link
                                        id={gtmLinkIdFromHref("/use-cases/marketing/ai-sales-force-automation-software", "Lead Capture Pipeline")}
                                        href="/use-cases/marketing/ai-sales-force-automation-software"
                                        className="hover:text-[#C83803] text-[#000000] hover:underline" >
                                        <h4 className="text-black text-base font-bold shadow-text">
                                            Marketing Automation Platforms (MAP)</h4>
                                    </Link>
                                    <p className="text-black text-xs">
                                        A software solution designed to automate, streamline, and measure repetitive marketing tasks, multi-channel campaigns, and customer workflows at scale.
                                    </p>
                                    <ul className="text-black list-disc text-sm list- pl-3 ">
                                        <li className="pl-.5">
                                            <Link
                                                id={gtmLinkIdFromHref("/use-cases/marketing/lead-capture-pipeline/ai-receptionist", "Intelligent Receptionist")}
                                                href="/use-cases/marketing/lead-capture-pipeline/ai-receptionist"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-sm font-bold shadow-text">
                                                    AI Receptionist:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-xs">
                                                24/7, cloud native conversational software platform that handles incoming business phone calls with natural human fluency.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top Intelligent Receptionist Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack", "LobbyStack")}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    LobbyStack
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk", "My AI Front Desk")}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    My AI Front Desk
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva", "Nextiva")}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Nextiva
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith", "Smith.ai")}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Smith.ai
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha", "Voksha")}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Voksha
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <Link
                                                id={gtmLinkIdFromHref("/use-cases/marketing/lead-capture-pipeline/ai-chatbot", "Cross-Platform Chatbot")}
                                                href="/use-cases/marketing/lead-capture-pipeline/ai-chatbot"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-sm font-bold shadow-text">
                                                    AI Chatbot:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-xs">
                                                Deploys on WhatsApp, Facebook Messenger, Instagram, and websites seamlessly.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Chatbot Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin", "BotPenguin")}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    BotPenguin
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta", "Dapta")}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Dapta
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat", "Manychat")}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Manychat
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk", "My AI Front Desk")}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    My AI Front Desk
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio", "Tidio")}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Tidio
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <Link
                                                id={gtmLinkIdFromHref("/use-cases/marketing/lead-capture-pipeline/ai-lead-enrichment-scoring", "Lead Enrichment and Predictive Scoring")}
                                                href="/use-cases/marketing/lead-capture-pipeline/ai-lead-enrichment-scoring"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-sm font-bold shadow-text">
                                                    AI Lead Enrichment &amp; Predictive Scoring:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-xs">
                                                Identify high-intent buyers, enrich contact data, and prioritize leads.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Lead Scoring Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo", "Apollo")}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Apollo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors", "Factors")}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Factors
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder", "Leadfeeder")}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Leadfeeder
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha", "Lusha")}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Lusha
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher", "Snitcher")}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Snitcher
                                                </Link>.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link id="ai-content-creation-workflow-email-content-workflow-1"
                                        href="/use-cases/marketing/ai-content-marketing-platforms" className="p-0 m-0">
                                        <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-base shadow-text p-0 m-0">
                                            AI Content Marketing Platforms</h4>
                                    </Link><p className="text-black text-xs">
                                        AI Marketing Content Workflow is a repeatable system for turning ideas, customer questions, and source material into publishable marketing assets with AI, then repurposing them across channels.
                                    </p>
                                    <ul className="text-black list-disc text-xs list- pl-3 ">
                                        <li className="pl-.5">
                                            <Link
                                                id={gtmLinkIdFromHref("/use-cases/marketing/content-creation-workflow/ai-content-planning", "Intelligent Content Planning")}
                                                href="/use-cases/marketing/content-creation-workflow/ai-content-planning"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-sm font-bold shadow-text">
                                                    AI Content Planning:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-xs">
                                                Intelligent Content Planning streamlines content creation for small businesses, saving time and reducing errors.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Content Planning Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite", "Hootsuite")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Hootsuite
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai", "HyperWrite")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    HyperWrite
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse", "MarketMuse")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    MarketMuse
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut", "Scalenut")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Scalenut
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush", "Semrush")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Semrush
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <Link
                                                id={gtmLinkIdFromHref("/use-cases/marketing/content-creation-workflow/ai-seo-content-generator", "Intelligent Content Generation")}
                                                href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-sm font-bold shadow-text">
                                                    AI SEO Content Generator:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-xs">
                                                Intelligent Content Generation helps Miami-Dade, Broward, and West Palm Beach businesses automate content creation, repurposing, scheduling, and approvals.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Content Generation Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword", "Anyword")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Anyword
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic", "Castmagic")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Castmagic
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/copy", "Copy.ai")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/copy"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Copy.ai
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/frase", "Frase")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/frase"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Frase
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite", "Hootsuite")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Hootsuite
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine", "ImagineArt")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    ImagineArt
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper", "Jasper")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Jasper
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/koala", "Koala")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/koala"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Koala
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr", "Rytr")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Rytr
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut", "Scalenut")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Scalenut
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic", "Writesonic")}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Writesonic
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-sm">Personalized Email Campaigns: </strong></h5>
                                            <p className="text-black text-xs">
                                                AI tailors subject lines and body copy for different audience segments at the same time.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Email Campaign Tools:
                                            </h6>
                                            <p className="text-xs">
                                                Klaviyo,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/mailchimp", "Mailchimp")}
                                                    href="/tools/marketing/mailchimp"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Mailchimp
                                                </Link>,&nbsp;
                                                GetResponse,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/active-campaign", "ActiveCampaign")}
                                                    href="/tools/marketing/active-campaign"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    ActiveCampaign
                                                </Link>,&nbsp;or&nbsp;
                                                MailerLite.
                                            </p>
                                        </li>
                                    </ul>
                                    <h4 className="text-black text-base font-bold shadow-text">
                                        Ad Spend Optimization</h4>
                                    <ul className="text-black list-disc text-xs list- pl-3 ">
                                        <li className="pl-.5">
                                            <Link
                                                id={gtmLinkIdFromHref("/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation", "Budget Ad Copy & Message Validation")}
                                                href="/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-sm font-bold shadow-text">
                                                    Precision Lead Acquisition (Under $500/Month):
                                                </h5>
                                            </Link>
                                            <p className="text-black text-xs">
                                                Make every ad dollar count with targeted local advertising for budgets under $500/month. Reach nearby customers, reduce wasted spending, and focus your budget on the ads that perform best.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top Budget Ad Copy & Message Validation Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adcreative", "AdCreative")}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adcreative"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    AdCreative
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma", "Adzooma")}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Adzooma
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword", "Anyword")}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Anyword
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max", "Performance Max")}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Performance Max
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq", "LocaliQ")}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    LocaliQ
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/plai", "Plai")}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/plai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Plai
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <Link
                                                id={gtmLinkIdFromHref("/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation", "Measured Lead Generation")}
                                                href="/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-sm font-bold shadow-text">
                                                    Intent-Driven Lead Sourcing (Budget $500–$1,500 month):
                                                </h5>
                                            </Link>
                                            <p className="text-black text-xs">
                                                Continuously monitor campaign performance across channels, automatically pulling funds from underperforming ad sets and shifting them to high-converting lead campaigns.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top Measured Lead Generation Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx", "Madgicx")}
                                                    href="/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Madgicx
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/measured-lead-generation/marpipe", "Marpipe")}
                                                    href="/tools/marketing/ad-spend-optimization/measured-lead-generation/marpipe"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Marpipe
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/measured-lead-generation/optmyzr", "Optmyzr")}
                                                    href="/tools/marketing/ad-spend-optimization/measured-lead-generation/optmyzr"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Optmyzr
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max", "Performance Max")}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Performance Max
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench", "Wrench")}
                                                    href="/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Wrench
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-sm">
                                                Data Quality Assessments: </strong></h5>
                                            <p className="text-black text-xs">
                                                Build automated validation scripts that scan decentralized data sources for completeness, accuracy, and formatting errors before the data is exposed to an LLM.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Data Quality Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/monte-carlo", "Monte Carlo")}
                                                    href="/tools/marketing/monte-carlo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Monte Carlo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/anomalo", "Anomalo")}
                                                    href="/tools/marketing/anomalo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Anomalo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/great-expectations", "Great Expectations")}
                                                    href="/tools/marketing/great-expectations"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Great Expectations
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/qualytics", "Qualytics")}
                                                    href="/tools/marketing/qualytics"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Qualytics
                                                </Link>.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </article>


            <article id="use-cases-section-lg" className="w-full bg-[#025E73] min-h-screen py-5 hidden lg:block scroll-mt-24" >
                <div className="grid grid-cols-1 container mb-5">
                    <div className="col-span-full">
                        <h2 className="hover:text-[#0B162A] text-white lg:text-7xl xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                            Artificial{" "}<br />
                            Intelligence{" "}<br />
                            <span className="hover:text-[#0B162A] text-[#C83803] shadow-text">Use Cases</span>
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 container">
                    <div className="col-span-6 min-h-screen flex flex-col items-center justify-center bg-[#023059]">
                        <FontAwesomeIcon
                            icon={faCalculator}
                            width={256}
                            height={256}
                            className="text-white mb-4"
                        />
                        <p className="text-white font-bold text-3xl leading-[0.95] shadow-text">Accounting</p>

                    </div>
                    <div className="col-span-6  min-h-screen">
                        <Card className="bg-[#CBCBCB] py-5 shadow-xl gap-1">
                            <CardContent>
                                <Link
                                    id={`${gtmLinkIdFromHref("/use-cases/accounting")}-lg`}
                                    href="/use-cases/accounting">
                                    <h3 className="text-black text-3xl text-shadow hover:text-[#C83803] font-bold shadow-text">
                                        AI Accounting
                                    </h3>
                                </Link>
                                <p className="text-black text-sm shadow-text">
                                    AI accounting systems use machine learning and automation to handle bookkeeping, scan invoices, categorize transactions, and speed up financial reporting. These platforms reduce manual data entry and minimize human error.
                                </p>
                                <Link id="home-use-cases-accounting-automated-accounts-payable-lg"
                                    href="/use-cases/accounting/accounts-payable/ai-ap-automation-software"
                                    className="hover:underline">
                                    <h4 className="text-black text-lg text-shadow hover:text-[#C83803] font-bold">
                                        AI AP Automation Software
                                    </h4>
                                </Link>
                                <p className="text-black text-sm text-shadow">
                                    You face heavy administrative burdens in accounts payable (AP) due to limited staff, manual data entry errors, slow approval bottlenecks, high risks of payment fraud, and tedious vendor management.
                                </p>

                                <ul className="list-disc text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-data-entry-processing-lg"
                                            href="/use-cases/accounting/accounts-payable/ai-document-processing"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Document Processing:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm">
                                            Stop burning billable hours on manual data entry.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Data Entry Processing Tools:
                                        </h6>
                                        <p className="text-black text-sm whitespace-nowrap">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-data-entry-processing/dext", "Dext")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-data-entry-processing/dext"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Dext
                                            </Link>,&nbsp;
                                            Corpay,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-data-entry-processing/bill", "Bill")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-data-entry-processing/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange", "AvidXchange")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                AvidXchange
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti", "Tipalti data entry")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-approval-workflows-lg"
                                            href="/use-cases/accounting/accounts-payable/ai-approval-workflow"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Approval Workflow:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm">
                                            Take the bottlenecks out of your business without losing control.                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Approval Workflow Tools:
                                        </h6>
                                        <p className="text-black text-sm">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax", "ApprovalMax")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                ApprovalMax
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/bill", "Bill")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/melio", "Melio")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/melio"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Melio
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/ramp", "Ramp")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/stampli", "Stampli")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/stampli"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Stampli
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-payment-execution-lg"
                                            href="/use-cases/accounting/accounts-payable/ai-automatic-bill-pay"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Automatic Bill Pay:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm">
                                            Control exactly how and when your cash moves, automatically.                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Payment Execution Tools:
                                        </h6>
                                        <p className="text-black text-sm">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio", "Melio")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Melio
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill", "Bill")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange", "AvidXchange")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                AvidXchange
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp", "Ramp")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti", "Tipalti")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-fraud-duplicate-payment-controls-lg"
                                            href="/use-cases/accounting/accounts-payable/ai-fraud-duplicate-payment-controls"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Fraud &amp; Duplicate Payment Controls:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Stop financial leaks before they walk out the door.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Fraud & Duplicate Payment Controls Tools:
                                        </h6>
                                        <p className="text-black text-sm">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius", "Medius")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Medius
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti", "Tipalti")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/stampli", "Stampli fraud controls")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-approval-workflows/stampli"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Stampli
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill", "Bill")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp", "Ramp fraud controls")}-lg`}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <Link
                                    id="home-use-cases-accounting-automated-cash-flow-forecasting-lg"
                                    href="/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting"
                                    className="hover:text-[#C83803] hover:underline">
                                    <h4 className="text-black font-bold text-lg">
                                        AI Cash Flow Forecasting
                                    </h4>
                                </Link>
                                <p className="text-black text-sm ">
                                    See around corners and never run out of cash.
                                </p>
                                <ul className="list-disc text-sm text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-accounts-receivable-lg"
                                            href="/use-cases/accounting/cash-flow-forecasting/ai-accounts-receivable-software"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Accounts Receivable Software:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Get paid faster without ever chasing a client again.                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Accounts Receivable Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq", "Chaserhq")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Chaserhq
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced", "Invoiced")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Invoiced
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay", "Versapay")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Versapay
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow", "Upflow")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Upflow
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill", "Bill")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <ul className="list-disc text-sm text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-spreadsheet-data-lg"
                                            href="/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Spreadsheet Data:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Turn static rows of cells into a dynamic, living business playbook.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Spreadsheet Replacement Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog", "Cashflowfrog")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Cashflowfrog
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork", "Clockwork")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Clockwork
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun", "Dryrun")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Dryrun
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp", "Floatapp")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Floatapp
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm", "Take the Helm")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Take the Helm
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-intelligent-resource-planning-lg"
                                            href="/use-cases/accounting/cash-flow-forecasting/ai-financial-planning-software"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Financial Planning Software:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Get big-enterprise efficiency without the big-enterprise price tag.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Resource Planning Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog", "Cashflowfrog")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Cashflowfrog
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq", "Fathom")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Fathom
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav", "Jirav")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Jirav
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks", "QuickBooks Online Advanced")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks Online Advanced
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm", "Take the Helm")}-lg`}
                                                href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Take the Helm
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <Link id="home-use-cases-accounting-tax-compliance-regulations-lg"
                                    href="/use-cases/accounting/tax-compliance-regulations"
                                    className="hover:underline">
                                    <h4 className="text-black hover:text-[#C83803] font-bold text-lg">
                                        Tax Compliance & Regulations
                                    </h4>
                                </Link>
                                <p className="text-black text-sm ">
                                    Turn tax season into just another Tuesday.
                                </p>
                                <ul className="list-disc text-sm text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-complex-and-changing-laws-lg"
                                            href="/use-cases/accounting/tax-compliance-regulations/ai-tax-law"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Tax Law:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Stop guessing your way through complex tax codes.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Tax Law Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno", "Quaderno")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Quaderno
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud", "TaxCloud")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxCloud
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar", "TaxJar")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxJar
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/thetaxvalet", "TaxValet")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/thetaxvalet"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxValet
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp", "Zamp")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zamp
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-payroll-tax-worker-misclassification-lg"
                                            href="/use-cases/accounting/tax-compliance-regulations/ai-payroll-software"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Payroll Software:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Take the liability and absolute dread out of payroll administration.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Payroll Tax Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp", "ADP")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                ADP
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel", "Deel")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Deel
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto", "Gusto")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Gusto
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks", "Justworks")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Justworks
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling", "Rippling")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Rippling
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-multi-state-sales-tax-nexus-lg"
                                            href="/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax"
                                            className="hover:text-[#C83803] text-[#000000] hover:underline">
                                            <h5 className="text-black text-base font-bold shadow-text">
                                                AI Multi-State Sales Tax:
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Expand your market without inheriting a compliance nightmare.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Multi-State Sales Tax Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno", "Quaderno")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Quaderno
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud", "TaxCloud")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxCloud
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar", "TaxJar")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxJar
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet", "TaxValet")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxValet
                                            </Link>,&nbsp;
                                            <Link
                                                id={`${gtmLinkIdFromHref("/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp", "Zamp")}-lg`}
                                                href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zamp
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-6">
                        <Card className="bg-[#CBCBCB] py-5 shadow-xl gap-1">
                            <CardContent>
                                <Link
                                    id={`${gtmLinkIdFromHref("/use-cases/marketing", "AI Marketing")}-lg`}
                                    href="/use-cases/marketing">
                                    <h3 className="text-black text-3xl hover:text-[#C83803] font-bold shadow-text">
                                        AI Marketing Systems
                                    </h3>
                                </Link>
                                <p className="text-black text-sm shadow-text">
                                    It is for South Florida small business owners who want practical AI to save time, improve lead follow-up, and make marketing more consistent.
                                </p>
                                <div>
                                    <Link
                                        id={`${gtmLinkIdFromHref("/use-cases/marketing/ai-sales-force-automation-software", "Lead Capture Pipeline")}-lg`}
                                        href="/use-cases/marketing/ai-sales-force-automation-software"
                                        className="hover:text-[#C83803] text-[#000000] hover:underline" >
                                        <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-lg shadow-text p-0 m-0">
                                            Marketing Automation Platforms (MAP)</h4>
                                    </Link>
                                    <p className="text-black text-sm">
                                        A software solution designed to automate, streamline, and measure repetitive marketing tasks, multi-channel campaigns, and customer workflows at scale.
                                    </p>
                                    <ul className="text-black list-disc text-sm list- pl-3 ">
                                        <li className="pl-.5">
                                            <strong className="text-sm"> </strong>
                                            <Link
                                                id={`${gtmLinkIdFromHref("/use-cases/marketing/lead-capture-pipeline/ai-receptionist", "Intelligent Receptionist")}-lg`}
                                                href="/use-cases/marketing/lead-capture-pipeline/ai-receptionist"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-base font-bold shadow-text">
                                                    AI Receptionist:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-sm">
                                                24/7, cloud native conversational software platform that handles incoming business phone calls with natural human fluency.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top Intelligent Receptionist Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack", "LobbyStack")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    LobbyStack
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk", "My AI Front Desk")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    My AI Front Desk
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva", "Nextiva")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Nextiva
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith", "Smith.ai")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Smith.ai
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha", "Voksha")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Voksha
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <strong className="text-sm"> </strong>
                                            <Link
                                                id={`${gtmLinkIdFromHref("/use-cases/marketing/lead-capture-pipeline/ai-chatbot", "Cross-Platform Chatbot")}-lg`}
                                                href="/use-cases/marketing/lead-capture-pipeline/ai-chatbot"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-base font-bold shadow-text">
                                                    AI Chatbot:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-sm">
                                                Deploys on WhatsApp, Facebook Messenger, Instagram, and websites seamlessly.
                                            </p>
                                            <p className="text-black text-sm font-bold pt-1">
                                                Top AI Chatbot Tools:
                                            </p>
                                            <p className="text-sm">
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin", "BotPenguin")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    BotPenguin
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta", "Dapta")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Dapta
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat", "Manychat")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Manychat
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk", "My AI Front Desk")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    My AI Front Desk
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio", "Tidio")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Tidio
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/use-cases/marketing/lead-capture-pipeline/ai-lead-enrichment-scoring", "Lead Enrichment and Predictive Scoring")}-lg`}
                                                href="/use-cases/marketing/lead-capture-pipeline/ai-lead-enrichment-scoring"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-base font-bold shadow-text">
                                                    AI Lead Enrichment &amp; Predictive Scoring:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-sm">
                                                Identify high-intent buyers, enrich contact data, and prioritize leads.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Lead Scoring Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo", "Apollo")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Apollo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors", "Factors")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Factors
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder", "Leadfeeder")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Leadfeeder
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha", "Lusha")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Lusha
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher", "Snitcher")}-lg`}
                                                    href="/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Snitcher
                                                </Link>.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link id="ai-content-creation-workflow-email-content-workflow-2-lg"
                                        href="/use-cases/marketing/ai-content-marketing-platforms" className="p-0 m-0">
                                        <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-lg shadow-text p-0 m-0">
                                            AI Content Marketing Platforms</h4>
                                    </Link><p className="text-black text-sm">
                                        AI Marketing Content Workflow is a repeatable system for turning ideas, customer questions, and source material into publishable marketing assets with AI, then repurposing them across channels.
                                    </p>
                                    <ul className="text-black list-disc text-sm list- pl-3 ">
                                        <li className="pl-.5">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/use-cases/marketing/content-creation-workflow/ai-content-planning", "Intelligent Content Planning")}-lg`}
                                                href="/use-cases/marketing/content-creation-workflow/ai-content-planning"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-base font-bold shadow-text">
                                                    AI Content Planning:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-sm">
                                                Intelligent Content Planning streamlines content creation for small businesses, saving time and reducing errors.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Content Planning Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite", "Hootsuite")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Hootsuite
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai", "HyperWrite")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    HyperWrite
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse", "MarketMuse")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    MarketMuse
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut", "Scalenut")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Scalenut
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush", "Semrush")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Semrush
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/use-cases/marketing/content-creation-workflow/ai-seo-content-generator", "Intelligent Content Generation")}-lg`}
                                                href="/use-cases/marketing/content-creation-workflow/ai-seo-content-generator"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-base font-bold shadow-text">
                                                    AI SEO Content Generator:
                                                </h5>
                                            </Link>
                                            <p className="text-black text-sm">
                                                Intelligent Content Generation helps Miami-Dade, Broward, and West Palm Beach businesses automate content creation, repurposing, scheduling, and approvals.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Content Generation Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword", "Anyword")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Anyword
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic", "Castmagic")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Castmagic
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/copy", "Copy.ai")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/copy"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Copy.ai
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/frase", "Frase")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/frase"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Frase
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite", "Hootsuite")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Hootsuite
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine", "ImagineArt")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    ImagineArt
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper", "Jasper")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Jasper
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/koala", "Koala")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/koala"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Koala
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr", "Rytr")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Rytr
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut", "Scalenut")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Scalenut
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic", "Writesonic")}-lg`}
                                                    href="/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Writesonic
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-base">Personalized Email Campaigns: </strong></h5>
                                            <p className="text-black text-sm">
                                                AI tailors subject lines and body copy for different audience segments at the same time.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Email Campaign Tools:
                                            </h6>
                                            <p className="text-sm">
                                                Klaviyo,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/mailchimp", "Mailchimp")}-lg`}
                                                    href="/tools/marketing/mailchimp"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Mailchimp
                                                </Link>,&nbsp;
                                                GetResponse,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/active-campaign", "ActiveCampaign")}-lg`}
                                                    href="/tools/marketing/active-campaign"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    ActiveCampaign
                                                </Link>,&nbsp;or&nbsp;
                                                MailerLite.                                            </p>
                                        </li>
                                    </ul>
                                    <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-lg shadow-text p-0 m-0">
                                        Ad Spend Optimization</h4>
                                    <ul className="text-black list-disc text-xs list- pl-3 ">
                                        <li className="pl-.5">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation", "Budget Ad Copy & Message Validation")}-lg`}
                                                href="/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-base font-bold shadow-text">
                                                    Precision Lead Acquisition (Under $500/Month):
                                                </h5>
                                            </Link>
                                            <p className="text-black text-sm">
                                                Make every ad dollar count with targeted local advertising for budgets under $500/month. Reach nearby customers, reduce wasted spending, and focus your budget on the ads that perform best.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top Budget Ad Copy & Message Validation Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adcreative", "AdCreative")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adcreative"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    AdCreative
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma", "Adzooma")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/adzooma"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Adzooma
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword", "Anyword")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/anyword"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Anyword
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max", "Performance Max")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Performance Max
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq", "LocaliQ")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/localiq"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    LocaliQ
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/plai", "Plai")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/plai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Plai
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <Link
                                                id={`${gtmLinkIdFromHref("/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation", "Measured Lead Generation")}-lg`}
                                                href="/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation"
                                                className="hover:text-[#C83803] text-[#000000] hover:underline">
                                                <h5 className="text-black text-base font-bold shadow-text">
                                                    Intent-Driven Lead Sourcing (Budget $500–$1,500 month):
                                                </h5>
                                            </Link>
                                            <p className="text-black text-sm">
                                                Continuously monitor campaign performance across channels, automatically pulling funds from underperforming ad sets and shifting them to high-converting lead campaigns.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top Measured Lead Generation Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx", "Madgicx")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/measured-lead-generation/madgicx"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Madgicx
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/measured-lead-generation/marpipe", "Marpipe")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/measured-lead-generation/marpipe"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Marpipe
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/measured-lead-generation/optmyzr", "Optmyzr")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/measured-lead-generation/optmyzr"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Optmyzr
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max", "Performance Max")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/budget-local-ad-spending/google-performance-max"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Performance Max
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench", "Wrench")}-lg`}
                                                    href="/tools/marketing/ad-spend-optimization/measured-lead-generation/wrench"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Wrench
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-base">Data Quality Assessments: </strong></h5>
                                            <p className="text-black text-sm">
                                                Build automated validation scripts that scan decentralized data sources for completeness, accuracy, and formatting errors before the data is exposed to an LLM.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Data Quality Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/monte-carlo", "Monte Carlo")}-lg`}
                                                    href="/tools/marketing/monte-carlo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Monte Carlo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/anomalo", "Anomalo")}-lg`}
                                                    href="/tools/marketing/anomalo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Anomalo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/great-expectations", "Great Expectations")}-lg`}
                                                    href="/tools/marketing/great-expectations"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Great Expectations
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={`${gtmLinkIdFromHref("/tools/marketing/qualytics", "Qualytics")}-lg`}
                                                    href="/tools/marketing/qualytics"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Qualytics
                                                </Link>.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-6 min-h-screen flex flex-col items-center justify-center bg-[#0B162A]">
                        <FontAwesomeIcon
                            icon={faFunnelDollar}
                            width={256}
                            height={256}
                            className="text-white mb-4"
                        />
                        <p className="text-white font-bold text-3xl leading-[0.95] shadow-text">Marketing</p>

                    </div>
                </div>
            </article>

        </>
    )
}
// function departmentSectionId(departmentSlug: string): string {
//   return `use-cases-section-${departmentSlug}`;
// }

// function useCaseSectionId(departmentSlug: string, useCaseSlug: string): string {
//   return `use-case-section-${departmentSlug}-${useCaseSlug}`;
// }

// function departmentLinkId(departmentSlug: string, variant: "panel" | "title"): string {
//   return gtmLinkIdFromHref(`/use-cases/${departmentSlug}`, variant);
// }

// function useCaseLinkId(departmentSlug: string, useCaseSlug: string): string {
//   return gtmLinkIdFromHref(`/use-cases/${departmentSlug}/${useCaseSlug}`);
// }


