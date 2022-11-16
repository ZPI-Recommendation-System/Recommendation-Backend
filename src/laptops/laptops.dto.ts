import { ModelEntity } from "./entity/model.entity";
import { PartialType } from "@nestjs/swagger";

export class PartialModelEntity extends PartialType(ModelEntity) {
}

export class GetLaptopsDto {
  query: string;
  items: PartialModelEntity[];
}

export class GetLaptopDto {
  uuid: string;
  query: string;
  result: PartialModelEntity;
}

export class GetLaptopsAPIDto {
  query = '';
  page = 0;
  ids = '';
}
