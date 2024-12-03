import getRandomNumber from '../get-random-number.js';

const divisor = 2;
const isIven = (num) => num % divisor === 0;
const task = `Answer "yes" if the number is even, otherwise answer "no".`;

const brainEven = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = isIven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default brainEven;
export { task };
