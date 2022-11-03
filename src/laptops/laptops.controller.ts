import { BadRequestException, Controller, Get, Param, Query } from "@nestjs/common";
import { LaptopsServices } from "./laptops.service";
import { LaptopsModule } from "./laptops.module";

@Controller("laptops")
export class LaptopsController {
  constructor(private laptopService: LaptopsServices) {
  }

  @Get(":id")
  getLaptop(@Param("id") id: string, @Query("query") displayQuery = "") {
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
  getLaptops(
    @Query("query") query = "",
    @Query("limit") limit = 10,
    @Query("filter") partialFilter: Partial<LaptopsModule> = undefined
  ) {
    return this.laptopService
      .getListLaptops(limit, partialFilter, query.split(","))
      .then((it) => {
        return {
          limit: limit,
          query: query,
          partialFilter: partialFilter,
          items: it
        };
      })
      .catch((it) => {
        throw new BadRequestException(it);
      });
  }
}
