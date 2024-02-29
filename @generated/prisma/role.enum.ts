import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  USER = 'USER',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'Roles enum',
  valuesMap: { USER: { description: 'User role' } },
});
