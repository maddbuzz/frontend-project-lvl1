import { randomInteger, isPrime } from '../math.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getGameQuestionAndAnswer = () => {
  const number = 2 + randomInteger(19);
  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};
