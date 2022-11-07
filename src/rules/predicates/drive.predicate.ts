import { PredicateWithCustom } from "./base.predicate";
import { FindOperator } from "typeorm/find-options/FindOperator";

export const DRIVE_SIZE = (
  value: FindOperator<number>
): PredicateWithCustom => {
  return { driveStorage: value };
};
