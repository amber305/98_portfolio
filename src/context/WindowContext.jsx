import React, { createContext, useState } from 'react';

/* eslint-disable react-refresh/only-export-components */

// This context will hold the state of open windows and provide helpers
// for other components (desktop icons, taskbar) to open/close them.
export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);
  const [background, setBackground] = useState({ type: 'color', value: '#c0c0c0' });

  const openWindow = (windowData) => {
    setWindows((prev) => [...prev, { id: Date.now(), ...windowData }]);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow, background, setBackground }}>
      {children}
    </WindowContext.Provider>
  );
};
