import { ScorersList } from "./score-generator";
import { Injectable } from "@nestjs/common";
import { ModelEntity } from "../../laptops/entity/model.entity";
import { FormDto } from "../dto/form.dto";

export interface ScoredModel {
  price: number;
  model: ModelEntity;
  score: number;
}

@Injectable()
export class ScoreService {
  scoreModel(form: FormDto, model: ModelEntity): ScoredModel {
    const price = model.price;
    const scores = ScorersList.map((it) => it(form, model));
    const score = scores.reduce<number>(
      (prev, b) => prev + b.weight * b.score,
      0,
    );
    return {
      model: model,
      score: score,
      price: price,
    };
  }

  async generateLaptopScores(
    form: FormDto,
    models: ModelEntity[],
  ): Promise<ScoredModel[]> {
    const scoredModels = [];
    for (const model of models) {
      const value = await this.scoreModel(form, model);
      scoredModels.push(value);
    }
    return scoredModels;
  }
}
