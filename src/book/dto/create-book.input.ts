import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => Int, { description: 'Автор' })
  author_id: number;

  @Field(() => Int, { description: 'Категория' })
  category_id: number;

  @Field()
  name: string;
}
