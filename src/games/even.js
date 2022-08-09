import { randomInteger } from '../math.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getGameQuestionAndAnswer = () => {
  const question = randomInteger(100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
