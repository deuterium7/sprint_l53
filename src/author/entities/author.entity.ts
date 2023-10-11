import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ comment: 'ФИО' })
  @Field({ description: 'ФИО' })
  name: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
