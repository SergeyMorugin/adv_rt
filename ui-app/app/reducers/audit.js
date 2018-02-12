const initialState = {
    audit: {status: "loading"},
    auditList: {status: "loading"}
};

export default (state = initialState , action) => {
    switch (action.type) {
        case 'FETCH_AUDIT':
            return {
                ...state,
                audit: {status: "loading"},
            };
        case 'FETCH_AUDIT_SUCCESS':
            return {
                ...state,
                audit: {status: "ok", data: action.audit},
            };
        case 'FETCH_AUDIT_FAIL':
            return {
                ...state,
                audit: {status: "error", error: action.error},
            };
        default:
            return state
    }
}