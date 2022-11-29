import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaptopsController } from "./laptops.controller";
import { LaptopsServices } from "./laptops.service";
import { ModelEntity } from "./entity/model.entity";
import { ProcessorEntity } from "./entity/processor.entity";
import { ScreenEntity } from "./entity/screen.entity";
import { GraphicsEntity } from "./entity/graphics.entity";
import { ConnectionEntity } from "./entity/connection.entity";
import { ControlEntity } from "./entity/control.entity";
import { MultimediaEntity } from "./entity/multimedia.entity";
import { CommunicationEntity } from "./entity/communication.entity";
import { BenchmarkEntity } from "./entity/benchmark.entity";
import { ModelImgEntity } from "./entity/model-img.entity";
import { DriveTypeEntity } from "./entity/drive-type.entity";
import { Repository } from "typeorm";

describe('LaptopsController', () => {
  let laptopController: LaptopsController;
  let module: TestingModule;
  let moduleRepository: Repository<ModelEntity>;
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
    module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          dropSchema: true,
          synchronize: true,
          entities: [
            ModelEntity,
            ProcessorEntity,
            ScreenEntity,
            GraphicsEntity,
            ConnectionEntity,
            ControlEntity,
            MultimediaEntity,
            CommunicationEntity,
            BenchmarkEntity,
            ModelImgEntity,
            DriveTypeEntity,
          ],
        }),
        TypeOrmModule.forFeature([
          ModelEntity,
          ProcessorEntity,
          ScreenEntity,
          GraphicsEntity,
          ConnectionEntity,
          ControlEntity,
          MultimediaEntity,
          CommunicationEntity,
          BenchmarkEntity,
          ModelImgEntity,
          DriveTypeEntity,
        ]),
      ],
      providers: [LaptopsServices],
      controllers: [LaptopsController],
    }).compile();
    laptopController = await module.get(LaptopsController);
    // console.log(moduleRepository);
  });

  describe('root', () => {
    it('Should have 20 elements in sample list', async () => {
      expect(await moduleRepository.count()).toBe(20);
      // expect(appController.getHello()).toBe('Hello World!');
    });
    it('Controller should return 5 elements', async () => {
      expect(
        await laptopController.getAllLaptops(5).then((it) => it.items.length),
      ).toBe(5);
    });
    it('Controller should return 2 laptop with specific name', async () => {
      expect(
        await laptopController
          .getLaptops({
            ids: '003bb070-d6d8-4c9d-a7b4-26f515c1ad4c,003d0482-5807-4589-808e-9674490aba58',
            page: 0,
            query: '',
          })
          .then((it) => it.items.map((it) => it.name)),
      ).toStrictEqual([
        'Laptop Lenovo Legion 5 17ACH6 17,3 " AMD Ryzen 5 16 GB / 1512 GB czarny',
        'Laptop Lenovo Ideapad 3-15ACH Gaming 15,6 " AMD Ryzen 5 32 GB / 2000 GB czarny',
      ]);
    });
  });
});
