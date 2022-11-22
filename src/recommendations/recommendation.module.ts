import { Module } from "@nestjs/common";
import { LaptopsModule } from "../laptops/laptops.module";
import { RecommendationController } from "./recommendation.controller";
import { RecommendationService } from "./recommendation.service";
import { ScoreService } from "./scoring/score.service";

@Module({
  imports: [LaptopsModule],
  controllers: [RecommendationController],
  providers: [RecommendationService, ScoreService]
})
export class RecommendationModule {
}
