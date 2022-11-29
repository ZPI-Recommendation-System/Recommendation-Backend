import { BadRequestException, Controller, Get, Query } from "@nestjs/common";
import { LaptopsServices } from "./laptops.service";
import { GetLaptopsAPIDto, GetLaptopsDto, LaptopSearchDto, Pagination } from "./laptops.dto";

@Controller('laptops')
export class LaptopsController {
  constructor(private laptopService: LaptopsServices) {}

  @Get('all')
  async getAllLaptops(@Query() pagination: Pagination) {
    const displa = ['all'];
    return this.laptopService
      .getListLaptops(pagination.limit, pagination.page, undefined, displa, [])
      .then((response) => {
        return {
          limit: pagination.limit,
          page: pagination.page,
          items: response,
        };
      });
  }

  @Get()
  async getLaptops(@Query() dto: GetLaptopsAPIDto): Promise<GetLaptopsDto> {
    if (!dto.ids || dto.ids.length == 0) {
      return {
        query: dto.query,
        items: [],
      };
    }
    const splited = dto.ids;
    return this.laptopService
      .getListLaptops(splited.length, 0, undefined, dto.query, splited)
      .then((it) => {
        return {
          ids: dto.ids,
          query: dto.query,
          items: it,
        };
      })
      .catch((it) => {
        throw new BadRequestException(it);
      });
  }

  @Get('search')
  async searchLaptop(
    @Query() pagination: Pagination,
    @Query() laptopSearch: LaptopSearchDto,
  ) {
    return this.laptopService
      .searchLaptop(
        laptopSearch.search,
        laptopSearch.query,
        pagination.limit,
        pagination.page,
      )
      .then((it) => {
        return {
          search: laptopSearch.search,
          query: laptopSearch.query,
          limit: pagination.limit,
          items: it,
          page: pagination.page,
        };
      });
  }

  @Get('benchmarkstats')
  getBenchmarkStats(){
    return this.laptopService.getBenchmarkStats()
  }
}
