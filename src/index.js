import readlineSync from 'readline-sync';

export const whatsName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export const question = (num) => {
  console.log(`Question ${num}`);
  return readlineSync.question('Your answer: ');
};
