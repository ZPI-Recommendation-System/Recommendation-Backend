import { Module } from "@nestjs/common";
import { LaptopsCrudService } from "./laptops-crud.service";
import { LaptopsCrudController } from "./laptops-crud.controller";
import { LaptopsModule } from "../laptops/laptops.module";
import { UsersModule } from "../users/user.module";

@Module({
  imports: [LaptopsModule, UsersModule],
  controllers: [LaptopsCrudController],
  providers: [LaptopsCrudService]
})
export class LaptopsCrudModule {
}
