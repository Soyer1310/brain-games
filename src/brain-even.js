import readlineSync from 'readline-sync';
import getRandomNumber from './get-random-number.js';

const divisor = 2;
const isIven = (num) => num % divisor === 0;
const task = `Answer "yes" if the number is even, otherwise answer "no".`;

const brainEven = () => {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isIven(randomNumber) ? 'yes' : 'no';
  if (userAnswer === correctAnswer) {
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export default brainEven;
export { task };
