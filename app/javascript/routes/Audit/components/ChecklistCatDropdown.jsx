import React from 'react';

import styles from './DocumentDropdown.scss';
import ddListStyles from '../../../components/common/DropdownList.scss';

import AbstractDropdown from '../../../components/common/AbstractDropdown';
import DropdownDefaultBox from '../../../components/common/DropdownDefaultBox';
import DropdownDefaultOpener from '../../../components/common/DropdownDefaultOpener';

const categories = {
    'INC': 'Standard Document Inclusion',
    'ADV': 'Quality of Advice',
    'CTL': 'Centrelink Advice',
    'GBL': 'Gearing to Invest',
    'PRD': 'Product',
    'RSK': 'Personal Risk Insurance',
    'SSL': 'Super Switching',
    'FEE': 'Free Disclosures and Disclaimers',
}

export default class ChecklistCatDropdown extends AbstractDropdown {

    constructor(props) {
        super(props)
    }

    handleDocumentDdItemClick (cat) {
        // when dropdown item is clicked set cat and close
        this.props.onCatPick(cat);
        this.close()
    }

    render() {
        return (
            <div className={ styles.docDd }>

                <DropdownDefaultOpener onClick={this.toggleOpen}>
                    <span style={{display: 'inline-block'}}>{this.props.category && categories[this.props.category]}</span>
                </DropdownDefaultOpener>

                { this.state.isOpen &&
                <DropdownDefaultBox className={styles.box}>
                    <ul className={ddListStyles.list}>
                        <li className={ddListStyles.headingItem}>Checklist Categories</li>
                        {Object.keys(categories).map(cat => (
                            <li key={cat} className={this.props.category == cat ? 'active' : ''}>
                                <a onClick={() => {this.handleDocumentDdItemClick(cat)}}>{categories[cat]}</a>
                            </li>
                        ))}
                    </ul>
                </DropdownDefaultBox>
                }
            </div>
        )
    }
}