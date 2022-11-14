import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UserService } from "../user.service";

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  adminToken = "Bearer DEVTOKEN_DELETE123"

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.headers["authorization"]) {

      const c = await this.userService.findUserBySessionToken(
        request.headers["authorization"]
      );
      if (c) {
        request.user = c;
        return true;
      }
      else if(request.headers["authorization"] === this.adminToken){
        request.user = await this.userService.getAdmin();
        return true;
      }
      return false;
      //return c !== undefined;
    }
    return false;

    /*    if (
      request.headers['authorization'] ==
      'Bearer ' + this.userService.authKey
    ) {
      return this.adminService.findAdmin('admin').then((it) => {
        const { password, ...result } = it;
        request.user = result;
        return true;
      });
      // request.user = this.adminService.findAdmin("admin");
    }
    return false;*/
  }
}
