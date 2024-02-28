import { expect, test } from 'vitest';
import { findSameRound } from '../util/onlineLogic';

const gameRound = 1;
const playerId = 0;
const playerArray = [
  { id: 0, player0: 'paper', round: 0 },
  { id: 1, player1: 'paper', round: 0 },
  { id: 0, player1: 'rock', round: 1 },
  { id: 1, player0: 'paper', round: 1 },
];
const objectArray = [{ id: 1, player0: 'paper', round: 1 }];

test('findSameRound returns the correct object', () => {
  expect(findSameRound(playerArray, playerId, gameRound)).toEqual(objectArray);
});

test('findSameRound returns empty array when no rounds match', () => {
  expect(findSameRound(playerArray, playerId, gameRound + 1)).toEqual([]);
});

test('findSameRound returns empty array when roundArray is empty', () => {
  expect(findSameRound([], playerId, gameRound)).toEqual([]);
});

test('findSameRound returns empty array when roundArray has only one element', () => {
  expect(findSameRound([playerArray[0]], playerId, gameRound)).toEqual([]);
});

test('findSameRound returns empty array when input is not as expected', () => {
  expect(findSameRound(objectArray, playerId, gameRound)).toEqual([]);
});
