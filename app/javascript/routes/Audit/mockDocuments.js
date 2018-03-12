import doc1Html from './mockDocuments/doc1.html'
import doc2Html from './mockDocuments/doc2.html'
import doc3Html from './mockDocuments/doc3.html'

// TODO remove mockDocuments and use server side loading
export default {

    1:
        {
            id: 2,
            documentType: 'pdf',
            documentTitle: 'Adviser 1 Audit Report 09012018 Draft Redacted.pdf',
            html: doc2Html
        },

    2:
        {
            id: 2,
            documentType: 'doc',
            documentTitle: 'SOA - Client 1 Redacted.doc',
            html: doc1Html
        },
    3:
        {
            id: 3,
            documentType: 'doc',
            documentTitle: 'Fact Find.doc',
            html: doc3Html
        }
};