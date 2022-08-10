import runGame from '../index.js';
import getRandomInteger from '../math.js';

const gameDescription = 'What is the result of the expression?';

const getGameQuestionAndAnswer = () => {
  const number1 = getRandomInteger(10);
  const number2 = getRandomInteger(10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInteger(operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(
    Function(`return ${question}`)() // eslint-disable-line
  );
  return [question, answer];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
