import runGame from '../index.js';
import { randomInteger, greatestCommonDivisor as gcd } from '../math.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGameQuestionAndAnswer = () => {
  const number1 = 1 + randomInteger(100);
  const number2 = 1 + randomInteger(100);
  const question = `${number1} ${number2}`;
  const answer = String(gcd(number1, number2));
  return [question, answer];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
