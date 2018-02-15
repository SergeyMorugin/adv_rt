import React, { Component } from 'react';

import styles from './ChecklistItem.scss';

export default class ChecklistItem extends Component {

    constructor(props) {
        super(props)

        this.getItemClass = this.getItemClass.bind(this);

        this.state = {
            activeRelevantSectionIndex: 0
        }
    }

    componentDidMount() {

        // if item is active, load initial document
        if (this.props.isActive) {
            // load document and scroll to section
            let relevantSection = this.props.item.relevantSections[this.state.activeRelevantSectionIndex];
            if (relevantSection) {
                this.props.showDocument(relevantSection.doc, relevantSection.section)
            }
        }
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

        if(this.props.isActive) {
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
        let item = this.props.item;

        return (
            <li
                key={item.key}
                className={this.getItemClass(item)}
                onClick={() => {

                    // set checklist item active
                    this.props.setActive();

                    // load document and scroll to section
                    let relevantSection = item.relevantSections[this.state.activeRelevantSectionIndex];
                    if (relevantSection) {
                        this.props.showDocument(relevantSection.doc, relevantSection.section)
                    }
                }}
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
                            <div className={ styles.itemNotes }>
                                <label>Notes</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className="clearfix">
                            <div className="float-right">
                                Relevant Sections 2/5
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}