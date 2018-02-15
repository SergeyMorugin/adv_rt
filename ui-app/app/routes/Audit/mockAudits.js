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
                    documentTitle: 'Fergusson SOA 020318.pdf'
                },
                {
                    key: 2,
                    id: 2,
                    documentType: 'SOA',
                    documentFileType: 'pdf',
                    documentTitle: 'Fergusson SOA 100318.pdf'
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