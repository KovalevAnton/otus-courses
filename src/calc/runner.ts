import { parser } from "./parser";

import {
  beforeCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
} from "./engine";

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const beforeRes = beforeCalc(stack);

  if (beforeRes.length === 1) {
    return Number(beforeRes[0]);
  }

  const firstPrioritiesRes = firstPrioritiesCalc(beforeRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};
