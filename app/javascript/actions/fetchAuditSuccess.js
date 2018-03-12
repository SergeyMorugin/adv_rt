export default (audit) => {
    return {
        type: 'FETCH_AUDIT_SUCCESS',
        audit: audit
    }
}