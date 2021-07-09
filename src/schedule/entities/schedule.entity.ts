import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  current_day: Date;

  @Column()
  event: Date[];

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user_id: number;
}
