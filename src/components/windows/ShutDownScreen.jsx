import React from 'react';

const ShutDownScreen = () => {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000',
    color: '#a85400', // classic orange/brown win98 shutdown color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999999,
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: '24px',
    textAlign: 'center',
    padding: '20px',
    userSelect: 'none',
  };

  return (
    <div style={overlayStyle}>
      <div>
        It is now safe to turn off your computer.
      </div>
    </div>
  );
};

export default ShutDownScreen;
