import React from 'react';

import {connect} from 'react-redux'

import styles from './Identity.scss';

class Identity extends React.Component {
    render() {
        return (
            <div className={styles.identity}>
                <div>
                    <div className={styles.picture}>
                        <div style={{background:"#545A6A", borderRadius:"200px", width: "49px", height: "49px"}}></div> {/* TODO */}
                    </div>
                    <div className={styles.details}>
                        <div className={styles.name}>{this.props.identity.fullName}</div>
                        <div>Level {this.props.identity.level} - {this.props.identity.points} points</div>
                        <div className={styles.rating}>
                            {
                                [1,2,3,4,5].map((n) =>
                                    <span key={n}>
                                        {
                                            n <= this.props.identity.rating ?
                                                <i className={"fas fa-star " + styles.starFull }></i> :
                                                <i className="far fa-star"></i>
                                        }
                                    </span>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(state => {
    return {
        identity: state.auth.identity
    };
})(Identity)