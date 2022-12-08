import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role, ROLES_KEY } from "../../db/entities/role.enum";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {
  }

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass()
    ]);

    const { user } = context.switchToHttp().getRequest();
    if (!requiredRoles) {
      return true;
    } else if (!user) {
      return false;
    } else if (user.role === Role.Sudo) {
      return true;
    }

    return requiredRoles.some((role) => user.role == role);
  }
}
