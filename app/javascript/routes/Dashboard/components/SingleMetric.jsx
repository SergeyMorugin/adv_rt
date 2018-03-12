import React, { Component } from 'react';

import styles from './SingleMetric.scss';

export default class SingleMetric extends Component {
    render() {
        return (
            <div className={ styles.singleMetric }>
                <div>
                    <div>{this.props.value}</div>
                    <div>{this.props.title}</div>
                </div>
            </div>
        )
    }
}