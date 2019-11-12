#!/usr/bin/env node
import readlineSync from 'readline-sync';

const textQA = {
  greeting: 'Welcome to the Brain Games!',
  inputQuestion: 'May I have your name? ',
  hello: 'Hello',
  correctAnswer: 'Correct!',
  wrongAnswer: ' is wrong answer ;(. Correct answer was ',
  tryAgain: 'Let\'s try again,',
  error: 'Error! Check datasets!',
  congratulations: 'Congratulations',
  question: 'Question: ',
  yourAnswer: 'Your answer: ',
};

const run = (...params) => {
  const [dataset, cbFunc] = params;
  if (dataset === undefined
    || cbFunc === undefined) {
    console.log(textQA.error);
    process.exit(-1);
  }
  console.log(textQA.greeting);
  console.log(dataset.theme);
  const userName = readlineSync.question(textQA.inputQuestion);
  console.log(`${textQA.hello} ${userName}!`);
  const logic = (numQ, numAns) => {
    let result = false;
    if (numQ === numAns) {
      console.log(textQA.correctAnswer);
      result = true;
    } else {
      console.log(`'${numAns}'${textQA.wrongAnswer}'${numQ}'`);
      console.log(`${textQA.tryAgain} ${userName}!`);
      result = false;
    }
    return result;
  };

  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`${textQA.congratulations} ${userName}!`);
      process.exit(-1);
    }
    console.log(`${textQA.question} ${dataset.questionsSet[i]}`);
    const ans = readlineSync.question(textQA.yourAnswer);
    if (!logic(cbFunc(dataset.dataSet[i]), ans)) {
      process.exit(-1);
    }
  }
};
export default run;
