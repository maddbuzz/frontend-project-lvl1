import runGame from '../index.js';
import { getRandomIntegerInRange } from '../math.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const minimumNumber = 1;
const maximumNumber = 101;

const getGCD = (number1, number2) => {
  const gcd = (n1, n2) => {
    const remainder = n1 % n2;
    return remainder === 0 ? n2 : gcd(n2, remainder);
  };
  if (number1 === 0 || number2 === 0) return null;
  return gcd(number1, number2);
};

const getGameQuestionAndAnswer = () => {
  const number1 = getRandomIntegerInRange(minimumNumber, maximumNumber);
  const number2 = getRandomIntegerInRange(minimumNumber, maximumNumber);
  return [
    `${number1} ${number2}`,
    String(getGCD(number1, number2)),
  ];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
