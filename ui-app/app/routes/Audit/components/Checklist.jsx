import React, { Component } from 'react';

import styles from './Checklist.scss';

import ChecklistItem from './ChecklistItem'

const statusSeverities = {
    'none': 1,
    'fail': 2,
    'partial_complete': 3,
    'pass': 4,
    'best_practise': 5,
    'not_applicable': 6,
}

export default class Checklist extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeItemKey: 'INC02',
        }

        this.activateItem = this.activateItem.bind(this);
    }

    componentDidUpdate(prevProps) {

        // if section changed, clear previous section, highlight the new one and scroll to it
        if (this.props.category && prevProps.category !== this.props.category) {

            // get new section to scroll to
            let sectionToScrollTo = this.checklistWrapper.querySelector(`.category--${this.props.category}`);
            // scroll to and highlight section
            if (sectionToScrollTo) {
                sectionToScrollTo.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Cannot find category ${this.props.category}.`)
            }
        }
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

    render() {

        let items = this.props.items;

        if (this.props.activeFilters.length > 0) {
            items = items.filter((item) => {
                let status = item.status || 'none';
                return this.props.activeFilters.indexOf(status) >= 0;
            });
        }

        if (this.props.checklistOrder) {
            items = items.map((item) => {return item;});
            items.sort((a, b) => {
                let diff = statusSeverities[a.status || 'none'] - statusSeverities[b.status || 'none'];
                return diff * (this.props.checklistOrder == 'asc' ? 1 : -1);
            });
        }

        return (
            <ol className={ styles.checklist } ref={(e) => (this.checklistWrapper = e)}>
                {items.map((item, index) => (
                    <ChecklistItem
                        key={item.key}
                        isActive={item.key === this.state.activeItemKey}
                        item={item}
                        itemIndex={index}
                        setActive={() => {this.activateItem(item.key)}}
                        showDocument={this.props.showDocument}
                        updateNotes={(newValue) => {
                            // updates the note as the user is typing
                            // TODO update on the server
                            this.props.auditPropertyUpdate(`checklist.${index}.notes`, newValue)
                        }}
                        updateStatus={(newValue) => {
                            // updates the status
                            // TODO update on the server
                            this.props.auditPropertyUpdate(`checklist.${index}.status`, newValue)
                        }}
                    />
                ))}
            </ol>
        )
    }
}