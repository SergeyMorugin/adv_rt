import React, { Component } from 'react';

import styles from './DocumentDropdown.scss';
import AbstractDropdown from '../../../components/common/AbstractDropdown';
import DropdownDefaultBox from '../../../components/common/DropdownDefaultBox';

export default class DocumentDropdown extends AbstractDropdown {


    constructor(props) {
        super(props)
    }


    handleDocumentDdItemClick (doc) {
        // when dropdown item is clicked select doc and close
        this.props.onDocPick(doc.id);
        this.setState({
            isOpen: false
        })
    }

    getDocumentName() {
        if (this.props.selectedDocument) {
            switch (this.props.selectedDocument.status) {
                case 'ok':
                    return <span>{this.props.selectedDocument.data.documentTitle}</span>;

                case 'loading':
                    return <small className="muted">...</small>;
            }
        }

        return <small className="muted">Select a document...</small>
    }

    getFileIconClass(fileType) {
        switch (fileType) {
            case 'pdf':
                return 'far fa-file-pdf';

            default:
                return 'far fa-file';
        }
    }

    render() {
        return (
            <div className={ styles.docDd }>

                <div className={ styles.opener } onClick={this.toggleOpen}>
                    { this.getDocumentName() }

                    <i className="fas fa-chevron-down"></i>
                </div>

                { this.state.isOpen &&
                    <DropdownDefaultBox larger>
                        {this.props.documents.map(doc => (
                            <div
                                key={doc.id}
                                onClick={() => {this.handleDocumentDdItemClick(doc)}}
                            >
                                <div className={ styles.docListItem }>
                                    <i className={this.getFileIconClass(doc.documentFileType)}></i>
                                    <div>
                                        <div className={ styles.documentType }>{doc.documentType}</div>
                                        <div>{doc.documentTitle}</div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <input type="file" />
                    </DropdownDefaultBox>
                }
            </div>
        )
    }
}