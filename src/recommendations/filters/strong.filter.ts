import { FormDto, UsageType } from "../dto/form.dto";
import { AND } from "../../rules/predicates/relation.predicate";
import { CPU_CORES, CPU_FREQ } from "../../rules/predicates/cpu.predicate";

import { MoreThan } from "typeorm";
import { RAM_SIZE } from "../../rules/predicates/ram.predicate";
import { DRIVE_SIZE } from "../../rules/predicates/drive.predicate";
import { PRICE_LOWER } from "../../rules/predicates/various.predicate";
/*
export const UsageTypes = [
  'Aplikacje biurowe i internet',
  'Gry indie i retro',
  'Modelowanie 3D i digital art',
  'Najnowsze gry wysokobudżetowe',
];
 */
const UsageRules = {
  'Aplikacje biurowe i internet': AND([
    CPU_FREQ(MoreThan(2)),
    RAM_SIZE(MoreThan(8)),
    // CPU_CORES(MoreThan(2))
  ]),
  'Gry indie i retro': AND([
    CPU_FREQ(MoreThan(3)),
    RAM_SIZE(MoreThan(8)),
    CPU_CORES(MoreThan(2)),
  ]),
  'Modelowanie 3D i digital art': AND([
    CPU_FREQ(MoreThan(3)),
    CPU_CORES(MoreThan(3)),
    RAM_SIZE(MoreThan(16)),
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
  } else {
    targetFilters.push(PRICE_LOWER(999999));
  }
  return AND(targetFilters);
};

export const PRICE_FILTER = {};
