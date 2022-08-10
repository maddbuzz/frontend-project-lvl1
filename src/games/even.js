import runGame from '../index.js';
import getRandomInteger from '../math.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const maximumNumber = 100;
  const question = getRandomInteger(maximumNumber);
  return [question, isEven(question) ? 'yes' : 'no'];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
