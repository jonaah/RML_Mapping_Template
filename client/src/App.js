import React, { useEffect, useState } from 'react';
import ImportTemplateClient from './moduleTemplates/ImportTemplateClient';
import DragAndDropTemplate from './moduleTemplates/DragAndDropTemplate';
import DataImportTemplate from './moduleTemplates/DataImportTemplate';
import DragAndDropBox from './moduleTemplates/DragAndDropBox';

import './App.css';

function App() {
  const [backendData, setBackendData] = useState({ users: [], title: '', items: [], onNew: '', onImport: '' });

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const data = {
    title: backendData.title,
    items: backendData.items,
    onNew: () => console.log('Neuer Datentyp hinzugefügt'),
    onImport: () => console.log('Datentypen importiert'),
  };

  return (
    <div className="app-container">
      <div className="template-container">
        <ImportTemplateClient {...data} />
      </div>
      <div className="template-container">
        <DragAndDropTemplate />
      </div>
      <div className="template-container">
        <DataImportTemplate {...data} />
      </div>
      <div className="template-container">
        <DragAndDropBox />
      </div>
      <div className="template-container">
        {/* Ein weiteres Template oder Inhalt */}
      </div>
      <div className="template-container">
        {/* Ein weiteres Template oder Inhalt */}
      </div>
      <div className="template-container">
        {/* Ein weiteres Template oder Inhalt */}
      </div>
      <div className="template-container">
        {/* Ein weiteres Template oder Inhalt */}
      </div>
      <div className="template-container">
        {/* Ein weiteres Template oder Inhalt */}
      </div>
    </div>
  );
}

export default App;