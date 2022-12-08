import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Role, ROLES_KEY } from "../db/entities/role.enum";
import { TokenGuard } from "./guards/token.guard";

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

export const LoginAccess = applyDecorators(UseGuards(AuthGuard("local")));

export const AdminAccess = applyDecorators(
  UseGuards(TokenGuard),
  Roles(Role.Admin)
);
