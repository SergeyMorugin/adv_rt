import React from 'react';

import styles from './DocumentDropdown.scss';
import AbstractDropdown from '../../../components/common/AbstractDropdown';
import DropdownDefaultBox from '../../../components/common/DropdownDefaultBox';
import DropdownDefaultOpener from '../../../components/common/DropdownDefaultOpener';

import Ink from 'react-ink'

import pdfIcon from "../../../images/if_pdf_272699.svg"
import wordIcon from "../../../images/if_word_272702.svg"

export default class DocumentDropdown extends AbstractDropdown {

    constructor(props) {
        super(props)
    }

    handleDocumentDdItemClick (doc) {
        // when dropdown item is clicked select doc and close
        this.props.onDocPick(doc.id);
        this.close()
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

    getFileIconPath(fileType) {
        switch (fileType) {
            case 'pdf':
                return pdfIcon;
            case 'doc':
                return wordIcon;

            default:
                return 'far fa-file';
        }
    }

    render() {
        return (
            <div className={ styles.docDd }>

                <DropdownDefaultOpener onClick={this.toggleOpen}>
                    <label>SOA</label>
                    { this.getDocumentName() }
                </DropdownDefaultOpener>

                { this.state.isOpen &&
                    <DropdownDefaultBox larger>
                        {this.props.documents.map(doc => (
                            <div
                                key={doc.id}
                                onClick={() => {this.handleDocumentDdItemClick(doc)}}
                            >
                                <div className={ styles.docListItem }>
                                    <img src={this.getFileIconPath(doc.documentFileType)}/>
                                    <div>
                                        <div className={ styles.documentType }>{doc.documentType}</div>
                                        <div>{doc.documentTitle}</div>
                                    </div>
                                </div>

                            </div>
                        ))}
                        <label className={styles.addFile}>
                            <i className="fas fa-plus"></i>
                            <span>Add another file</span>
                            <input type="file" id="docDdFile" style={{display: "none"}} />
                            <Ink/>
                        </label>
                    </DropdownDefaultBox>
                }
            </div>
        )
    }
}