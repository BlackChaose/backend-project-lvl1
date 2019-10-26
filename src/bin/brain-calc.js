#!/usr/bin/env node
import { whatsName, question } from '..';
import {hiFunc} from './brain-games.js';

hiFunc();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

// //fixme: change logic! see task!
// const userName = whatsName();
//
// const num1 = () => Math.floor(Math.random() * 100);
// const num2 = () => Math.floor(Math.random() * 100);
//
// let count = 0;
// let numer1 = num1();
// let numer2 = num1();
//
// const randSign=()=>{
//   let bf = Math.floor(Math.random() * 10);
//   if( bf<=3 ){
//     return "+";
//   }else if( bf<= 7 && bf>3){
//     return "-";
//   }else if( bf >7 ){
//     return "*";
//   }
// };
// //fixme^ !!!!!
// let sign = randSign();
//
// let ans = question(`${numer1} ${sign} ${numer2}`);
//
// const logic = (n, a) => {
//   if (n % 2 === 0) {
//     if (a === 'yes') {
//       count += 1;
//       console.log('Correct!');
//     } else {
//       count = 0;
//       console.log('"no" is wrong answer ;(. Correct answer was "yes".');
//       console.log(`let's try again, ${userName}!`);
//       process.exit(-1);
//     }
//   } else if (n % 2 !== 0) {
//     if (a === 'no') {
//       count += 1;
//       console.log('Correct!');
//     } else {
//       count = 0;
//       console.log('"yes" is wrong answer ;(. Correct answer was "no".');
//       console.log(`let's try again, ${userName}!`);
//       process.exit(-1);
//     }
//   }
// };
//
// logic(numer, ans);
// while (count > 0) {
//   if (count === 3) {
//     console.log(`Congratulations, ${userName}!`);
//     process.exit(-1);
//   }
//   numer = num();
//   ans = question(numer);
//   logic(numer, ans);
// }
