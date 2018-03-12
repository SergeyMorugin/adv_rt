import React from 'react'

import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class PrivateRouteContainer extends React.Component {
    render() {
        const {
            isAuthenticated,
            component: Component,
            ...props
        } = this.props

        return (
            <Route
                {...props}
                render={props =>
                    isAuthenticated
                        ? <Component {...props} />
                        : (
                            <Redirect to={{
                                pathname: '/',
                                state: { from: props.location }
                            }} />
                        )
                }
            />
        )
    }
}

export default connect(state => ({
    isAuthenticated: state.auth.isAuthenticated
}))(PrivateRouteContainer)