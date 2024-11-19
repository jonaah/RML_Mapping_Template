import React, { useState } from 'react';
import './ImportTemplateClient.css';

function ImportTemplateClient({ title, items, onNew, onImport }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="datatype-mappings">
      <div className="header">
        <h2>{title}</h2>
        <div className="arrow-container">
          <div className="arrow" />
        </div>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className={selectedItem === item ? 'selected' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="buttons">
        <button onClick={onNew} className="new">
          Neu
        </button>
        <button onClick={onImport} className="import">
          Importieren
        </button>
      </div>
    </div>
  );
}

export default ImportTemplateClient;