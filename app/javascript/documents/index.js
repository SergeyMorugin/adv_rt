// app/javascript/quotes/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


const documents = document.querySelector('#documents')

ReactDOM.render(<App startingDocumentId={documents.dataset.startingDocumentId} />, documents)