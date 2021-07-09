import { ObjectType } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  subtype: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @ManyToOne(() => Post, (post) => post.id)
  @JoinTable({
    name: 'post_media',
    joinColumn: {
      name: 'media_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'post_id',
      referencedColumnName: 'id',
    },
  })
  posts: Post[];
}
