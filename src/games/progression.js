import runGame from '../index.js';
import getRandomInteger from '../math.js';

const gameDescription = 'What number is missing in the progression?';

const getGameQuestionAndAnswer = () => {
  const initialTermMaximum = 20;
  const initialTerm = getRandomInteger(initialTermMaximum);

  const [termsCountMinimum, termsCountMaximum] = [5, 11];
  const termsCount = termsCountMinimum + getRandomInteger(termsCountMaximum - termsCountMinimum);

  const [termsDifferenceMinimum, termsDifferenceMaximum] = [1, 11];
  const termsDifference = termsDifferenceMinimum
   + getRandomInteger(termsDifferenceMaximum - termsDifferenceMinimum);

  const hiddenTermNumber = getRandomInteger(termsCount);

  const terms = [];
  for (let i = 0; i < termsCount; i += 1) {
    terms.push(initialTerm + i * termsDifference);
  }

  const answer = String(terms[hiddenTermNumber]);
  terms[hiddenTermNumber] = '..';
  return [terms.join(' '), answer];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
