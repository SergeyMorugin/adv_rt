//app/javascript/documents/components/DocumentFooter.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const DocumentFooter = (props) => (
  <div id='footer'>
    <Link className='btn btn-primary' to={`/?document=${props.startingDocumentId}`}>
      Back to Beginning
    </Link>
  </div>
)

export default DocumentFooter