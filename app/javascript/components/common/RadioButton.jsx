import React, { Component } from 'react';

import styles from './RadioButton.scss'

export default class RadioButton extends Component {

    render() {
        return (
            <div className={ styles.radio + (this.props.checked ? ' ' + styles.checked : '') } >
            </div>
        )
    }

}