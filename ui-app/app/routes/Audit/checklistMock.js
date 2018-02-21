export default function(){
    return [

        {
            key: "INC01",
            text: "Does the advice document contain a title page clearly stating that it is an SoA? Has AFSL number and Planner capacity been disclosed?",
            notes: "",
            status: 'not_applicable',
            relevantSections: [
                {doc: 2, section: "section1"},
                {doc: 3, section: "section1"},
                {doc: 3, section: "section2"},
            ],
            category: 'INC'
        },
        {
            key: "INC02",
            text: "Has a \"Personal Use\" clause been included?",
            notes: "",
            status: 'pass',
            relevantSections: [
                {doc: 2, section: "section1"},
            ]
        },
        {
            key: "INC03",
            text: "Does the SoA include a sunset statement?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 2, section: "section2"}
            ]
        },
        {
            key: "INC04",
            text: "Has an applicable Cooling Off Period statement been included?",
            notes: "",
            status: 'fail',
            relevantSections: [
                {doc: 2, section: "section3"},
                {doc: 2, section: "section4"},
            ]
        },
        {
            key: "INC05",
            text: "Does the SoA Include appropriate warnings (e.g. advice based on incomplete information and limited advice where required) and legal disclaimers?",
            notes: "",
            status: 'best_practise',
            relevantSections: [
                {doc: 2, section: "section5"},
                {doc: 2, section: "section6"},
                {doc: 2, section: "section7"},
            ]
        },
        {
            key: "INC06",
            text: "Does the SoA contain a Table of Contents?",
            notes: "",
            status: 'partial_complete',
            relevantSections: [
                {doc: 2, section: "section8"}
            ]
        },
        {
            key: "INC07",
            text: "Does the SoA include a detailed Executive Summary?",
            notes: "",
            status: 'partial_complete',
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC08",
            text: "Has the scope of advice been clearly and accurately defined?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC09",
            text: "Does the SoA state the client's agreed risk profile? Has an appropriate explanation been included?",
            notes: "",
            status: 'fail',
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC10",
            text: "Has an asset allocation graph and/or asset allocation table been included in the SoA?",
            notes: "",
            status: 'fail',
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC11",
            text: "Is the portfolio asset allocation consistent with the client's risk profile? If not, is the asset allocation outside the set acceptable ranges (+/-10% within each asset class) and if so, has an explanation (reason for the variance, risks and benefits to the client and/or discussions of timeframe) been included?",
            notes: "",
            status: 'fail',
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC12",
            text: "Has the proposed cash flow been included? (If applicable) Does it appear correct?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC13",
            text: "Have the cash flow implications been adequately addressed? (Surplus/ Deficit Directive)",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC14",
            text: "Has the estimated tax position been included? (if applicable) Does it appear to be correct?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC15",
            text: "Are all estimated income and growth projections included in the body of the SoA? Do they appear to be correct?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC16",
            text: "Are all key assumptions for projections clearly documented where included?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC17",
            text: "Does the Authority to Proceed contain the strategy/ product variation and Warning note?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "ADV01",
            text: "Have all the clients' relevant personal and financial details been included in the SoA, or referenced to a previous advice document?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ],
            category: 'ADV'
        },
        {
            key: "ADV02",
            text: "Does the SoA state the client's goals, needs, objectives and concerns?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "ADV03",
            text: "Has the recommended strategy addressed all goals, needs and objectives (in one place within the SOA)? Does it appear appropriate?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "ADV04",
            text: "Has the recommended strategy (including all technical aspects) and its benefits been clearly explained?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "ADV05",
            text: "Is there a clearly stated reasonable basis for the advice provided?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "ADV06",
            text: "Have all applicable structural, strategy and product risks and consequences been noted?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "ADV07",
            text: "Does the SoA accurately record and/or outline Estate Planning recommendations and requirements? OR Has this been scoped out of the SoA?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "ADV08",
            text: "For SMSF recommendations, has the 'Sole Purpose Test' been met?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "CTL01",
            text: "Has Centrelink/DVA eligibility been calculated? (if applicable)",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ],
            category: 'CTL'
        },
        {
            key: "CTL02",
            text: "Do the Centrelink calculations appear correct?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "CTL03",
            text: "Have Centrelink/DVA implications (where relevant) been addressed within the SoA?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "GBL01",
            text: "Is there a statement in the SOA evidencing that an assessment has been undertaken with the client to determine if the gearing/borrowing facility is unsuitable?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ],
            category: 'GBL'
        },
        {
            key: "GBL02",
            text: "Does the clients risk profile reflect the high risk nature of gearing/borrowing to invest - i.e. Moderate Growth (equivalent) or higher?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "GBL03",
            text: "Is the recommended loan-to-security ratio within the prescribed limit of 50%? If not, has a waiver been provided?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "GBL04",
            text: "Does the client appear to have sufficient surplus income and/or cash reserves or other security in the event a margin call (where applicable) is triggered?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "GBL05",
            text: "Have risk insurance recommendations been considered?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "GBL06",
            text: "Have warnings been included in the SOA re the risks associated with gearing/borrowing to invest?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "PRD01",
            text: "Are the products / investments recommended by the Authorised Representative on the Licensee Approved Product List? If not, has a specific waiver approval been obtained from Research and cited?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ],
            category: 'PRD'
        },
        {
            key: "PRD02",
            text: "If a specific platform has been recommended, is there an explanation of the platform and why it has been selected?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "PRD03",
            text: "Have all specific product recommendations been made, including an explanation of the products and why they have been selected?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "RSK01",
            text: "Have the client's risk insurance requirements been included in the SoA? Has a needs analysis been included?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ],
            category: 'RSK'
        },
        {
            key: "RSK02",
            text: "Does it appear that the client's risk insurance requirements have been adequately addressed?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "RSK03",
            text: "Has the applicable risk insurance quote been provided (where available), and does it support the recommendations?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "RSK04",
            text: "Has the recommended risk strategy and its benefits been clearly explained, and justified to the client?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "RSK05",
            text: "Is there an explanation of Stepped or Level premiums (whichever has been recommended)?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "RSK06",
            text: "Where an existing policy is to be replaced, is there adequate information in the SoA regarding the loss of benefits and any significant consequences?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "RSK07",
            text: "Was a Replacement Policy table completed? Is there an explanation of the termination charges for the existing policy; entry/establishment charges for the proposed change; and any duplication of initial costs?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "RSK08",
            text: "Is replacing the existing risk insurance policy justified? Does the new policy appear to be appropriate and meet the clients' needs, objectives and circumstances?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "SSL01",
            text: "Was a Super Switching table used (comparing entry/exit fees, charges, costs and benefits)? Does all information appear to be correct?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ],
            category: 'SSL'
        },
        {
            key: "SSL02",
            text: "Where super is being switched, is there adequate information in the SoA regarding the loss of benefits and any significant consequences?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "SSL03",
            text: "Is switching the existing super product justified? Does the new super product appear to be appropriate, and meet the clients' needs, objectives and circumstances?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "SSL04",
            text: "Where applicable, does the SoA clearly establish that the recommendation is 'to fund' advice only, or an execution only super transaction?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "SSL05",
            text: "For 'to fund' advice, does the SoA clearly illustrate the reasons given by the client for rolling their superannuation fund(s)? Are any exit fees and/or lost benefits clearly stated?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "SSL06",
            text: "Is there evidence that a continuation option for risk insurance within super was investigated in the case of a super switch?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "FEE01",
            text: "Have all standard fees and commissions (including ongoing) been disclosed in the one place in both dollar and percentage terms (where a % fee is being charged)? Do the fee disclosures appear correct?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ],
            category: 'FEE'
        },
        {
            key: "FEE02",
            text: "Do all fee disclosures clearly distinguish fees payable by the client and fees / commissions received by the planner and AFSL?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "FEE03",
            text: "Have all standard paragraphs regarding additional benefits (e.g. Soft Dollar, PPP, Conflicts of Interest) been stated in the SoA?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "FEE04",
            text: "Have all referral arrangements, and any corresponding payments, been accurately disclosed?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },

    ];
};