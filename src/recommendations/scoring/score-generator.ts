import { FormDto } from "../dto/form.dto";
import { ModelEntity } from "../../laptops/entity/model.entity";

const HIGH_SCORE = 100;
const MEDIUM_HIGH_SCORE = 75;
const MEDIUM_SCORE = 50;
const MEDIUM_LOW_SCORE = 25;
const NO_SCORE = 0;

const HIGH_IMPORTANCE = 100;
const MEDIUM_HIGH_IMPORTANCE = 75;
const MEDIUM_IMPORTANCE = 50;
const MEDIUM_LOW_IMPORTANCE = 25;
const NO_IMPORTANCE = 0;

export interface ScoreWithWeight {
  weight: number;
  score: number;
}

export type ScoreFunction = (
  form: FormDto,
  model: ModelEntity,
  price: number
) => ScoreWithWeight;

const ScoreScreenSize: ScoreFunction = (
  form: FormDto,
  model: ModelEntity,
  price
) => {
  if (form.preferredScreenSizes.length === 0) {
    //TODO: Should we prefer other parameter? For example based on usage if screen should be certain size?
    return { weight: NO_IMPORTANCE, score: NO_SCORE };
  } else {
    //Podał, czyli ważne
    const numbers = form.preferredScreenSizes.map((it) => Number(it));
    if (numbers.includes(model.screen.diagonalScreenInches)) {
      return { weight: MEDIUM_HIGH_IMPORTANCE, score: HIGH_SCORE };
    } else {
      //TODO: JAK BLISKO PRZEKĄTNA JEST WYBORU USERA?
      return { weight: MEDIUM_HIGH_IMPORTANCE, score: NO_SCORE };
    }
  }
};

const ScoreGenericParameter = (form: FormDto, model: ModelEntity, price) => {

};

const ScoreCPU: ScoreFunction = (form: FormDto, model: ModelEntity, price) => {
  return { weight: 10, score: 2000 };
};

const ScoreGPU: ScoreFunction = (form: FormDto, model: ModelEntity, price) => {
  return { weight: 20, score: 1000 };
};

export const ScorersList: ScoreFunction[] = [ScoreCPU, ScoreGPU];
