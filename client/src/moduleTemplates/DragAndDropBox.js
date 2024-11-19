import React, { useState } from "react";
import "./DragAndDropBox.css";

const DragAndDropBox = () => {
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files); // Dateien aus dem Drop-Event
    setDroppedFiles((prevFiles) => [...prevFiles, ...files]); // Bestehende Dateien beibehalten
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleAddFiles = () => {
    if (droppedFiles.length === 0) {
      alert("No files to add!");
    } else {
      alert(`Added ${droppedFiles.length} file(s)!`);
      setDroppedFiles([]); // Nach dem Hinzufügen die Liste zurücksetzen
    }
  };

  return (
    <div className="drag-and-drop-container">
      <h3 className="title">New Source</h3>
      <div 
        className="drop-zone" 
        onDrop={handleDrop} 
        onDragOver={handleDragOver}
      >
        {droppedFiles.length === 0 ? (
          <p>Drag and Drop RDF/TURTLE/SHACL Definition</p>
        ) : (
          <ul className="file-list">
            {droppedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
      <button className="add-button" onClick={handleAddFiles}>
        Add
      </button>
    </div>
  );
};

export default DragAndDropBox;
