export default (error) => {
    return {
        type: 'FETCH_DOCUMENT_FAIL',
        error: error
    }
}