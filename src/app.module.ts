import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaptopsModule } from "./laptops/laptops.module";
import { UsersModule } from "./users/user.module";
import { RecommendationModule } from "./recommendations/recommendation.module";
import { ConfigModule } from "@nestjs/config";

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
    RecommendationModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
