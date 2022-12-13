import { Injectable, Logger } from "@nestjs/common";
import { UserEntity } from "../db/entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import bcrypt from "bcrypt";
import { randomStringGenerator } from "@nestjs/common/utils/random-string-generator.util";

export interface LoggedInUser {
  userId: number;
  token: string;
}

@Injectable()
export class UserService {
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
    if (user) {
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


  async getAdmin(){
    return this.userRepository.findOneBy({username: "admin"});
  }

  register(user: UserEntity) {
    user.password = bcrypt.hashSync(user.password, 10)
    return this.userRepository.save(user)
  }
}
