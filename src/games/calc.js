import runGame from '../index.js';
import getRandomInteger from '../math.js';

const gameDescription = 'What is the result of the expression?';

const getGameQuestionAndAnswer = () => {
  const numbersMaximum = 10;
  const number1 = getRandomInteger(numbersMaximum);
  const number2 = getRandomInteger(numbersMaximum);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInteger(operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  let result;
  switch (operator) {
    case '+': result = number1 + number2; break;
    case '-': result = number1 - number2; break;
    case '*': result = number1 * number2; break;
    default:
  }
  return [question, String(result)];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
