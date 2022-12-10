import { Body, Controller, Get, ParseIntPipe, Post, Query } from "@nestjs/common";
import { FormDto } from "./dto/form.dto";
import { RecommendationService } from "./recommendation.service";
import { CountLaptopsDto, RecommendationDTOBack } from "./dto/recommendation.dto";
import { SortingDto } from "../laptops/laptops.dto";

@Controller('recommendations')
export class RecommendationController {
  constructor(private recommendationService: RecommendationService) {}

  @Post()
  async getRecommendations(
    @Query('limit', ParseIntPipe) limit = 0,
    @Body() form: FormDto,
    @Query() sort: SortingDto
  ): Promise<RecommendationDTOBack | any> {
    return this.recommendationService
      .processRecommendation(form, limit, sort)
      .then((it) => {
        return {
          status: 'ok',
          length: it.length,
          result: it
        };
      });

    // return { status: 'ok', models: [], weak_filters: [] };
  }

  @Get('usagecount')
  getLaptopsUsageCount(@Query() count: CountLaptopsDto) {
    return this.recommendationService.countLaptopsWithMaxPrice(
      count.usageType,
      count.maxPrice,
    );
  }
}
