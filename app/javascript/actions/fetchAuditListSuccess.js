export default (auditList) => {
    return {
        type: 'FETCH_AUDIT_LIST_SUCCESS',
        auditList: auditList
    }
}