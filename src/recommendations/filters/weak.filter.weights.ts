import { WeakFilter } from "./weak.filter";
import {
  COMMUNICATION_HAS,
  CONNECTION_HAS,
  HAS_ANY_DRIVE,
  MULTIMEDIA_HAS
} from "../../rules/predicates/various.predicate";
import { HAS_TOUCHSCREEN } from "../../rules/predicates/screen.predicate";
import { PredicateWithCustom } from "../../rules/predicates/base.predicate";

export const weakFilterWeights = {
  'Czas pracy na bateri': 10,
  has_connection_weak: 2,
  has_connection_strong: 5,
  has_connection_very_weak: 1,
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
  ),
  has_sim_card: ConstructWeakFilter(
    "Ma slot na kartę sim",
    weakFilterWeights.has_connection_very_weak,
    CONNECTION_HAS("slot na kartę SIM")
  ),
  has_sd_card_reader: ConstructWeakFilter(
    "Ma czytnik kart SD",
    weakFilterWeights.has_connection_weak,
    MULTIMEDIA_HAS("czytnik kart pamięci")
  ),
  has_disk_drive: ConstructWeakFilter(
    "Ma napęd płyt",
    weakFilterWeights.has_connection_strong,
    HAS_ANY_DRIVE()
  )
};
