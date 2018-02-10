import React from 'react';

import Bundle from '~/components/Bundle.jsx';

module.exports = () => (<Bundle load={ () => System.import('./components/Home.jsx') }/>);