#!/usr/bin/env node
import { hiFunc } from './brain-games';
import { whatsName, question } from '..';


hiFunc();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

//const userName = whatsName(); //fixme


const num = () => Math.floor(Math.random() * 100);

let count = 0;
let numer = num();
let ans = question(numer);

const logic = (n, a) => {
  if (n % 2 === 0) {
    if (a === 'yes') {
      count += 1;
      console.log('Correct!');
    } else {
      count = 0;
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      console.log(`let's try again, ${userName}!`);
      process.exit(-1);
    }
  } else if (n % 2 !== 0) {
    if (a === 'no') {
      count += 1;
      console.log('Correct!');
    } else {
      count = 0;
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`let's try again, ${userName}!`);
      process.exit(-1);
    }
  }
};

logic(numer, ans);
while (count > 0) {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
    process.exit(-1);
  }
  numer = num();
  ans = question(numer);
  logic(numer, ans);
}
