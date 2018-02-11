import React from 'react';

import styles from './Searchbar.scss';

export default class Searchbar extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div className={styles.searchbar}>
                <input type="text" placeholder="Search"/>
                <i className="fas fa-search"></i>
            </div>
        )
    }
}
