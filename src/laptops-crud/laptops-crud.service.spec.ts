import { Test, TestingModule } from "@nestjs/testing";
import { LaptopsCrudService } from "./laptops-crud.service";

describe("LaptopsCrudService", () => {
  let service: LaptopsCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaptopsCrudService]
    }).compile();

    service = module.get<LaptopsCrudService>(LaptopsCrudService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
