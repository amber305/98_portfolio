import React, { useContext } from 'react';
import DesktopIcon from './DesktopIcon';
import { WindowContext } from '../../context/WindowContext';

// Placeholder icons - using the bundled react.svg for every desktop icon.  Replace
// with your own 32×32 images or import individual assets as needed.
import reactLogo from '../../assets/react.svg';

const iconList = [
  { id: 'about', label: 'About Me', icon: reactLogo, type: 'about' },
  { id: 'media', label: 'Media Player', icon: reactLogo, type: 'media' },
  { id: 'pong', label: 'Pong', icon: reactLogo, type: 'pong' },
  { id: 'notepad', label: 'Notepad Messenger', icon: reactLogo, type: 'notepad' },
  { id: 'avatar', label: 'Avatar Maker', icon: reactLogo, type: 'avatar' },
  { id: 'projects', label: 'Projects', icon: reactLogo, type: 'projects' },
  { id: 'themes', label: 'Themes', icon: reactLogo, type: 'themes' },
  { id: 'trash', label: 'Trash', icon: reactLogo, type: 'trash' },
];

const Desktop = () => {
  const { openWindow } = useContext(WindowContext);

  const handleDoubleClick = (item) => {
    openWindow({ title: item.label, type: item.type });
  };

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {iconList.map((item) => (
          <DesktopIcon
            key={item.id}
            label={item.label}
            icon={item.icon}
            onDoubleClick={() => handleDoubleClick(item)}
          />
        ))}
      </div>
      <div className="desktop-center">
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Center"
        />
      </div>
      <div className="desktop-info">
        <div className="info-header">Amber Kaushik</div>
        <div>Full Stack Developer / Digital Designer</div>
        <div>Est. 2005</div>
        <div className="listening">
          Working On: <a href="#">Scalable Web and AI Solutions</a>
        </div>
        <div className="links">
          <a href="https://github.com/amber305">GitHub</a> | <a href="https://www.linkedin.com/in/itsamberkaushik/">LinkedIn</a> |{' '}
          <a href="https://drive.google.com/file/d/1HdByhKIavSpMQWjA9xH33jHVKymnAKw2/view?usp=sharing">Resume</a>
        </div>
        <div className='contact-me'>Contact Me : <a href="mailto:mbrkaushik@gmail.com?subject=Collaboration%20Enquiry%20via%20Your%20Portfolio&body=Hi%20Amber%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I%20would%20like%20to%20connect%20with%20you%20regarding%20a%20potential%20opportunity%20%2F%20collaboration.%0A%0AName%3A%0ACompany%20%2F%20Organization%3A%0AProject%20%2F%20Requirement%20Details%3A%0ATimeline%20(if%20any)%3A%0A%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20discuss%20further.%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards%2C%0A%5BEnter%20your%20Name%5D%0A%5BEnter%20your%20Contact%20Number%5D%0A%5BEnter%20your%20Email%20Address%5D">Gmail</a></div>
      </div>
    </div>
  );
};

export default Desktop;
