#!/usr/bin/env node
import run from '../engine';
import { findNOD } from '../index';

const theme = 'Find the greatest common divisor of given numbers.';
const dataSet = [];

for (let i = 0; i < 3; i += 1) {
  dataSet[i] = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
}

run(theme, dataSet, dataSet.map((el) => `${el[0]} ${el[1]}`), findNOD);
