import { ObjectType } from '@nestjs/graphql';
import { User } from '../../user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Media } from 'src/media/entities/media.entity';

@ObjectType()
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user_id: number;

  @Column()
  content: string;

  @Column()
  comment: string;

  @Column()
  votes: string;

  @OneToMany(() => Media, (media) => media.id)
  @JoinTable({
    name: 'post_media',
    joinColumn: {
      name: 'post_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'media_id',
      referencedColumnName: 'id',
    },
  })
  media: Media[];
}
