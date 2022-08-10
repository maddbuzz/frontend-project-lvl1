import runGame from '../index.js';
import getRandomInteger from '../math.js';

const getGCD = (number1, number2) => {
/* https://en.wikipedia.org/wiki/Euclidean_algorithm */
  const gcd = (n1, n2) => {
    const remainder = n1 % n2;
    if (remainder === 0) return n2;
    return gcd(n2, remainder);
  };

  if (number1 === 0 || number2 === 0) return null;
  return number2 > number1 ? gcd(number2, number1) : gcd(number1, number2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGameQuestionAndAnswer = () => {
  const [minimumNumber, maximumNumber] = [1, 101];
  const number1 = minimumNumber + getRandomInteger(maximumNumber - minimumNumber);
  const number2 = minimumNumber + getRandomInteger(maximumNumber - minimumNumber);

  const question = `${number1} ${number2}`;
  return [question, String(getGCD(number1, number2))];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
