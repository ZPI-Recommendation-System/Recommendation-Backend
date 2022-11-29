import { UsageTypes } from "./form.dto";
import { IsIn, IsNotEmpty, Min } from "class-validator";

export class RecommendationDTOBack {
  status: 'ok' | 'error';
  length: number;
  models: RecommendationDto[];
  weakFilters: RecommendationDto[];
}

export class RecommendationDto {
  modelId: string;

  score: number;

  price: number;
}

export class CountLaptopsDto {
  @IsIn(UsageTypes)
  @IsNotEmpty()
  usageType: string;

  @Min(0)
  maxPrice: number;
}
