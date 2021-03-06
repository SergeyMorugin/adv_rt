import React from 'react';

import styles from './DocumentOptionsDropdown.scss';
import ddListStyles from '../../../components/common/DropdownList.scss';

import AbstractDropdown from '../../../components/common/AbstractDropdown.jsx';
import DropdownDefaultBox from '../../../components/common/DropdownDefaultBox.jsx';
import RadioButton from '../../../components/common/RadioButton.jsx';

import Ink from 'react-ink'

export default class DocumentOptionsDropdown extends AbstractDropdown {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={ styles.opener } onClick={this.toggleOpen}>
                    <i className="fal fa-ellipsis-v"/>
                    <Ink background={false} duration={600}/>
                </div>

                { this.state.isOpen &&
                <DropdownDefaultBox className={styles.box}>
                    <ul className={ddListStyles.list}>
                        <li><a onClick={this.close}>Open in a new window</a></li>
                        <li><a onClick={this.close}>Open source in a new window</a></li>
                        <li className={ddListStyles.subMenu}>
                            <a>Font size</a>
                            <ul className={ddListStyles.list + ' ' + styles.sizeList}>
                                {['Small', 'Medium', 'Large'].map((size) => (
                                    <li key={size} className={'font-size-' + size.toLowerCase()}>
                                        <a
                                            onClick={() => {
                                                this.close();
                                                this.props.setFontSize(size.toLowerCase())
                                            }}
                                        >
                                            <RadioButton checked={this.props.fontSize === size.toLowerCase()}/>
                                            {size}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li><a onClick={this.close}>Update document</a></li>
                        <li><a onClick={this.close}>Delete document</a></li>
                    </ul>
                </DropdownDefaultBox>
                }
            </div>
        )
    }
}