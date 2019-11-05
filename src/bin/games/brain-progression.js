#!/usr/bin/env node
import run from '../engine';

const theme = 'What number is missing in the progression?';
const dataSet = [];


for (let i = 0; i < 3; i += 1) {
  dataSet[i] = [Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 10)];
}

console.log(dataSet);

const genProgr = (param) => {
  const a1 = param.shift();
  const d = param.shift();
  const prog = [];
  let i = 0;
  while (i < 10) {
    prog.push(a1 + d * (i - 1));
    i += 1;
  }
  console.warn(prog);
  return prog;
};

const getProgrIndexX = (param) => {
  const a1 = param.shift();
  const d = param.shift();
  const indexX = param.shift();
  const prog = genProgr([a1, d, indexX]);
  return prog[indexX];
}

const genQuestion = (param) => {
  const a1 = param.shift();
  const d = param.shift();
  const indexX = param.shift();
  return genProgr([a1, d]).reduce((acc, el, i) => {
    if (i === indexX) {
      acc += '..';
    } else {
      acc += el;
    }
    acc += ' ';
    return acc;
  }, '');
};
//fixme!
const questionsSet = dataSet.map((el) => genQuestion(el));

run(theme, dataSet, questionsSet, getProgrIndexX);
