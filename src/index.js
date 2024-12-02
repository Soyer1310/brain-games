import readlineSync from 'readline-sync';
import getUserName from "./get-user-name.js";
import sayHello from "./cli.js";

export default (game, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  sayHello(userName);
  console.log(task);
  const rounds = 3;
  let isCorrectAnswer = true;
  let counter = 0;
  while (counter < rounds && isCorrectAnswer) {
    const [question, result] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    isCorrectAnswer = userAnswer === result;
    counter += 1;
    if (isCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  if (isCorrectAnswer === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};
