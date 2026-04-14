import React, { createContext, useState } from 'react';

/* eslint-disable react-refresh/only-export-components */

// This context will hold the state of open windows and provide helpers
// for other components (desktop icons, taskbar) to open/close them.
export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [background, setBackground] = useState({ type: 'color', value: '#c0c0c0' });

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

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow, background, setBackground, activeWindowId, focusWindow }}>
      {children}
    </WindowContext.Provider>
  );
};
