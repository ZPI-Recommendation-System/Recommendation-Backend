import { TestingModule } from "@nestjs/testing";
import { CreateLaptopsTestingModule } from "../tests/sample_laptops.db.spec";
import { LaptopsServices } from "../laptops/laptops.service";
import { RecommendationController } from "./recommendation.controller";
import { RecommendationService } from "./recommendation.service";
import { ScoreService } from "./scoring/score.service";

describe('Recommendations Controller', () => {
  let module: TestingModule;
  let recommendationController: RecommendationController;
  // let moduleRepository: Repository<ModelEntity>;
  // const generateLaptops = (modelRepo: Repository<ModelEntity>) => {
  //   const model: ModelEntity = {
  //     id: randomStringGenerator(),
  //     driveStorage: 1000,
  //     driveType: "ssd",
  //     batteryTime: 3,
  //   };
  //
  //
  // }

  beforeAll(async () => {
    module = await CreateLaptopsTestingModule(
      [RecommendationController],
      [RecommendationService, ScoreService, LaptopsServices],
    );
    recommendationController = module.get(RecommendationController);

    // console.log(moduleRepository);
  });

  describe('Recommendation Controller Tester', () => {
    it('Should not crash', async () => [
      expect(
        await recommendationController.getRecommendations(0, {
          ramInUnits: undefined,
          usageType: undefined, //Usage type
          maxPricePLN: undefined,
          preferredScreenSizes: undefined,
          screenPreferences: undefined,
          batteryRunTime: undefined,
          minDiscSize: undefined,
          internetPreferences: undefined,
          dataPreferences: undefined,
        }),
      ).toHaveReturned(),
    ]);

    describe('Mass test of all allowed combinations', () => {
      const ramUnits = [0, 1, 2, 3, 4, 5];
      const usageType = [
        'Aplikacje biurowe i internet',
        'Gry',
        'Renderowanie Filmów',
      ];
      const maxPricePLN = [0, 500, 1000, 1500, 2000, 2500, 3000];
      const preferredScreenSizes = [
        [undefined],
        ['<10'],
        ['10'],
        ['11'],
        ['11.5'],
        ['13'],
        ['15'],
        ['16'],
        ['17'],
        ['>17'],
      ];
      const screenPreferences = {
        hdmi: [true, false],
      };
    });
  });
});
