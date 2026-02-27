import React from 'react';
import PropTypes from 'prop-types';

const DesktopIcon = ({ label, icon, onDoubleClick }) => {
  return (
    <div className="desktop-icon" onDoubleClick={onDoubleClick}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
};

DesktopIcon.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onDoubleClick: PropTypes.func,
};

DesktopIcon.defaultProps = {
  icon: '',
  onDoubleClick: () => {},
};

export default DesktopIcon;
