//PREDEFINED CPU PREDICATED
import { ModelEntity } from "../../laptops/entity/model.entity";
import { ModelBoolean, ValueBoolean } from "./base.predicate";

export const CPU_FREQ = (predicate: ValueBoolean): ModelBoolean => {
  return (value: ModelEntity) => predicate(value.processor.frequency);
};

export const CPU_CORES = (predicate: ValueBoolean): ModelBoolean => {
  return (value) => predicate(value.processor.cores);
};
