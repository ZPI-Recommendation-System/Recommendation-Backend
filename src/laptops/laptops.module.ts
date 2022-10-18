import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ModelEntity } from "./entity/model.entity";
import { ProcessorEntity } from "./entity/processor.entity";
import { ScreenEntity } from "./entity/screen.entity";
import { RamEntity } from "./entity/ram.entity";
import { StorageEntity } from "./entity/storage.entity";
import { GraphicsEntity } from "./entity/graphics.entity";
import { ConnectionEntity } from "./entity/connection.entity";
import { ControlEntity } from "./entity/control.entity";
import { CommunicationEntity } from "./entity/communication.entity";
import { MultimediaEntity } from "./entity/multimedia.entity";
import { OfferEntity } from "./entity/offer.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ModelEntity,
      ProcessorEntity,
      ScreenEntity,
      RamEntity,
      StorageEntity,
      GraphicsEntity,
      ConnectionEntity,
      ControlEntity,
      MultimediaEntity,
      CommunicationEntity,
      OfferEntity
    ])
  ]
})
export class LaptopsModule {
}
