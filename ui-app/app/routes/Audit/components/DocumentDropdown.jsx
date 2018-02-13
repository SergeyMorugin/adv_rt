import React, { Component } from 'react';
import ReactDom from 'react-dom';

import styles from './DocumentDropdown.scss';

/**
 * Credits: https://github.com/fraserxu/react-dropdown/
 */
export default class DocumentDropdown extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.mounted = true;
        this.toggleOpen = this.toggleOpen.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
    }

    componentDidMount () {
        document.addEventListener('click', this.handleDocumentClick, false)
        document.addEventListener('touchend', this.handleDocumentClick, false)
    }

    componentWillUnmount () {
        this.mounted = false
        document.removeEventListener('click', this.handleDocumentClick, false)
        document.removeEventListener('touchend', this.handleDocumentClick, false)
    }


    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleDocumentClick (event) {
        // close dropdown on document (html) is click
        if (this.mounted) {
            if (!ReactDom.findDOMNode(this).contains(event.target)) {
                if (this.state.isOpen) {
                    this.setState({ isOpen: false })
                }
            }
        }
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
                    (
                        <div className={ styles.box }>
                            <div className={ styles.boxArrow }/>
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

                        </div>
                    )

                }
            </div>
        )
    }
}