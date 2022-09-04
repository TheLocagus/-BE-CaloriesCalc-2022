import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FavouriteProductInterface } from '../types/favourite-product/favourite-product';
import { FavouriteMeal } from './favourite-meal.entity';

@Entity()
export class FavouriteProduct
  extends BaseEntity
  implements FavouriteProductInterface
{
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => FavouriteMeal, (favouriteMeal) => favouriteMeal.id)
  favouriteMeal: FavouriteMeal;
  @Column({
    type: 'tinyint',
    nullable: false,
  })
  index: number;
  @Column({
    length: 70,
    nullable: false,
  })
  name: string;
  @Column({
    type: 'float',
    precision: 4,
    scale: 1,
    default: 0.0,
    nullable: false,
  })
  proteins: number;

  @Column({
    type: 'float',
    precision: 4,
    scale: 1,
    default: 0.0,
    nullable: false,
  })
  carbohydrates: number;

  @Column({
    type: 'float',
    precision: 4,
    scale: 1,
    default: 0.0,
    nullable: false,
  })
  fats: number;

  @Column({
    type: 'float',
    precision: 4,
    scale: 1,
    default: 0.0,
    nullable: false,
  })
  calories: number;

  @Column({
    default: 100,
    nullable: false,
  })
  amount: number;
}
