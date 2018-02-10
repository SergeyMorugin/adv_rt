// app/javascript/documents/components/DocumentText.jsx

import React from 'react';

const DocumentText = (props) => (
  <div className='document'>
    <div className='document-name'>
      <h2>{props.document.name}</h2>
    </div>
    <div className='document-html'>
      {props.document.content_html}
    </div>
    <div className='document-text'>
      <code>{props.document.content_text}</code>
    </div>
    <div className='document-author'>
      <em>— {props.document.doctype}</em>
    </div>
  </div>
)

export default DocumentText