import React, { useRef, useEffect, useContext } from 'react';
import { WindowContext } from '../../context/WindowContext';

import aboutLogo from '../../assets/icons/aboutMe.png';
import projectsLogo from '../../assets/icons/projects.png';
import themesLogo from '../../assets/icons/themes.png';

const StartMenu = ({ onClose }) => {
  const menuRef = useRef();
  const { openWindow, initiateShutdown } = useContext(WindowContext);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Close only if click is outside the menu AND outside the start button
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.start-button')) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleItemClick = (title, type) => {
    openWindow({ title, type });
    onClose();
  };

  const handleAlert = (msg) => {
    alert(msg);
    onClose();
  };

  const handleShutDown = () => {
    initiateShutdown();
    onClose();
  };

  return (
    <div className="start-menu" ref={menuRef}>
      <div className="start-menu-sidebar">
        <span><b>Windows</b> 98</span>
      </div>
      <div className="start-menu-items">
        <div className="start-menu-item" onClick={() => handleItemClick('Projects', 'projects')}>
          <img src={projectsLogo} alt="Projects" />
          <u>P</u>rograms
        </div>
        <div className="start-menu-item" onClick={() => handleItemClick('About Me', 'about')}>
          <img src={aboutLogo} alt="About Me" />
          <u>D</u>ocuments
        </div>
        <div className="start-menu-item" onClick={() => handleItemClick('Settings', 'themes')}>
          <img src={themesLogo} alt="Settings" />
          <u>S</u>ettings
        </div>
        <div className="start-menu-divider"></div>
        <div className="start-menu-item" onClick={() => handleAlert('Help system is not available at the moment.')}>
          <u>H</u>elp
        </div>
        <div className="start-menu-item" onClick={() => handleAlert('Run... currently disabled.')}>
          <u>R</u>un...
        </div>
        <div className="start-menu-divider"></div>
        <div className="start-menu-item" onClick={handleShutDown}>
          Sh<u>u</u>t Down...
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
