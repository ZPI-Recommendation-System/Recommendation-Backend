import { BadRequestException, Controller, Get, Param, Query } from "@nestjs/common";
import { LaptopsServices } from "./laptops.service";

@Controller("laptops")
export class LaptopsController {
  constructor(private laptopService: LaptopsServices) {
  }

  @Get(":id")
  getLaptop(@Param("id") id: string, @Query("query") displayQuery: string = "") {
    return this.laptopService
      .getLaptop(id, displayQuery.split(","))
      .catch((it) => {
        return new BadRequestException(it);
      });
    // .then((it) => {
    //   if (it === undefined) return it;
    //   return it;
    // });
  }

  @Get()
  getLaptops(@Query("query") query: string) {
    return this.laptopService.getListLaptops();
  }
}
