import { ModelEntity } from "./entity/model.entity";
import { PartialType } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { ArrayNotEmpty, IsNotEmpty, Max, MaxLength, Min, MinLength } from "class-validator";

export class PartialModelEntity extends PartialType(ModelEntity) {}

export class LaptopSearchDto {
  @Transform(({ value }) => value.split(','))
  query: string[];
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(200)
  search: string;
}

export class Pagination {
  @Min(1)
  @Max(50)
  limit: number = 10;

  @Min(0)
  page: number = 0;
}

export class GetLaptopsDto {
  query: string[];
  items: PartialModelEntity[];
}

export class GetLaptopDto {
  uuid: string;
  query: string;
  result: PartialModelEntity;
}

export class GetLaptopsAPIDto {
  @Transform(({ value }) => value.split(','))
  query: string[];

  @IsNotEmpty()
  @Transform(({ value }) => value.split(','))
  @ArrayNotEmpty()
  ids: string[];
}
