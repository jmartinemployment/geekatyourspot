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
                            Artificial<br />
                            Intelligence<br />
                            <span className="hover:text-[#0B162A] text-[#C83803] shadow-text">Use Cases</span>
                        </h2>


                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 container">
                    <div className="col-span-full bg-[#CBCBCB] shadow-xl">
                        <Card className="bg-[#CBCBCB] pt-0 shadow-xl gap-1">
                            <CardHeader className="bg-[#023059] py-2">
                                <CardTitle>
                                    <h3 className="text-3xl text-white font-bold shadow-text inline">
                                        Accounting
                                    </h3>
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
                                        Automated Accounts Payable
                                    </h4>
                                    <p className="text-black text-xs text-shadow">
                                        You face heavy administrative burdens in accounts payable (AP) due to limited staff, manual data entry errors, slow approval bottlenecks, high risks of payment fraud, and tedious vendor management.
                                    </p>
                                </Link>
                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-xs">
                                            Automated Data Entry &amp; Processing:</strong></h5>
                                        <p className="text-black text-xs">
                                            Utilize Optical Character Recognition (OCR) Technology to automatically extract data from invoices and vendor payments then populate corresponding fields in your AP system with high accuracy.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Data Entry Processing Tools:
                                        </h6>
                                        <p className="text-black text-xs whitespace-nowrap">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/zapier", "Zapier")}
                                                href="/tools/accounting/zapier"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zapier
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks-online", "QuickBooks Online")}
                                                href="/tools/accounting/quickbooks-online"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/lido", "Lido")}
                                                href="/tools/accounting/lido"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Lido
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/jotform", "Jotform")}
                                                href="/tools/accounting/jotform"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Jotform
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/uiPath", "UiPath")}
                                                href="/tools/accounting/uiPath"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                UiPath
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm"> </strong>
                                        <h5><strong className="text-black text-xsm">
                                            Approval Workflows:
                                        </strong></h5>
                                        <p className="text-black text-xs">
                                            Configure automated, rule-based approval workflows that automatically route invoices to the correct manager based on preset dollar thresholds or departments.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Approval Workflow Tools:
                                        </h6>
                                        <p className="text-black text-xs">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/zapier", "Zapier")}
                                                href="/tools/accounting/zapier"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zapier
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/jotform-workflows", "Jotform Workflows")}
                                                href="/tools/accounting/jotform-workflows"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Jotform Workflows
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/kissflow", "Kissflow")}
                                                href="/tools/accounting/kissflow"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Kissflow
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/process-street", "Process Street")}
                                                href="/tools/accounting/process-street"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Process Street
                                            </Link>,&nbsp;or&nbsp;                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-xs">Automated Payment Execution:</strong></h5>
                                        <p className="text-black text-xs">
                                            Automate your payment execution so you can schedule payments in advance, taking advantage of early-pay discounts and ensuring you never miss a deadline.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Payment Execution Tools:
                                        </h6>
                                        <p className="text-xs">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/bill", "Bill")}
                                                href="/tools/accounting/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/melio", "Melio")}
                                                href="/tools/accounting/melio"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Melio
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;or&nbsp;                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/ramp", "Ramp")}
                                                href="/tools/accounting/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-sm">
                                            Automated Fraud & Duplicate Payment Controls:</strong></h5>
                                        <p className="text-black text-xs ">
                                            Automate the matching of Purchase Orders, Receiving Reports, and Invoices before payment is released, and route payments through virtual cards — which carry stronger fraud controls than traditional payment methods.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Fraud & Duplicate Payment Controls Tools:
                                        </h6>
                                        <p className="text-xs">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/bill", "Bill")}
                                                href="/tools/accounting/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/ramp", "Ramp")}
                                                href="/tools/accounting/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/stampli", "Stampli")}
                                                href="/tools/accounting/stampli"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Stampli
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/yooz", "Yooz")}
                                                href="/tools/accounting/yooz"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Yooz
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/Tipalti", "Tipalti")}
                                                href="/tools/accounting/Tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <Link
                                    id=""
                                    href="/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting"
                                    className="hover:text-[#C83803] hover:underline">
                                    <h4 className="text-black font-bold text-base">
                                        Cash Flow Forecasting
                                    </h4>
                                </Link>
                                <p className="text-black text-xs">
                                    You face unpredictable income, delayed customer collections, hidden or rising overhead costs, manual data entry errors, and confusing high profit on paper with actual available bank cash.
                                </p>
                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-sm">
                                            Accounts Receivable:</strong></h5>
                                        <p className="text-black text-xs ">
                                            Clients take 30, 60, or 90 days to settle bills, leaving you to cover payroll and materials out of pocket while waiting.                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Accounts Receivable Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/freshbooks", "FreshBooks")}
                                                href="/tools/accounting/freshbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                FreshBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/bill", "Bill")}
                                                href="/tools/accounting/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/zoho-books", "Zoho Books")}
                                                href="/tools/accounting/zoho-books"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zoho Books
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/chaser", "Chaser")}
                                                href="/tools/accounting/chaser"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Chaser
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/paidnice", "Paidnice")}
                                                href="/tools/accounting/paidnice"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Paidnice
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-sm">
                                            Outdated Spreadsheet Data::
                                        </strong>
                                        </h5>
                                        <p className="text-black text-xs ">
                                            Static spreadsheets show old data instead of live numbers. Manual entry into basic grids leads to human error, outdated figures, and broken formulas. Bank accounts, invoicing software, and payroll tools do not always sync automatically.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Spreadsheet Replacement Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/airtable", "Airtable")}
                                                href="/tools/accounting/airtable"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Airtable
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/clickup", "ClickUp")}
                                                href="/tools/accounting/clickup"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                ClickUp
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/smartsheet", "Smartsheet")}
                                                href="/tools/accounting/smartsheet"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Smartsheet
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/rows", "Rows")}
                                                href="/tools/accounting/rows"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Rows
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/notion", "Notion")}
                                                href="/tools/accounting/notion"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Notion
                                            </Link>,&nbsp;
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-sm">
                                            Enterprise Resource Planning:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-xs ">
                                            Sales fluctuate, making it hard to guess future income. Copying numbers from bank accounts wastes time and causes human error.  Sudden bills or repairs break the budget without warning.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Enterprise Planning Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/float", "Float")}
                                                href="/tools/accounting/float"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Float
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/pulse", "Pulse")}
                                                href="/tools/accounting/pulse"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Pulse
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-analytics", "CashAnalytics")}
                                                href="/tools/accounting/cash-analytics"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                CashAnalytics
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/agicap", "Agicap")}
                                                href="/tools/accounting/agicap"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Agicap
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/fluidly", "Fluidly")}
                                                href="/tools/accounting/fluidly"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Fluidly
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <h4 className="text-black font-bold text-base">
                                    Tax Compliance & Regulations
                                </h4>
                                <p className="text-black text-xs ">
                                    Automated tax compliance software streamlines calculations, nexus tracking, exemption management, and filings across thousands of global jurisdictions.  Applies real-time regulatory updates, minimize manual human errors, and generate signature-ready reports.
                                </p>                                <ul className="list-disc text-xs text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-sm">
                                            Complex and Changing Laws:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-xs ">
                                            Frequent updates to tax codes, deductions, and specialized reporting requirements make it difficult to stay current without dedicated legal or accounting staff.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Tax Law Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/avalara", "Avalara")}
                                                href="/tools/accounting/avalara"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Avalara
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/turbtax-business", "TurboTax Business")}
                                                href="/tools/accounting/turbtax-business"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TurboTax Business
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/taxact-business", "TaxAct Business")}
                                                href="/tools/accounting/taxact-business"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxAct Business
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/lettuce", "Lettuce")}
                                                href="/tools/accounting/lettuce"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Lettuce
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-sm">
                                            Payroll Tax & Worker Misclassification:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-xs ">
                                            Handling payroll tax deposits, tracking overtime rules, and correctly distinguishing between W-2 employees and 1099 independent contractors trigger high risks of penalties.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Payroll Tax Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/gusto", "Gusto")}
                                                href="/tools/accounting/gusto"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Gusto
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/rippling", "Rippling")}
                                                href="/tools/accounting/rippling"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Rippling
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/adp-run", "ADP Run")}
                                                href="/tools/accounting/adp-run"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                ADP Run
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks-payroll", "QuickBooks Payroll")}
                                                href="/tools/accounting/quickbooks-payroll"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks Payroll
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/onpay", "OnPay")}
                                                href="/tools/accounting/onpay"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                OnPay
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-sm">
                                            Multi-State Sales Tax Nexus: </strong>
                                        </h5>
                                        <p className="text-black text-xs ">
                                            Online and remote sales force tracking economic or physical presence across multiple state lines, complicating collection and remittance.
                                        </p>
                                        <h6 className="text-black text-xs font-bold py-1">
                                            Top 5 Automated Multi-State Sales Tax Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/taxjar", "TaxJar")}
                                                href="/tools/accounting/taxjar"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxJar
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/stripe-tax", "Stripe Tax")}
                                                href="/tools/accounting/stripe-tax"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Stripe Tax
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/anrok", "Anrok")}
                                                href="/tools/accounting/anrok"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Anrok
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quaderno", "Quaderno")}
                                                href="/tools/accounting/quaderno"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Quaderno
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/taxcloud", "TaxCloud")}
                                                href="/tools/accounting/taxcloud"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxCloud
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-sm">
                                            Cash Flow and Deadlines:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-xs ">
                                            Missing quarterly estimated tax payment windows or failing to separate personal and business expenses severely damages operational capital.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Cash Flow & Deadline Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks-online"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/float", "Float")}
                                                href="/tools/accounting/float"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Float
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-frog", "Cash Flow Frog")}
                                                href="/tools/accounting/cash-flow-frog"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Cash Flow Frog
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/xero", "Xero")}
                                                href="/tools/accounting/xero"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Xero
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/bill", "Bill")}
                                                href="/tools/accounting/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-sm">
                                            Poor Recordkeeping:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-xs ">
                                            Inadequate digital or physical tracking of receipts, invoices, and digital payment streams (like 1099-Ks from processors) leads to unintentional underreporting or failed audit defenses.
                                        </p>
                                        <h6 className="text-black text-xs font-bold pt-1">
                                            Top 5 Automated Recordkeeping Tools:
                                        </h6>
                                        <p className="text-xs ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks-online"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/xero", "Xero")}
                                                href="/tools/accounting/xero"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Xero
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/zoho-books", "Zoho Books")}
                                                href="/tools/accounting/zoho-books"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zoho Books
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/freshbooks", "FreshBooks")}
                                                href="/tools/accounting/freshbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                FreshBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/dext-prepare", "Dext Prepare")}
                                                href="/tools/accounting/dext-prepare"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Dext Prepare
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
                                    <Link id="ai-content-creation-workflow-email-content-workflow-1"
                                        href="/use-cases/marketing/ai-content-creation-workflow" className="p-0 m-0">
                                        <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-base shadow-text p-0 m-0">
                                            AI Content Creation Workflow</h4>
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
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Automated Content Generation Tools:
                                            </h6>
                                            <p className="text-black text-xs">
                                                Automated content creation uses artificial intelligence and software tools to research, generate, repurpose, and publish text, images, and video with minimal human effort.                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Content Creation Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/writesonic", "Writesonic")}
                                                    href="/tools/marketing/writesonic"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Writesonic
                                                </Link>,&nbsp;                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/jasper-ai", "Jasper")}
                                                    href="/tools/marketing/jasper-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Jasper
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/synthesia", "Synthesia")}
                                                    href="/tools/marketing/synthesia"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Synthesia
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pictory", "Pictory")}
                                                    href="/tools/marketing/pictory"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Pictory
                                                </Link>,&nbsp;                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/copy-ai", "Copy.ai")}
                                                    href="/tools/marketing/copy-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Copy.ai
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/jasper-ai", "Jasper AI")}
                                                    href="/tools/marketing/jasper-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Jasper AI
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/copy-ai", "Copy.ai")}
                                                    href="/tools/marketing/copy-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Copy.ai
                                                </Link>,
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/contentstudio", "ContentStudio")}
                                                    href="/tools/marketing/contentstudio"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    ContentStudio
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/airia", "Airia")}
                                                    href="/tools/marketing/airia"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Airia
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/make-com", "Make.com")}
                                                    href="/tools/marketing/make-com"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Make.com
                                                </Link>,&nbsp;or,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/zapier", "Zapier")}
                                                    href="/tools/marketing/zapier"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Zapier
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-sm">
                                                Bulk Social Media Scheduling:
                                            </strong></h5>
                                            <p className="text-black text-xs">
                                                AI tools write a month of platform-specific posts, hashtags, and captions in minutes.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Bulk Social Media Scheduling Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/buffer", "Buffer")}
                                                    href="/tools/marketing/buffer"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Buffer
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/hootsuite", "Hootsuite")}
                                                    href="/tools/marketing/hootsuite"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Hootsuite
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/socialbee", "SocialBee")}
                                                    href="/tools/marketing/socialbee"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    SocialBee
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/coschedule", "CoSchedule")}
                                                    href="/tools/marketing/coschedule"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    CoSchedule
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/socialpilot", "SocialPilot")}
                                                    href="/tools/marketing/socialpilot"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    SocialPilot
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/zoho-social", "Zoho Social")}
                                                    href="/tools/marketing/zoho-social"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Zoho Social
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/hubspot", "HubSpot")}
                                                    href="/tools/marketing/hubspot"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    HubSpot
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-sm">
                                                SEO Blog and Article Generation:
                                            </strong></h5>
                                            <p className="text-black text-xs">
                                                AI-powered SEO blog and article generation automates keyword research, content brief creation, long-form drafting, and on-page optimization.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Blog & Article Generator Tools:
                                            </h6>
                                            <p className="text-xs">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/surfer-seo", "Surfer SEO")}
                                                    href="/tools/marketing/surfer-seo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Surfer SEO
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/chatgpt", "ChatGPT")}
                                                    href="/tools/marketing/chatgpt"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    ChatGPT
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/claude", "Claude")}
                                                    href="/tools/marketing/claude"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    Claude
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/frase", "Frase")}
                                                    href="/tools/marketing/frase"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    Frase
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/hubspot-ai", "HubSpot AI")}
                                                    href="/tools/marketing/hubspot-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    HubSpot AI
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/keyword-insights", "Keyword Insights")}
                                                    href="/tools/marketing/keyword-insights"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    Keyword Insights
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/klaviyo", "Klaviyo")}
                                                    href="/tools/marketing/klaviyo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Klaviyo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/mailchimp", "Mailchimp")}
                                                    href="/tools/marketing/mailchimp"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Mailchimp
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/hubspot-marketing-hub", "HubSpot Marketing Hub")}
                                                    href="/tools/marketing/hubspot-marketing-hub"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    HubSpot Marketing Hub
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/twilio-sendgrid", "Twilio SendGrid")}
                                                    href="/tools/marketing/twilio-sendgrid"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Twilio SendGrid
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/copy-ai", "Copy.ai")}
                                                    href="/tools/marketing/copy-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Copy.ai
                                                </Link>.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link
                                        id={gtmLinkIdFromHref("/use-cases/marketing/intelligent-lead-capture-pipeline", "Lead Capture Pipeline")}
                                        href="/use-cases/marketing/intelligent-lead-capture-pipeline"
                                        className="hover:text-[#C83803] text-[#000000] hover:underline" >
                                        <h4 className="text-black text-base font-bold shadow-text">
                                            Lead Capture Pipeline</h4>
                                    </Link>
                                    <ul className="text-black list-disc text-sm list- pl-3 ">
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/bot-penguin", "BotPenguin")}
                                                    href="/tools/marketing/bot-penguin"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    BotPenguin
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/many-chat", "ManyChat")}
                                                    href="/tools/marketing/many-chat"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    ManyChat
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Pipedrive
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/custom-gpt", "CustomGPT.ai")}
                                                    href="/tools/marketing/custom-gpt"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    CustomGPT
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/getchipbot", "getchipbot")}
                                                    href="/tools/marketing/getchipbot"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Get Chip Bot
                                                </Link>
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/Apollo", "Apollo")}
                                                    href="/tools/marketing/Apollo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Apollo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Pipedrive
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/madkudu", ". LeadSquared ")}
                                                    href="/tools/marketing/lead-squared "
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    LeadSquared
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/6sense", "6sense")}
                                                    href="/tools/marketing/6sense"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    6sense
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-black text-sm">
                                                Voice Assistants:
                                            </strong></h5>
                                            <p className="text-black text-xs">
                                                24/7 marketing, or "always-on" marketing, uses digital automation to engage customers around the clock. By running continuous systems rather than isolated campaigns, businesses achieve an average ROI of $5.44 for every $1 spent, driving higher lead volumes and non-stop global reach.
                                            </p>
                                            <h6 className="text-black text-xs font-bold pt-1">
                                                Top AI Voice Assistance Tools:
                                            </h6>
                                            <ul>
                                                <li>
                                                    <p className="text-xs">
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/call-agent-ai", "CallAgentAI")}
                                                            href="/tools/marketing/call-agent-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            CallAgentAI
                                                        </Link>,&nbsp;
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/speak-ai", "Speak AI")}
                                                            href="/tools/marketing/speak-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            Speakai
                                                        </Link>,&nbsp;
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/voice-genie-ai", "VoiceGenie AI")}
                                                            href="/tools/marketing/voice-genie-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            VoiceGenie
                                                        </Link>,&nbsp;
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/eveninglabs-conversational-ai", "ElevenLabs Conversational AI")}
                                                            href="/tools/marketing/eveninglabs-conversational-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            ElevenLabs Conversational AI
                                                        </Link>,&nbsp;
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/synthflow-ai", "Synthflow AI")}
                                                            href="/tools/marketing/synthflow-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            Synthflow AI
                                                        </Link>.
                                                    </p>
                                                </li>
                                            </ul>
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/ad-creative", "AdCreative")}
                                                    href="/tools/marketing/ad-creative"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    AdCreative
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/madgicx", "Madgicx")}
                                                    href="/tools/marketing/madgicx"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Madgicx
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/creatify", "Creatify")}
                                                    href="/tools/marketing/creatify"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Creatify
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/cometly", "Cometly")}
                                                    href="/tools/marketing/cometly"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Cometly
                                                </Link>&nbsp;or&nbsp;
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/adzooma", "Adzooma")}
                                                    href="/tools/marketing/adzooma"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Adzooma
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/optmyzr", "Optmyzr")}
                                                    href="/tools/marketing/optmyzr"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Optmyzr
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/opteo", "Opteo")}
                                                    href="/tools/marketing/opteo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Opteo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/wordStream", "WordStream")}
                                                    href="/tools/marketing/wordStream"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    WordStream
                                                </Link>,&nbsp;
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/tableau-ai", "Tableau AI / Adobe Analytics")}
                                                    href="/tools/marketing/tableau-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Tableau AI / Adobe Analytics
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
                            Artificial<br />
                            Intelligence<br />
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
                                    id={gtmLinkIdFromHref("/use-cases/accounting/ai-accounting-systems", "AI Accounting Systems")}
                                    href="/use-cases/accounting/ai-accounting-systems">
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
                                        Automated Accounts Payable
                                    </h4>
                                </Link>
                                <p className="text-black text-sm text-shadow">
                                    You face heavy administrative burdens in accounts payable (AP) due to limited staff, manual data entry errors, slow approval bottlenecks, high risks of payment fraud, and tedious vendor management.
                                </p>

                                <ul className="list-disc text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Automated Data Entry &amp; Processing:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-sm">
                                            Utilize Optical Character Recognition (OCR) Technology to automatically extract data from invoices and vendor payments then populate corresponding fields in your AP system with high accuracy.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Data Entry Processing Tools:
                                        </h6>
                                        <p className="text-black text-sm whitespace-nowrap">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/zapier", "Zapier")}
                                                href="/tools/accounting/zapier"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zapier
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks-online", "QuickBooks Online")}
                                                href="/tools/accounting/quickbooks-online"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/lido", "Lido")}
                                                href="/tools/accounting/lido"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Lido
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/jotform", "Jotform")}
                                                href="/tools/accounting/jotform"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Jotform
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/uiPath", "UiPath")}
                                                href="/tools/accounting/uiPath"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                UiPath
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <strong className="text-sm"> </strong>
                                        <h5><strong className="text-black text-base">
                                            Approval Workflows:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-sm">
                                            Configure automated, rule-based approval workflows that automatically route invoices to the correct manager based on preset dollar thresholds or departments.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Approval Workflow Tools:
                                        </h6>
                                        <p className="text-black text-sm">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/zapier", "Zapier")}
                                                href="/tools/accounting/zapier"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zapier
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/jotform-workflows", "Jotform Workflows")}
                                                href="/tools/accounting/jotform-workflows"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Jotform Workflows
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/kissflow", "Kissflow")}
                                                href="/tools/accounting/kissflow"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Kissflow
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/process-street", "Process Street")}
                                                href="/tools/accounting/process-street"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Process Street
                                            </Link>,&nbsp;or&nbsp;                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">Automated Payment Execution:</strong></h5>
                                        <p className="text-black text-sm">
                                            Automate your payment execution so you can schedule payments in advance, taking advantage of early-pay discounts and ensuring you never miss a deadline.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Payment Execution Tools:
                                        </h6>
                                        <p className="text-black text-sm">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/bill", "Bill")}
                                                href="/tools/accounting/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/melio", "Melio")}
                                                href="/tools/accounting/melio"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Melio
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;or&nbsp;                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/ramp", "Ramp")}
                                                href="/tools/accounting/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Automated Fraud & Duplicate Payment Controls:</strong></h5>
                                        <p className="text-black text-sm ">
                                            Automate the matching of Purchase Orders, Receiving Reports, and Invoices before payment is released, and route payments through virtual cards — which carry stronger fraud controls than traditional payment methods.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Fraud & Duplicate Payment Controls Tools:
                                        </h6>
                                        <p className="text-black text-sm">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/bill", "Bill")}
                                                href="/tools/accounting/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/ramp", "Ramp")}
                                                href="/tools/accounting/ramp"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Ramp
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/stampli", "Stampli")}
                                                href="/tools/accounting/stampli"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Stampli
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/yooz", "Yooz")}
                                                href="/tools/accounting/yooz"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Yooz
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/Tipalti", "Tipalti")}
                                                href="/tools/accounting/Tipalti"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Tipalti
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <Link
                                    id=""
                                    href="/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting"
                                    className="hover:text-[#C83803] hover:underline">
                                    <h4 className="text-black font-bold text-lg">
                                        Cash Flow Forecasting
                                    </h4>
                                </Link>
                                <p className="text-black text-sm ">
                                    You face unpredictable income, delayed customer collections, hidden or rising overhead costs, manual data entry errors, and confusing high profit on paper with actual available bank cash.
                                </p>
                                <ul className="list-disc text-sm text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Accounts Receivable:</strong></h5>
                                        <p className="text-black text-sm ">
                                            Clients take 30, 60, or 90 days to settle bills, leaving you to cover payroll and materials out of pocket while waiting.                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Accounts Receivable Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/freshbooks", "FreshBooks")}
                                                href="/tools/accounting/freshbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                FreshBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/bill", "Bill")}
                                                href="/tools/accounting/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/zoho-books", "Zoho Books")}
                                                href="/tools/accounting/zoho-books"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zoho Books
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/chaser", "Chaser")}
                                                href="/tools/accounting/chaser"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Chaser
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/paidnice", "Paidnice")}
                                                href="/tools/accounting/paidnice"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Paidnice
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <ul className="list-disc text-sm text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Outdated Spreadsheet Data:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-sm ">
                                            Static spreadsheets show old data instead of live numbers. Manual entry into basic grids leads to human error, outdated figures, and broken formulas. Bank accounts, invoicing software, and payroll tools do not always sync automatically.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Spreadsheet Replacement Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/airtable", "Airtable")}
                                                href="/tools/accounting/airtable"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Airtable
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/clickup", "ClickUp")}
                                                href="/tools/accounting/clickup"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                ClickUp
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/smartsheet", "Smartsheet")}
                                                href="/tools/accounting/smartsheet"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Smartsheet
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/rows", "Rows")}
                                                href="/tools/accounting/rows"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Rows
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/notion", "Notion")}
                                                href="/tools/accounting/notion"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Notion
                                            </Link>,&nbsp;
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Enterprise Resource Planning:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-sm ">
                                            Sales fluctuate, making it hard to guess future income. Copying numbers from bank accounts wastes time and causes human error.  Sudden bills or repairs break the budget without warning.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Enterprise Planning Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/float", "Float")}
                                                href="/tools/accounting/float"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Float
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/pulse", "Pulse")}
                                                href="/tools/accounting/pulse"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Pulse
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-analytics", "CashAnalytics")}
                                                href="/tools/accounting/cash-analytics"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                CashAnalytics
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/agicap", "Agicap")}
                                                href="/tools/accounting/agicap"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Agicap
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/fluidly", "Fluidly")}
                                                href="/tools/accounting/fluidly"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Fluidly
                                            </Link>.
                                        </p>
                                    </li>
                                </ul>
                                <h4 className="text-black font-bold text-lg">
                                    Tax Compliance & Regulations
                                </h4>
                                <p className="text-black text-sm ">
                                    Automated tax compliance software streamlines calculations, nexus tracking, exemption management, and filings across thousands of global jurisdictions. It integrates directly with ERP and e-commerce platforms to apply real-time regulatory updates, minimize manual human errors, and generate signature-ready reports.
                                </p>
                                <ul className="list-disc text-sm text-black list- pl-3 ">
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Complex and Changing Laws:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-sm ">
                                            Frequent updates to tax codes, deductions, and specialized reporting requirements make it difficult to stay current without dedicated legal or accounting staff.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Tax Law Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/avalara", "Avalara")}
                                                href="/tools/accounting/avalara"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Avalara
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/turbtax-business", "TurboTax Business")}
                                                href="/tools/accounting/turbtax-business"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TurboTax Business
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/taxact-business", "TaxAct Business")}
                                                href="/tools/accounting/taxact-business"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxAct Business
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/lettuce", "Lettuce")}
                                                href="/tools/accounting/lettuce"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Lettuce
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Payroll Tax & Worker Misclassification:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-sm ">
                                            Handling payroll tax deposits, tracking overtime rules, and correctly distinguishing between W-2 employees and 1099 independent contractors trigger high risks of penalties.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Payroll Tax Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/gusto", "Gusto")}
                                                href="/tools/accounting/gusto"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Gusto
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/rippling", "Rippling")}
                                                href="/tools/accounting/rippling"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Rippling
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/adp-run", "ADP Run")}
                                                href="/tools/accounting/adp-run"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                ADP Run
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks-payroll", "QuickBooks Payroll")}
                                                href="/tools/accounting/quickbooks-payroll"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks Payroll
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/onpay", "OnPay")}
                                                href="/tools/accounting/onpay"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                OnPay
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Multi-State Sales Tax Nexus: </strong>
                                        </h5>
                                        <p className="text-black text-sm ">
                                            Online and remote sales force tracking economic or physical presence across multiple state lines, complicating collection and remittance.
                                        </p>
                                        <h6 className="text-black text-sm font-bold py-1">
                                            Top 5 Automated Multi-State Sales Tax Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/taxjar", "TaxJar")}
                                                href="/tools/accounting/taxjar"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxJar
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/stripe-tax", "Stripe Tax")}
                                                href="/tools/accounting/stripe-tax"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Stripe Tax
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/anrok", "Anrok")}
                                                href="/tools/accounting/anrok"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Anrok
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quaderno", "Quaderno")}
                                                href="/tools/accounting/quaderno"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Quaderno
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/taxcloud", "TaxCloud")}
                                                href="/tools/accounting/taxcloud"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                TaxCloud
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Cash Flow and Deadlines:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-sm ">
                                            Missing quarterly estimated tax payment windows or failing to separate personal and business expenses severely damages operational capital.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Cash Flow & Deadline Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks-online"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/float", "Float")}
                                                href="/tools/accounting/float"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Float
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/cash-flow-frog", "Cash Flow Frog")}
                                                href="/tools/accounting/cash-flow-frog"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Cash Flow Frog
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/xero", "Xero")}
                                                href="/tools/accounting/xero"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Xero
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/bill", "Bill")}
                                                href="/tools/accounting/bill"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Bill
                                            </Link>.
                                        </p>
                                    </li>
                                    <li className="pl-.5">
                                        <h5><strong className="text-black text-base">
                                            Poor Recordkeeping:
                                        </strong>
                                        </h5>
                                        <p className="text-black text-sm ">
                                            Inadequate digital or physical tracking of receipts, invoices, and digital payment streams (like 1099-Ks from processors) leads to unintentional underreporting or failed audit defenses.
                                        </p>
                                        <h6 className="text-black text-sm font-bold pt-1">
                                            Top 5 Automated Recordkeeping Tools:
                                        </h6>
                                        <p className="text-black text-sm ">
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/quickbooks", "QuickBooks")}
                                                href="/tools/accounting/quickbooks-online"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                QuickBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/xero", "Xero")}
                                                href="/tools/accounting/xero"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Xero
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/zoho-books", "Zoho Books")}
                                                href="/tools/accounting/zoho-books"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Zoho Books
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/freshbooks", "FreshBooks")}
                                                href="/tools/accounting/freshbooks"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                FreshBooks
                                            </Link>,&nbsp;
                                            <Link
                                                id={gtmLinkIdFromHref("/tools/accounting/dext-prepare", "Dext Prepare")}
                                                href="/tools/accounting/dext-prepare"
                                                className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                Dext Prepare
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
                                    <Link id="ai-content-creation-workflow-email-content-workflow-2"
                                        href="/use-cases/marketing/ai-content-creation-workflow" className="p-0 m-0">
                                        <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-lg shadow-text p-0 m-0">
                                            AI Content Creation Workflow</h4>
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/writesonic", "Writesonic")}
                                                    href="/tools/marketing/writesonic"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Writesonic
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/jasper-ai", "Jasper")}
                                                    href="/tools/marketing/jasper-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Jasper
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/synthesia", "Synthesia")}
                                                    href="/tools/marketing/synthesia"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Synthesia
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pictory", "Pictory")}
                                                    href="/tools/marketing/pictory"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Pictory
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/copy-ai", "Copy.ai")}
                                                    href="/tools/marketing/copy-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Copy.ai
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/jasper-ai", "Jasper AI")}
                                                    href="/tools/marketing/jasper-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Jasper AI
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/copy-ai", "Copy.ai")}
                                                    href="/tools/marketing/copy-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Copy.ai
                                                </Link>,
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/contentstudio", "ContentStudio")}
                                                    href="/tools/marketing/contentstudio"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    ContentStudio
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/airia", "Airia")}
                                                    href="/tools/marketing/airia"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Airia
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/make-com", "Make.com")}
                                                    href="/tools/marketing/make-com"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Make.com
                                                </Link>,&nbsp;or,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/zapier", "Zapier")}
                                                    href="/tools/marketing/zapier"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Zapier
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-base">Bulk Social Media Scheduling: </strong></h5>
                                            <p className="text-black text-sm">
                                                AI tools write a month of platform-specific posts, hashtags, and captions in minutes.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Bulk Social Media Scheduling Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/buffer", "Buffer")}
                                                    href="/tools/marketing/buffer"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Buffer
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/hootsuite", "Hootsuite")}
                                                    href="/tools/marketing/hootsuite"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Hootsuite
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/socialbee", "SocialBee")}
                                                    href="/tools/marketing/socialbee"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    SocialBee
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/coschedule", "CoSchedule")}
                                                    href="/tools/marketing/coschedule"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    CoSchedule
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/socialpilot", "SocialPilot")}
                                                    href="/tools/marketing/socialpilot"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    SocialPilot
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/zoho-social", "Zoho Social")}
                                                    href="/tools/marketing/zoho-social"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Zoho Social
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/hubspot", "HubSpot")}
                                                    href="/tools/marketing/hubspot"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    HubSpot
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <h5><strong className="text-base">SEO Blog and Article Generation: </strong></h5>
                                            <p className="text-black text-sm">
                                                AI-powered SEO blog and article generation automates keyword research, content brief creation, long-form drafting, and on-page optimization.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Blog & Article Generator Tools:
                                            </h6>
                                            <p className="text-sm">
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/surfer-seo", "Surfer SEO")}
                                                    href="/tools/marketing/surfer-seo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline">
                                                    Surfer SEO
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/chatgpt", "ChatGPT")}
                                                    href="/tools/marketing/chatgpt"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    ChatGPT
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/claude", "Claude")}
                                                    href="/tools/marketing/claude"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    Claude
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/frase", "Frase")}
                                                    href="/tools/marketing/frase"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    Frase
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/hubspot-ai", "HubSpot AI")}
                                                    href="/tools/marketing/hubspot-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    HubSpot AI
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/keyword-insights", "Keyword Insights")}
                                                    href="/tools/marketing/keyword-insights"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline"
                                                >
                                                    Keyword Insights
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/klaviyo", "Klaviyo")}
                                                    href="/tools/marketing/klaviyo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Klaviyo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/mailchimp", "Mailchimp")}
                                                    href="/tools/marketing/mailchimp"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Mailchimp
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/hubspot-marketing-hub", "HubSpot Marketing Hub")}
                                                    href="/tools/marketing/hubspot-marketing-hub"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    HubSpot Marketing Hub
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/twilio-sendgrid", "Twilio SendGrid")}
                                                    href="/tools/marketing/twilio-sendgrid"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Twilio SendGrid
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/copy-ai", "Copy.ai")}
                                                    href="/tools/marketing/copy-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Copy.ai
                                                </Link>.
                                            </p>
                                        </li>
                                    </ul>
                                    <Link
                                        id={gtmLinkIdFromHref("/use-cases/marketing/intelligent-lead-capture-pipeline", "Lead Capture Pipeline")}
                                        href="/use-cases/marketing/intelligent-lead-capture-pipeline"
                                        className="hover:text-[#C83803] text-[#000000] hover:underline" >
                                        <h4 className="text-[#0B162A] hover:text-[#C83803] hover:underline font-bold text-lg shadow-text p-0 m-0">
                                            Lead Capture Pipeline</h4>
                                    </Link>
                                    <ul className="text-black list-disc text-sm list- pl-3 ">
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/bot-penguin", "BotPenguin")}
                                                    href="/tools/marketing/bot-penguin"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    BotPenguin
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/many-chat", "ManyChat")}
                                                    href="/tools/marketing/many-chat"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    ManyChat
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Pipedrive
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/custom-gpt", "CustomGPT.ai")}
                                                    href="/tools/marketing/custom-gpt"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    CustomGPT
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/getchipbot", "getchipbot")}
                                                    href="/tools/marketing/getchipbot"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Get Chip Bot
                                                </Link>
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/Apollo", "Apollo")}
                                                    href="/tools/marketing/Apollo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Apollo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/pipedrive", "Pipedrive")}
                                                    href="/tools/marketing/pipedrive"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Pipedrive
                                                </Link>,&nbsp;or&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/madkudu", ". LeadSquared ")}
                                                    href="/tools/marketing/lead-squared "
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    LeadSquared
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/6sense", "6sense")}
                                                    href="/tools/marketing/6sense"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    6sense
                                                </Link>.
                                            </p>
                                        </li>
                                        <li className="pl-.5">
                                            <strong className="text-sm"> </strong>
                                            <h5><strong className="text-black text-base">Voice Assistants: </strong></h5>
                                            <p className="text-black text-sm">
                                                24/7 marketing, or "always-on" marketing, uses digital automation to engage customers around the clock. By running continuous systems rather than isolated campaigns, businesses achieve an average ROI of $5.44 for every $1 spent, driving higher lead volumes and non-stop global reach.
                                            </p>
                                            <h6 className="text-black text-sm font-bold pt-1">
                                                Top AI Voice Tools:
                                            </h6>
                                            <ul>
                                                <li>
                                                    <p className="text-sm">
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/call-agent-ai", "CallAgentAI")}
                                                            href="/tools/marketing/call-agent-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            CallAgentAI
                                                        </Link>,&nbsp;
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/speak-ai", "Speak AI")}
                                                            href="/tools/marketing/speak-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            Speakai
                                                        </Link>,&nbsp;
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/voice-genie-ai", "VoiceGenie AI")}
                                                            href="/tools/marketing/voice-genie-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            VoiceGenie
                                                        </Link>,&nbsp;
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/eveninglabs-conversational-ai", "ElevenLabs Conversational AI")}
                                                            href="/tools/marketing/eveninglabs-conversational-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            ElevenLabs Conversational AI
                                                        </Link>,&nbsp;
                                                        <Link
                                                            id={gtmLinkIdFromHref("/tools/marketing/synthflow-ai", "Synthflow AI")}
                                                            href="/tools/marketing/synthflow-ai"
                                                            className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                            Synthflow AI
                                                        </Link>.
                                                    </p>
                                                </li>
                                            </ul>
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/adzooma", "Adzooma")}
                                                    href="/tools/marketing/adzooma"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Adzooma
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/optmyzr", "Optmyzr")}
                                                    href="/tools/marketing/optmyzr"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Optmyzr
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/opteo", "Opteo")}
                                                    href="/tools/marketing/opteo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Opteo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/wordStream", "WordStream")}
                                                    href="/tools/marketing/wordStream"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    WordStream
                                                </Link>,&nbsp;
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/adzooma", "Adzooma")}
                                                    href="/tools/marketing/adzooma"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Adzooma
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/optmyzr", "Optmyzr")}
                                                    href="/tools/marketing/optmyzr"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Optmyzr
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/opteo", "Opteo")}
                                                    href="/tools/marketing/opteo"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Opteo
                                                </Link>,&nbsp;
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/wordStream", "WordStream")}
                                                    href="/tools/marketing/wordStream"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    WordStream
                                                </Link>,&nbsp;
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
                                                <Link
                                                    id={gtmLinkIdFromHref("/tools/marketing/tableau-ai", "Tableau AI / Adobe Analytics")}
                                                    href="/tools/marketing/tableau-ai"
                                                    className="hover:text-[#0B162A] text-[#C83803] hover:underline" >
                                                    Tableau AI / Adobe Analytics
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


