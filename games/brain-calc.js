import getRandomNumber from '../src/get-random-number.js';

export const task = 'What is the result of the expression?';

const brainCalc = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 2)];
  const firstNum = getRandomNumber(0, 100);
  const secondNum = getRandomNumber(0, 100);
  const question = `${firstNum} ${operator} ${secondNum}`;
  let result = null;
  switch (operator) {
    case '+': result = firstNum + secondNum;
      break;
    case '-': result = firstNum - secondNum;
      break;
    case '*': result = firstNum * secondNum;
      break;
    default: result = NaN;
  }
  return [question, result.toString()];
};

export default brainCalc;
