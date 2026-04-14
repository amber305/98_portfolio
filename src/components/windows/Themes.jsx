import React, { useContext } from 'react';
import { WindowContext } from '../../context/WindowContext';

import cloudsBg from '../../assets/wallpapers/win98_clouds_1776191142027.png';
import spaceBg from '../../assets/wallpapers/win98_space_1776191427628.png';

const themes = [
  {
    id: 'default',
    name: 'Windows Classic (Grey)',
    background: { type: 'color', value: '#c0c0c0' },
    previewStyle: { backgroundColor: '#c0c0c0' },
  },
  {
    id: 'teal',
    name: 'Teal (Default 98)',
    background: { type: 'color', value: '#008080' },
    previewStyle: { backgroundColor: '#008080' },
  },
  {
    id: 'setup',
    name: 'Windows Setup',
    background: { type: 'gradient', value: 'linear-gradient(to right, #000080, #000000)' },
    previewStyle: { background: 'linear-gradient(to right, #000080, #000000)' },
  },
  {
    id: 'clouds',
    name: 'Classic Clouds',
    background: { type: 'image', value: cloudsBg },
    previewStyle: { backgroundImage: `url(${cloudsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' },
  },
  {
    id: 'space',
    name: 'Cyber Space',
    background: { type: 'image', value: spaceBg },
    previewStyle: { backgroundImage: `url(${spaceBg})`, backgroundSize: 'cover', backgroundPosition: 'center' },
  },
];

const Themes = () => {
  const { setBackground, background } = useContext(WindowContext);

  const handleSelectTheme = (theme) => {
    setBackground(theme.background);
  };

  return (
    <div className="themes-container" style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
      <div style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 'bold' }}>
        Select a Desktop Background
      </div>
      <div style={{ flex: 1, overflowY: 'auto', background: '#fff', border: '2px inset #fff', padding: '8px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
          {themes.map((theme) => {
            const isSelected = 
              background.type === theme.background.type && 
              background.value === theme.background.value;
            
            return (
              <div 
                key={theme.id}
                onClick={() => handleSelectTheme(theme)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  padding: '8px',
                  backgroundColor: isSelected ? '#000080' : 'transparent',
                  color: isSelected ? '#fff' : '#000',
                  border: isSelected ? '1px dotted #000' : '1px solid transparent',
                }}
              >
                <div 
                  style={{
                    width: '100px',
                    height: '75px',
                    border: '2px solid #000',
                    marginBottom: '8px',
                    ...theme.previewStyle
                  }}
                />
                <div style={{ textAlign: 'center', fontSize: '11px', userSelect: 'none' }}>
                  {theme.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <button className="window-button" style={{ width: 'auto', padding: '4px 16px' }} onClick={() => console.log('apply')}>Apply</button>
        <button className="window-button" style={{ width: 'auto', padding: '4px 16px' }} onClick={() => console.log('ok')}>OK</button>
      </div>
    </div>
  );
};

export default Themes;
