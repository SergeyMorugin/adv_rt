import DopProp from 'dot-prop-immutable'

const initialState = {
    audit: {status: "loading"},
    document: null,
    documentSection: null,
    auditList: {status: "loading"}
};

export default (state = initialState , action) => {
    switch (action.type) {

        // audit
        case 'FETCH_AUDIT':
            return {
                ...state,
                audit: {status: "loading"},
                document: null
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
        case 'AUDIT_PROPERTY_UPDATE':
            return {
                ...state,
                audit: DopProp.set(state.audit, 'data.' + action.property, action.value),
            };

        // audit list
        case 'FETCH_AUDIT_LIST':
            return {
                ...state,
                auditList: {status: "loading"},
            };
        case 'FETCH_AUDIT_LIST_SUCCESS':
            return {
                ...state,
                auditList: {status: "ok", data: action.auditList},
            };
        case 'FETCH_AUDIT_LIST_FAIL':
            return {
                ...state,
                auditList: {status: "error", error: action.error},
            };

        // doc
        case 'FETCH_DOCUMENT':
            return {
                ...state,
                document: {status: "loading"},
                documentSection: null
            };
        case 'FETCH_DOCUMENT_SUCCESS':
            return {
                ...state,
                document: {status: "ok", data: action.document},
                documentSection: action.documentSection
            };
        case 'FETCH_DOCUMENT_FAIL':
            return {
                ...state,
                document: {status: "error", error: action.error},
            };
        case 'GO_TO_DOCUMENT_SECTION':
            return {
                ...state,
                documentSection: action.documentSection
            };
        default:
            return state
    }
}