import React from 'react';

import styles from './FilterDropdown.scss';
import ddListStyles from '../../../components/common/DropdownList.scss';

import AbstractDropdown from '../../../components/common/AbstractDropdown';
import DropdownDefaultBox from '../../../components/common/DropdownDefaultBox';

import Checkbox from '../../../components/common/Checkbox'

const statusList = {
    'foo': 'Foo',
    'bar': 'Bar',
    'baz': 'Baz',
}

export default class FilterDropdown extends AbstractDropdown {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={ styles.docDd }>

                <div onClick={this.toggleOpen}>
                    <i className="fas fa-filter"></i>
                </div>

                { this.state.isOpen &&
                <DropdownDefaultBox className={styles.box}>
                    <ul className={ddListStyles.list}>
                        {Object.keys(statusList).map(status => {
                            return (
                                <li key={status}>
                                    <a>
                                        <Checkbox
                                            beforeLabel
                                            checked={this.props.activeFilters.indexOf(status) >= 0}
                                            onChange={ (e) => {
                                                this.props.setFilter(status, e.target.checked)
                                            }}
                                        >
                                            {statusList[status]}
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