import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ModelEntity } from "./entity/model.entity";
import { Repository } from "typeorm";
import { OfferEntity } from "./entity/offer.entity";

@Injectable()
export class LaptopsServices {
  constructor(
    @InjectRepository(ModelEntity) private laptopsRepo: Repository<ModelEntity>,
    @InjectRepository(OfferEntity) private offersRepo: Repository<OfferEntity>
  ) {
  }

  getLaptop(id: string, displayParams: string[]): Promise<any> {
    return this.laptopsRepo
      .findOne({
        where: { id: id },
        relationLoadStrategy: "query",
        relations: {
          processor: true,
          screen: true,
          graphics: true,
          benchmark: true,
          communications: true,
          multimedia: true,
          drives: true,
          connections: true,
          controls: true,
          images: true
        }
      })
      .then(async (item) => {
        if (item !== undefined) {
          if (displayParams.includes("offers"))
            item.offers = await this.offersRepo.findBy({ model: item });
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
      if (displayParams[0] == "all") {
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
    if (a["id"] === undefined) {
      a["id"] = id;
    }
    if (a["name"] === undefined) {
      a["name"] = name;
    }

    return a;
  };

  getListLaptops(
    limit = 10,
    partialFilter: Partial<ModelEntity> = {},
    displayParams: string[] = []
  ) {
    return this.laptopsRepo
      .find({
        take: limit,
        where: partialFilter
      })
      .then((items) => {
        return items.map((item) => this.filterItem(item, displayParams));
      });
  }
}
