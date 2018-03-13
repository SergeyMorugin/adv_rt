import React from 'react';

import {push} from "react-router-redux";
import signIn from "../../actions/signIn";
import {connect} from "react-redux";

import Container from './components/SignIn.jsx'

export default connect(null, dispatch => ({
    signin: () => {
        dispatch(signIn())
        dispatch(push('/dashboard'))
    }
}))(Container)