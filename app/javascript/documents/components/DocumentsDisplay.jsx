import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import DocumentText from './DocumentText';
import DocumentNavigation from './DocumentNavigation';
import DocumentFooter from './DocumentFooter';

class DocumentsDisplay extends React.Component {
  constructor () {
    super()
    this.state = {
      document: {},
      fireRedirect: false
    }
  }

  fetchDocument (id) {
    axios.get(`api/documents/${id}`)
        .then(response => {
          this.setState({ document: response.data })
        })
        .catch(error => {
          console.error(error)
          this.setState({ fireRedirect: true })
        })
  }

  setDocumentIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs)
    if (this.qsParams.document) {
      // assign document ID from the URL's query string
      this.documentId = Number(this.qsParams.document)
    } else {
      this.documentId = this.props.startingDocumentId
      // update URL in browser to reflect current document in query string
      this.props.history.push(`/?document=${this.documentId}`)
    }
  }

  componentDidMount () {
    this.setDocumentIdFromQueryString(this.props.location.search)
    this.fetchDocument(this.documentId)
  }

  componentWillReceiveProps (nextProps) {
    this.setDocumentIdFromQueryString(nextProps.location.search)
    this.fetchDocument(this.documentId)
  }

  render () {
    const document = this.state.document
    const nextDocumentId = document.next_id
    const previousDocumentId = document.previous_id

    return (
      <div>
        <div className='document-container'>
          {this.state.fireRedirect &&
          <Redirect to={'/'} />
            }
          {previousDocumentId &&
          <DocumentNavigation direction='previous' otherDocumentId={previousDocumentId} />
            }
          <DocumentText document={this.state.document} />
          {nextDocumentId &&
          <DocumentNavigation direction='next' otherDocumentId={nextDocumentId} />
            }
        </div>
        {this.state.document.id !== parseInt(this.props.startingDocumentId, 10) &&
        <DocumentFooter startingDocumentId={this.props.startingDocumentId} />
          }
      </div>
    )
  }
}

export default DocumentsDisplay