import { ModelBoolean } from "./base.predicate";
import { ModelEntity } from "../../laptops/entity/model.entity";

export const AND = (...models: ModelBoolean[]): ModelBoolean => {
  return (model: ModelEntity) => {
    for (let i = 0; i < models.length; i++) {
      if (!models[i](model)) {
        return false;
      }
    }
    return true;
  };
};

export const OR = (...models: ModelBoolean[]): ModelBoolean => {
  return (model: ModelEntity) => {
    for (let i = 0; i < models.length; i++) {
      if (models[i](model)) {
        return true;
      }
    }
    return false;
  };
};

export const NOT = (modelBoolean: ModelBoolean): ModelBoolean => {
  return (model: ModelEntity) => !modelBoolean(model);
};
