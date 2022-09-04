import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserInterface } from '../types/user';

@Entity()
export class User extends BaseEntity implements UserInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 30,
    nullable: false,
    unique: true,
  })
  username: string;
  @Column({
    length: 100,
    nullable: false,
  })
  password: string;
  @Column({
    length: 100,
    nullable: false,
    unique: true,
  })
  email: string;
}
