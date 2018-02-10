// app/javascript/documents/components/DocumentNavigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const DocumentNavigation = (props) => {
  let element = null
  if (props.direction === 'previous') {
    element = (
      <Link className='link-previous' to={`/?document=${props.otherDocumentId}`}>
        <i className='fa fa-angle-left' aria-hidden='true'><span /></i>
      </Link>
    )
  } else {
    element = (
      <Link className='link-next' to={`/?document=${props.otherDocumentId}`}>
        <i className='fa fa-angle-right' aria-hidden='true'><span /></i>
      </Link>
    )
  }
  return element
}

export default DocumentNavigation