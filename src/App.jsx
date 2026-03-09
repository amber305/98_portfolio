import React from 'react';
import { WindowProvider } from './context/WindowContext';
import Desktop from './components/desktop/Desktop';
import Taskbar from './components/taskbar/Taskbar';
import WindowManager from './components/windows/WindowManager';
import './App.css';

const App = () => {
  return (
    <WindowProvider>
      <Desktop />
      <WindowManager />
      <Taskbar />
    </WindowProvider>
  );
};

export default App;
