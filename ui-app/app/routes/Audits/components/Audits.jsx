import React, { Component } from 'react';

import styles from './Audits.scss';

export default class Audits extends Component {
    render() {
        return (
            <div className={ styles.audits }>

                <header>
                    <h1>Audits</h1>

                    <div className="button small">New</div>
                    <div className="button secondary small">Search</div>

                </header>


                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Adviser</th>
                                <th>Company</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bob William</td>
                                <td>ABC Financial certaint</td>
                                <td>Sydney</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}