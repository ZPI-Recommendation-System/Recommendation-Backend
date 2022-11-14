import { Controller, Get } from "@nestjs/common";
import { TranslationsService } from "./translations.service";

@Controller("translations")
export class TranslationsController {
  constructor(private translationsService: TranslationsService) {
  }

  @Get()
  getTranslations() {
    return this.translationsService.getTranslations("pl");
  }
}
