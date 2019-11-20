#!/usr/bin/env node
import readlineSync from 'readline-sync';

const run = (rules, dataset) => {
  if (dataset === undefined) {
    console.log('Error!');
    process.exit(-1);
  }
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const NUMBER_OF_ROUNDS = 3;
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
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

  for (let i = 0; i <= NUMBER_OF_ROUNDS; i += 1) {
    if (i === 3) {
      console.log(`Congratulations ${userName}!`);
      process.exit(-1);
    }
    console.log(`Question: ${dataset.questionsSet[i]}`);
    const ans = readlineSync.question('Your answer: ');
    if (!logic(dataset.answersSet[i], ans)) {
      process.exit(-1);
    }
  }
};
export default run;
