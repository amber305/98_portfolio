import React from 'react';
import PropTypes from 'prop-types';

const DesktopIcon = ({ label, icon, onClick, onDoubleClick, selected }) => {
  const className = `desktop-icon${selected ? ' selected' : ''}`;

  return (
    <div className={className} onClick={onClick} onDoubleClick={onDoubleClick}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
};

DesktopIcon.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  selected: PropTypes.bool,
};

DesktopIcon.defaultProps = {
  icon: '',
  onClick: () => {},
  onDoubleClick: () => {},
  selected: false,
};

export default DesktopIcon;
