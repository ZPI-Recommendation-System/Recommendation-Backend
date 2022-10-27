import { AND } from "./predicates/relation.predicate";
import { CPU_FREQ } from "./predicates/cpu.predicate";
import { GTE } from "./predicates/value.predicate";
import { RAM_SIZE } from "./predicates/ram.predicate";

export const OFFICE_USE = AND(CPU_FREQ(GTE(3.0)), RAM_SIZE(GTE(8)));
