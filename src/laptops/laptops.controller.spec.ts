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
        ])
      ],
      providers: [LaptopsServices],
    }).compile();

    const moduleRepository: Repository<ModelEntity> = await module.get("ModelEntityRepository")

    console.log(moduleRepository);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
