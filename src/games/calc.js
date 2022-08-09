import randomInteger from '../math.js';

export const gameDescription = 'What is the result of the expression?';

export const getGameQuestionAndAnswer = () => {
  const number1 = randomInteger(10);
  const number2 = randomInteger(10);
  const operators = ['+', '-', '*'];
  const operator = operators[randomInteger(operators.length)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(
    Function(`return ${question}`)() // eslint-disable-line
  );
  return [question, answer];
};
