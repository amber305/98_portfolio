import React, { useState } from 'react';

const Notepad = () => {
  const [content, setContent] = useState('');

  const menuStyle = {
    display: 'flex',
    backgroundColor: '#c0c0c0',
    padding: '1px 2px',
    fontSize: '11px',
    borderBottom: '1px solid #c0c0c0', // no separation line by default in win98
  };

  const menuItemStyle = {
    cursor: 'default',
    padding: '2px 6px',
    userSelect: 'none'
  };

  const editorContainerStyle = {
    flex: 1,
    padding: '2px', // small grey margin around the text area
    backgroundColor: '#c0c0c0',
    display: 'flex',
    flexDirection: 'column'
  };

  const textareaContainerStyle = {
    flex: 1,
    backgroundColor: '#fff',
    borderTop: '1px solid #808080',
    borderLeft: '1px solid #808080',
    borderBottom: '1px solid #fff',
    borderRight: '1px solid #fff',
    boxShadow: 'inset 1px 1px 0 #000, 1px 1px 0 #c0c0c0',
    display: 'flex'
  };

  const textareaStyle = {
    flex: 1,
    width: '100%',
    height: '100%',
    border: 'none',
    backgroundColor: 'transparent',
    resize: 'none',
    padding: '2px 4px',
    fontFamily: '"Lucida Console", "Courier New", Courier, monospace',
    fontSize: '12px',
    outline: 'none'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={menuStyle}>
        <div style={menuItemStyle} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor='#000080'; e.currentTarget.style.color='#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#000'; }}><u>F</u>ile</div>
        <div style={menuItemStyle} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor='#000080'; e.currentTarget.style.color='#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#000'; }}><u>E</u>dit</div>
        <div style={menuItemStyle} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor='#000080'; e.currentTarget.style.color='#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#000'; }}><u>S</u>earch</div>
        <div style={menuItemStyle} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor='#000080'; e.currentTarget.style.color='#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#000'; }}><u>H</u>elp</div>
      </div>
      <div style={editorContainerStyle}>
        <div style={textareaContainerStyle}>
          <textarea
            style={textareaStyle}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Notepad;
