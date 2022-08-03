import { flatten } from './tools'
import User from './User'
import Experience from './Experience'
import Slot from './Slot'

import {
  Scalars,
  Maybe,
  BookingEntityResponse,
  BookingEntityResponseCollection,
  BookingEntity,
  Booking as BookingDAO,
} from '@/graphql/generated'

class Booking {
  id?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  experience?: Maybe<Experience>
  slot?: Maybe<Slot>
  groupSize?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<User>

  static fromEntity(entity: Maybe<BookingEntity> | undefined): Maybe<Booking> {
    if (!entity) throw new Error('Booking.fromEntity: entity is undefined')
    if (!entity?.id) throw new Error('Booking.fromEntity: entity is undefined')
    return new Booking(entity.id, entity?.attributes || {})
  }

  static mapList(list: BookingEntityResponseCollection): Array<Booking> {
    if (!list?.data) throw new Error('Booking.mapList: list is undefined')
    return list.data.map((x) => x && (Booking.fromEntity(x) as Booking))
  }

  static map(input: BookingEntityResponse): Maybe<Booking> {
    return Booking.fromEntity(input.data)
  }

  constructor(id: Maybe<Scalars['ID']>, input: BookingDAO) {
    this.id = id
    this.experience = input.experience && Experience.map(input.experience)
    this.slot = input.slot && Slot.map(input.slot)
    this.createdAt = input.createdAt
    this.user = input.user && User.map(input.user)
  }
}

export default Booking
