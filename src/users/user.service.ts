import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import bcrypt from "bcrypt";
import { randomStringGenerator } from "@nestjs/common/utils/random-string-generator.util";
import { Role } from "./entity/role.enum";

export interface LoggedInUser {
  userId: number;
  token: string;
}

@Injectable()
export class UserService implements OnModuleInit {
  private tokens: LoggedInUser[] = [];
  private logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
  }

  async login(user: UserEntity) {
    if (user) {
      const index = this.tokens.findIndex((it) => it.userId == user.id);
      if (index != -1) {
        this.tokens.splice(index, 1);
        console.log(this.tokens);
      }
      const s = randomStringGenerator();
      this.tokens.push({ token: s, userId: user.id });
      return s;
    }
    return undefined;
  }

  async findUser(id: number) {
    return this.userRepository.findOneBy({ id: id }).then((it) => {
      if (it) {
        const { password, ...result } = it;
        return result;
      }
    });
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOneBy({ username: username });
    if (user === undefined) {
      return undefined;
    } else {
      return bcrypt.compare(password, user.password).then((it) => {
        if (it) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      });
    }
  }

  async findUserBySessionToken(tokenBearer: string) {
    if (tokenBearer) {
      const token = tokenBearer.replace("Bearer ", "");
      const user = this.tokens.find((it) => it.token == token);
      if (user) {
        return this.findUser(user.userId);
      } else {
        return undefined;
      }
    }
    return undefined;

  }

  async onModuleInit(): Promise<any> {
    if ((await this.userRepository.count()) == 0) {
      const entity = new UserEntity();
      entity.username = "admin";
      entity.password = await bcrypt.hash("admin", 10);
      entity.role = Role.Sudo;
      entity.email = "admin@admin.admin";
      entity.name = "Adam";
      entity.surname = "Abacki";
      return this.userRepository.save(entity).then();
    }
  }
}
