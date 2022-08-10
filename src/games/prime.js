import runGame from '../index.js';
import getRandomInteger from '../math.js';

const isPrime = (number) => {
  if (number < 2) return null;
  let divisor = 2;
  while (number >= divisor * divisor) {
    if (number % divisor === 0) return false;
    divisor += 1;
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const [minimumNumber, maximumNumber] = [2, 21];
  const question = minimumNumber + getRandomInteger(maximumNumber - minimumNumber);
  return [question, isPrime(question) ? 'yes' : 'no'];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
