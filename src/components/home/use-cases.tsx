import Link from "next/link";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFunnelDollar,
    faTag,
    faUsersBetweenLines,
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
                                            Accounting
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
                                <Link id="home-use-cases-accounting-automated-accounts-payable"
                                    href="/use-cases/accounting/accounts-payable/automated-accounts-payable"
                                    className="hover:underline">
                                    <h4 className="text-black text-base hover:text-[#C83803] font-bold">
                                        Accounts Payable
                                    </h4>
                                    <p className="text-black text-xs text-shadow">
                                        You face heavy administrative burdens in accounts payable (AP) due to limited staff, manual data entry errors, slow approval bottlenecks, high risks of payment fraud, and tedious vendor management.
                                    </p>
                                </Link>
                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-data-entry-processing"
                                            href="/use-cases/accounting/accounts-payable/automated-data-entry-processing"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Data Entry &amp; Processing:</strong></h5>
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
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti", "Tipalti")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-approval-workflows"
                                            href="/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Approval Workflows:</strong></h5>
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
                                            href="/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Payment Execution:</strong></h5>
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
                                            href="/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Fraud &amp; Duplicate Payment Controls:</strong></h5>
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
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/stampli", "Stampli")}
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
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp", "Ramp")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <Link
                                    id="home-use-cases-accounting-automated-cash-flow-forecasting"
                                    href="/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting"
                                    className="hover:text-[#C83803] hover:underline">
                                    <h4 className="text-black font-bold text-base">
                                        Cash Flow Forecasting
                                    </h4>
                                </Link>
                                <p className="text-black text-xs">
                                    See around corners and never run out of cash.
                                </p>
                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-accounts-receivable"
                                            href="/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Accounts Receivable:</strong></h5>
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
                                            href="/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Spreadsheet Data:</strong></h5>
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
                                            href="/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Resource Planning:</strong></h5>
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
                                            href="/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Tax Law:</strong></h5>
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
                                            href="/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Payroll Tax:</strong></h5>
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
                                            href="/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida-smbs"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-sm hover:text-[#C83803]">
                                                Intelligent Multi-State Sales Tax:</strong></h5>
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
                                        id={gtmLinkIdFromHref("/use-cases/marketing/ai-marketing-systems", "AI Marketing")}
                                        href="/use-cases/marketing/ai-marketing-systems">
                                        <h3 className="text-white text-3xl hover:text-[#C83803] font-bold shadow-text">
                                            Marketing
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
                                <ol>
                                    <Link
                                        id={gtmLinkIdFromHref("/use-cases/marketing/intelligent-lead-capture-pipeline", "Lead Capture Pipeline")}
                                        href="/use-cases/marketing/intelligent-lead-capture-pipeline"
                                        className="hover:text-[#C83803] text-[#000000] hover:underline" >
                                        <h4 className="text-black text-base font-bold shadow-text">
                                            Lead Capture Pipeline &amp; Instant Response</h4>
                                    </Link>
                                    <p className="text-black text-xs">
                                        Capture every inbound call, text, web chat, and form inquiry, even after hours, and turn it into a qualified lead.
                                    </p>
                                    <ul className="text-black list-disc text-sm list- pl-3 ">
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-sm">
                                                Intelligent Receptionist:
                                            </strong></h5>
                                            <p className="text-black text-xs">
                                                24/7, cloud native conversational software platform that handles incoming business phone calls with natural human fluency.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top Intelligent Receptionist Tools:
                                            </h6>
                                            <ul>
                                                <li>
                                                    <p className="text-xs">
                                                        CallAgentAI,&nbsp;
                                                        Speakai,&nbsp;
                                                        VoiceGenie,&nbsp;
                                                        ElevenLabs Conversational AI,&nbsp;
                                                        Synthflow AI.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-sm">
                                                Smart Chatbots for Marketing:</strong></h5>
                                            <p className="text-black text-xs">
                                                Marketing teams use smart AI chatbots to run campaigns around the clock, sort and qualify leads, deliver personal product tips, and recover lost sales.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Chatbot Tools:
                                            </h6>
                                            <p className="text-xs">
                                                BotPenguin,&nbsp;
                                                ManyChat,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Pipedrive
                                                </Link>,&nbsp;
                                                CustomGPT,&nbsp;
                                                Get Chip Bot
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-sm">
                                                Lead Scoring:</strong></h5>
                                            <p className="text-black text-xs">
                                                AI lead scoring replaces static, manual point systems with dynamic machine learning models. It analyzes historical conversions, real-time intent, and firmographics to rank prospects by purchase readiness.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Lead Scoring Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/active-campaign", "ActiveCampaign")}
                                                    href="/tools/marketing/active-campaign"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    ActiveCampaign
                                                </Link>,&nbsp;
                                                Apollo,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Pipedrive
                                                </Link>,&nbsp;or&nbsp;
                                                LeadSquared,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/6sense", "6sense")}
                                                    href="/tools/marketing/6sense"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    6sense
                                                </Link>.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link id="ai-content-creation-workflow-email-content-workflow-1"
                                        href="/use-cases/marketing/ai-content-creation-workflow" className="p-0 m-0">
                                        <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-base shadow-text p-0 m-0">
                                            Content Creation Workflow</h4>
                                    </Link><p className="text-black text-xs">
                                        AI Marketing Content Workflow is a repeatable system for turning ideas, customer questions, and source material into publishable marketing assets with AI, then repurposing them across channels.
                                    </p>
                                    <ul className="text-black list-disc text-xs list- pl-3 ">
                                        <li className="pl-.5 ">
                                            <Link
                                                id={gtmLinkIdFromHref("/use-cases/marketing/automated-content-generation-transforming-small-business-marketing", "Automated Content Generation")}
                                                href="/use-cases/marketing/automated-content-generation-transforming-small-business-marketing"
                                                className="hover:underline">
                                                <h5><strong className="text-black text-sm hover:text-[#C83803] hover:underline">
                                                    Automated Content Generation:
                                                </strong>
                                                </h5>
                                            </Link>
                                            <p className="text-black text-xs">
                                                Automated content creation uses artificial intelligence and software tools to research, generate, repurpose, and publish text, images, and video with minimal human effort.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Automated Content Generation Tools:
                                            </h6>
                                            <p className="text-xs">
                                                Scalenut,&nbsp;
                                                Writesonic,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/contentstudio", "ContentStudio")}
                                                    href="/tools/marketing/contentstudio"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    ContentStudio
                                                </Link>,&nbsp;
                                                Rytr,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/jasper", "Jasper")}
                                                    href="/tools/marketing/jasper-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Jasper
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-sm">AI Content Repurposing: </strong></h5>
                                            AI content repurposing strategies are about turning one strong asset into multiple channel-specific pieces, like blog posts into social captions, email sequences, video scripts, or summaries. The most effective strategies start with high-performing evergreen content, then adapt it for different formats while keeping the core message consistent.
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Content Repurposing Tools:
                                            </h6>
                                            <p className="text-xs">
                                                Pictory,&nbsp;
                                                OpusClip,
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/contentstudio", "ContentStudio")}
                                                    href="/tools/marketing/contentstudio"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    ContentStudio
                                                </Link>,&nbsp;
                                                Repurpose,&nbsp;
                                                Vizard.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-sm">
                                                Bulk Scheduling:
                                            </strong></h5>
                                            <p className="text-black text-xs">
                                                AI tools write a month of platform-specific posts, hashtags, and captions in minutes.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Bulk Scheduling Tools:
                                            </h6>
                                            <p className="text-xs">
                                                Metricool,&nbsp;
                                                Publer,&nbsp;
                                                SocialBee,&nbsp;
                                                CoSchedule,&nbsp;
                                                Sendible.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-sm">
                                                Approval Workflows:
                                            </strong>
                                            </h5>
                                            <p className="text-black text-xs">
                                                Configure automated, rule-based approval workflows that automatically route invoices to the correct manager based on preset dollar thresholds or departments.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top 5 Automated Approval Workflow Tools:
                                            </h6>
                                            <p className="text-xs">
                                                Pabbly,&nbsp;
                                                Make,&nbsp;
                                                N8N,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Pipedrive
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/zapier", "Zapier")}
                                                    href="/tools/marketing/zapier"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Zapier
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
                                        Automated Ad Spend Optimization</h4>
                                    <ul className="text-black list-disc text-xs list- pl-3 ">
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-sm">
                                                Dynamic Creative Optimization: </strong></h5>
                                            <p className="text-black text-xs">
                                                AI tests variations of ad copy, imagery, and video angles to identify which combinations drive the lowest cost-per-lead.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Dynamic Optimization Tools:
                                            </h6>
                                            <p className="text-xs">
                                                AdCreative,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/madgicx", "Madgicx")}
                                                    href="/tools/marketing/madgicx"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Madgicx
                                                </Link>,&nbsp;
                                                Creatify,&nbsp;
                                                Cometly&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Pipedrive
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-sm">Automated Rules & Bidding: </strong></h5>
                                            <p className="text-black text-xs">
                                                Autonomous scripts adjust bidding caps and pause ad fatigue instances instantly without requiring manual oversight.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Automated Bidding Tools:
                                            </h6>
                                            <p className="text-xs">
                                                Adzooma,&nbsp;
                                                Optmyzr,&nbsp;
                                                Opteo,&nbsp;
                                                WordStream,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/zapier", "Zapier")}
                                                    href="/tools/marketing/zapier"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Zapier
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-sm">
                                                Real-Time Budget Reallocation:</strong></h5>
                                            <p className="text-black text-xs">
                                                Continuously monitor campaign performance across channels, automatically pulling funds from underperforming ad sets and shifting them to high-converting lead campaigns.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Real-Time Budget Reallocation Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/madgicx", "Madgicx")}
                                                    href="/tools/marketing/madgicx"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Madgicx
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/adobe-mix-modeler", "Adobe Mix Modeler")}
                                                    href="/tools/marketing/adobe-mix-modeler"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Adobe Mix Modeler
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/optimove", "Optimove")}
                                                    href="/tools/marketing/optimove"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Optimove
                                                </Link>,&nbsp;or&nbsp;
                                                Tableau AI / Adobe Analytics.
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
                                </ol>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </article>


            <article id="use-cases-section" className="w-full bg-[#025E73] min-h-screen py-5 hidden lg:block scroll-mt-24" >
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
                                    id={gtmLinkIdFromHref("/use-cases/accounting")}
                                    href="/use-cases/accounting">
                                    <h3 className="text-black text-3xl text-shadow hover:text-[#C83803] font-bold shadow-text">
                                        Accounting Systems
                                    </h3>
                                </Link>
                                <p className="text-black text-sm shadow-text">
                                    AI accounting systems use machine learning and automation to handle bookkeeping, scan invoices, categorize transactions, and speed up financial reporting. These platforms reduce manual data entry and minimize human error.
                                </p>
                                <Link id="home-use-cases-accounting-automated-accounts-payable"
                                    href="/use-cases/accounting/accounts-payable/automated-accounts-payable"
                                    className="hover:underline">
                                    <h4 className="text-black text-lg text-shadow hover:text-[#C83803] font-bold">
                                        Accounts Payable
                                    </h4>
                                </Link>
                                <p className="text-black text-sm text-shadow">
                                    You face heavy administrative burdens in accounts payable (AP) because of the entire intake-to-posting chain.  Email attachments, PDFs, paper invoices, manually entered into your accounting system that have predictable business consequences.
                                </p>

                                <ul className="list-disc text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-data-entry-processing"
                                            href="/use-cases/accounting/accounts-payable/automated-data-entry-processing"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Data Entry &amp; Processing:
                                            </strong>
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
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti", "Tipalti")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-approval-workflows"
                                            href="/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Approval Workflows:
                                            </strong>
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm">
                                            Take the bottlenecks out of your business without losing control.                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Approval Workflow Tools:
                                        </h6>
                                        <p className="text-black text-sm">
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
                                            href="/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Payment Execution:
                                            </strong>
                                            </h5>
                                        </Link>
                                        <p className="text-black text-sm">
                                            Control exactly how and when your cash moves, automatically.                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Payment Execution Tools:
                                        </h6>
                                        <p className="text-black text-sm">
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
                                            href="/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Fraud &amp; Duplicate Payment Controls:</strong></h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Stop financial leaks before they walk out the door.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Fraud & Duplicate Payment Controls Tools:
                                        </h6>
                                        <p className="text-black text-sm">
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
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-approval-workflows/stampli", "Stampli")}
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
                                                id={gtmLinkIdFromHref("/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp", "Ramp")}
                                                href="/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <Link
                                    id="home-use-cases-accounting-automated-cash-flow-forecasting"
                                    href="/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting"
                                    className="hover:text-[#C83803] hover:underline">
                                    <h4 className="text-black font-bold text-lg">
                                        Cash Flow Forecasting
                                    </h4>
                                </Link>
                                <p className="text-black text-sm ">
                                    See around corners and never run out of cash.
                                </p>
                                <ul className="list-disc text-sm text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-accounts-receivable"
                                            href="/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Accounts Receivable:</strong></h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Get paid faster without ever chasing a client again.                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Accounts Receivable Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
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
                                <ul className="list-disc text-sm text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-automated-spreadsheet-data"
                                            href="/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Spreadsheet Data:</strong></h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Turn static rows of cells into a dynamic, living business playbook.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Spreadsheet Replacement Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
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
                                            href="/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Resource Planning:</strong></h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Get big-enterprise efficiency without the big-enterprise price tag.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Resource Planning Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
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
                                    <h4 className="text-black hover:text-[#C83803] font-bold text-lg">
                                        Tax Compliance & Regulations
                                    </h4>
                                </Link>
                                <p className="text-black text-sm ">
                                    Turn tax season into just another Tuesday.
                                </p>
                                <ul className="list-disc text-sm text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <Link id="home-use-cases-accounting-complex-and-changing-laws"
                                            href="/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Tax Law:</strong></h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Stop guessing your way through complex tax codes.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Tax Law Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
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
                                            href="/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Payroll Tax:</strong></h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Take the liability and absolute dread out of payroll administration.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Payroll Tax Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
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
                                            href="/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida-smbs"
                                            className="hover:underline">
                                            <h5><strong className="text-black text-base hover:text-[#C83803]">
                                                Intelligent Multi-State Sales Tax:</strong></h5>
                                        </Link>
                                        <p className="text-black text-sm ">
                                            Expand your market without inheriting a compliance nightmare.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Intelligent Multi-State Sales Tax Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
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
                    <div className="col-span-6">
                        <Card className="bg-[#CBCBCB] py-5 shadow-xl gap-1">
                            <CardContent>
                                <Link
                                    id={gtmLinkIdFromHref("/use-cases/marketing/ai-marketing-systems", "AI Marketing")}
                                    href="/use-cases/marketing/ai-marketing-systems">
                                    <h3 className="text-black text-3xl hover:text-[#C83803] font-bold shadow-text">
                                        Marketing
                                    </h3>
                                </Link>
                                <p className="text-black text-sm shadow-text">
                                    South Florida small-business owners who want practical AI to save time, improve lead follow-up, and make marketing more consistent.
                                </p>
                                <ol>
                                    <Link
                                        id={gtmLinkIdFromHref("/use-cases/marketing/intelligent-lead-capture-pipeline", "Lead Capture Pipeline")}
                                        href="/use-cases/marketing/intelligent-lead-capture-pipeline"
                                        className="hover:text-[#C83803] text-[#000000] hover:underline" >
                                        <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-lg shadow-text p-0 m-0">
                                            Lead Capture Pipeline &amp; Instant Response</h4>
                                    </Link>
                                    <p className="text-black text-sm">
                                        Capture every inbound call, text, web chat, and form inquiry, even after hours, and turn it into a qualified lead.
                                    </p>
                                    <ul className="text-black list-disc text-sm list- pl-3 ">
                                        <li className="pl-.5">
                                            <strong className="text-sm"> </strong>
                                            <h5><strong className="text-black text-base">Intelligent Receptionist: </strong></h5>
                                            <p className="text-black text-sm">
                                                24/7, cloud native conversational software platform that handles incoming business phone calls with natural human fluency.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top Intelligent Receptionist Tools:
                                            </h6>
                                            <ul>
                                                <li>
                                                    <p className="text-sm">
                                                        CallAgentAI,&nbsp;
                                                        Speakai,&nbsp;
                                                        VoiceGenie,&nbsp;
                                                        ElevenLabs Conversational AI,&nbsp;
                                                        Synthflow AI.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="pl-.5">
                                            <strong className="text-sm"> </strong>
                                            <h5><strong className="text-black text-base">
                                                Smart Chatbots for Marketing:</strong></h5>
                                            <p className="text-black text-sm">
                                                Marketing teams use smart AI chatbots to run campaigns around the clock, sort and qualify leads, deliver personal product tips, and recover lost sales.
                                            </p>
                                            <p className="text-black text-sm font-bold pt-1">
                                                Top AI Chatbot Tools:
                                            </p>
                                            <p className="text-sm">
                                                BotPenguin,&nbsp;
                                                ManyChat,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Pipedrive
                                                </Link>,&nbsp;
                                                CustomGPT,&nbsp;
                                                Get Chip Bot
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-base">
                                                Lead Scoring:</strong></h5>
                                            <p className="text-black text-sm">
                                                AI lead scoring replaces static, manual point systems with dynamic machine learning models. It analyzes historical conversions, real-time intent, and firmographics to rank prospects by purchase readiness.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Lead Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/active-campaign", "ActiveCampaign")}
                                                    href="/tools/marketing/active-campaign"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    ActiveCampaign
                                                </Link>,&nbsp;
                                                Apollo,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Pipedrive
                                                </Link>,&nbsp;or&nbsp;
                                                LeadSquared,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/6sense", "6sense")}
                                                    href="/tools/marketing/6sense"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    6sense
                                                </Link>.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link id="ai-content-creation-workflow-email-content-workflow-2"
                                        href="/use-cases/marketing/ai-content-creation-workflow" className="p-0 m-0">
                                        <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-lg shadow-text p-0 m-0">
                                            Content Creation Workflow</h4>
                                    </Link>
                                    <ul className="text-black list-disc text-sm list- pl-3 ">
                                        <li className="pl-.5 ">
                                            <Link
                                                id={gtmLinkIdFromHref("/use-cases/marketing/automated-content-generation-transforming-small-business-marketing", "Automated Content Generation")}
                                                href="/use-cases/marketing/automated-content-generation-transforming-small-business-marketing"
                                                className="hover:underline">
                                                <h5><strong className="text-black text-base hover:text-[#C83803] hover:underline">
                                                    Automated Content Generation:
                                                </strong></h5>
                                            </Link>
                                            <p className="text-black text-sm">
                                                AI Marketing Content Workflow is a repeatable system for turning ideas, customer questions, and source material into publishable marketing assets with AI, then repurposing them across channels. The most effective workflows use AI for brainstorming, drafting, repurposing, and scheduling rather than treating it as a one-off writing tool.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Automated Content Generation Tools:
                                            </h6>
                                            <p className="text-black text-sm">
                                                Scalenut,&nbsp;
                                                Writesonic,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/contentstudio", "ContentStudio")}
                                                    href="/tools/marketing/contentstudio"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    ContentStudio
                                                </Link>,&nbsp;
                                                Rytr,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/jasper", "Jasper")}
                                                    href="/tools/marketing/jasper-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Jasper
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-base">AI Content Repurposing: </strong></h5>
                                            <p className="text-black text-sm">
                                                AI content repurposing strategies are about turning one strong asset into multiple channel-specific pieces, like blog posts into social captions, email sequences, video scripts, or summaries. The most effective strategies start with high-performing evergreen content, then adapt it for different formats while keeping the core message consistent.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Content Repurposing Tools:
                                            </h6>
                                            <p className="text-sm">
                                                Pictory,&nbsp;
                                                OpusClip,
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/contentstudio", "ContentStudio")}
                                                    href="/tools/marketing/contentstudio"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    ContentStudio
                                                </Link>,&nbsp;
                                                Repurpose,&nbsp;
                                                Vizard.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-base">Bulk Scheduling: </strong></h5>
                                            <p className="text-black text-sm">
                                                AI tools write a month of platform-specific posts, hashtags, and captions in minutes.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Bulk Scheduling Tools:
                                            </h6>
                                            <p className="text-sm">
                                                Metricool,&nbsp;
                                                Publer,&nbsp;
                                                SocialBee,&nbsp;
                                                CoSchedule,&nbsp;
                                                Sendible.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-base">Approval Process: </strong></h5>
                                            <p className="text-black text-sm">
                                                AI-powered approval workflows streamline content review and sign-off processes.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Approval Process Tools:
                                            </h6>
                                            <p className="text-sm">
                                                Pabbly,&nbsp;
                                                Make,&nbsp;
                                                N8N,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Pipedrive
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/zapier", "Zapier")}
                                                    href="/tools/marketing/zapier"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Zapier
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
                                                MailerLite.                                            </p>
                                        </li>
                                    </ul>
                                    <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-lg shadow-text p-0 m-0">
                                        Automated Ad Spend Optimization</h4>
                                    <ul className="text-black list-disc text-xs list- pl-3 ">
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-base">
                                                Dynamic Creative Optimization: </strong></h5>
                                            <p className="text-black text-sm">
                                                AI tests variations of ad copy, imagery, and video angles to identify which combinations drive the lowest cost-per-lead.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Dynamic Optimization Tools:
                                            </h6>
                                            <p className="text-sm">
                                                Adzooma,&nbsp;
                                                Optmyzr,&nbsp;
                                                Opteo,&nbsp;
                                                WordStream,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/zapier", "Zapier")}
                                                    href="/tools/marketing/zapier"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Zapier
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-base">Automated Rules & Bidding: </strong></h5>
                                            <p className="text-black text-sm">
                                                Autonomous scripts adjust bidding caps and pause ad fatigue instances instantly without requiring manual oversight.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Automated Bidding Tools:
                                            </h6>
                                            <p className="text-sm">
                                                Adzooma,&nbsp;
                                                Optmyzr,&nbsp;
                                                Opteo,&nbsp;
                                                WordStream,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/zapier", "Zapier")}
                                                    href="/tools/marketing/zapier"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Zapier
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-base">
                                                Real-Time Budget Reallocation:</strong></h5>
                                            <p className="text-black text-sm">
                                                Continuously monitor campaign performance across channels, automatically pulling funds from underperforming ad sets and shifting them to high-converting lead campaigns.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Real-Time Budget Reallocation Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/madgicx", "Madgicx")}
                                                    href="/tools/marketing/madgicx"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Madgicx
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/adobe-mix-modeler", "Adobe Mix Modeler")}
                                                    href="/tools/marketing/adobe-mix-modeler"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Adobe Mix Modeler
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/optimove", "Optimove")}
                                                    href="/tools/marketing/optimove"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Optimove
                                                </Link>,&nbsp;or&nbsp;
                                                Tableau AI / Adobe Analytics.
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
                                </ol>
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


