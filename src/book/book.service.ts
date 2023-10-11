import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private repository: Repository<Book>,
  ) {}

  create(createBookInput: CreateBookInput) {
    return this.repository.save(createBookInput);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return this.repository.save({ id, ...updateBookInput });
  }

  async remove(id: number) {
    await this.repository.delete(id);
  }
}
