import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ModelEntity } from "./entity/model.entity";
import { ProcessorEntity } from "./entity/processor.entity";
import { ScreenEntity } from "./entity/screen.entity";
import { GraphicsEntity } from "./entity/graphics.entity";
import { ConnectionEntity } from "./entity/connection.entity";
import { ControlEntity } from "./entity/control.entity";
import { CommunicationEntity } from "./entity/communication.entity";
import { MultimediaEntity } from "./entity/multimedia.entity";
import { BenchmarkEntity } from "./entity/benchmark.entity";
import { LaptopsServices } from "./laptops.service";
import { LaptopsController } from "./laptops.controller";
import { ModelImgEntity } from "./entity/model-img.entity";
import { DriveTypeEntity } from "./entity/drive-type.entity";
import { UsersModule } from "../users/user.module";

@Module({
  imports: [
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
      DriveTypeEntity
    ]),
    UsersModule
  ],
  providers: [LaptopsServices],
  controllers: [LaptopsController],
  exports: [LaptopsServices]
})
export class LaptopsModule {
}
