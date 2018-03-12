// TODO remove mockAudit and use server side loading

import checklistMock from './checklistMock';

export default {

    2:
        {
            id: 2,
            name: 'First audi',
            adviser: "Bob William",
            company: "ABC Financial certaint\t",
            location: "Sydney",
            client: "Richard White, Sarah White",
            clientLocation: "South Yarra",
            progress: '10',
            date: '',
            checklist: checklistMock(),

            documents: [
                {
                    key: 1,
                    id: 1,
                    documentType: 'SOA',
                    documentFileType: 'pdf',
                    documentTitle: 'Adviser 1 Audit Report 09012018 Draft Redacted.pdf'
                },
                {
                    key: 2,
                    id: 2,
                    documentType: 'SOA',
                    documentFileType: 'doc',
                    documentTitle: 'SOA - Client 1 Redacted.doc'
                },
                {
                    key: 3,
                    id: 3,
                    documentType: 'SOA',
                    documentFileType: 'doc',
                    documentTitle: 'Fact Find.doc'
                }
            ]
        },

    3:
        {
            id: 3,
            name: 'Other audit',
            adviser: "Bob William",
            company: "ABC Financial certaint\t",
            location: "Sydney",
            client: "Jennifer Anderson",
            clientLocation: "Glen Iris",
            progress: '40',
            date: '',
            checklist: checklistMock(),

            documents: []
        },

    4:
        {
            id: 4,
            name: 'other audit',
            adviser: "Bob William",
            company: "ABC Financial certaint\t",
            location: "Sydney",
            client: "Jennifer Anderson",
            clientLocation: "Glen Iris",
            progress: '100',
            date: '',
            checklist: checklistMock(),

            documents: []
        }
};