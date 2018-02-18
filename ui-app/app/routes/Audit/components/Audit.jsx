import React, { Component } from 'react';

import styles from './Audit.scss';

import Spinner from '../../../components/common/Spinner'
import Progressbar from '../../../components/common/Progressbar'
import DocumentDropdown from './DocumentDropdown'
import ChecklistCatDropdown from './ChecklistCatDropdown'
import FilterDropdown from './FilterDropdown'
import Checklist from './Checklist'
import DocumentBody from './DocumentBody'
import Ink from 'react-ink'

import Dropzone from 'react-dropzone'


export default class Audit extends Component {


    constructor(props) {
        super(props)

        this.state = {
            checklistCategory: null,
            checklistFilters: [],
            checklistOrder: null,
            accept: '',
            dropzoneActive: false
        }

        this.sortingToggle = this.sortingToggle.bind(this)
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

    sortingToggle() {
        this.setState({
            checklistOrder:
                this.state.checklistOrder == null ? 'asc' :
                    this.state.checklistOrder == 'asc' ?
                        'desc' :
                        null
        });
    }

    onDragEnter() {
        this.setState({
            dropzoneActive: true
        });
    }

    onDragLeave() {
        this.setState({
            dropzoneActive: false
        });
    }

    onDrop(files) {
        this.setState({
            dropzoneActive: false
        });

        console.log('Upload files...')
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

                <Dropzone
                    disableClick
                    accept={this.state.accept}
                    onDrop={this.onDrop.bind(this)}
                    onDragEnter={this.onDragEnter.bind(this)}
                    onDragLeave={this.onDragLeave.bind(this)}
                >
                    { this.state.dropzoneActive && (
                        <div className={styles.dropzoneOverlay + ' flexCenter'}>
                            <span>Drop files to upload</span>
                        </div>
                    )}

                    <div className={ styles.audit }>
                        <header>
                            <div className={styles.headerTop}>
                                <div className={styles.editableAuditName} onClick={() => {this.auditNameInput.focus()}}>
                                    <input
                                        value={audit.name}
                                        type="text"
                                        onChange={(e) => {
                                            this.props.auditPropertyUpdate('name', e.target.value)
                                        }}
                                        ref={(e) => this.auditNameInput = e} />
                                    <i className="fas fa-pencil-alt"></i>
                                </div>

                                <div className={styles.progress}>
                                    <Progressbar progress={audit.progress} percentFloating/>
                                </div>
                            </div>

                            <div  className="row fullWidth collapse">
                                <div className="column small-7 xlarge-8">
                                    <DocumentDropdown
                                        documents={audit.documents}
                                        selectedDocument={this.props.document}
                                        onDocPick={(docId) => {
                                            this.props.loadDocument(docId)
                                        }}
                                    />
                                </div>
                                <div className="column small-5 xlarge-4">
                                    <div
                                        className="flex-container flexJustifySpaceBetween flexAlignCenter"
                                        style={{marginLeft: "36px"}}>
                                        <div>
                                            <ChecklistCatDropdown
                                                category={this.state.checklistCategory}
                                                onCatPick={(cat) => {
                                                    this.setState({
                                                        checklistCategory: cat
                                                    })
                                                }}
                                            />
                                        </div>
                                        <div className="flex-container">
                                            <div>
                                                <FilterDropdown
                                                    checklist={audit.checklist}
                                                    activeFilters={this.state.checklistFilters}
                                                    setFilter={(filterName, active) => {
                                                        if (active) {
                                                            if(this.state.checklistFilters.indexOf(filterName) < 0) {
                                                                this.state.checklistFilters.push(filterName)
                                                                this.setState({
                                                                    checklistFilters: this.state.checklistFilters
                                                                })
                                                            }
                                                        } else {
                                                            let index = this.state.checklistFilters.indexOf(filterName);
                                                            if (index >= 0) {
                                                                this.state.checklistFilters.splice(index, 1);
                                                                this.setState({
                                                                    checklistFilters: this.state.checklistFilters
                                                                })
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>

                                            <div className={ styles.checklistOrder } onClick={this.sortingToggle}>
                                                <i
                                                    className={
                                                        !this.state.checklistOrder ? 'fas fa-sort-amount-down muted' :
                                                            this.state.checklistOrder == 'asc' ?
                                                                'fas fa-sort-amount-up active' :
                                                                'fas fa-sort-amount-down active'
                                                    }
                                                />
                                                <Ink />
                                            </div>

                                        </div>
                                    </div>
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
                                        activeFilters={this.state.checklistFilters}
                                        checklistOrder={this.state.checklistOrder}
                                        auditPropertyUpdate={this.props.auditPropertyUpdate}
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
                </Dropzone>
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