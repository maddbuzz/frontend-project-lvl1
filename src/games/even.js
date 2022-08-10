import runGame from '../index.js';
import getRandomInteger from '../math.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameQuestionAndAnswer = () => {
  const question = getRandomInteger(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
