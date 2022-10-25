import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Role, ROLES_KEY } from "./entity/role.enum";

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

const AdminAccess = applyDecorators(UseGuards(AuthGuard("local")));
