import { FormDto } from "../dto/form.dto";
import { ModelEntity } from "../../laptops/entity/model.entity";

export interface ScoreWithWeight {
  weight: number;
  score: number;
}

export type ScoreFunction = (
  form: FormDto,
  model: ModelEntity,
  price: number
) => ScoreWithWeight;

const ScoreCPU: ScoreFunction = (
  form: FormDto,
  model: ModelEntity,
  price
) => {
  return { weight: 10, score: 2000 };
};

const ScoreGPU: ScoreFunction = (
  form: FormDto,
  model: ModelEntity,
  price
) => {
  return { weight: 20, score: 1000 };
};


export const ScorersList: ScoreFunction[] = [ScoreCPU, ScoreGPU];
