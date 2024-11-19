import React, { useState } from 'react';
import './DragAndDropTemplate.css';

function DragAndDropTemplate() {
  const [dragging, setDragging] = useState(false);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItem(index);
    setDragging(true);
  };

  const handleDragOver = (index) => {
    if (draggedItem === index) return;
    const newItems = [...items];
    const item = newItems.splice(draggedItem, 1)[0];
    newItems.splice(index, 0, item);
    setDraggedItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDragging(false);
    setDraggedItem(null);
  };

  return (
    <div className="drag-and-drop-template">
      <h2>Drag and Drop Template</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDragEnd={handleDragEnd}
            className={dragging && draggedItem === index ? 'dragging' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDropTemplate;