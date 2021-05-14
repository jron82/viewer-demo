import React from 'react';
import './pdf.css';
import Viewer from '../Viewer.jsx';

export default function PDF() {
  const file = 'https://hypergraph.space/sample.pdf';
  const type = 'pdf';

  return (
    <section className="pdf-preview">
      <h1 style={{ textAlign: 'center' }}>PDF Preview</h1>
      <Viewer file={file} type={type} />
    </section>
  );
}
