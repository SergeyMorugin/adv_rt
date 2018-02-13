import React, { Component } from 'react';

import styles from './Audits.scss';

import ReactTable from 'react-table'
import Spinner from '../../../components/common/Spinner'
import Progressbar from '../../../components/common/Progressbar'

const columns = [{
    Header: 'Adviser',
    accessor: 'adviser'
}, {
    Header: 'Company',
    accessor: 'company',
}, {
    Header: 'Location',
    accessor: 'location',
}, {
    Header: 'Client',
    accessor: 'client',
}, {
    Header: 'Client Location',
    accessor: 'clientLocation',
}, {
    Header: 'Status',
    accessor: 'progress',
    Cell: props => (
        <span><Progressbar  progress={props.value}/></span>
    )
}, {
    Header: 'Date',
    accessor: 'date',
}];

export default class Audits extends Component {

    componentDidMount() {
        // when component mounts load audit
        this.props.loadAuditList()
    }

    getContent() {

        if (this.props.auditList.status === 'loading') {
            // show spinner
            return (
                <div>
                    <Spinner/>
                </div>
            )
        } else if (this.props.auditList.status == 'ok') {
            // show audit
            let auditList = this.props.auditList.data;
            return (
                <div className={ styles.audits }>

                    <header>
                        <h1>Audits</h1>
                        <div className="button small">New</div>
                        <div className="button secondary small">Search</div>
                    </header>


                    <div>
                        <ReactTable

                            className="-highlight"
                            data={auditList}
                            columns={columns}
                            defaultPageSize={auditList.length}
                            showPagination={false}
                            getTrProps={(state, rowInfo, column, instance) => ({
                                className: styles.tableRow
                            })}
                            getTdProps={(state, rowInfo, column, instance) => {
                                return {
                                    onClick: (e, handleOriginal) => {

                                        let rowId = rowInfo.row._original.id;

                                        if (rowId) {
                                            // navigate to audit on click
                                            this.props.navigateToAudit(rowId)
                                        } else {
                                            // IMPORTANT! React-Table uses onClick internally to trigger
                                            // events like expanding SubComponents and pivots.
                                            // By default a custom 'onClick' handler will override this functionality.
                                            // If you want to fire the original onClick handler, call the
                                            // 'handleOriginal' function.
                                            if (handleOriginal) {
                                                handleOriginal()
                                            }
                                        }
                                    },

                                }
                            }}
                        />
                    </div>
                </div>
            )
        } else {
            // show error
            return (
                <div>
                    {this.props.audit.error}
                </div>
            )
        }
    }

    render() {
        return this.getContent();
    }
}