import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field({ description: 'ФИО' })
  name: string;
}
