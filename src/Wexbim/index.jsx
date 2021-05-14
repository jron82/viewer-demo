import React from 'react';
import './wexbim.css';
import Viewer from './../Viewer.jsx';

export default function Wexbim() {
  const file = 'https://hypergraph.space/SampleHouse.wexbim';
  const type = 'wexbim';

  return (
    <section className="wexbim-preview">
      <h1 style={{ textAlign: 'center' }}>Wexbim Preview</h1>
      <Viewer file={file} type={type} />
    </section>
  );
}
