import React from 'react';

const Mode = () => {
  return (
    <div>
      <div className="containter-mode">
        <span style={{ color: 'yellow' }}>🔅</span>
        <div className="switch-checkbox">
          <input type="checkbox" />
        </div>
        <span style={{ color: 'grey' }}>🌙</span>
      </div>
    </div>
  );
};

export default Mode;
