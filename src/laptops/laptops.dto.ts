import { ModelEntity } from "./entity/model.entity";
import { PartialType } from "@nestjs/swagger";

export class PartialModelEntity extends PartialType(ModelEntity) {
}

export class GetLaptopsDto {
  limit: number;
  query: string;
  filter: PartialModelEntity;
  items: PartialModelEntity[];
}

export class GetLaptopDto {
  uuid: string;
  query: string;
  result: PartialModelEntity;
}
