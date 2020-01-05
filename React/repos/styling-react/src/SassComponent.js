import React from 'react';
import './SassComponent.scss';

const SassComponent = () => {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ];
  return (
    <div className="SassComponent">
      {colors.map((color, index) => (
        <div key={index} className={`box ${color}`}></div>
      ))}
    </div>
  );
};

export default SassComponent;
