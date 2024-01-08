import React, { useState } from 'react';
//import './Vertex.css';

export const Vertex = ({initialDots, onDotPositionUpdate}) => {
  const [dots, setDots] = useState([
    { x: 0.3, y: 0.5, color: 'rgba(247, 188, 3)' },
    { x: 0.5, y: 0.5, color: 'rgba(92, 172, 45)' },
    { x: 0.7, y: 0.5, color: 'rgba(253, 176, 192)' },
  ]);

  // State to keep track of the currently dragged dot
  const [draggedDotIndex, setDraggedDotIndex] = useState(null);

  const handleDotDragStart = (e, dotIndex) => {
    setDraggedDotIndex(dotIndex);
  };

  const handleDotDrag = (e) => {
    if (draggedDotIndex !== null) {
      const updatedDots = [...dots];
      const dot = updatedDots[draggedDotIndex];

      // Calculate the new position of the dot based on the mouse drag event
      const vertexRect = e.currentTarget.parentElement.getBoundingClientRect();
      const x = (e.clientX - vertexRect.left) / vertexRect.width;
      const y = (e.clientY - vertexRect.top) / vertexRect.height;

      dot.x = x;
      dot.y = y;
      setDots(updatedDots);
	  // Update the dot positions in the parent component
	  onDotPositionUpdate(updatedDots);
    }
  };

  const handleDotDragEnd = () => {
    setDraggedDotIndex(null);
  };

  return (
    <div className="vertex">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{
            left: `${dot.x * 100}%`,
            top: `${dot.y * 100}%`,
            backgroundColor: dot.color,
          }}
          onMouseDown={(e) => handleDotDragStart(e, index)}
          onMouseMove={handleDotDrag}
          onMouseUp={handleDotDragEnd}
        />
      ))}
    </div>
  );
};