export default (game, userName, task) => {
  console.log(task);
  const rounds = 3;
  let isCorrectAnwer = true;
  let counter = 0;
  while (counter < rounds && isCorrectAnwer) {
    isCorrectAnwer = game();
    counter += 1;
    if (isCorrectAnwer) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
    }
  }
  if (isCorrectAnwer === true) {
    console.log(`Congratulations, ${userName}!`);
  }
};
