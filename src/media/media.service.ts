import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMediaInput } from './dto/create-media.input';
import { UpdateMediaInput } from './dto/update-media.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './entities/media.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}

  async createMedia(data: CreateMediaInput): Promise<Media> {
    const media = await this.mediaRepository.create(data);
    const mediaSaved = await this.mediaRepository.save(media);

    if (!mediaSaved) {
      throw new InternalServerErrorException('problemas em criar a mídia');
    }

    return mediaSaved;
  }

  async findAllMedia(): Promise<Media[]> {
    const media = await this.mediaRepository.find();
    return media;
  }

  findOne(id: number) {
    return `This action returns a #${id} media`;
  }

  update(id: number, updateMediaInput: UpdateMediaInput) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }
}
