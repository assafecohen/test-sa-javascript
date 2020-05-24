import React from 'react';
import './GridCell.css';
const GridCell = ({ lifeStatus }) => {
  return <div className={`child ${lifeStatus ? 'alive' : ''}`}></div>;
};

export default GridCell;
