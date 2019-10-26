import readlineSync from 'readline-sync';

const whatsName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const question = (num) => {
  console.log(`Question ${num}`);
  return readlineSync.question('Your answer: ');
};
export { whatsName, question };
