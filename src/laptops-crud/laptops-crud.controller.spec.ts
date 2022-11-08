import { Test, TestingModule } from "@nestjs/testing";
import { LaptopsCrudController } from "./laptops-crud.controller";
import { LaptopsCrudService } from "./laptops-crud.service";

describe("LaptopsCrudController", () => {
  let controller: LaptopsCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaptopsCrudController],
      providers: [LaptopsCrudService]
    }).compile();

    controller = module.get<LaptopsCrudController>(LaptopsCrudController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
