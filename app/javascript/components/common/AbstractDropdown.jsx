import React, { Component } from 'react';
import ReactDom from 'react-dom';

/**
 * Credits: https://github.com/fraserxu/react-dropdown/
 */
export default class AbstractDropdown extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.mounted = true;
        this.toggleOpen = this.toggleOpen.bind(this);
        this.close = this.close.bind(this);
        this.handleHtmlDocumentClick = this.handleHtmlDocumentClick.bind(this);
    }

    componentDidMount () {
        document.addEventListener('click', this.handleHtmlDocumentClick, false)
        document.addEventListener('touchend', this.handleHtmlDocumentClick, false)
    }

    componentWillUnmount () {
        this.mounted = false
        document.removeEventListener('click', this.handleHtmlDocumentClick, false)
        document.removeEventListener('touchend', this.handleHtmlDocumentClick, false)
    }
    
    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    close() {
        this.setState({
            isOpen: false
        })
    }

    handleHtmlDocumentClick (event) {
        // close dropdown on document (html) is click
        if (this.mounted) {
            if (!ReactDom.findDOMNode(this).contains(event.target)) {
                if (this.state.isOpen) {
                    this.setState({ isOpen: false })
                }
            }
        }
    }
}