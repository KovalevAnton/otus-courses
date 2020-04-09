export const isNumber = (item: string): boolean => !isNaN(Number(item));

export const factorialHelper = (n: number): number =>
  n != 1 ? n * factorialHelper(n - 1) : 1;
