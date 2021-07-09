import { IsNotEmpty, IsString } from 'class-validator';
import { InputType } from '@nestjs/graphql';
import { IsBoolean } from 'class-validator';
import { IsOptional } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'este campo precisa ser preenchido' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'este campo precisa ser preenchido' })
  password: string;

  @IsBoolean()
  @IsOptional()
  teacher?: boolean;
}
