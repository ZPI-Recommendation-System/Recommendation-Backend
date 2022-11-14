import { Injectable } from "@nestjs/common";
import { FormDto } from "./dto/form.dto";
import { ModelEntity } from "../laptops/entity/model.entity";
import { Predicate } from "../rules/predicates/base.predicate";
import { getInternalWeakFilters, WeakFilter } from "./filters/weak.filter";
import { getStrongFilter } from "./filters/strong.filter";
import { LaptopsServices } from "../laptops/laptops.service";
import { AND } from "../rules/predicates/relation.predicate";

@Injectable()
export class RecommendationService {
  constructor(private laptopService: LaptopsServices) {
  }

  async processRecommendation(
    form: FormDto,
    limit = 0
  ): Promise<{ models: ModelEntity | any[]; weakFilters: WeakFilter[] }> {
    const strongFilter = this.getStrongFilters(form);
    const weakFilters = this.getWeakFilters(form);
    // return {
    //   strong: strongFilter,
    //   weak: weakFilters,
    //   finalResult: this.combineStrongAndWeak(strongFilter, weakFilters)
    // };
    // return strongFilter;
    const filters = this.combineStrongAndWeak(strongFilter, weakFilters);
    return this.laptopService.findLaptop(filters, limit, 0).then((it) => {
      return {
        models: it.map(model => {
          model.offers.length > 0 ? model["price"] = model.offers[0].offerPrice : model["price"] = undefined;
          return model;
        }), weakFilters: weakFilters, comboFilters: filters
      };
    });
  }

  combineStrongAndWeak(strongFilters: Predicate, weakFilters: WeakFilter[]) {
    // strongFilters,
    return AND([
      strongFilters,
      AND(weakFilters.map((it) => it.filterPredicate))
    ]);
  }

  getStrongFilters(form: FormDto): Predicate {
    return getStrongFilter(form);
  }

  getWeakFilters(form: FormDto): WeakFilter[] {
    return getInternalWeakFilters(form);
  }
}
