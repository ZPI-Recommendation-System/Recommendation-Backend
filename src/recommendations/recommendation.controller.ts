import { Body, Controller, Post, Query } from "@nestjs/common";
import { FormDto } from "./dto/form.dto";
import { RecommendationService } from "./recommendation.service";
import { RecommendationDTOBack } from "./dto/recommendation.dto";

@Controller("recommendations")
export class RecommendationController {
  constructor(private recommendationService: RecommendationService) {
  }

  @Post()
  async getRecommendations(
    @Query("limit") limit = 0,
    @Body() form: FormDto
  ): Promise<RecommendationDTOBack | any> {
    return this.recommendationService
      .processRecommendation(form, limit)
      .then((it) => {
        return {
          status: "ok",
          length: it.models.length,
          items: it.models,
          weakFilters: it.weakFilters,
          comboFilters: it["comboFilters"]
        };
      });

    // return { status: 'ok', models: [], weak_filters: [] };
  }
}
