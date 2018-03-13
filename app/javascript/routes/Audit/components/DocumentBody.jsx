import React, { Component } from 'react';

import styles from './DocumentBody.scss';

import Spinner from '../../../components/common/Spinner.jsx'
import DocumentOptionsDropdown from './DocumentOptionsDropdown.jsx'

import { Scrollbars } from 'react-custom-scrollbars';

export default class ChecklistItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fontSize: 'small'
        }

        this.setFontSize = this.setFontSize.bind(this)
    }

    componentDidUpdate(prevProps) {

        // if section changed, clear previous section, highlight the new one and scroll to it
        if (this.props.documentSection && prevProps.documentSection !== this.props.documentSection) {

            // clear previously highlighted section
            let highlightedSection = this.htmlRenderWrapper.querySelectorAll(`[class="current-section"]`)
            for (let i = 0; i < highlightedSection.length; i++) {
                highlightedSection[i].classList.remove('current-section');
            }

            // get new section to scroll to
            let sectionToScrollTo = this.htmlRenderWrapper.querySelector(`[name=${this.props.documentSection}]`);

            // scroll to and highlight section
            if (sectionToScrollTo) {
                sectionToScrollTo.scrollIntoView({
                    behavior: 'smooth'
                });
                sectionToScrollTo.classList.add('current-section');
            } else {
                console.warn(`Cannot find section ${this.props.documentSection}.`)
            }
        }
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

                    <div className={ styles.documentHtmlOuter }>
                        <Scrollbars
                            autoHide
                            autoHideTimeout={1000}
                            autoHideDuration={200}
                            style={{ width: "100%", height: "100%" }}>
                            <div
                                className={ styles.documentHtml + ' font-size-' + this.state.fontSize }
                                ref={(e) => {this.htmlRenderWrapper = e}}
                                dangerouslySetInnerHTML={{ __html: document.html }} />
                        </Scrollbars>

                    </div>
                </div>
            );
        } else {
            return <div>Error: {this.props.document.error }</div>
        }

    }
}