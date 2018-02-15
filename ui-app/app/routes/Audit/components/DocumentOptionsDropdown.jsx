import React, { Component } from 'react';

import styles from './DocumentOptionsDropdown.scss';


export default class DocumentOptionsDropdown extends Component {

    render() {
        return (
            <div className={ styles.documentOptionsDropdown }>

                <div className={ styles.opener }>
                    <i className="fas fa-ellipsis-v"/>
                </div>

            </div>
        )
    }
}