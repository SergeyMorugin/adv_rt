import React, { Component } from 'react';

import styles from './Audit.scss';

import Spinner from '../../../components/common/Spinner'
import Progressbar from '../../../components/common/Progressbar'
import DocumentDropdown from './DocumentDropdown'
import Checklist from './Checklist'
import DocumentBody from './DocumentBody'

const checkListItems = [

    {
        key: "INC01",
        text: "Does the advice document contain a title page clearly stating that it is an SoA?",
        notes: "",
        status: 'not_applicable',
        relevantSections: [
            {doc: 1, section: "section1"},
            {doc: 1, section: "section2"},
            {doc: 2, section: "section1"},
        ]
    },
    {
        key: "INC02",
        text: "Does the advice document contain a title page clearly stating that it is an SoA?",
        notes: "Every is right.",
        status: 'pass',
        relevantSections: [
            {doc: 2, section: "section1"},
        ]
    },
    {
        key: "INC03",
        text: "Does the advice document contain a title page clearly stating that it is an SoA?",
        notes: "",
        status: null,
        relevantSections: [
            {doc: 1, section: "section2"}
        ]
    },
    {
        key: "INC04",
        text: "Does the advice document contain a title page clearly stating that it is an SoA?",
        notes: "",
        status: 'fail',
        relevantSections: [
            {doc: 1, section: "section2"},
            {doc: 1, section: "section1"},
        ]
    },
    {
        key: "INC05",
        text: "Does the advice document contain a title page clearly stating that it is an SoA?",
        notes: "",
        status: 'best_practise',
        relevantSections: [
            {doc: 1, section: "section2"}
        ]
    },
    {
        key: "INC06",
        text: "Does the advice document contain a title page clearly stating that it is an SoA?",
        notes: "",
        status: 'partial_complete',
        relevantSections: [
            {doc: 1, section: "section2"}
        ]
    },
    {
        key: "INC07",
        text: "Does the advice document contain a title page clearly stating that it is an SoA?",
        notes: "",
        status: 'partial_complete',
        relevantSections: [
            {doc: 1, section: "section2"}
        ]
    },
    {
        key: "INC08",
        text: "Does the advice document contain a title page clearly stating that it is an SoA?",
        notes: "",
        status: null,
        relevantSections: [
            {doc: 1, section: "section2"}
        ]
    },
    {
        key: "INC09",
        text: "Does the advice document contain a title page clearly stating that it is an SoA?",
        notes: "",
        status: 'fail',
        relevantSections: [
            {doc: 1, section: "section2"}
        ]
    },

];

export default class Audit extends Component {


    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // when component mounts load audit
        this.props.loadAudit(this.props.match.params.id)
    }

    componentWillReceiveProps(newProps) {
        // when route changes load new audit
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.props.loadAudit(newProps.match.params.id)
        }
    }

    getContent() {

        if (this.props.audit.status === 'loading') {
        	// show spinner
            return (
                <div>
                    <Spinner/>
                </div>
            )
        } else if (this.props.audit.status == 'ok') {
            // show audit
            let audit = this.props.audit.data;
            return (
                <div className={ styles.audit }>
                    <header>
                        <div className={styles.headerTop}>
                            <div className={styles.editableAuditName}>
                                <input value={audit.name} type="text" ref={(e) => this.auditNameInput = e} />
                                <i className="fas fa-pencil-alt" onClick={() => {this.auditNameInput.focus()}}></i>
                            </div>

                            <div className={styles.progress}>
                                <Progressbar progress={audit.progress} percentFloating/>
                            </div>
                        </div>

                        <div>
                            <div className={styles.soaDropdownWrapper}>
                                <label>SOA</label>
                                    <DocumentDropdown
                                        documents={audit.documents}
                                        selectedDocument={this.props.document}
                                        onDocPick={(docId) => {
                                            this.props.loadDocument(docId)
                                        }}
                                    />
                            </div>
                        </div>

                    </header>

                    <div className={styles.auditContent}>
                        <div className="row fullWidth">
                            <div className="column small-7 xlarge-8">
                                <DocumentBody document={this.props.document} />
                            </div>
                            <div className="column small-5 xlarge-4">
                                <Checklist
                                    items={checkListItems}
                                    showDocument={(docId, section) => {
                                        if (
                                            this.props.document &&
                                            this.props.document.status == 'ok' &&
                                            docId === this.props.document.data.id)
                                        {
                                            this.props.goToDocumentSection(section)
                                        } else {
                                            this.props.loadDocument(docId, section)
                                        }
                                    }}
                                />
                            </div>
                        </div>
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