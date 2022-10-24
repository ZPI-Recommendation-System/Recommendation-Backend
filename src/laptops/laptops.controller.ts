import { Controller, Get, Param } from "@nestjs/common";

@Controller("laptops")
export class LaptopsController {


  @Get(":id")
  getLaptop(@Param("id") id: string) {
  }

  @Get("test")
  test() {
  }
}
