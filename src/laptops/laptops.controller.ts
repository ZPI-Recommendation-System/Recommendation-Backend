import { BadRequestException, Controller, Get, Param, Query } from "@nestjs/common";
import { LaptopsServices } from "./laptops.service";
import { LaptopsModule } from "./laptops.module";
import { GetLaptopDto, GetLaptopsDto } from "./laptops.dto";

@Controller("laptops")
export class LaptopsController {
  constructor(private laptopService: LaptopsServices) {
  }

  @Get("get/:id")
  getLaptop(
    @Param("id") id: string,
    @Query("query") displayQuery = ""
  ): Promise<GetLaptopDto> {
    return this.laptopService
      .getLaptop(id, displayQuery.split(","))
      .then((it) => {
        return {
          uuid: id,
          query: "test",
          result: it
        };
      })
      .catch((it) => {
        throw new BadRequestException(it);
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
    @Query("filter") partialFilter: Partial<LaptopsModule> = undefined,
    @Query("ids") ids = ""
  ): Promise<GetLaptopsDto> {
    return this.laptopService
      .getListLaptops(limit, partialFilter, query.split(","), ids)
      .then((it) => {
        return {
          limit: limit,
          query: query,
          filter: partialFilter,
          items: it
        };
      })
      .catch((it) => {
        throw new BadRequestException(it);
      });
  }

  @Get("search")
  async searchLaptop(
    @Query("query") query = "",
    @Query("search") search = "",
    @Query("limit") limit = 10
  ) {
    return this.laptopService.searchLaptop(search, query, limit).then(it => {
      return {
        search: search,
        query: query,
        limit: limit,
        result: it
      };
    });
  }
}
