import { ModelEntity } from "../../laptops/entity/model.entity";

export type ModelBoolean = (model: ModelEntity) => boolean;

export type ValueBoolean = (val: number) => boolean;
