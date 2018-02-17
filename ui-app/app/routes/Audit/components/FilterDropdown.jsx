import React from 'react';

import styles from './FilterDropdown.scss';
import ddListStyles from '../../../components/common/DropdownList.scss';

import AbstractDropdown from '../../../components/common/AbstractDropdown';
import DropdownDefaultBox from '../../../components/common/DropdownDefaultBox';

import Checkbox from '../../../components/common/Checkbox'

const statusList = {
    'pass': 'Pass',
    'partial_complete': 'Partial Complete',
    'fail': 'Fail',
    'best_practise': 'Best Practise',
    'not_applicable': 'Not Applicable',
    'none': 'none',
}

export default class FilterDropdown extends AbstractDropdown {

    constructor(props) {
        super(props)
    }

    render() {

        // prepare item list
        let menuItems = {};
        for(let i = 0; i < this.props.checklist.length; i++) {
            let item = this.props.checklist[i];
            let status = item.status || 'none';
            if (!(status in menuItems)) {
                menuItems[status] = 1;
            } else {
                menuItems[status]+=1;
            }
        }

        return (
            <div className={ styles.dropdown }>

                <div className={this.props.activeFilters.length > 0 ? styles.openerActive : styles.opener } onClick={this.toggleOpen}>
                    <i className="fas fa-filter"></i>
                </div>

                { this.state.isOpen &&
                <DropdownDefaultBox className={styles.box}>
                    <ul className={ddListStyles.list}>
                        {Object.keys(menuItems).map(status => {
                            return (
                                <li key={status}>
                                    <a className={ styles.listItem }>
                                        <Checkbox
                                            color="green"
                                            beforeLabel
                                            checked={this.props.activeFilters.indexOf(status) >= 0}
                                            onChange={ (e) => {
                                                this.props.setFilter(status, e.target.checked)
                                            }}
                                        >
                                            {statusList[status]}&nbsp;<small>({menuItems[status]})</small>
                                        </Checkbox>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </DropdownDefaultBox>
                }
            </div>
        )
    }
}