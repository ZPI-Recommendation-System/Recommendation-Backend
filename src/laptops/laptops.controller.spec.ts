import { TestingModule } from "@nestjs/testing";
import { LaptopsController } from "./laptops.controller";
import { LaptopsServices } from "./laptops.service";
import { CreateLaptopsTestingModule } from "../tests/sample_laptops.db.spec";

describe('LaptopsController', () => {
  let laptopController: LaptopsController;
  let module: TestingModule;
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
    module = await CreateLaptopsTestingModule([LaptopsController],[LaptopsServices])
    laptopController = await module.get(LaptopsController);
    // console.log(moduleRepository);
  });

  describe('root', () => {
    it('Controller should return 5 elements', async () => {
      expect(
        await laptopController.getAllLaptops({
          page: 0,
          limit: 5
        }).then((it) => it.items.length),
      ).toBe(5);
    });
    it('Controller should return 2 laptop with specific name', async () => {
      expect(
        await laptopController
          .getLaptops({
            ids: ['003bb070-d6d8-4c9d-a7b4-26f515c1ad4c', '003d0482-5807-4589-808e-9674490aba58'],
            query: [],
          })
          .then((it) => it.items.map((it) => it.name)),
      ).toStrictEqual([
        'Laptop Lenovo Legion 5 17ACH6 17,3 " AMD Ryzen 5 16 GB / 1512 GB czarny',
        'Laptop Lenovo Ideapad 3-15ACH Gaming 15,6 " AMD Ryzen 5 32 GB / 2000 GB czarny',
      ]);
    });
  });
});
