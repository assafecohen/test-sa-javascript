import React from 'react';
import { generateRandomLife, newDeadCellStatus,newAliveCellStatus } from './Utils';

describe('Utils Functions', () => {
  it('generateRandomLife - should return TRUE or False', () => {
    const result = generateRandomLife();
    expect(result === true || result === false).toBe(true);
  });
  it('newDeadCellStatus - 3 aliveNeighbors should return true', () => {
    const result = newDeadCellStatus(3);
    expect(result).toBe(true);
  });
  it('newDeadCellStatus - aliveNeighbors diffrenet from  3 should return false', () => {
    const result = newDeadCellStatus(2);
    expect(result).toBe(false);
  });
  it('newAliveCellStatus - 2 or 3 aliveNeighbors should return true', () => {
    const result = newAliveCellStatus(2);
    expect(result).toBe(true);
  });
  it('newAliveCellStatus - 0 or 1 or more then 3 aliveNeighbors should return false', () => {
    const result = newAliveCellStatus(5);
    expect(result).toBe(false);
  });
});
