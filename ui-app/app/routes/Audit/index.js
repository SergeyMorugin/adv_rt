import React from 'react';
import {connect} from "react-redux";

import Container from './components/Audit'

import fetchAudit from '~/actions/fetchAudit'
import fetchAuditSuccess from '~/actions/fetchAuditSuccess'
import fetchAuditFail from '~/actions/fetchAuditFail'
import fetchDocument from '~/actions/fetchDocument'
import fetchDocumentSuccess from '~/actions/fetchDocumentSuccess'
import fetchDocumentFail from '~/actions/fetchDocumentFail'

import mockAudits from './mockAudits'
import mockDocuments from './mockDocuments'

export default connect(
    state => {
        return {
            audit: state.audit.audit,
            document: state.audit.document,
        }
    },
    dispatch => ({
        // callback to load the audit from the component
        // TODO load from server instead of the "setTimeout"
        loadAudit: auditId => {
            dispatch(fetchAudit());

            setTimeout(function(){
                if (auditId in mockAudits) {
                    return dispatch(fetchAuditSuccess(mockAudits[auditId]))
                } else {
                    return dispatch(fetchAuditFail('Cannot load audit'))
                }

            }, 1000)

        },

        // callback to load the document from the component
        // TODO load from server instead of the "setTimeout"
        loadDocument: docId => {
            dispatch(fetchDocument());

            setTimeout(function(){
                if (docId in mockDocuments) {
                    return dispatch(fetchDocumentSuccess(mockDocuments[docId]))
                } else {
                    return dispatch(fetchDocumentFail('Cannot load document'))
                }

            }, 1000)

        },
    })
)(Container)