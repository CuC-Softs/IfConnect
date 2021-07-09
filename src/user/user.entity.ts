import { ObjectType } from '@nestjs/graphql';
import { Media } from 'src/media/entities/media.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  follows: number;

  @Column()
  teacher: boolean;

  @OneToOne(() => Media, (media) => media.id)
  @JoinColumn()
  avatar_id: number;
}
