import run from './engine';
import { randOp, getResOfCalc } from './lib';

export default () => {
  const theme = 'What is the result of the expression?';
  const dataSet = [];

  for (let i = 0; i < 3; i += 1) {
    dataSet[i] = [Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      randOp()];
  }

  run(theme,
    dataSet,
    dataSet.map((param) => `${param[0]} ${param[2]} ${param[1]}`),
    getResOfCalc);
};
