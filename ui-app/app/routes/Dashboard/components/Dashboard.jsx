import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import Widget from './Widget'
import SingleMetric from './SingleMetric'

import styles from './Dashboard.scss';

export default class Dashboard extends Component {
    render() {
        return (
            <div className={ styles.dashboard }>

                <header>
                    <h1>Dashboard</h1>
                </header>


                <div>
                    <div className="row fullWidth">
                        <div className="column small-9">
                            <div className="row">
                                <div className="column small-6">
                                    <Widget title="Audits">
                                        <div className="row small-up-4" style={{margin: "0 20px"}}>
                                            <div className="column">
                                                <SingleMetric title="Completed" value="54" />
                                            </div>
                                            <div className="column">
                                                <SingleMetric title="Inprogress" value="26" />
                                            </div>
                                            <div className="column">
                                                <SingleMetric title="Advisers" value="12" />
                                            </div>
                                            <div className="column">
                                                <SingleMetric title="Clients" value="24" />
                                            </div>
                                        </div>
                                    </Widget>
                                </div>
                                <div className="column small-6">
                                    <Widget title="Latest Audits">
                                        ---
                                    </Widget>
                                </div>

                                <div className="column small-12">
                                    <Widget title="Complete Audit YDT">
                                        ---
                                    </Widget>
                                </div>
                            </div>
                        </div>
                        <div className="column small-3">
                            <Widget title="Latest Activity">
                                ---
                            </Widget>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}