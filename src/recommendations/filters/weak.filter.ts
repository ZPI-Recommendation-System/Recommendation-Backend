import { Predicate, PredicateWithCustom } from "../../rules/predicates/base.predicate";
import { FormDto } from "../dto/form.dto";
import { preGeneratedFilters, weakFilterWeights } from "./weak.filter.weights";
import { SCREEN_SIZE } from "../../rules/predicates/screen.predicate";
import { BATTERY_RUN_TIME_MORE } from "../../rules/predicates/various.predicate";

// import { GT, GTE } from '../../rules/predicates/value.predicate';

export class WeakFilter {
  ruleName: string;
  weight: number;
  filterPredicate: Predicate;
}

const WeakFilterCreator = (
  name: string,
  predicate: PredicateWithCustom,
): WeakFilter => {
  if (name in weakFilterWeights) {
    return {
      ruleName: name,
      weight: weakFilterWeights[name],
      filterPredicate: predicate,
    };
  }
  throw new Error('Name not found' + name);
};

export const getInternalWeakFilters = (form: FormDto): WeakFilter[] => {
  const filters: WeakFilter[] = [];

  if (form.screenPreferences) {
    if (form.screenPreferences.touchScreen) {
      filters.push(preGeneratedFilters.has_touchscreen);
    }
    if (form.screenPreferences.HDMI) {
      filters.push(preGeneratedFilters.has_hdmi);
    }
  }
  if (form.internetPreferences) {
    if (form.internetPreferences.lanPort) {
      filters.push(preGeneratedFilters.has_lan_port);
    }
    if (form.internetPreferences.simCard) {
      filters.push(preGeneratedFilters.has_sim_card);
    }
  }
  if (form.dataPreferences) {
    if (form.dataPreferences.sdCardReader) {
      filters.push(preGeneratedFilters.has_sd_card_reader);
    }
    if (form.dataPreferences.diskDrive) {
      filters.push(preGeneratedFilters.has_disk_drive);
    }
  }
  if (form.batteryRunTime) {
    filters.push(
      WeakFilterCreator(
        'Czas pracy na bateri',
        BATTERY_RUN_TIME_MORE(form.batteryRunTime),
      ),
    );
  }
  if (form.preferredScreenSizes && form.preferredScreenSizes.length > 0) {
    // const filtered = form.preferredScreenSizes.filter((it) => !isNaN(+it));

    filters.push(
      WeakFilterCreator(
        'Wielkość ekranu',
        SCREEN_SIZE(form.preferredScreenSizes),
      ),
    );
  }
  return filters;
};
