import { TestingModule } from "@nestjs/testing";
import { CreateLaptopsTestingModule } from "../tests/sample_laptops.db.spec";
import { LaptopsServices } from "../laptops/laptops.service";
import { RecommendationController } from "./recommendation.controller";
import { RecommendationService } from "./recommendation.service";
import { ScoreService } from "./scoring/score.service";
import { SortingDto } from "../laptops/laptops.dto";
import { plainToInstance } from "class-transformer";
import { FormDto } from "./dto/form.dto";
import { validate } from "class-validator";

function getDeepFunction(arr) {
  if (arr.length === 0) return [[]];
  const [current, ...rest] = arr;
  const combinations = getDeepFunction(rest);
  return current.reduce(
    (a, string) => [...a, ...combinations.map((c) => [string, ...c])],
    [],
  );
}

function getCombinations(valuesArray: any[]) {
  const combi = [];
  let temp = [];
  const slent = Math.pow(2, valuesArray.length);

  for (let i = 0; i < slent; i++) {
    temp = [];
    for (let j = 0; j < valuesArray.length; j++) {
      if (i & Math.pow(2, j)) {
        temp.push(valuesArray[j]);
      }
    }
    if (temp.length > 0) {
      combi.push(temp);
    }
  }

  // combi.sort((a, b) => a.length - b.length);
  // console.log(combi.join('\n'));
  return combi;
}

describe('Recommendations Controller', () => {
  let module: TestingModule;
  let recommendationController: RecommendationController;

  beforeAll(async () => {
    module = await CreateLaptopsTestingModule(
      [RecommendationController],
      [RecommendationService, ScoreService, LaptopsServices],
    );
    recommendationController = module.get(RecommendationController);
  });

  describe('Recommendation Controller Tester', () => {
    it('Should have errors', async () => {
      const p = plainToInstance(FormDto, {
        ramInUnits: undefined,
        usageType: undefined, //Usage type
        maxPricePLN: undefined,
        preferredScreenSizes: undefined,
        screenPreferences: undefined,
        batteryRunTime: undefined,
        minDiscSize: undefined,
        internetPreferences: undefined,
        dataPreferences: undefined,
      });
      expect((await validate(p)).length).toBeGreaterThan(0);
    });

    it('Should return number of laptops in range', async () => {
      expect(
        await recommendationController.getLaptopsUsageCount({
          usageType: 'Aplikacje biurowe i internet',
          maxPrice: 5000,
        }),
      ).toStrictEqual({
        all: 16,
        price: 14
      });
      expect(
        await recommendationController.getLaptopsUsageCount({
          usageType: 'Najnowsze gry wysokobudżetowe',
          maxPrice: 10000,
        }),
      ).toStrictEqual({
        all: 20,
        price: 20
      });
    });

    it('Should return recommendations', async () => {
      const form = {
        minDiscSize: 1000,
        ramInUnits: 2,
        usageType: 'Aplikacje biurowe i internet',
        maxPricePLN: 10000,
        dataPreferences: {
          diskDrive: false,
          sdCardReader: false,
        },
        preferredScreenSizes: ['15', '16', '>17'],
        batteryRunTime: 10,
        internetPreferences: {
          lanPort: false,
          simCard: false,
        },
        screenPreferences: {
          otherVideoConnectors: true,
          touchScreen: false,
          HDMI: false,
        }
      }

      const error = await validate(form)
      expect(error.length).toBe(0)
      const p = await recommendationController.getRecommendations(
        10,
        form,
        new SortingDto(),
      );
      expect(p.result.length).toBe(2)
      expect(p.result[0].items.length).toBe(0)
      expect(p.result[0].deletedWeakFilters).toStrictEqual([])
      expect(p.result[1].deletedWeakFilters.length).toBe(1)
      expect(p.result[1].items.length).toBe(10)

    });

    // describe('Mass test of all allowed combinations', async () => {
    //   const ramUnits = Array.from({ length: 4 }, (x, i) => i*i);
    //   const usageType = UsageTypes;
    //   const maxPricePLN = Array.from({ length: 10 }, (x, i) => i * 1000);
    //   const preferredScreenSizes = getCombinations(['<10', '15', '16', '>17']);
    //   const minDiskSize = Array.from({ length: 10 }, (x, i) => i * 10000);
    //   const screenPreferences: ScreenPreferences[] = [
    //     {
    //       HDMI: true,
    //       touchScreen: true,
    //       otherVideoConnectors: true,
    //     },
    //     {
    //       HDMI: true,
    //       touchScreen: false,
    //       otherVideoConnectors: false,
    //     },
    //     {
    //       HDMI: true,
    //       touchScreen: false,
    //       otherVideoConnectors: true,
    //     },
    //     {
    //       HDMI: true,
    //       touchScreen: true,
    //       otherVideoConnectors: false,
    //     },
    //     {
    //       HDMI: false,
    //       touchScreen: true,
    //       otherVideoConnectors: false,
    //     },
    //     {
    //       HDMI: false,
    //       touchScreen: true,
    //       otherVideoConnectors: true,
    //     },
    //     {
    //       HDMI: false,
    //       touchScreen: false,
    //       otherVideoConnectors: true,
    //     },
    //     {
    //       HDMI: false,
    //       touchScreen: false,
    //       otherVideoConnectors: false,
    //     },
    //   ];
    //   const internetPreferences: InternetPreferences[] = [
    //     {
    //       simCard: true,
    //       lanPort: true,
    //     },
    //     {
    //       simCard: false,
    //       lanPort: true,
    //     },
    //     {
    //       simCard: true,
    //       lanPort: false,
    //     },
    //     {
    //       simCard: false,
    //       lanPort: false,
    //     },
    //   ];
    //   const dataPreferences: DataPreferences[] = [
    //     { diskDrive: true, sdCardReader: false },
    //     { diskDrive: true, sdCardReader: true },
    //     { diskDrive: false, sdCardReader: false },
    //     { diskDrive: false, sdCardReader: true },
    //   ];
    //   const batteryRunTime = [...Array(8).keys()];
    //
    //   const generator = getDeepFunction([
    //     ramUnits,
    //     usageType,
    //     maxPricePLN,
    //     preferredScreenSizes,
    //     minDiskSize,
    //     screenPreferences,
    //     internetPreferences,
    //     dataPreferences,
    //     batteryRunTime,
    //   ]);
    //
    //   for (const key in generator) {
    //     const values = generator[key];
    //     const form: FormDto = {
    //       ramInUnits: values[0],
    //       usageType: values[1],
    //       maxPricePLN: values[2],
    //       preferredScreenSizes: values[3],
    //       minDiscSize: values[4],
    //       screenPreferences: values[5],
    //       internetPreferences: values[6],
    //       dataPreferences: values[7],
    //       batteryRunTime: values[8],
    //     };
    //     console.log('Form ' + key);
    //     expect((await validate(form)).length).toBe(0);
    //   }
    // });
  });
});
