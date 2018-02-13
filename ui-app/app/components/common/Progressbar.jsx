import React from 'react';

import styles from './Progressbar.scss';

export default class Progressbar extends React.Component {

    constructor(props)
    {
        super(props);
    }

    getProgressColorClass(){
        if (this.props.progress >= 100) {
            return styles.colorComplete;
        } else {
            return '';
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={this.props.percentFloating ? styles.percentFloating : styles.percent}>
                    <span>{this.props.progress}%</span>
                </div>
                <div className={styles.progressbar + ' ' + this.getProgressColorClass()}>
                    <div style={{width: this.props.progress + "%"}}></div>
                </div>
            </div>
        )
    }
}
