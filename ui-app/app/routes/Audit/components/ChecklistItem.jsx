import React, { Component } from 'react';

import styles from './ChecklistItem.scss';

import Ink from 'react-ink'
import Checkbox from '../../../components/common/Checkbox'

export default class ChecklistItem extends Component {

    constructor(props) {
        super(props)

        this.getItemClass = this.getItemClass.bind(this);

        this.state = {
            activeRelevantSectionIndex: 0,
        }

        this.handleNotesUpdate = this.handleNotesUpdate.bind(this)
    }

    componentWillUpdate(nextProps, nextState) {

        // if active section changed, show it
        if(nextState.activeRelevantSectionIndex != this.state.activeRelevantSectionIndex) {
            let nextRelevantSection = this.props.item.relevantSections[nextState.activeRelevantSectionIndex];
            this.props.showDocument(nextRelevantSection.doc, nextRelevantSection.section)
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

    handleNotesUpdate(event) {
        this.props.updateNotes(event.target.value)
    }

    getButtonClass(status, item) {

        let classes = ['expanded', 'button', 'inkable'];

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

        let classes = [styles.item];

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
                    <span className={styles.itemText}>{item.text}</span>

                    <div className={styles.itemDetails}>
                        <div className="row small-up-2 xlarge-up-4">
                            <div className="column">
                                <button
                                    className={this.getButtonClass('fail', item)}
                                    onClick={() => {item.status != 'not_applicable' && this.props.updateStatus('fail')}}>
                                    Fail
                                    <Ink opacity={0.1}/>
                                </button>
                            </div>
                            <div className="column">
                                <button
                                    className={this.getButtonClass('partial_complete', item)}
                                    onClick={() => {item.status != 'not_applicable' && this.props.updateStatus('partial_complete')}}>
                                    Partial complete
                                    <Ink opacity={0.1}/>
                                </button>
                            </div>
                            <div className="column">
                                <button
                                    className={this.getButtonClass('pass', item)}
                                    onClick={() => {item.status != 'not_applicable' && this.props.updateStatus('pass')}}>
                                    Pass
                                    <Ink opacity={0.1}/>
                                </button>
                            </div>
                            <div className="column">
                                <button
                                    className={this.getButtonClass('best_practise', item)}
                                    onClick={() => {item.status != 'not_applicable' && this.props.updateStatus('best_practise')}}>
                                    Best Practise
                                    <Ink opacity={0.1}/>
                                </button>
                            </div>
                        </div>

                        <div className="clearfix">
                            <div className={ styles.notApplicableLabel + " float-right"}>
                                <Checkbox
                                    checked={item.status == 'not_applicable'}
                                    onChange={(event) => {
                                        this.props.updateStatus(event.target.checked ? 'not_applicable' : null);
                                    }}
                                >
                                    <span>Not Applicable</span>
                                </Checkbox>
                            </div>
                        </div>

                        <div>
                            <div className={ styles.itemNotes }>
                                <textarea value={item.notes} onChange={this.handleNotesUpdate}></textarea>
                                <label>Notes</label>
                            </div>
                        </div>
                        <div className="clearfix">
                            <div className={styles.relevantSection + " float-right flexCenter"}>
                                Relevant Sections

                                <span className={styles.relevantSectionCounter}>
                                    {this.state.activeRelevantSectionIndex + 1}/{item.relevantSections.length}
                                </span>

                                {this.renderRelevantSectionDown(item)}
                                {this.renderRelevantSectionUp(item)}

                            </div>
                        </div>
                    </div>
                </div>
                { !this.props.isActive &&
                <Ink background={false} opacity={0.1}/> // ripple effect only when item is not active
                }
            </li>
        )
    }

    renderRelevantSectionUp(item){
        let isEnd = this.state.activeRelevantSectionIndex >= item.relevantSections.length - 1
        return (
            <div
                className={styles.relevantSectionButton + ( isEnd ? ' disabled' : '')}
                onClick={(e) => {
                    e.stopPropagation();
                    // go to next section
                    if (this.state.activeRelevantSectionIndex < item.relevantSections.length - 1) {
                        this.setState({
                            activeRelevantSectionIndex: this.state.activeRelevantSectionIndex + 1
                        })
                    }
                }}>
                <i className="fas fa-chevron-up"></i>
                {!isEnd && <Ink/>}
            </div>
        )
    }

    renderRelevantSectionDown(item){
        let isEnd = this.state.activeRelevantSectionIndex <= 0;
        return (
            <div
                className={styles.relevantSectionButton + ( isEnd ? ' disabled' : '')}
                onClick={(e) => {
                    e.stopPropagation();

                    // go to previous section
                    if (this.state.activeRelevantSectionIndex > 0) {
                        this.setState({
                            activeRelevantSectionIndex: this.state.activeRelevantSectionIndex - 1
                        })
                    }
                }}>
                <i className="fas fa-chevron-down"></i>
                {!isEnd && <Ink/>}
            </div>
        )
    }
}