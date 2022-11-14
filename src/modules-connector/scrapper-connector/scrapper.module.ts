import { Module } from "@nestjs/common";
import { ScrapperService } from "./scrapper.service";
import { ScrapperController } from "./scrapper.controller";
import { UsersModule } from "../../users/user.module";

@Module({
  imports: [UsersModule],
  controllers: [ScrapperController],
  providers: [ScrapperService]
})
export class ScrapperModule{

}
