import React, { Component } from 'react';

import styles from './Checklist.scss';

import ChecklistItem from './ChecklistItem'

export default class Checklist extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeItemKey: 'INC02',
        }

        this.activateItem = this.activateItem.bind(this);
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
        return (
            <ol className={ styles.checklist }>
                {this.props.items.map((item, index) => (
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