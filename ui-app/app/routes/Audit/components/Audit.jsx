import React, { Component } from 'react';

import styles from './Audit.scss';

import Spinner from '../../../components/common/Spinner'
import Progressbar from '../../../components/common/Progressbar'
import DocumentDropdown from './DocumentDropdown'
import Checklist from './Checklist'

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
                            <div className="column small-8">
                                {this.renderDocument()}
                            </div>
                            <div className="column small-4">
                                <Checklist />
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

    renderDocument() {

        if (!this.props.document) {
            return <div>Select a document</div>
        } else if (this.props.document.status === 'loading') {
            return <Spinner/>
        } else if (this.props.document.status === 'ok') {
            let document = this.props.document.data;
            return <div className={ styles.documentWrapper } dangerouslySetInnerHTML={{ __html: document.html }}></div>
        } else {
            return <div>Error: {this.props.document.error }</div>
        }

    }

    render() {
        return this.getContent();
    }
}