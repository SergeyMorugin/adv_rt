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
                {this.props.items.map((item) => (
                    <ChecklistItem
                        key={item.key}
                        isActive={item.key === this.state.activeItemKey}
                        item={item}
                        setActive={() => {this.activateItem(item.key)}}
                        showDocument={this.props.showDocument}
                    />
                ))}
            </ol>
        )
    }
}