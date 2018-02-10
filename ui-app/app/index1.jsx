import React from 'react';
import { render } from 'react-dom';

import App from '~/components/App.jsx';
import { HashRouter as Router } from 'react-router-dom'

// root elements
const Index = () => (
    <Router>
        <App/>
    </Router>
);

render(<Index/>, document.getElementById('root'));