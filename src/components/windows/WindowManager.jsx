import React, { useContext, useMemo, useState } from 'react';
import { WindowContext } from '../../context/WindowContext';
import Window from './Window';

const WindowManager = () => {
  const { windows, closeWindow, activeWindowId, focusWindow } = useContext(WindowContext);

  // Keep windows stacked with the most recently opened or focused on top.
  const orderedWindows = useMemo(() => {
    const arr = [...windows];
    // ensure active window is on top
    if (activeWindowId) {
      const idx = arr.findIndex((w) => w.id === activeWindowId);
      if (idx >= 0) {
        const [active] = arr.splice(idx, 1);
        arr.push(active);
      }
    }
    return arr;
  }, [windows, activeWindowId]);

  return (
    <>
      {orderedWindows.map((windowData, index) => (
        <Window
          key={windowData.id}
          windowData={windowData}
          zIndex={100 + index}
          isActive={windowData.id === activeWindowId || (!activeWindowId && index === orderedWindows.length - 1)}
          onFocus={() => focusWindow(windowData.id)}
          onClose={() => closeWindow(windowData.id)}
        />
      ))}
    </>
  );
};

export default WindowManager;
