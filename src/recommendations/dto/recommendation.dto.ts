export class RecommendationDTOBack {
  status: "ok" | "error";
  models: RecommendationDto[];
  weak_filters: RecommendationDto[];
}

export class RecommendationDto {
  modelId: string;

  score: number;

  price: number;
}
