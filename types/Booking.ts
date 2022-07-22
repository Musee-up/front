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
  slotEntityResponse,
  Booking as BookingDAO,
} from '@/graphql/generated'

class Booking {
  id?: Maybe<Scalars['ID']>
  // createdAt?: Maybe<Scalars['DateTime']>
  experience?: Experience
  slot?: Slot
  groupSize?: Maybe<Scalars['Int']>
  // updatedAt?: Maybe<Scalars['DateTime']>
  // user?: User

  static fromEntity(entity: Maybe<BookingEntity> | undefined): Booking | void {
    if (!entity?.id) throw new Error('Booking.fromEntity: entity is undefined')
    return new Booking(entity.id, entity?.attributes || {})
  }

  static mapList(list: BookingEntityResponseCollection): Booking {
    if (!list?.data) throw new Error('Booking.mapList: list is undefined')
    return list.data.map(Booking.fromEntity)
  }

  static map(input: BookingEntityResponse): Booking {
    return Experience.fromEntity(input.data)
  }

  constructor(id: Maybe<Scalars['ID']>, input: BookingDAO) {
    this.id = id
    this.experience = Experience.map(input.experience)
    this.slot = Slot.map(input.slot)
    this.size = input.size
    // this.user = User.map(input.user)
  }
}

export default Booking
