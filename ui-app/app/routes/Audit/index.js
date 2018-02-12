import React from 'react';

import {connect} from "react-redux";

import Container from './components/Audit'

import fetchAudit from '~/actions/fetchAudit'
import fetchAuditSuccess from '~/actions/fetchAuditSuccess'
import fetchAuditFail from '~/actions/fetchAuditFail'

// TODO remove mockAudit and use server side loading

let mockAudits = {

    2:
        {
            id: 2,
            name: 'first audi'
        },

    3:
        {
            id: 3,
            name: 'other audi'
        }
};

export default connect(
    state => {

        return {
            audit: state.audit.audit
        }
    },
    dispatch => ({
        // callback to load the audit from the component
        // TODO load from server instead of the "setTimeout"
        loadAudit: auditId => {
            console.log('loading')
            dispatch(fetchAudit());

            setTimeout(function(){
                if (auditId in mockAudits) {
                    console.log('done')
                    return dispatch(fetchAuditSuccess(mockAudits[auditId]))
                } else {
                    console.log('err')
                    return dispatch(fetchAuditFail('Cannot load audit'))
                }

            }, 1000)

        }
    })
)(Container)