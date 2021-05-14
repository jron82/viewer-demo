import React from 'react';
import './word.css';
import Viewer from '../Viewer.jsx';

export default function Word() {
  const file = 'https://hypergraph.space/SampleSpec.docx';
  const type = 'docx';

  return (
    <section className="word-preview">
      <h1 style={{ textAlign: 'center' }}>MS Word Preview</h1>
      <Viewer file={file} type={type} />
    </section>
  );
}
