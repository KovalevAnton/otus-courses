import { factorialHelper } from "./helpers";
export type ScalarOperationType = (first: number, second: number) => number;

// i don't know how to make the second argument optional ('?' not right decision for linter)
export type ScalarOperationTypeWithOneArg = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const sqr: ScalarOperationTypeWithOneArg = (first: number): number =>
  Math.pow(first, 2);

export const factorial: ScalarOperationTypeWithOneArg = (
  first: number
): number => factorialHelper(first);

export const pow: ScalarOperationType = (
  first: number,
  second: number
): number => Math.pow(first, second);

export const mathOperators: {
  [key: string]: ScalarOperationType | ScalarOperationTypeWithOneArg;
} = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "**": sqr,
  "^": pow,
  "!": factorial,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "**": ZERO,
  "!": ZERO,
  "*": FIRST,
  "/": FIRST,
  "^": FIRST,
  "+": SECOND,
  "-": SECOND,
};
