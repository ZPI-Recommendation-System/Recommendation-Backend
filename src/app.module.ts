import { MiddlewareConsumer, Module, NestModule, OnModuleInit } from "@nestjs/common";
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
import { WebsocketsModule } from "./modules-connector/websockets.module";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { AppLoggerMiddleware } from "./app-logger.middleware";
import { StatTrackerModule } from "./stat-tracker/stat-tracker.module";
import { CreateTables1670434726126 } from "./db/migrations/1670434726126-CreateTables";
import * as process from "process";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot({
      ignoreErrors: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB,
      autoLoadEntities: true,
      migrations: [CreateTables1670434726126],
      migrationsRun: true,
    }),
    ScheduleModule.forRoot(),
    LaptopsModule,
    UsersModule,
    RecommendationModule,
    LaptopsCrudModule,
    TranslationsModule,
    WebsocketsModule,
    StatTrackerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule, OnModuleInit {
  constructor(private entityManager: EntityManager) {}

  async onModuleInit() {
    return this.entityManager.query('CREATE EXTENSION IF NOT EXISTS pg_trgm;');
  }

  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
