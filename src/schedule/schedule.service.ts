import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateScheduleInput } from './dto/create-schedule.input';
import { UpdateScheduleInput } from './dto/update-schedule.input';
import { Schedule } from './entities/schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async createSchedule(data: CreateScheduleInput): Promise<Schedule> {
    const schedule = await this.scheduleRepository.create(data);
    const scheduleSaved = await this.scheduleRepository.save(schedule);

    if (!scheduleSaved) {
      throw new InternalServerErrorException('problemas em criar o usuário');
    }

    return scheduleSaved;
  }

  async findAllSchedules(): Promise<Schedule[]> {
    const schedule = await this.scheduleRepository.find();
    return schedule;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleInput: UpdateScheduleInput) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
