import React, { createContext, useState } from 'react';

/* eslint-disable react-refresh/only-export-components */

// This context will hold the state of open windows and provide helpers
// for other components (desktop icons, taskbar) to open/close them.
export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windows, setWindows] = useState([]);

  const openWindow = (windowData) => {
    setWindows((prev) => [...prev, { id: Date.now(), ...windowData }]);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow }}>
      {children}
    </WindowContext.Provider>
  );
};
