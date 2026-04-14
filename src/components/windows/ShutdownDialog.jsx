import React, { useContext } from 'react';
import { WindowContext } from '../../context/WindowContext';

const ShutdownDialog = () => {
  const { shutdownCounter, cancelShutdown } = useContext(WindowContext);

  const dialogStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '320px',
    backgroundColor: '#c0c0c0',
    border: '2px solid #000',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.5), inset 2px 2px 0 #dfdfdf',
    zIndex: 100000,
    fontFamily: '"MS Sans Serif", Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    padding: '2px',
  };

  const titleBarStyle = {
    height: '24px',
    backgroundColor: '#000080',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    padding: '0 6px',
    fontSize: '12px',
    fontWeight: 'bold',
  };

  const contentStyle = {
    padding: '16px',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  };

  const iconStyle = {
    width: '32px',
    height: '32px',
    backgroundColor: '#fff',
    border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#000080',
    borderRadius: '50%',
  };

  const buttonAreaStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '12px',
    gap: '8px',
  };

  const buttonStyle = {
    width: '75px',
    height: '22px',
    backgroundColor: '#c0c0c0',
    border: '2px outset #fff',
    fontSize: '11px',
    cursor: 'pointer',
    outline: 'none',
  };

  return (
    <div style={dialogStyle}>
      <div style={titleBarStyle}>
        <span>System Shutdown</span>
      </div>
      <div style={contentStyle}>
        <div style={iconStyle}>?</div>
        <div>
          System is shutting down in <b>{shutdownCounter}</b> seconds.
        </div>
      </div>
      <div style={buttonAreaStyle}>
        <button 
          style={buttonStyle} 
          onClick={cancelShutdown}
          onMouseDown={(e) => e.target.style.borderStyle = 'inset'}
          onMouseUp={(e) => e.target.style.borderStyle = 'outset'}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ShutdownDialog;
