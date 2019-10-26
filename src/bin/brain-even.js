#!/usr/bin/env node
import whatsName from '..';
import question from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const userName = whatsName();

const num = Math.floor(Math.random() * 100);

let count = 0;

let ans = question(num);


const logic = (n, a) =>{ if (n % 2 === 0) {
  if (a === 'yes') {
    count += 1;
    console.log('Correct!');
    return 0;
  } else {
    count = 0;
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`let\'s try again, ${userName}!`);
    process.exit(-1);
  }
} else if (n % 2 !== 0) {
  if (a === 'no') {
    count += 1;
    console.log('Correct!');
    return 0;
  } else {
    count = 0;
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`let\'s try again, ${userName}!`);
    process.exit(-1);
  }
}
};

logic(num, ans);
while (count > 0) {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
    process.exit(-1);
  }
  ans = question(num);
  logic(num, ans);
}
