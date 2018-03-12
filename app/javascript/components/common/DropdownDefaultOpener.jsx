import React, { Component } from 'react';

import styles from './DropdownDefaultOpener.scss'


import Ink from 'react-ink'

export default class DropdownDefaultBox extends Component {

    render() {
        return (
            <div className={ styles.opener } onClick={this.props.onClick}>
                {this.props.children}
                <i className="fas fa-chevron-down"></i>
                <Ink background={false} radius={180} duration={600} opacity={0.1}/>
            </div>
        )
    }

}