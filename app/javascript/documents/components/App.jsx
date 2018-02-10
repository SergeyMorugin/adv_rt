// app/javascript/documents/components/App.jsx
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import DocumentsDisplay from './DocumentsDisplay'

const App = (props) => (
  <Router startingDocumentId={props.startingDocumentId}>
	<div>
	  <Route
	    path='/'
	    startingDocumentId={props.startingDocumentId}
	    render={(routeProps) => <DocumentsDisplay {...props} {...routeProps} />}
	  />
	</div>
  </Router>
)

// You will need this on the bottom of each component file
// to make it available through ES6 'import' statements.

export default App