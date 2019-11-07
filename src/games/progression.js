import run from '../engine';
import { genQuestionProgression, getProgrIndexX } from '../lib';

export default () => {
  const theme = 'What number is missing in the progression?';
  const dataSet = [];


  for (let i = 0; i < 3; i += 1) {
    dataSet[i] = [Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 10)];
  }

  const questionsSet = dataSet.map((el) => genQuestionProgression(el));
  run(theme, dataSet, questionsSet, getProgrIndexX);
};
