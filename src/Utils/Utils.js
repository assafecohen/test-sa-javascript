import React from 'react';
import GridCell from '../components/TableGrid/GridCell/GridCell';

//Building & filling grid with GridCell components
export const buildGrid = (gridSize) => {
  let newGrid = [];
  for (let i = 0; i < gridSize; i++) {
    newGrid[i] = [];
    for (let j = 0; j < gridSize; j++) {
      newGrid[i][j] = <GridCell lifeStatus={generateRandomLife()}   key={`${i}${j}`}/>;
    }
  }
  return newGrid;
};

//Generate Random number with 15% for true(Alive Status)
export const generateRandomLife = () => {
  return Math.random() >= 0.85;
};

//Creating newGeneration base on prev one
export const nextGeneration = (prevGeneration) => {
  const updatedGeneration = prevGeneration.map((column, i) => {
    return column.map((cell, j) => {
      let { lifeStatus } = cell.props;
      const neighborsAmount = getAliveNeighbors(i, j, prevGeneration);
      if (lifeStatus) {
        lifeStatus = newAliveCellStatus(neighborsAmount);
      } else {
        lifeStatus = newDeadCellStatus(neighborsAmount);
      }
      return <GridCell lifeStatus={lifeStatus} key={`${i}${j}`} />;
    });
  });
  return updatedGeneration;
};
//Return the amount of live neighbors for each cell
export const getAliveNeighbors = (i, j, grid) => {
  let neighborsCounter = 0;
  neighborsCounter += checkCellStatus(grid[i - 1] ? grid[i - 1][j - 1] : null);
  neighborsCounter += checkCellStatus(grid[i - 1] ? grid[i - 1][j] : null);
  neighborsCounter += checkCellStatus(grid[i - 1] ? grid[i - 1][j + 1] : null);
  neighborsCounter += checkCellStatus(grid[i] ? grid[i][j - 1] : null);
  neighborsCounter += checkCellStatus(grid[i] ? grid[i][j + 1] : null);
  neighborsCounter += checkCellStatus(grid[i + 1] ? grid[i + 1][j - 1] : null);
  neighborsCounter += checkCellStatus(grid[i + 1] ? grid[i + 1][j] : null);
  neighborsCounter += checkCellStatus(grid[i + 1] ? grid[i + 1][j + 1] : null);
  return neighborsCounter;
};

//Checking live cell with the rules inside the assignment
export const newAliveCellStatus = (aliveNeighbors) => {
  switch (aliveNeighbors) {
    case 0:
    case 1:
      return false;
    case 2:
    case 3:
      return true;
    default:
      return false;
  }
};
//Checking dead with when the rulew                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             inside the assignment
export const newDeadCellStatus = (aliveNeighbors) => {
  const status = aliveNeighbors === 3 ? true : false;
  return status;
};

// Recive Cell , Return Cell Status
export const checkCellStatus = (cell) => {
  if (!cell || !cell.props.lifeStatus) return false;
  return true;
};
