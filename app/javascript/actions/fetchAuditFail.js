export default (error) => {
    return {
        type: 'FETCH_AUDIT_FAIL',
        error: error
    }
}