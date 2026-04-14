import React, { useState, useEffect, useContext } from 'react';
import startIcon from '../../assets/icons/startButton.png';
import StartMenu from './StartMenu';
import { WindowContext } from '../../context/WindowContext';

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  const mins = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${mins} ${ampm}`;
}

const Taskbar = () => {
  const [time, setTime] = useState(formatTime(new Date()));
  const [isStartOpen, setIsStartOpen] = useState(false);
  const { windows, activeWindowId, focusWindow } = useContext(WindowContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="taskbar">
      {isStartOpen && <StartMenu onClose={() => setIsStartOpen(false)} />}
      <div 
        className={`start-button ${isStartOpen ? 'active' : ''}`}
        onClick={() => setIsStartOpen(!isStartOpen)}
      >
        <img src={startIcon} alt="Start" className='start-icon' />
        <span className="start-label">Start</span>
      </div>
      <div className="task-items">
        {windows.map((w) => (
          <div 
            key={w.id} 
            className={`taskbar-item ${activeWindowId === w.id ? 'active' : ''}`}
            onClick={() => focusWindow(w.id)}
          >
            {w.title}
          </div>
        ))}
      </div>
      <div className="tray">{time}</div>
    </div>
  );
};

export default Taskbar;
