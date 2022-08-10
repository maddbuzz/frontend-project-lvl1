import runGame from '../index.js';
import { randomInteger, isPrime } from '../math.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const number = 2 + randomInteger(19);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
