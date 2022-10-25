import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entity/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import bcrypt from "bcrypt";

@Injectable()
export class UserService {
  private tokens: object[];

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {
  }

  async validateUser(
    username: string,
    password: string
  ): Promise<any> {
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

  findUserBySessionToken() {
  }
}
