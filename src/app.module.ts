import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaptopsModule } from "./laptops/laptops.module";
import { UsersModule } from "./users/user.module";
import { RecommendationModule } from "./recommendations/recommendation.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "zpi.zgrate.ovh",
      port: 5432,
      username: "backend",
      password: "backend123",
      database: "recommendation-system",
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
