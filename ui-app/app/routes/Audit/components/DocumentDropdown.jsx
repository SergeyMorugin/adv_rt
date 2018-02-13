import React, { Component } from 'react';

import styles from './DocumentDropdown.scss';

export default class DocumentDropdown extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    getDocumentName() {
        if (this.props.selectedDocument) {
            switch (this.props.selectedDocument.status) {
                case 'ok':
                    return this.props.selectedDocument.data.documentTitle;

                case 'loading':
                    return '...';
            }
        }

        return 'Pick a document'
    }

    render() {
        return (
            <div className={ styles.docDd }>
                { this.getDocumentName() }

                <div>
                    {this.props.documents.map(doc => (
                        <div
                            key={doc.id}
                            onClick={() => {this.props.onDocPick(doc.id)}}
                        >
                            {doc.documentTitle}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}