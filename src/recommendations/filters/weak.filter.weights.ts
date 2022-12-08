import { WeakFilter } from "./weak.filter";
import { COMMUNICATION_HAS, CONNECTION_HAS } from "../../rules/predicates/various.predicate";
import { HAS_TOUCHSCREEN } from "../../rules/predicates/screen.predicate";
import { PredicateWithCustom } from "../../rules/predicates/base.predicate";

export const weakFilterWeights = {
  'Czas pracy na bateri': 10,
  has_connection_weak: 2,
  has_connection_strong: 5,
  screen_touchscreen: 1,
  'Wielkość ekranu': 20
};

export const ConstructWeakFilter = (
  ruleName: string,
  weight: number,
  predicate: PredicateWithCustom
): WeakFilter => {
  return {
    ruleName: ruleName,
    weight: weight,
    filterPredicate: predicate
  };
};

export const preGeneratedFilters = {
  has_hdmi: ConstructWeakFilter(
    "Ma Port HDMI",
    weakFilterWeights.has_connection_strong,
    CONNECTION_HAS("HDMI", "Micro HDMI")
  ),
  has_touchscreen: ConstructWeakFilter(
    "Ma ekran dotykowy",
    weakFilterWeights.screen_touchscreen,
    HAS_TOUCHSCREEN()
  ),
  has_lan_port: ConstructWeakFilter(
    "Ma port LAN",
    weakFilterWeights.has_connection_weak,
    COMMUNICATION_HAS("LAN 10/100 Mbps", "LAN 10/100/1000 Mbps")
  )
};
