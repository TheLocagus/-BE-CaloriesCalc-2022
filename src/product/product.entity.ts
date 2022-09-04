import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductInterface } from '../types';

@Entity()
export class Product extends BaseEntity implements ProductInterface {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  })
  proteins: number;

  @Column({
    type: 'float',
    precision: 4,
    scale: 1,
    default: 0.0,
  })
  carbohydrates: number;

  @Column({
    type: 'float',
    precision: 4,
    scale: 1,
    default: 0.0,
  })
  fats: number;

  @Column({
    type: 'float',
    precision: 4,
    scale: 1,
    default: 0.0,
  })
  calories: number;

  @Column({
    default: 100,
  })
  amount: number;
}
