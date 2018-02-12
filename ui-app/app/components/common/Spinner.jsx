import React from 'react';

import styles from './Spinner.scss';

export default class MenuIcon extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <svg className={styles.spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        )
    }
}
