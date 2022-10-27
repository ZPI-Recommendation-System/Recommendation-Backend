import { ModelBoolean, ValueBoolean } from "./base.predicate";
import { ModelEntity } from "../../laptops/entity/model.entity";

export const DRIVE_SIZE = (predicate: ValueBoolean): ModelBoolean => {
  return (value: ModelEntity) => predicate(value.driveStorage);
};
