import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ModelEntity } from "../db/entities/model.entity";
import { EntityManager, FindOptionsOrder, FindOptionsWhere, In, MoreThan, Repository } from "typeorm";
import { UpdateLaptopsCrudDto } from "../laptops-crud/dto/update-laptops-crud.dto";
import { BenchmarkEntity } from "../db/entities/benchmark.entity";
import { Predicate } from "../rules/predicates/base.predicate";
import { SortingDto } from "./laptops.dto";
import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class LaptopsServices implements OnModuleInit {
  private logger = new Logger(LaptopsServices.name);
  constructor(
    @InjectRepository(ModelEntity) private laptopsRepo: Repository<ModelEntity>,
    private entityManager: EntityManager,
    @InjectRepository(BenchmarkEntity)
    private benchmarkRepo: Repository<BenchmarkEntity>,
  ) {}

  async onModuleInit() {
    await this.updatePopularityAndScore();
  }

  findLaptop(
    filter: FindOptionsWhere<ModelEntity>,
    limit: number,
    page: number,
  ) {
    if (limit > 50 || limit < 1) {
      limit = 50;
    }
    return this.laptopsRepo.find({
      take: limit,
      where: filter,
      skip: limit * page,
      relations: this.getRelations(['all']),
    });
  }

  getLaptop(
    id: string,
    displayParams: string[],
  ): Promise<Partial<ModelEntity> | undefined> {
    return this.laptopsRepo
      .findOne({
        where: { id: id },
        relations: {
          processor: true,
          screen: true,
          graphics: true,
          communications: true,
          multimedia: true,
          drives: true,
          connections: true,
          controls: true,
          images: true,
        },
      })
      .then(async (item) => {
        if (item !== undefined) {
          // if (displayParams.includes('offers'))
          // item.offers = await this.offersRepo.findBy({ model: item });
          return this.filterItem(item, displayParams);
        }
        return item;
      });
  }

  filterItem = (item: ModelEntity, displayParams: string[]) => {
    if (item === undefined) {
      return undefined;
    }

    let a = {};
    if (displayParams !== undefined && displayParams.length > 0) {
      if (displayParams[0] == 'all') {
        a = item;
      } else {
        for (const i in item) {
          if (displayParams.includes(i)) {
            a[i] = item[i];
          }
        }
      }
    }
    const { id, name } = item;
    if (a['id'] === undefined) {
      a['id'] = id;
    }
    if (a['name'] === undefined) {
      a['name'] = name;
    }

    return a;
  };

  // async massGetOffers(items: []) {
  //   return this.offersRepo.findBy({ model: In(items) });
  // }

  getRelations(displayParams: string[]): any {
    const isAll = displayParams.includes('all');

    return {
      processor: isAll ? true : displayParams.includes('processor'),
      screen: isAll ? true : displayParams.includes('screen'),
      graphics: isAll ? true : displayParams.includes('graphics'),
      communications: isAll ? true : displayParams.includes('communications'),
      multimedia: isAll ? true : displayParams.includes('multimedia'),
      drives: isAll ? true : displayParams.includes('drives'),
      connections: isAll ? true : displayParams.includes('connections'),
      controls: isAll ? true : displayParams.includes('controls'),
      images: isAll ? true : displayParams.includes('images'),
    };
  }

  generateOrder(sortingDto: SortingDto): FindOptionsOrder<ModelEntity> {
    if (sortingDto.sortType == 'alphabetic') {
      return { name: sortingDto.direction };
    } else if (sortingDto.sortType == 'price') {
      return { price: sortingDto.direction };
    }
    return undefined;
  }

  async getListLaptops(
    limit = 10,
    page = 0,
    partialFilter: Partial<ModelEntity> = {},
    displayParams: string[] = [],
    ids: string[] = [],
    sort: SortingDto,
  ) {
    if (ids.length == 0) {
      return await this.laptopsRepo
        .find({
          take: limit,
          skip: limit * page,
          where: { price: MoreThan(0) },
          relations: this.getRelations(displayParams),
          order: this.generateOrder(sort),
        })
        .then((items) => {
          return items.map((item) => {
            return this.filterItem(item, displayParams);
          });
        });
    } else {
      return await this.laptopsRepo
        .find({
          take: limit,
          skip: limit * page,
          where: { id: In(ids) },
          relations: this.getRelations(displayParams),
          order: this.generateOrder(sort),
        })
        .then((items) => {
          return items.map((item) => {
            return this.filterItem(item, displayParams);
          });
        });
    }
  }

  searchLaptop(search: string, query: string[], limit: number, page: number, sort: SortingDto) {
    return this.laptopsRepo
      .query(
        'SELECT id, SIMILARITY(NAME, $1) AS "similarity" FROM PUBLIC.model_entity ORDER BY "similarity" DESC LIMIT $2 OFFSET $3;',
        [search, limit, limit * page],
      )
      .then((it) => {
        return this.getListLaptops(
          limit,
          0,
          undefined,
          query,
          it.map((it) => it['id']),
          sort
        );
      });

  }

  async updateLaptop(id: string, updateLaptopsCrudDto: UpdateLaptopsCrudDto) {
    updateLaptopsCrudDto.id = id;
    return this.laptopsRepo.save(updateLaptopsCrudDto);
  }

  removeLaptop(id: string) {
    return this.laptopsRepo.delete({ id: id });
  }

  addNewLaptop(createLaptopsCrudDto: ModelEntity) {
    return this.laptopsRepo.save(createLaptopsCrudDto);
  }

  getBenchmarkStats() {
    return this.benchmarkRepo.query(
      'SELECT "type", MAX("benchmark"), MIN("benchmark") FROM PUBLIC.benchmark_entity GROUP BY "type"',
    );
  }


  @Cron(CronExpression.EVERY_12_HOURS)
  async updatePopularityAndScore() {
    return Promise.all([
      this.laptopsRepo.query(
        'UPDATE model_entity as t1 SET "estimatedPopularity" = t2."count" FROM (SELECT "laptopId", COUNT(*) AS "count" FROM stat_tracker_entity t3 GROUP BY t3."laptopId" ) AS t2 WHERE t1.id = t2."laptopId"',
      ),
      await this.entityManager.query(
        'UPDATE model_entity\n' +
          'SET "estimatedScore" = \n' +
          '\tCASE \n' +
          '\t\tWHEN "score" IS NULL THEN 0\n' +
          '\t\tELSE "score"\n' +
          '\tEND\n' +
          'FROM\n' +
          '\n' +
          '(\n' +
          '\tSELECT \n' +
          '\tt2.id AS laptopid,\n' +
          '\tt2."driveScore" + t2."ramScore" + t2."batteryScore" + t2."cpuScore" + t2."gpuScore" AS score\n' +
          '\tFROM\n' +
          '\t(\n' +
          '\t\tSELECT \n' +
          '\t\t\tmodel_entity.id AS id, \n' +
          '\t\t\tCASE \n' +
          '\t\t\t\tWHEN model_entity."driveType" LIKE \'%SSD%\' THEN (model_entity."driveStorage"/100)\n' +
          '\t\t\t\tELSE model_entity."driveStorage"/1000\n' +
          '\t\t\tEND AS "driveScore",\n' +
          '\t\t\tmodel_entity."ramAmount" AS "ramScore", \n' +
          '\t\t\tCASE \n' +
          '\t\t\t\tWHEN model_entity."batteryTime" IS NULL THEN 0 \n' +
          '\t\t\t\tELSE model_entity."batteryTime"\n' +
          '\t\t\tEND AS "batteryScore", \n' +
          '\t\t\tcpu_b."benchmark" AS "cpuScore", \n' +
          '\t\t\tgpu_b."benchmark" AS "gpuScore" \n' +
          '\t\t\n' +
          '\t\tFROM model_entity\n' +
          '\t\tLEFT JOIN processor_entity ON model_entity."processorId" = processor_entity.id \n' +
          '\t\t\tLEFT JOIN benchmark_entity cpu_b ON processor_entity."benchmarkId" = cpu_b.id\n' +
          '\t\tLEFT JOIN graphics_entity ON model_entity."graphicsId" = graphics_entity.id\n' +
          '\t\t\tLEFT JOIN benchmark_entity gpu_b ON graphics_entity."benchmarkId" = gpu_b.id\n' +
          '\t\tWHERE model_entity."estimatedScore" = 0\n' +
          '\t) AS t2\n' +
          ') AS t3\n' +
          'WHERE t3.laptopid = model_entity.id',
      ),
    ]);
  }

  async count(strong: Predicate, maxPrice: Predicate) {
    return {
      all: await this.laptopsRepo.count({
        where: strong,
      }),
      price: await this.laptopsRepo.count({
        where: maxPrice,
      }),
    };
  }
}
