export class RecommendationDTOBack {
  status: "ok" | "error";
  length: number;
  models: RecommendationDto[];
  weakFilters: RecommendationDto[];
}

export class RecommendationDto {
  modelId: string;

  score: number;

  price: number;
}
