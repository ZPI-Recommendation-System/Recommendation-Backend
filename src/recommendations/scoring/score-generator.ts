import { FormDto } from "../dto/form.dto";
import { ModelEntity } from "../../db/entities/model.entity";

const HIGH_SCORE = 100;
const MEDIUM_HIGH_SCORE = 75;
const MEDIUM_SCORE = 50;
const LOW_SCORE = 25;
const NO_SCORE = 0;
const LOW_PUNISHMENT = -50;
const HIGH_PUNISHMENT = -100;

const HIGH_IMPORTANCE = 100;
const MEDIUM_HIGH_IMPORTANCE = 75;
const MEDIUM_IMPORTANCE = 50;
const LOW_IMPORTANCE = 25;
const NO_IMPORTANCE = 0;

export interface ScoreWithWeight {
  weight: number;
  score: number;
}

export type ScoreFunction = (
  form: FormDto,
  model: ModelEntity,
) => ScoreWithWeight;

const ScoreScreenSize: ScoreFunction = (form: FormDto, model: ModelEntity) => {
  if (!form.preferredScreenSizes || form.preferredScreenSizes.length === 0) {
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

const GenerateGenericScore = (formParam: boolean, modelParam: boolean) => {
  if (formParam) {
    if (modelParam) {
      return { weight: HIGH_SCORE, score: HIGH_SCORE };
    } else {
      return { weight: HIGH_SCORE, score: LOW_PUNISHMENT };
    }
  } else {
    if (modelParam) {
      return { weight: LOW_SCORE, score: LOW_SCORE };
    } else {
      return { weight: LOW_SCORE, score: NO_IMPORTANCE };
    }
  }
};

const ScoreCPU: ScoreFunction = (form: FormDto, model: ModelEntity) => {
  const price = 100;
  return {
    weight: HIGH_IMPORTANCE,
    score: model.processor.benchmark.benchmark,
  };
};

const ScoreGPU: ScoreFunction = (form: FormDto, model: ModelEntity) => {
  const price = 100; //TODO
  //TODO: GPU HAVE DIFFEREENT WEIGHTS DEPENDS ON USAGE
  return {
    weight: MEDIUM_IMPORTANCE,
    score: model.graphics.benchmark?.benchmark,
  };
};

const ScoreRAM: ScoreFunction = (form: FormDto, model: ModelEntity) => {
  const price = 100; //TODO
  return {
    weight: MEDIUM_IMPORTANCE,
    score: model.ramAmount,
  };
};

const ScoreBatteryRunTime: ScoreFunction = (
  form: FormDto,
  model: ModelEntity,
) => {
  return {
    weight: MEDIUM_IMPORTANCE,
    score: model.batteryTime,
  };
};

const ScoreDiskType: ScoreFunction = (forms: FormDto, model: ModelEntity) => {
  if (model.driveType.toLowerCase() == 'SSD') {
    return {
      weight: MEDIUM_IMPORTANCE,
      score: model.driveStorage/100,
    };
  } else {
    return {
      weight: MEDIUM_IMPORTANCE,
      score: model.driveStorage/1000,
    };
  }
};

export const ScorersList: ScoreFunction[] = [
  ScoreCPU,
  ScoreGPU,
  ScoreScreenSize,
  ScoreRAM,
  ScoreDiskType,
  ScoreBatteryRunTime,

];

//TODO: CZY JA POWINIENEM OCENIAĆ FILTRY SŁABE? TAK NAPRAWDE ZOSTAJA GENERIC CHARACTERISTICS TERAZ
