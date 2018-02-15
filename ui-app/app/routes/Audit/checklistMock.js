export default function(){
    return [

        {
            key: "INC01",
            text: "Does the advice document contain a title page clearly stating that it is an SoA?",
            notes: "",
            status: 'not_applicable',
            relevantSections: [
                {doc: 1, section: "section1"},
                {doc: 1, section: "section2"},
                {doc: 2, section: "section1"},
            ]
        },
        {
            key: "INC02",
            text: "Does the advice document contain a title page clearly stating that it is an SoA?",
            notes: "Everythink is right.",
            status: 'pass',
            relevantSections: [
                {doc: 2, section: "section1"},
            ]
        },
        {
            key: "INC03",
            text: "Does the advice document contain a title page clearly stating that it is an SoA?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC04",
            text: "Does the advice document contain a title page clearly stating that it is an SoA?",
            notes: "",
            status: 'fail',
            relevantSections: [
                {doc: 1, section: "section2"},
                {doc: 1, section: "section1"},
            ]
        },
        {
            key: "INC05",
            text: "Does the advice document contain a title page clearly stating that it is an SoA?",
            notes: "",
            status: 'best_practise',
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC06",
            text: "Does the advice document contain a title page clearly stating that it is an SoA?",
            notes: "",
            status: 'partial_complete',
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC07",
            text: "Does the advice document contain a title page clearly stating that it is an SoA?",
            notes: "",
            status: 'partial_complete',
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC08",
            text: "Does the advice document contain a title page clearly stating that it is an SoA?",
            notes: "",
            status: null,
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },
        {
            key: "INC09",
            text: "Does the advice document contain a title page clearly stating that it is an SoA?",
            notes: "",
            status: 'fail',
            relevantSections: [
                {doc: 1, section: "section2"}
            ]
        },

    ];
};