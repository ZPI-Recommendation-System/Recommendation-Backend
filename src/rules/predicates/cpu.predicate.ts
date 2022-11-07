//PREDEFINED CPU PREDICATED
import { PredicateWithCustom } from "./base.predicate";
import { FindOperator } from "typeorm/find-options/FindOperator";

export const CPU_FREQ = (value: FindOperator<number>): PredicateWithCustom => {
  return { processorFreq: value };
};

export const CPU_CORES = (value: FindOperator<number>): PredicateWithCustom => {
  return { processorCores: value };
};
