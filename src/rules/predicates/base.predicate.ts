import { ModelEntity } from "../../db/entities/model.entity";
import { FindOptionsWhere } from "typeorm";
import { FindOperator } from "typeorm/find-options/FindOperator";

export type Predicate = FindOptionsWhere<ModelEntity>;

export type PredicateWithCustom = FindOptionsWhere<ModelEntity> | object;

export type ValueBoolean<T> = (val: T) => FindOperator<T>;
