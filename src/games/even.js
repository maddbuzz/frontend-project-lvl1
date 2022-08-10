import runGame from '../index.js';
import { randomInteger } from '../math.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const question = randomInteger(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
