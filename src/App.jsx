import React from 'react';
import { WindowProvider } from './context/WindowContext';
import Desktop from './components/desktop/Desktop';
import Taskbar from './components/taskbar/Taskbar';
import './App.css';

const App = () => {
  return (
    <WindowProvider>
      <Desktop />
      <Taskbar />
    </WindowProvider>
  );
};

export default App;
