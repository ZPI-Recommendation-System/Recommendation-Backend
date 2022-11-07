import { FormDto, UsageType } from "../dto/form.dto";
import { AND } from "../../rules/predicates/relation.predicate";
import { CPU_CORES, CPU_FREQ } from "../../rules/predicates/cpu.predicate";

import { MoreThan } from "typeorm";
import { RAM_SIZE } from "../../rules/predicates/ram.predicate";
import { DRIVE_SIZE } from "../../rules/predicates/drive.predicate";

const UsageRules = {
  "Aplikacje biurowe i internet": AND([
    CPU_FREQ(MoreThan(2.5)),
    RAM_SIZE(MoreThan(4)),
    CPU_CORES(MoreThan(2))
  ])
};

const getRulesFor = (usage: UsageType) => {
  return UsageRules[usage];
};

const driveRule = (minValue: number) => {
  return DRIVE_SIZE(MoreThan(minValue));
};

export const getStrongFilter = (form: FormDto) => {
  return AND([getRulesFor(form.usageType), driveRule(form.minDiscSize)]);
};
