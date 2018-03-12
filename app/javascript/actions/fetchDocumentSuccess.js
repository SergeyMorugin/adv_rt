export default (document, section) => {
    return {
        type: 'FETCH_DOCUMENT_SUCCESS',
        document: document,
        documentSection: section
    }
}