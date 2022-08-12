import runGame from '../index.js';
import { getRandomIntegerInRange } from '../math.js';

const gameDescription = 'What number is missing in the progression?';

const initialTermMinimum = 0;
const initialTermMaximum = 20;
const termsCountMinimum = 5;
const termsCountMaximum = 11;
const termsDifferenceMinimum = 1;
const termsDifferenceMaximum = 11;

const getTerms = (initialTerm, termsCount, termsDifference) => {
  const terms = [];
  for (let i = 0; i < termsCount; i += 1) {
    terms.push(initialTerm + i * termsDifference);
  }
  return terms;
};

const getGameQuestionAndAnswer = () => {
  const initialTerm = getRandomIntegerInRange(initialTermMinimum, initialTermMaximum);
  const termsCount = getRandomIntegerInRange(termsCountMinimum, termsCountMaximum);
  const termsDifference = getRandomIntegerInRange(termsDifferenceMinimum, termsDifferenceMaximum);
  const terms = getTerms(initialTerm, termsCount, termsDifference);

  const hiddenTermNumber = getRandomIntegerInRange(0, termsCount);
  const answer = String(terms[hiddenTermNumber]);
  terms[hiddenTermNumber] = '..';
  return [
    terms.join(' '),
    answer,
  ];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
