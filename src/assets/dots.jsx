import React, { useEffect, useRef, useState } from 'react';

export const Dots = ({ points, onDrag, className = '', showSubmit, setShowSubmit }) => {
  const containerRef = useRef(null);
  const [mouseDown, setMouseDown] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState(null);

  useEffect(() => {
    function updatePoint(e, callback) {
      if (mouseDown && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        if (
          e.clientX >= containerRect.left &&
          e.clientX <= containerRect.right &&
          e.clientY >= containerRect.top &&
          e.clientY <= containerRect.bottom
        ) {
          if (activeDotIndex !== null) {
            // Update the position of the active dot
            const { x, y } = points[activeDotIndex];
            const newX = (e.clientX - containerRect.left) / containerRect.width;
            const newY = (e.clientY - containerRect.top) / containerRect.height;
            onDrag(
              points.map((point, index) =>
                index === activeDotIndex ? { x: newX, y: newY } : point
              ),
              callback
            );
          }
        }
      }
    }

    function changePosition(e) {
      updatePoint(e, false);
    }

    function releasePoint(e) {
      updatePoint(e, true);
      setMouseDown(false);
      setActiveDotIndex(null);
    }

    window.addEventListener('mousemove', changePosition);
    window.addEventListener('mouseup', releasePoint);

    return () => {
      window.removeEventListener('mousemove', changePosition);
      window.removeEventListener('mouseup', releasePoint);
    };
  }, [mouseDown, activeDotIndex, onDrag, points]);

  const handleDotClick = (e, dotIndex) => {
    if (activeDotIndex !== null) {
      // If a dot is already active, deactivate it
      setActiveDotIndex(null);
    } else {
      // If no dot is active, activate the clicked dot
      setActiveDotIndex(dotIndex);
    }
  };

  return (
    <div ref={containerRef} className={`vertex-container ${className}`}>
      {points.map((point, index) => (
        <div
          key={index}
          className={`vertex-dot ${index === activeDotIndex ? 'active' : ''}`}
          style={{
            top: `calc(${point.y * 100}% - 5px)`,
            left: `calc(${point.x * 100}% - 5px)`,
          }}
          onMouseDown={() => {
            setMouseDown(true);
            setActiveDotIndex(index);
          }}
          onClick={(e) => handleDotClick(e, index)}
        />
      ))}
    </div>
  );
};