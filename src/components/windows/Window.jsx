import React, { useEffect, useRef, useState } from 'react';
import PongGame from './PongGame';
import Themes from './Themes';

const WINDOW_WIDTH = 540;
const WINDOW_HEIGHT = 380;

const Window = ({ windowData, zIndex, isActive, onFocus, onClose }) => {
  const { title, type } = windowData;
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 120, y: 80 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = window.innerWidth / 2 - rect.width / 2;
    const centerY = window.innerHeight / 2 - rect.height / 2 - 30;
    setPosition({ x: Math.max(20, centerX), y: Math.max(20, centerY) });
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!dragging) return;
      const deltaX = event.clientX - dragStart.current.x;
      const deltaY = event.clientY - dragStart.current.y;
      setPosition({
        x: Math.max(0, Math.min(window.innerWidth - WINDOW_WIDTH, startPos.current.x + deltaX)),
        y: Math.max(0, Math.min(window.innerHeight - WINDOW_HEIGHT - 25, startPos.current.y + deltaY)),
      });
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  const handleTitleMouseDown = (event) => {
    onFocus();
    setDragging(true);
    dragStart.current = { x: event.clientX, y: event.clientY };
    startPos.current = { ...position };
  };

  const renderContent = () => {
    switch (type) {
      case 'pong':
        return <PongGame />;
      case 'themes':
        return <Themes windowId={windowData.id} />;
      default:
        return (
          <div style={{ padding: 12, fontSize: 12 }}>
            <div>{`${title} is not yet implemented.`}</div>
            <div style={{ marginTop: 12, color: '#444' }}>
              Try opening the Pong icon to see a sample window.
            </div>
          </div>
        );
    }
  };

  return (
    <div
      ref={containerRef}
      className={`window ${isActive ? 'window-active' : ''}`}
      style={{
        left: position.x,
        top: position.y,
        zIndex,
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
      }}
      onMouseDown={onFocus}
    >
      <div className="window-titlebar" onMouseDown={handleTitleMouseDown}>
        <div className="window-title">{title}</div>
        <div className="window-controls">
          <button className="window-button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
      </div>
      <div className="window-content">{renderContent()}</div>
    </div>
  );
};

export default Window;
