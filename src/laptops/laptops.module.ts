import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ModelEntity } from "../db/entities/model.entity";
import { ProcessorEntity } from "../db/entities/processor.entity";
import { ScreenEntity } from "../db/entities/screen.entity";
import { GraphicsEntity } from "../db/entities/graphics.entity";
import { ConnectionEntity } from "../db/entities/connection.entity";
import { ControlEntity } from "../db/entities/control.entity";
import { CommunicationEntity } from "../db/entities/communication.entity";
import { MultimediaEntity } from "../db/entities/multimedia.entity";
import { BenchmarkEntity } from "../db/entities/benchmark.entity";
import { LaptopsServices } from "./laptops.service";
import { LaptopsController } from "./laptops.controller";
import { ModelImgEntity } from "../db/entities/model-img.entity";
import { DriveTypeEntity } from "../db/entities/drive-type.entity";
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
