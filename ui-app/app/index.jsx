import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import {routerReducer, routerMiddleware, push} from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import createHistory from 'history/createHashHistory'

import reducers from './reducers'

import App from './components/App'
import signOut from "~/actions/signOut";

// create history
const history = createHistory()

// create store
const store = createStore(
    combineReducers({ ...reducers, router: routerReducer }),
    applyMiddleware(routerMiddleware(history)),
)

const ConnectedApp = connect(
    store => ({
        isAuthenticated: store.auth.isAuthenticated,
    }),
    dispatch => ({
        singout: () => {
            dispatch(signOut())
            dispatch(push('/'))
        }
    }),
)(App);

render(
    <Provider store={store}>
        <ConnectedApp history={history}/>
    </Provider>,
    document.getElementById('root'),
)