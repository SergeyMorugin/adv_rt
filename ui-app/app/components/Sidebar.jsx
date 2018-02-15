import React from 'react';

import styles from './Sidebar.scss';

import { NavLink } from 'react-router-dom';

import Ink from 'react-ink'

export default class Sidebar extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            opened: true
        };
    }

    render() {
        return (
            <div className={styles.sideBar + ' ' + (this.props.opened ? styles.opened : '')}>
                <ul>
                    <li>
                        <NavLink exact to="/dashboard" activeClassName={ styles.activeMenu }>
                            <span className={styles.menuIcon}><i className="fa fa-tachometer-alt"></i></span>
                            Dashboard
                            <Ink/>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink exact to="/audits" activeClassName={ styles.activeMenu }>
                            <span className={styles.menuIcon}><i className="fa fa-tachometer-alt"></i></span>
                            Audits
                            <Ink/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/advisers" activeClassName={ styles.activeMenu }>
                            <span className={styles.menuIcon}><i className="fa fa-tachometer-alt"></i></span>
                            Advisers
                            <Ink/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
