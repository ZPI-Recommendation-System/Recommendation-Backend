import { PartialType } from "@nestjs/mapped-types";
import { ModelEntity } from "../../db/entities/model.entity";

export class UpdateLaptopsCrudDto extends PartialType(ModelEntity) {
}
