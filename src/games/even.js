import runGame from '../index.js';
import { getRandomIntegerInRange } from '../math.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const [minimumNumber, maximumNumber] = [0, 100];

const isEven = (number) => number % 2 === 0;

const getGameQuestionAndAnswer = () => {
  const question = getRandomIntegerInRange(minimumNumber, maximumNumber);
  return [
    question,
    isEven(question) ? 'yes' : 'no',
  ];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
