import { FormDto, UsageType } from "../dto/form.dto";
import { AND } from "../../rules/predicates/relation.predicate";
import { CPU_FREQ } from "../../rules/predicates/cpu.predicate";

import { MoreThan } from "typeorm";
import { RAM_SIZE } from "../../rules/predicates/ram.predicate";
import { DRIVE_SIZE } from "../../rules/predicates/drive.predicate";
import { PRICE_LOWER } from "../../rules/predicates/various.predicate";

const UsageRules = {
  'Aplikacje biurowe i internet': AND([
    CPU_FREQ(MoreThan(2.5)),
    RAM_SIZE(MoreThan(4)),
    // CPU_CORES(MoreThan(4))
  ]),
};

const getRulesFor = (usage: UsageType) => {
  return UsageRules[usage];
};

const driveRule = (minValue: number) => {
  return DRIVE_SIZE(MoreThan(minValue));
};

export const getStrongFilter = (form: Partial<FormDto>) => {
  const targetFilters = [];
  if (form.usageType) {
    targetFilters.push(getRulesFor(form.usageType));
  }
  if (form.minDiscSize) {
    targetFilters.push(driveRule(form.minDiscSize));
  }
  if (form.maxPricePLN) {
    targetFilters.push(PRICE_LOWER(form.maxPricePLN));
  }
  return AND(targetFilters);
};

export const PRICE_FILTER = {};
