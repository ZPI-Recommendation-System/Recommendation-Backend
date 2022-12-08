import { Injectable } from "@nestjs/common";
import { UpdateLaptopsCrudDto } from "./dto/update-laptops-crud.dto";
import { LaptopsServices } from "../laptops/laptops.service";
import { ModelEntity } from "../db/entities/model.entity";

@Injectable()
export class LaptopsCrudService {
  constructor(private laptopService: LaptopsServices) {
  }

  create(createLaptopsCrudDto: ModelEntity) {
    return this.laptopService.addNewLaptop(createLaptopsCrudDto);
  }

  findAll(limit: number, page: number) {
    return this.laptopService.getListLaptops(limit, page, undefined, ["all"]);
  }

  findOne(id: string) {
    return this.laptopService.getLaptop(id, ["all"]);
  }

  update(id: string, updateLaptopsCrudDto: UpdateLaptopsCrudDto) {
    return this.laptopService.updateLaptop(id, updateLaptopsCrudDto);
  }

  remove(id: string) {
    return this.laptopService.removeLaptop(id);
  }
}
