export const randomInteger = (maximumExclusive) => Math.trunc(Math.random() * maximumExclusive);

/* https://en.wikipedia.org/wiki/Euclidean_algorithm */
export const greatestCommonDivisor = (nonZeroInteger1, nonZeroInteger2) => {
  if (nonZeroInteger1 === 0 || nonZeroInteger2 === 0) return null;
  const remainder = nonZeroInteger1 % nonZeroInteger2;
  if (remainder === 0) return nonZeroInteger2;
  return greatestCommonDivisor(nonZeroInteger2, remainder);
};
