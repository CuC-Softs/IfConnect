import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateMediaInput {
  @IsString()
  @IsNotEmpty({ message: 'este campo precisa ser preenchido' })
  path: string;

  @IsString()
  @IsNotEmpty({ message: 'este campo precisa ser preenchido' })
  subtype: string;

  @IsString()
  @IsNotEmpty({ message: 'este campo precisa ser preenchido' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'este campo precisa ser preenchido' })
  type: string;
}
