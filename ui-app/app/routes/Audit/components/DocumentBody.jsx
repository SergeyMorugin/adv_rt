import React, { Component } from 'react';

import styles from './DocumentBody.scss';

import Spinner from '../../../components/common/Spinner'
import DocumentOptionsDropdown from './DocumentOptionsDropdown'

export default class ChecklistItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fontSize: 'small'
        }

        this.setFontSize = this.setFontSize.bind(this)
    }

    setFontSize(fontSize) {
        this.setState({
            fontSize: fontSize
        })
    }

    render() {

        if (!this.props.document) {
            return <div>Select a document</div>
        } else if (this.props.document.status === 'loading') {
            return <div className={styles.loadingWrapper}><Spinner/></div>
        } else if (this.props.document.status === 'ok') {
            let document = this.props.document.data;
            return (
                <div className={ styles.documentWrapper }>
                    <div className={ styles.documentMenu }>
                        <DocumentOptionsDropdown
                            fontSize={this.state.fontSize}
                            setFontSize={this.setFontSize} />
                    </div>

                    <div className={styles.documentHtml}>
                        <div className={'font-size-' + this.state.fontSize} dangerouslySetInnerHTML={{ __html: document.html }} />
                    </div>
                </div>
            );
        } else {
            return <div>Error: {this.props.document.error }</div>
        }

    }
}