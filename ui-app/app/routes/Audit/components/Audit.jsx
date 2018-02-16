import React, { Component } from 'react';

import styles from './Audit.scss';

import Spinner from '../../../components/common/Spinner'
import Progressbar from '../../../components/common/Progressbar'
import DocumentDropdown from './DocumentDropdown'
import Checklist from './Checklist'
import DocumentBody from './DocumentBody'


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
                            <div className={styles.editableAuditName} onClick={() => {this.auditNameInput.focus()}}>
                                <input value={audit.name} type="text" ref={(e) => this.auditNameInput = e} />
                                <i className="fas fa-pencil-alt"></i>
                            </div>

                            <div className={styles.progress}>
                                <Progressbar progress={audit.progress} percentFloating/>
                            </div>
                        </div>

                        <div>
                            <div className={styles.soaDropdownWrapper}>
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
                        <div  className="row fullWidth fullHeight">
                            <div className={ styles.documentBodyWrapper + " column small-7 xlarge-8 fullHeight" } >
                                <DocumentBody document={this.props.document} documentSection={this.props.documentSection} />
                            </div>
                            <div className={styles.checkListWrapper + " column small-5 xlarge-4 fullHeight"}>
                                <Checklist
                                    items={audit.checklist}
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