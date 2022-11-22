import { Injectable, Logger } from "@nestjs/common";
import { FormDto } from "./dto/form.dto";
import { ModelEntity } from "../laptops/entity/model.entity";
import { Predicate } from "../rules/predicates/base.predicate";
import { getInternalWeakFilters, WeakFilter } from "./filters/weak.filter";
import { getStrongFilter } from "./filters/strong.filter";
import { LaptopsServices } from "../laptops/laptops.service";
import { AND } from "../rules/predicates/relation.predicate";
import { ScoreService } from "./scoring/score.service";

@Injectable()
export class RecommendationService {
  private logger = new Logger(RecommendationService.name);
  constructor(
    private laptopService: LaptopsServices,
    private scoreService: ScoreService,
  ) {}

  async processRecommendation(
    form: FormDto,
    limit = 50,
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
    return this.laptopService
      .findLaptop(filters, limit, 0)
      .then(async (it) => {
        return await this.scoreService.generateLaptopScores(form, it);
      })
      .then((it) => {
        return {
          models: it.map(it=>it.model),
          weakFilters: weakFilters,
          comboFilters: filters,
        };
      });
  }

  combineStrongAndWeak(strongFilters: Predicate, weakFilters: WeakFilter[]) {
    // strongFilters,
    return AND([
      strongFilters,
      AND(weakFilters.map((it) => it.filterPredicate)),
    ]);
  }

  getStrongFilters(form: FormDto): Predicate {
    return getStrongFilter(form);
  }

  getWeakFilters(form: FormDto): WeakFilter[] {
    return getInternalWeakFilters(form);
  }
}
