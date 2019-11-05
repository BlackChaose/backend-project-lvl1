#!/usr/bin/env node
import readlineSync from 'readline-sync';

const run = (...params) => {
  const [theme, dataset, questions, cbFunc] = params;
  if (theme === undefined
    || dataset === undefined
    || questions === undefined
    || cbFunc === undefined) {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    process.exit(-1);
  }
  console.log('Welcome to the Brain Games!');
  console.log(theme);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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

  let i = 0;
  while (i >= 0) {
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
      process.exit(-1);
    }
    console.log(`Question: ${questions[i]}`);
    const ans = readlineSync.question('Your answer: ');
    if (!logic(cbFunc(dataset[i]), ans)) {
      process.exit(-1);
    }
    i += 1;
  }
};
export default run;
