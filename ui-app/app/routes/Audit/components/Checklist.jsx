import React, { Component } from 'react';

import styles from './Checklist.scss';

export default class DocumentDropdown extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeItemKey: 'INC02',
        }

        this.activateItem = this.activateItem.bind(this);
        this.getItemClass = this.getItemClass.bind(this);
    }

    activateItem(itemKey) {

        if (this.state.activeItemKey === itemKey) {
            return;
        }

        this.setState({
            activeItemKey: null
        })

        setTimeout(() => {
            this.setState({
                activeItemKey: itemKey
            })
        }, 300)
    }

    getButtonClass(status, item) {

        let classes = ['expanded', 'button'];

        if (item.status == 'not_applicable') {
            classes.push('hollow');
            classes.push('secondary');
            classes.push('disabled');
        }

        if (item.status == status) {
            switch (status) {
                case 'pass':
                    classes.push('pass');
                    break;
                case 'fail':
                    classes.push('fail');
                    break;
                case 'best_practise':
                    classes.push('bestPractise');
                    break;
                case 'partial_complete':
                    classes.push('partialComplete');
                    break;
            }
        } else {
            classes.push('hollow');
            classes.push('secondary');

            switch (status) {
                case 'pass':
                    classes.push('hoverPass');
                    break;
                case 'fail':
                    classes.push('hoverFail');
                    break;
                case 'best_practise':
                    classes.push('hoverBestPractise');
                    break;
                case 'partial_complete':
                    classes.push('hoverPartialComplete');
                    break;
            }
        }

        return classes.join(' ');
    }

    getItemClass(item) {

        let classes = [];

        if(item.key === this.state.activeItemKey) {
            classes.push(styles.activeItem)
        }

        switch (item.status) {
            case 'pass':
                classes.push('pass');
                break;
            case 'fail':
                classes.push('fail');
                break;
            case 'best_practise':
                classes.push('bestPractise');
                break;
            case 'partial_complete':
                classes.push('partialComplete');
                break;
            case 'not_applicable':
                classes.push('notApplicable');
                break;
        }

        return classes.join(' ');
    }

    render() {
        return (
            <ol className={ styles.checklist }>
                {this.props.items.map((item) => (
                    <li
                        key={item.key}
                        className={this.getItemClass(item)}
                        onClick={() => {this.activateItem(item.key)}}
                    >
                        <div>{item.key}</div>
                        <div>
                            <span className="itemText">{item.text}</span>

                            <div className={styles.itemDetails}>
                                <div className="row small-up-4">
                                    <div className="column">
                                        <button className={this.getButtonClass('fail', item)}>Fail</button>
                                    </div>
                                    <div className="column">
                                        <button className={this.getButtonClass('partial_complete', item)}>Partial complete</button>
                                    </div>
                                    <div className="column">
                                        <button className={this.getButtonClass('pass', item)}>Pass</button>
                                    </div>
                                    <div className="column">
                                        <button className={this.getButtonClass('best_practise', item)}>Best Practise</button>
                                    </div>
                                </div>

                                <div className="clearfix">
                                    <label className="float-right">
                                        Not Applicable
                                        <input type="checkbox" defaultChecked={item.status == 'not_applicable'} />
                                    </label>
                                </div>

                                <div>
                                    <textarea placeholder="Notes"></textarea>
                                </div>
                                <div class="clearfix">
                                    <div className="float-right">
                                        Relevant Sections 2/5
                                    </div>
                                </div>

                            </div>

                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}