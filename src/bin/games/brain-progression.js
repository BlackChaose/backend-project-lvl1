#!/usr/bin/env node
import run from '../engine';

const theme = 'What number is missing in the progression?';
const dataSet = [];


for (let i = 0; i < 3; i += 1) {
  dataSet[i] = [Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 10)];
}


const genProgr = (param) => {
  const a1 = param[0];
  const d = param[1];
  const prog = [];
  let i = 0;
  while (i < 10) {
    prog.push(a1 + d * (i - 1));
    i += 1;
  }
  return prog;
};

const getProgrIndexX = (param) => {
  const a1 = param[0];
  const d = param[1];
  const indexX = param[2];
  const prog = genProgr([a1, d, indexX]);
  return prog[indexX].toString();
};

const genQuestion = (param) => {
  const a1 = param[0];
  const d = param[1];
  const indexX = param[2];
  return genProgr([a1, d]).reduce((acc, el, i) => {
    let res = acc;
    if (i === indexX) {
      res += '..';
    } else {
      res += el;
    }
    res += ' ';
    return res;
  }, '');
};

const questionsSet = dataSet.map((el) => genQuestion(el));
run(theme, dataSet, questionsSet, getProgrIndexX);
