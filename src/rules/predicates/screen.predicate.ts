import { PredicateWithCustom } from "./base.predicate";

export const HAS_TOUCHSCREEN = (): PredicateWithCustom => {
  return { screen: { touchScreen: true } };
};

export const SCREEN_SIZE = (values: number[]): PredicateWithCustom => {
  return { screenSizes: values };
};
