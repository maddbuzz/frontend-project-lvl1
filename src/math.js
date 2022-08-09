export const randomInteger = (maximumExclusive) => Math.trunc(Math.random() * maximumExclusive);

// https://en.wikipedia.org/wiki/Euclidean_algorithm
export const gcd = (number1, number2) => {
  if (number1 === 0 || number2 === 0) return null;
  const remainder = number1 % number2;
  if (remainder === 0) return number2;
  return gcd(number2, remainder);
};
