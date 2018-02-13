// TODO remove mockAudit and use server side loading
export default {

    2:
        {
            id: 2,
            name: 'first audi',
            adviser: "Bob William",
            company: "ABC Financial certaint\t",
            location: "Sydney",
            client: "Richard White, Sarah White",
            clientLocation: "South Yarra",
            progress: '10',
            date: '',

            documents: [
                {
                    key: 1,
                    id: 1,
                    documentType: 'pdf',
                    documentTitle: 'Fergusson SOA 020318.pdf'
                },
                {
                    key: 2,
                    id: 2,
                    documentType: 'pdf',
                    documentTitle: 'Fergusson SOA 100318.pdf'
                }
            ]
        },

    3:
        {
            id: 3,
            name: 'other audit',
            adviser: "Bob William",
            company: "ABC Financial certaint\t",
            location: "Sydney",
            client: "Jennifer Anderson",
            clientLocation: "Glen Iris",
            progress: '40',
            date: '',

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

            documents: []
        }
};