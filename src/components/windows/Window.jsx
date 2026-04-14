import React, { useEffect, useRef, useState } from 'react';
import PongGame from './PongGame';
import Themes from './Themes';
import Notepad from './Notepad';
import AboutMe from './AboutMe';
import Projects from './Projects';

const Window = ({ windowData, zIndex, isActive, onFocus, onClose }) => {
  const { title, type } = windowData;
  const containerRef = useRef(null);
  
  // Responsive sizing
  const getWindowSize = () => {
    const isMobile = window.innerWidth < 768;
    const width = isMobile ? window.innerWidth * 0.95 : 540;
    const height = isMobile ? window.innerHeight * 0.7 : 380;
    return { width, height };
  };

  const [size, setSize] = useState(getWindowSize());
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      const newSize = getWindowSize();
      setSize(newSize);
      
      // Keep window in bounds on resize
      setPosition(prev => ({
        x: Math.max(0, Math.min(window.innerWidth - newSize.width, prev.x)),
        y: Math.max(0, Math.min(window.innerHeight - 25 - newSize.height, prev.y))
      }));
    };

    window.addEventListener('resize', handleResize);
    
    // Initial centering
    if (containerRef.current) {
      const initialSize = getWindowSize();
      const centerX = window.innerWidth / 2 - initialSize.width / 2;
      const centerY = window.innerHeight / 2 - initialSize.height / 2 - 30;
      setPosition({ x: Math.max(10, centerX), y: Math.max(10, centerY) });
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!dragging) return;
      const deltaX = event.clientX - dragStart.current.x;
      const deltaY = event.clientY - dragStart.current.y;
      setPosition({
        x: Math.max(0, Math.min(window.innerWidth - size.width, startPos.current.x + deltaX)),
        y: Math.max(0, Math.min(window.innerHeight - size.height - 25, startPos.current.y + deltaY)),
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
  }, [dragging, size]);

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
      case 'notepad':
        return <Notepad />;
      case 'about':
        return <AboutMe />;
      case 'projects':
        return <Projects />;
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
        width: size.width,
        height: size.height,
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
