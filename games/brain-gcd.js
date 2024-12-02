import getRandomNumber from '../src/get-random-number.js';

export const task = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};

const brainGcd = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const gcd = findGcd(firstNum, secondNum);
  return [question, gcd.toString()];
};

export default brainGcd;
