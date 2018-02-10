import React from 'react';

import styles from './Sidebar.scss';

import { NavLink } from 'react-router-dom';

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
                        </NavLink>
                    </li>
                    <li>

                        <NavLink exact to="/audits" activeClassName={ styles.activeMenu }>
                            <span className={styles.menuIcon}><i className="fa fa-tachometer-alt"></i></span>
                            Audits
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/advisers" activeClassName={ styles.activeMenu }>
                            <span className={styles.menuIcon}><i className="fa fa-tachometer-alt"></i></span>
                            Advisers
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
