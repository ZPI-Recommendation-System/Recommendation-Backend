import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LaptopsModule } from "./laptops/laptops.module";
import { UsersModule } from "./users/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "4.233.66.59",
      port: 5432,
      username: "backend",
      password: "backend123",
      database: "recommendation-system",
      synchronize: true,
      autoLoadEntities: true
    }),
    LaptopsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
