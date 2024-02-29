import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  email = 'email',
  name = 'name',
  password = 'password',
  bio = 'bio',
  image = 'image',
  countComments = 'countComments',
  rating = 'rating',
  money = 'money',
  role = 'role',
}

registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  valuesMap: { name: { description: "User's name" } },
});
