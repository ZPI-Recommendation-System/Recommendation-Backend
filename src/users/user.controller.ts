import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { UserService } from "./user.service";
import { AdminAccess } from "./auth.decorators";

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
}
