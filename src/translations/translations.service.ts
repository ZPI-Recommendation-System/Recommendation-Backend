import { Injectable } from "@nestjs/common";
import { plLang } from "./langfiles/pl.lang";

@Injectable()
export class TranslationsService {
  getTranslations(lang: string) {
    return plLang;
  }
}
