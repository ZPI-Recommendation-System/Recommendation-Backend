import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ModelEntity } from "../db/entities/model.entity";
import { Repository } from "typeorm";

@Injectable()
export class LaptopDB {
  constructor(
    @InjectRepository(ModelEntity)
    private modelsRepository: Repository<ModelEntity>
  ) {
  }

  findLaptop(id: string): Promise<ModelEntity> {
    return this.modelsRepository.findOneBy({ id: id });
  }

  putLaptop(entity: ModelEntity) {
    return this.modelsRepository.save(entity);
  }
}
