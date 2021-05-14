import React from 'react';
import './excel.css';
import Viewer from './../Viewer.jsx';

export default function Excel() {
  const file = 'https://hypergraph.space/SimpleSpreadsheet.xlsx';
  const type = 'xlsx';

  return (
    <section className="excel-preview">
      <h1 style={{ textAlign: 'center' }}>Excel Preview</h1>
      <Viewer file={file} type={type} />
    </section>
  );
}
