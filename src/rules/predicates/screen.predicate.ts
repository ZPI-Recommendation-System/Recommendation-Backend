import { PredicateWithCustom } from "./base.predicate";
import { ScreenSize } from "../../recommendations/dto/form.dto";

export const HAS_TOUCHSCREEN = (): PredicateWithCustom => {
  return { screen: { touchScreen: true } };
};

export const SCREEN_SIZE = (values: ScreenSize[]): PredicateWithCustom => {
  return { screenSizes: values };
};
