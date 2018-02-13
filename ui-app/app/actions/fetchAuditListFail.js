export default (error) => {
    return {
        type: 'FETCH_AUDIT_LIST_FAIL',
        error: error
    }
}