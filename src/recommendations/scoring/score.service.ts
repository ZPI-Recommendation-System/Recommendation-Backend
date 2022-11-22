import { ScorersList } from "./score-generator";
import { Injectable } from "@nestjs/common";
import { ModelEntity } from "../../laptops/entity/model.entity";
import { LaptopsServices } from "../../laptops/laptops.service";
import { FormDto } from "../dto/form.dto";

export interface ScoredModel {
  price: number;
  model: ModelEntity;
  score: number;
}

@Injectable()
export class ScoreService {
  constructor(private laptopsService: LaptopsServices) {
  }

  async getOfferPrice(model: ModelEntity) {
    return await this.laptopsService.findPrice(model);
  }

  async scoreModel(form: FormDto, model: ModelEntity): Promise<ScoredModel> {
    const price = await this.getOfferPrice(model);
    const scores = ScorersList.map((it) => it(form, model));
    const score = scores.reduce<number>(
      (prev, b) => prev + b.weight * b.score,
      0
    );
    return {
      model: model,
      score: score,
      price: price
    };
  }

  async generateLaptopScores(
    form: FormDto,
    models: ModelEntity[]
  ): Promise<ScoredModel[]> {
    const scoredModels = [];
    for(let model of models){
      const value = await this.scoreModel(form, model);
      scoredModels.push(value)
    }
    return scoredModels;
  }
}
