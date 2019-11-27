#!/usr/bin/env node
import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const run = (rules, dataset) => {
  if (dataset === undefined) {
    console.log('Error!');
    process.exit(-1);
  }
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  const logic = (question, answer) => {
    let result = false;
    if (question === answer) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question}'`);
      console.log(`Let's try again, ${userName}!`);
      result = false;
    }
    return result;
  };

  for (let i = 0; i <= ROUNDS_COUNT; i += 1) {
    if (i === ROUNDS_COUNT) {
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
export { run, ROUNDS_COUNT };
