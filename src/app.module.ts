import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { MediaModule } from './media/media.module';
import { ScheduleModule } from './schedule/schedule.module';
import { PostModule } from './post/post.module';
import { MediaResolver } from './media/media.resolver';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    UserModule,
    MediaModule,
    PostModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService, MediaResolver],
})
export class AppModule {}
