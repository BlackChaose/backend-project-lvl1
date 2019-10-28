#!/usr/bin/env node
import { whatsName, question, hiFunc } from '../index';

hiFunc('What number is missing in the progression?');

const userName = whatsName();

const num1 = () => Math.floor(Math.random() * 100);
const num2 = () => Math.floor(Math.random() * 100);

let count = 0;
let numer1 = 0;
let numer2 = 0;

const genProg = (a1, d) => {
  let prog = [];
  let count = 0;
  let str = '';
  let indexX = Math.floor(Math.random() * 10);
  while (count <10){
    prog.push(a1+d*(count - 1));
    if(count === indexX){
      str +='.. ';
    }else{
      str += (a1+d*(count - 1)).toString();
      str += ' ';
    }
    count +=1;
  }
  return [prog[indexX], str ];
};

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
let [valX,valS] = [0, 0];
while (count >= 0) {
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
    process.exit(-1);
  }
  numer1 = num1();
  numer2 = num2();

  [valX, valS] = genProg(numer1, numer2);

  if (!logic(valX, Number(question(`${valS}`)))) {
    process.exit(-1);
  }
  count += 1;
}
