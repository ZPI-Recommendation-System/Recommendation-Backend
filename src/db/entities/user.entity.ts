import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsIn, IsNotEmpty, Min } from "class-validator";
import { Role } from "./role.enum";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  username: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  @Min(5)
  password: string;

  @Column()
  @IsNotEmpty()
  @IsIn([Role.Sudo, Role.Admin, Role.Control])
  role: string;

  @Column()
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  surname: string;
}
