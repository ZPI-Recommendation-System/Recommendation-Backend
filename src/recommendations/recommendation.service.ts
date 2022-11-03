import { Injectable } from "@nestjs/common";
import { FormDto } from "./dto/filter.dto";
import { ModelEntity } from "../laptops/entity/model.entity";
import { Predicate } from "../rules/predicates/base.predicate";
import { WeakFilter } from "./filters/weak.filter";

@Injectable()
export class RecommendationService {
  async processRecommendation(form: FormDto): Promise<ModelEntity[]> {
    return [];
  }

  async getStrongFilters(form: FormDto): Promise<Predicate> {
    return undefined;
  }

  async getWeakFilters(form: FormDto): Promise<WeakFilter> {
    return undefined;
  }
}
