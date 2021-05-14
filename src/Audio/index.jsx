import React from 'react';
import './audio.css';
import Viewer from './../Viewer.jsx';

export default function Audio() {
  const file = 'https://hypergraph.space/sample.mp3';
  const type = 'mp3';

  return (
    <section className="audio-preview">
      <h1 style={{ textAlign: 'center' }}>Audio Preview</h1>
      <Viewer file={file} type={type} />
    </section>
  );
}
