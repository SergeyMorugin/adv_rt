import React, { Component } from 'react';

import styles from './Widget.scss';

export default class Widget extends Component {
    render() {
        return (
            <div className={ styles.widget }>
                { this.props.title &&
                    <header>{this.props.title}</header>
                }
                {this.props.children}
            </div>
        )
    }
}