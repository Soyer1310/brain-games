import getRandomNumber from '../get-random-number.js';

export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const findSmallestDivosor = (num, testDivisor = 2) => {
  if (testDivisor ** 2 > num) {
    return num;
  }
  if (num % testDivisor === 0) {
    return testDivisor;
  }
  return findSmallestDivosor(num, testDivisor + 1);
};

const brainPrime = () => {
  const number = getRandomNumber(2, 101);
  const isPrime = number === findSmallestDivosor(number);
  const answer = isPrime ? 'yes' : 'no';
  return [number, answer];
};

export default brainPrime;
