import React from 'react';

import styles from './MenuIcon.scss';

export default class MenuIcon extends React.Component {
    render() {
        return (
            <div
                className={styles.menuIcon + ' ' + (this.props.active ? styles.open : '')}
                onClick={this.props.onClick}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}
