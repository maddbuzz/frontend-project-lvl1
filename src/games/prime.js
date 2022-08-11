import runGame from '../index.js';
import { getRandomIntegerInRange } from '../math.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const [minimumNumber, maximumNumber] = [2, 30];

const isPrime = (number) => {
  if (number < 2) return null;
  let divisor = 2;
  while (number >= divisor * divisor) {
    if (number % divisor === 0) return false;
    divisor += 1;
  }
  return true;
};

const getGameQuestionAndAnswer = () => {
  const question = getRandomIntegerInRange(minimumNumber, maximumNumber);
  return [
    question,
    isPrime(question) ? 'yes' : 'no',
  ];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
