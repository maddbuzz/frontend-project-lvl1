import runGame from '../index.js';
import { getRandomIntegerInRange } from '../math.js';

const gameDescription = 'What is the result of the expression?';

const minimumNumber = 0;
const maximumNumber = 10;

const operators = ['+', '-', '*'];
const calculate = (operand1, operator, operand2) => {
  switch (operator) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    default: throw new Error(`Unexpected operator '${operator}'!`);
  }
};

const getGameQuestionAndAnswer = () => {
  const number1 = getRandomIntegerInRange(minimumNumber, maximumNumber);
  const number2 = getRandomIntegerInRange(minimumNumber, maximumNumber);
  const operator = operators[getRandomIntegerInRange(0, operators.length)];
  return [
    `${number1} ${operator} ${number2}`,
    String(calculate(number1, operator, number2)),
  ];
};

export default () => runGame(gameDescription, getGameQuestionAndAnswer);
