import React from 'react';
import FileViewer from 'react-file-viewer';

export default function Viewer(props) {
  return (
    <FileViewer
      fileType={props.type}
      filePath={props.file}
      errorComponent={() => {}}
      onError={(e) => console.log(e)}
    />
  );
}
