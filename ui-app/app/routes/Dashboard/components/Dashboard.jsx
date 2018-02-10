import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Dashboard.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className={ styles.main }>
                Dashboard
            </div>
        )
    }
}

module.exports = Dashboard;
