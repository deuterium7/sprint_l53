import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private repository: Repository<Author>,
  ) {}

  create(createAuthorInput: CreateAuthorInput) {
    return this.repository.save(createAuthorInput);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return this.repository.save({ id, ...updateAuthorInput });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
