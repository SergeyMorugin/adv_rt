import "../sass/app.scss"
import React from 'react'
import ReactDOM from 'react-dom'
//import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import thunk from 'redux-thunk'

import {routerReducer, routerMiddleware, push} from 'react-router-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'

import createHistory from 'history/createHashHistory'

import reducers from '../reducers'

import App from '../components/App'
import signOut from "../actions/signOut";


import fa from "../sass/vendor/fontawesome-pro-5.0.6/web-fonts-with-css/css/fontawesome.css"
import fal from "../sass/vendor/fontawesome-pro-5.0.6/web-fonts-with-css/css/fa-light.css"

// create history
const history = createHistory()

// create store
const store = createStore(
    combineReducers({ ...reducers, router: routerReducer }),
    applyMiddleware(thunk, routerMiddleware(history)),
)

const Application = connect(
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

//render(
//    <Provider store={store}>
//        <Application history={history}/>
//    </Provider>,
 //   document.getElementById('root'),
//)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
        <Application history={history}/>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

