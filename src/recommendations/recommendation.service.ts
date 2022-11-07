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

  async processRecommendation(form: FormDto, limit = 0): Promise<ModelEntity[] | any> {
    const strongFilter = this.getStrongFilters(form);
    const weakFilters = this.getWeakFilters(form);
    return {
      strong: strongFilter,
      weak: weakFilters,
      finalResult: this.combineStrongAndWeak(strongFilter, weakFilters)
    };
    // return strongFilter;
    return this.laptopService.findLaptop(this.combineStrongAndWeak(strongFilter, weakFilters), limit);
  }

  combineStrongAndWeak(strongFilters: Predicate, weakFilters: WeakFilter[]) {
    return AND([strongFilters, AND(weakFilters.map(it => it.filterPredicate))]);
  }

  getStrongFilters(form: FormDto): Predicate {
    return getStrongFilter(form);
  }

  getWeakFilters(form: FormDto): WeakFilter[] {
    return getInternalWeakFilters(form);
  }
}
