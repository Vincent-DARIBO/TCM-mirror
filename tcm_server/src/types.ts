import { InputType, registerEnumType } from '@nestjs/graphql';

export enum EventType {
  ACTIVITY = 'ACTIVITY',
  ONE2ONE = 'ONE2ONE',
  EVENT = 'EVENT',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

registerEnumType(EventType, {
  name: 'EventType',
  description: 'event types',
});

registerEnumType(Gender, {
  name: 'Gender',
  description: 'genders',
})
