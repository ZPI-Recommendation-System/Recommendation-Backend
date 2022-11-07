import { PredicateWithCustom } from "./base.predicate";
import { FindOperator } from "typeorm/find-options/FindOperator";

export const RAM_SIZE = (operator: FindOperator<number>): PredicateWithCustom => {
  return { ramAmount: operator };
};
