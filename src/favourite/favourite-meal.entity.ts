import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FavouriteMealInterface } from '../types/favourite-meal';
import { User } from '../user/user.entity';

@Entity()
export class FavouriteMeal
  extends BaseEntity
  implements FavouriteMealInterface
{
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => User, (user) => user.id)
  user: User;
  @Column({
    length: 40,
    nullable: false,
  })
  title: string;
}
