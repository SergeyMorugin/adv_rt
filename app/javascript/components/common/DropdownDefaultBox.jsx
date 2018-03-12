import React, { Component } from 'react';

import styles from './DropdownDefaultBox.scss'

export default class DropdownDefaultBox extends Component {

    render() {
        return (
            <div className={
                    styles.box +
                    (this.props.className ? ' ' + this.props.className : '') +
                    (this.props.larger ? ' ' + styles.larger : '') }>
                <div className={styles.boxArrow} />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }

}