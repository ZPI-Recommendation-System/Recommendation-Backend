import { Injectable } from "@nestjs/common";
import { UpdateLaptopsCrudDto } from "./dto/update-laptops-crud.dto";
import { LaptopsServices } from "../laptops/laptops.service";
import { ModelEntity } from "../laptops/entity/model.entity";

@Injectable()
export class LaptopsCrudService {
  constructor(private laptopService: LaptopsServices) {
  }

  create(createLaptopsCrudDto: ModelEntity) {
    return "This action adds a new laptopsCrud";
  }

  findAll() {
    return `This action returns all laptopsCrud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} laptopsCrud`;
  }

  update(id: number, updateLaptopsCrudDto: UpdateLaptopsCrudDto) {
    return `This action updates a #${id} laptopsCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} laptopsCrud`;
  }
}
