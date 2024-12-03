import getRandomNumber from '../src/get-random-number.js';

export const task = 'What is the result of the expression?';

const calc = (a, b, operator) => {
  let result = null;
  switch (operator) {
    case '+': result = a + b;
      break;
    case '-': result = a - b;
      break;
    case '*': result = a * b;
      break;
    default: result = NaN;
  }
  return result;
};

const brainCalc = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 2)];
  const firstNum = getRandomNumber(0, 100);
  const secondNum = getRandomNumber(0, 100);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const result = calc(operator, firstNum, secondNum);
  return [question, result.toString()];
};

export default brainCalc;
