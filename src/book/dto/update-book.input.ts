import { CreateBookInput } from './create-book.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { description: 'Автор' })
  author_id: number;

  @Field(() => Int, { description: 'Категория' })
  category_id: number;

  @Field()
  name: string;
}
