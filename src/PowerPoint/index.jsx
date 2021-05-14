import React from 'react';
import './powerpoint.css';
import Viewer from './../Viewer.jsx';

export default function PowerPoint() {
  const file = 'https://hypergraph.space/sample.pptx';
  const type = 'pptx';

  return (
    <section className="powerpoint-preview">
      <h1 style={{ textAlign: 'center' }}>PowerPoint Preview</h1>
      <Viewer file={file} type={type} />
    </section>
  );
}
