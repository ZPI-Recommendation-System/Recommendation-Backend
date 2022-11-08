import { PredicateWithCustom } from "./base.predicate";
import { MoreThan } from "typeorm";

export const CONNECTION_HAS = (...value: string[]): PredicateWithCustom => {
  return { connectionsHas: value };
};

export const COMMUNICATION_HAS = (...value: string[]): PredicateWithCustom => {
  return { communicationHas: value };
};
export const BATTERY_RUN_TIME_MORE = (value: number): PredicateWithCustom => {
  return { batteryTime: MoreThan(value) };
};
