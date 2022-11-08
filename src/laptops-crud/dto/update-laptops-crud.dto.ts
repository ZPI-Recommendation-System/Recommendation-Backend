import { PartialType } from "@nestjs/mapped-types";
import { ModelEntity } from "../../laptops/entity/model.entity";

export class UpdateLaptopsCrudDto extends PartialType(ModelEntity) {
}
