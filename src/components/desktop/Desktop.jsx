import React, { useContext } from 'react';
import DesktopIcon from './DesktopIcon';
import { WindowContext } from '../../context/WindowContext';

// Import actual 32×32 icons for desktop items
import aboutLogo from '../../assets/icons/aboutMe.png';
import mediaLogo from '../../assets/icons/mediaPlayer.png';
import pongLogo from '../../assets/icons/pong.png';
import notepadLogo from '../../assets/icons/notepad.png';
import avatarLogo from '../../assets/icons/avatarMaker.png';
import projectsLogo from '../../assets/icons/projects.png';
import themesLogo from '../../assets/icons/themes.png';
import trashLogo from '../../assets/icons/trash.png';

const iconList = [
  { id: 'about', label: 'About Me', icon: aboutLogo, type: 'about' },
  { id: 'media', label: 'Media Player', icon: mediaLogo, type: 'media' },
  { id: 'pong', label: 'Pong', icon: pongLogo, type: 'pong' },
  { id: 'notepad', label: 'Notepad', icon: notepadLogo, type: 'notepad' },
  { id: 'avatar', label: 'Avatar Maker', icon: avatarLogo, type: 'avatar' },
  { id: 'projects', label: 'Projects', icon: projectsLogo, type: 'projects' },
  { id: 'themes', label: 'Themes', icon: themesLogo, type: 'themes' },
  { id: 'trash', label: 'Trash', icon: trashLogo, type: 'trash' },
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
        {/* <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="Center"
        /> */}
      </div>
      <div className="desktop-info">
        <div className="info-header">Amber Kaushik</div>
        <div>Full Stack Developer / Digital Designer</div>
        <div className='info-est'>Est. 2005</div>
        <div className="listening">
          Working On: <br /><a href="#" className='info-working-on'>Scalable Web and AI Solutions</a>
        </div>
        <div className="links">
            <button className='info-btns'>Github</button>
            <button className='info-btns'>LinkedIn</button>
            <button className='info-btns'>Resume</button>
        </div>
        <div className='contact-me'>Contact Me @ my : <a className='info-contact-email' href="mailto:mbrkaushik@gmail.com?subject=Collaboration%20Enquiry%20via%20Your%20Portfolio&body=Hi%20Amber%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20by%20your%20work.%20I%20would%20like%20to%20connect%20with%20you%20regarding%20a%20potential%20opportunity%20%2F%20collaboration.%0A%0AName%3A%0ACompany%20%2F%20Organization%3A%0AProject%20%2F%20Requirement%20Details%3A%0ATimeline%20(if%20any)%3A%0A%0APlease%20let%20me%20know%20a%20convenient%20time%20to%20discuss%20further.%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards%2C%0A%5BEnter%20your%20Name%5D%0A%5BEnter%20your%20Contact%20Number%5D%0A%5BEnter%20your%20Email%20Address%5D">Gmail</a></div>
      </div>
    </div>
  );
};

export default Desktop;
