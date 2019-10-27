#!/usr/bin/env node
import { whatsName, question, hiFunc } from '../index';

hiFunc('What is the result of the expression?');

const userName = whatsName();

const num1 = () => Math.floor(Math.random() * 100);
const num2 = () => Math.floor(Math.random() * 100);

let count = 0;
let numer1 = 0;
let numer2 = 0;
let [funcOp, signOp] = [0, 0];

const randOp = () => {
  const bf = Math.floor(Math.random() * 10);
  let res;
  let sign = '';
  if (bf <= 3) {
    res = (a, b) => a + b;
    sign = '+';
  } else if (bf <= 7 && bf > 3) {
    res = (a, b) => a - b;
    sign = '-';
  } else if (bf > 7) {
    res = (a, b) => a * b;
    sign = '*';
  }
  return [res, sign];
};

const logic = (numQ, numAns) => {
  let result = false;

  if (numQ === numAns) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${numAns}' is wrong answer ;(. Correct answer was '${numQ}'`);
    console.log(`Let's try again, ${userName}!`);
    result = false;
  }
  return result;
};

while (count >= 0) {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
    process.exit(-1);
  }
  numer1 = num1();
  numer2 = num2();
  [funcOp, signOp] = randOp();
  if (!logic(funcOp(numer1, numer2), Number(question(`${numer1} ${signOp} ${numer2}`)))) {
    process.exit(-1);
  }
  count += 1;
}
