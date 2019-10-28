#!/usr/bin/env node
import { whatsName, question, hiFunc } from '../index';

hiFunc('Answer "yes" if given number is prime. Otherwise answer "no".');

const userName = whatsName();

const num = () => Math.floor(Math.random() * 100);

let count = 0;
let numer = num();

const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const logic = (boolQ, strAns) => {
  let result = false;
  if (((boolQ === true) && (strAns === 'yes')) || ((boolQ === false) && (strAns === 'no'))) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${strAns}' is wrong answer ;(. Correct answer was '${(strAns === 'yes') ? 'no' : 'yes'}'`);
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
  numer = num();

  if (!logic(checkPrime(numer), question(`${numer}`))) {
    process.exit(-1);
  }
  count += 1;
}
