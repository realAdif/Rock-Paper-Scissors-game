import { expect, test } from 'vitest';
import { findSameRound } from '../util/onlineLogic';

const updatedGameHistory = [
  { round: 0, id: 0, player0: 'rock' },
  { round: 0, player1: 'paper', id: 1 },
];

test('findSameRound player0 ', () => {
  expect(findSameRound(updatedGameHistory, 0, 0)).toEqual([
    updatedGameHistory[1],
  ]);
});
test('findSameRound player1', () => {
  expect(findSameRound(updatedGameHistory, 1, 0)).toEqual([
    updatedGameHistory[0],
  ]);
});
