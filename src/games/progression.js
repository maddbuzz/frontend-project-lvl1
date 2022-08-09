import { randomInteger } from '../math.js';

export const gameDescription = 'What number is missing in the progression?';

export const getGameQuestionAndAnswer = () => {
  const progressionInitialTerm = randomInteger(20);
  const progressionTermsCount = 5 + randomInteger(6);
  const progressionDifference = 1 + randomInteger(10);
  const hiddenTermNumber = randomInteger(progressionTermsCount);
  const terms = [];
  for (let i = 0; i < progressionTermsCount; i += 1) {
    terms.push(progressionInitialTerm + i * progressionDifference);
  }
  const answer = String(terms[hiddenTermNumber]);
  terms[hiddenTermNumber] = '..';
  const question = terms.join(' ');
  return [question, answer];
};
