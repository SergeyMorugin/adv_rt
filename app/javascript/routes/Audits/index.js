import React from 'react';
import {connect} from "react-redux";
import {push} from "react-router-redux";

import Container from './components/Audits'

import mockAudits from "../Audit/mockAudits";

import fetchAuditList from '~/actions/fetchAuditList'
import fetchAuditListSuccess from '~/actions/fetchAuditListSuccess'
import fetchAuditListFail from '~/actions/fetchAuditListFail'

export default connect(
    state => {
        return {
            auditList: state.audit.auditList
        }
    },
    dispatch => ({
        // callback to load the audit list from the component
        // TODO load from server instead of the "setTimeout"
        loadAuditList: () => {
            dispatch(fetchAuditList());

            setTimeout(function(){
                let auditList = Object.keys(mockAudits).map(function (key) { return mockAudits[key]; });
                return dispatch(fetchAuditListSuccess(auditList))
            }, 1000)
        },

        navigateToAudit: (auditId) => {
            dispatch(push('/audit/' + auditId))
        }
    })
)(Container)