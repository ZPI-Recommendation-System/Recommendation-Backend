import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../db/entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./guards/local.strategy";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), PassportModule],
  controllers: [UserController],
  providers: [UserService, LocalStrategy],
  exports: [UserService]
})
export class UsersModule {
}
