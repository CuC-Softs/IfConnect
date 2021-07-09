import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateScheduleInput {
  @IsString()
  @IsNotEmpty({ message: 'este campo precisa ser preenchido' })
  current_day: Date;

  @IsString()
  @IsNotEmpty({ message: 'este campo precisa ser preenchido' })
  event: Date[];
}
