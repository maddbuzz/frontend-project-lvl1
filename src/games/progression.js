import runGame from '../index.js';
import getRandomInteger from '../math.js';

const gameDescription = 'What number is missing in the progression?';

const getGameQuestionAndAnswer = () => {
  const progressionInitialTerm = getRandomInteger(20);
  const progressionTermsCount = 5 + getRandomInteger(6);
  const progressionDifference = 1 + getRandomInteger(10);
  const hiddenTermNumber = getRandomInteger(progressionTermsCount);
  const terms = [];
  for (let i = 0; i < progressionTermsCount; i += 1) {
    terms.push(progressionInitialTerm + i * progressionDifference);
  }
  const answer = String(terms[hiddenTermNumber]);
  terms[hiddenTermNumber] = '..';
  const question = terms.join(' ');
  return [question, answer];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
