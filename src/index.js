import readlineSync from 'readline-sync';
import brainGames from './games/games';
import brainCalc from './games/calc';
import brainEven from './games/even';
import brainPrime from './games/prime';
import brainProgression from './games/progression';
import brainGcd from './games/gcd';


console.log('Please select number of games or type 0 for exit');
console.log('1) brain-games');
console.log('2) brain-calc');
console.log('3) brain-even');
console.log('4) brain-gcd');
console.log('5) brain-prime');
console.log('6) brain-progression');
console.log('0) to exit');

const ans = readlineSync.question('Your answer: ');
switch (ans) {
  case 1: brainGames(); break;
  case 2: brainCalc(); break;
  case 3: brainEven(); break;
  case 4: brainGcd(); break;
  case 5: brainPrime(); break;
  case 6: brainProgression(); break;
  default: console.log('Bye!'); process.exit(-1);
}
