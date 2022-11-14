import { Module, OnModuleInit } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaptopsModule } from "./laptops/laptops.module";
import { UsersModule } from "./users/user.module";
import { RecommendationModule } from "./recommendations/recommendation.module";
import { ConfigModule } from "@nestjs/config";
import { LaptopsCrudModule } from "./laptops-crud/laptops-crud.module";
import { EntityManager } from "typeorm";
import { TranslationsModule } from "./translations/translations.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB,
      synchronize: true,
      autoLoadEntities: true
    }),
    LaptopsModule,
    UsersModule,
    RecommendationModule,
    LaptopsCrudModule,
    TranslationsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements OnModuleInit {
  constructor(private entityManager: EntityManager) {
  }

  async onModuleInit() {
    return this.entityManager.query("CREATE EXTENSION IF NOT EXISTS pg_trgm;");
  }
}
