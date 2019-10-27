#!/usr/bin/env node
import { whatsName, question, hiFunc } from '../index';

hiFunc('Find the greatest common divisor of given numbers.');

const userName = whatsName();

const num1 = () => Math.floor(Math.random() * 100);
const num2 = () => Math.floor(Math.random() * 100);

let count = 0;
let numer1 = 0;
let numer2 = 0;


const findNOD = (a, b) => {
  let a1 = a;
  let b1 = b;
  while (a1 !== b1) {
    if (a1 > b1) {
      a1 -= b1;
    } else {
      b1 -= a1;
    }
  }
  return a1;
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

  if (!logic(findNOD(numer1, numer2), Number(question(`${numer1} ${numer2}`)))) {
    process.exit(-1);
  }
  count += 1;
}
