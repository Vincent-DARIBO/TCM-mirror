import { InputType, registerEnumType } from "@nestjs/graphql";

export enum EventType {
  ACTIVITY = 'ACTIVITY',
  ONE2ONE = 'ONE2ONE',
  EVENT = 'EVENT',
}

registerEnumType(EventType, {
  name: 'EventType',
  description: 'event types'
})