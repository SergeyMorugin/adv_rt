import React, { Component } from 'react';

import styles from './Checklist.scss';

export default class DocumentDropdown extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ol className={ styles.checklist }>
                <li>
                    <div>INC01</div>
                    <div>Does the advice document contain a title page clearly stating that it is an SoA?</div>
                </li>
                <li>
                    <div>INC01</div>
                    <div>Does the advice document contain a title page clearly stating that it is an SoA?</div>
                </li>
                <li className={ styles.activeItem }>
                    <div>INC01</div>
                    <div>
                        Does the advice document contain a title page clearly stating that it is an SoA?

                        <div className="row small-up-4">
                            <div className="column">
                                <button className="button expanded">Fail</button>
                            </div>
                            <div className="column">
                                <button className="button expanded">Partial complete</button>
                            </div>
                            <div className="column">
                                <button className="button expanded">Pass</button>
                            </div>
                            <div className="column">
                                <button className="button expanded">Best Practise</button>
                            </div>
                        </div>

                    </div>
                </li>
                <li>
                    <div>INC01</div>
                    <div>Does the advice document contain a title page clearly stating that it is an SoA?</div>
                </li>
            </ol>
        )
    }
}