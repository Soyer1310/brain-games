import getRandomNumber from '../get-random-number.js';

export const task = 'What number is missing in the progression?';

const genProgression = (firstNum, progressionLength, step) => {
  const progression = [firstNum];
  for (let i = 1; i < progressionLength; i += 1) {
    const last = progression.at(-1);
    progression.push(last + step);
  }
  return progression;
};

const brainProgression = () => {
  const first = getRandomNumber(0, 10);
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 12);
  const progression = genProgression(first, progressionLength, progressionStep);
  const missedNumberIndex = getRandomNumber(0, progression.length - 1);
  const missedNumber = progression[missedNumberIndex];
  progression[missedNumberIndex] = '..';
  const progressionString = progression.join(' ');
  return [progressionString, missedNumber.toString()];
};

export default brainProgression;
