import React from 'react';
import './video.css';
import Viewer from './../Viewer.jsx';

export default function Video() {
  const file = 'https://hypergraph.space/small.mp4';
  const type = 'mp4';

  return (
    <section className="video-preview">
      <h1 style={{ textAlign: 'center' }}>Video Preview</h1>
      <Viewer file={file} type={type} />
    </section>
  );
}
