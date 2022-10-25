import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserService } from "../user.service";

@Injectable()
export class AcceptGuard implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    // const request = context.switchToHttp().getRequest();
    // if (
    //   request.headers['authorization'] ==
    //   'Bearer ' + this.userService.authKey
    // ) {
    //   return this.adminService.findAdmin('admin').then((it) => {
    //     const { password, ...result } = it;
    //     request.user = result;
    //     return true;
    //   });
    //   // request.user = this.adminService.findAdmin("admin");
    // }
    return false;
  }
}
