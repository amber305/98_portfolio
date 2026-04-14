import React, { createContext, useState, useEffect } from 'react';

/* eslint-disable react-refresh/only-export-components */

// This context will hold the state of open windows and provide helpers
// for other components (desktop icons, taskbar) to open/close them.
export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [background, setBackground] = useState({ type: 'color', value: '#c0c0c0' });

  // Shutdown states: 'none', 'counting', 'off'
  const [shutdownStage, setShutdownStage] = useState('none');
  const [shutdownCounter, setShutdownCounter] = useState(5);

  const openWindow = (windowData) => {
    const id = Date.now();
    setWindows((prev) => [...prev, { id, ...windowData }]);
    setActiveWindowId(id);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const focusWindow = (id) => {
    setActiveWindowId(id);
  };

  const initiateShutdown = () => {
    setShutdownStage('counting');
    setShutdownCounter(5);
  };

  const cancelShutdown = () => {
    setShutdownStage('none');
    setShutdownCounter(5);
  };

  useEffect(() => {
    let timer;
    if (shutdownStage === 'counting') {
      if (shutdownCounter > 0) {
        timer = setTimeout(() => {
          setShutdownCounter((prev) => prev - 1);
        }, 1000);
      } else {
        setShutdownStage('off');
        // Attempt to close window
        setTimeout(() => {
          window.close();
        }, 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [shutdownStage, shutdownCounter]);

  return (
    <WindowContext.Provider value={{ 
      windows, 
      openWindow, 
      closeWindow, 
      background, 
      setBackground, 
      activeWindowId, 
      focusWindow,
      shutdownStage,
      shutdownCounter,
      initiateShutdown,
      cancelShutdown
    }}>
      {children}
    </WindowContext.Provider>
  );
};
