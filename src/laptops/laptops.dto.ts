import { ModelEntity } from "../db/entities/model.entity";
import { PartialType } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { ArrayNotEmpty, IsIn, IsNotEmpty, IsNumber, MaxLength } from "class-validator";

export class PartialModelEntity extends PartialType(ModelEntity) {}

const SortBy = ['alphabetic', 'price', 'score', 'popularity'];
export type SortByType = typeof SortBy[number];

export class SortingDto {
  @IsIn(SortBy)
  sortType: SortByType = 'alphabetic';

  @IsIn(['ASC', 'DESC'])
  direction: 'ASC' | 'DESC' = 'ASC';
}

export class LaptopSearchDto {
  @Transform(({ value }) => value.split(','))
  query: string[];
  @MaxLength(200)
  search: string;
}

export class Pagination {
  @Transform((it) => {
    const number = Number(it.value);
    if (isNaN(number)) return 10;
    else if (number > 50) return 50;
    else if (number < 1) return 1;
    return number;
  })
  @IsNumber()
  limit: number;

  @Transform((it) => {
    const number = Number(it.value);
    if (isNaN(number)) {
      return 0;
    } else if (number < 0) {
      return 0;
    }
    return number;
  })
  @IsNumber()
  page = 0;
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
