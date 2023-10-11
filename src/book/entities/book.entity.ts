import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.entity';
import { Category } from 'src/category/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ nullable: true, comment: 'Автор' })
  @Field(() => Int, { nullable: true, description: 'Автор' })
  author_id?: number;

  @Column({ nullable: true, comment: 'Категория' })
  @Field(() => Int, { nullable: true, description: 'Категория' })
  category_id?: number;

  @Column()
  @Field()
  name: string;

  @ManyToOne(() => Author, (author) => author.books)
  @JoinColumn({ name: "author_id" })
  author: Author;

  @ManyToOne(() => Category, (category) => category.books)
  @JoinColumn({ name: "category_id" })
  category: Category;
}
