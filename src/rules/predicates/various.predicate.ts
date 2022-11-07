import { PredicateWithCustom } from "./base.predicate";

export const CONNECTION_HAS = (...value: string[]): PredicateWithCustom => {
  return { connectionsHas: value };
};

export const COMMUNICATION_HAS = (...value: string[]): PredicateWithCustom => {
  return { communicationHas: value };
};
