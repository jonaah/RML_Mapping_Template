import React, { useState } from "react";
import "./DataImportTemplate.css";

function DataImportTemplate({ title, initialItems }) {
  const [items, setItems] = useState(initialItems || []);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNewItem = () => {
    const newItem = `Sample ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const handleImport = () => {
    alert("Import function is not implemented!");
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="DataImportTemplate">
      <h3 className="box-title">{title}</h3>
      <div className="item-list">
        {items.map((item, index) => (
          <div
            className={`item ${selectedItem === item ? "selected" : ""}`}
            key={index}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handleNewItem} className="button new">
          New
        </button>
        <button onClick={handleImport} className="button import">
          Import
        </button>
      </div>
    </div>
  );
}

export default DataImportTemplate;
