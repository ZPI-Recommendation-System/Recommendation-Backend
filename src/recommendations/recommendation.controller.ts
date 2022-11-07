import { Body, Controller, Post } from "@nestjs/common";
import { FormDto } from "./dto/form.dto";
import { RecommendationService } from "./recommendation.service";
import { RecommendationDTOBack } from "./dto/recommendation.dto";

@Controller("recommendations")
export class RecommendationController {
  constructor(private recommendationService: RecommendationService) {
  }

  @Post()
  async getRecommendations(
    @Body() form: FormDto
  ): Promise<RecommendationDTOBack> {
    console.log(form);
    return { status: "ok", models: [], weak_filters: [] };
  }
}
