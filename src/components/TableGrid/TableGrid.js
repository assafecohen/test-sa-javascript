import { useState, useEffect } from 'react';
import { buildGrid, nextGeneration } from '../../Utils/Utils';
import './TableGrid.css';

const TableGrid = () => {
  const [grid, setGrid] = useState([]);
  useEffect(() => {
    const initGrid = buildGrid(50);
    setGrid(initGrid);

    setInterval(() => {
      setGrid((grid) => nextGeneration(grid));
    }, 400);
  }, []);

  return grid;
};

export default TableGrid;
