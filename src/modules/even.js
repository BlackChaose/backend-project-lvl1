import run from './engine';
import { isEven } from './lib';

export default () => {
  const theme = 'Answer "yes" if the number is even, otherwise answer "no".';
  const dataSet = [];

  for (let i = 0; i < 3; i += 1) {
    dataSet[i] = Math.floor(Math.random() * 100);
  }

  run(theme, dataSet, dataSet, isEven);
};
