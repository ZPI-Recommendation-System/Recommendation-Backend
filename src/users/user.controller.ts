import { Body, Controller, Get, Post, Put, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "./user.service";
import { AdminAccess, Roles } from "./auth.decorators";
import { UserEntity } from "../db/entities/user.entity";
import { Role } from "../db/entities/role.enum";
import { TokenGuard } from "./guards/token.guard";

@Controller("user")
export class UserController {
  constructor(private userController: UserService) {
  }

  @Post("login")
  @UseGuards(AuthGuard("local"))
  async login(@Request() req) {
    return {
      status: "ok",
      token: await this.userController.login(req.user)
    };
  }

  @Get("/self")
  @AdminAccess
  async getSelf(@Request() request) {
    return request.user;
  }

  @Put("/register")
  @UseGuards(TokenGuard)
  @Roles(Role.Sudo)
  async register(@Body() user: UserEntity)
  {
    return this.userController.register(user);
  }
}
