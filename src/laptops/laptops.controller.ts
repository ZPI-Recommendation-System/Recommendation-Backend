import { BadRequestException, Controller, Get, Param, Query } from "@nestjs/common";
import { LaptopsServices } from "./laptops.service";
import { GetLaptopDto, GetLaptopsAPIDto, GetLaptopsDto } from "./laptops.dto";


@Controller('laptops')
export class LaptopsController {
  constructor(private laptopService: LaptopsServices) {}

  @Get('get/:id')
  getLaptop(
    @Param('id') id: string,
    @Query('query') displayQuery = '',
  ): Promise<GetLaptopDto> {
    return this.laptopService
      .getLaptop(id, displayQuery.split(','))
      .then((it) => {
        return {
          uuid: id,
          query: 'test',
          result: it,
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
  async getLaptops(@Query() dto: GetLaptopsAPIDto): Promise<GetLaptopsDto> {
    if (dto.ids === undefined || dto.ids?.trim() === '') {
      return {
        query: dto.query,
        items: [],
      };
    }
    const splited = dto.ids.split(',');
    return this.laptopService
      .getListLaptops(
        splited.length,
        0,
        undefined,
        dto.query.split(','),
        splited
      )
      .then((it) => {
        return {
          page: dto.page,
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
    @Query('query') query = '',
    @Query('search') search = '',
    @Query('limit') limit = 10,
    @Query('page') page = 0,
  ) {
    return this.laptopService
      .searchLaptop(search, query, limit, page)
      .then((it) => {
        return {
          search: search,
          query: query,
          limit: limit,
          result: it,
          page: page
        };
      });
  }
}
