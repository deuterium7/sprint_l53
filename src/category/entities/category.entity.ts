import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @OneToMany(() => Book, (book) => book.category)
  books: Book[];
}
