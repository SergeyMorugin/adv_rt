import React, { Component } from 'react';

import styles from './Checkbox.scss'

var rippleId = 0;

class Ripple extends Component {

    componentDidMount(){
        setTimeout(() => {
            this.el.classList.add(styles.rippleIn);
        }, 2);
        setTimeout(() => {
            this.el.classList.add(styles.rippleOff);
        }, 150);
        setTimeout(() => {
            // this.props.done()
        }, 300);
    }

    render(){
        return (
            <svg ref={(e) => {this.el = e}}><circle cx="50%" cy="50%" r="50%"></circle></svg>
        )
    }
}

export default class Checkbox extends Component {

    constructor(props){
        super(props)

        this.state = {
            ripples: []
        }

    }

    addRipple(){
        this.state.ripples.push(rippleId++);
        this.setState({
            ripples: this.state.ripples
        });
    }

    render() {
        return (
            <label className={styles.labelCheckbox}>
                {this.props.children}
                <input type="checkbox" checked={this.props.checked} onChange={(e) => {
                    this.addRipple();
                    this.props.onChange(e)
                }}/>
                <div ref={(e) => this.checkboxMock = e}>
                    {this.state.ripples.map((key) => {
                        return <Ripple
                            key={key}
                            done={() => {
                                // remove the ripple
                                let index = this.state.ripples.indexOf(key)

                                if (index >= 0) {
                                    this.state.ripples.splice(index, 1);
                                    this.setState({
                                        ripples: this.state.ripples
                                    });
                                }

                            }}
                        />
                    })}
                </div>
            </label>
        )
    }

}