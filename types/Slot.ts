import { flatten } from './tools'
import Experience from './Experience'
import Guide from './Guide'

import {
  Scalars,
  Maybe,
  slot as slotDAO,
  slotEntityResponse,
  slotEntity,
  slotEntityResponseCollection,
  slotRelationResponseCollection,
  GuideEntityResponse,
  ExperienceEntityResponse,
} from '@/graphql/generated'

class Slot implements slotDAO {
  id: Maybe<Scalars['ID']>
  // bookings?: Maybe<BookingRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  end: Maybe<Scalars['DateTime']>
  amountPerAge: any
  groupSize: any
  guide: Maybe<Guide>
  experience: Maybe<Experience>
  start: Scalars['DateTime']
  updatedAt?: Maybe<Scalars['DateTime']>

  static fromEntity(entity: Maybe<slotEntity> | undefined): Maybe<Slot> {
    if (!entity) throw new Error('slot.fromEntity: entity is undefined')
    if (!entity.id || !entity.attributes)
      throw new Error('slot.fromEntity: id or attributes is undefined')

    return new Slot(entity.id, entity.attributes)
  }

  static mapList(list: slotRelationResponseCollection): Array<Maybe<Slot>> {
    return list.data.map(Slot.fromEntity)
  }

  static map(input: slotEntityResponse): Maybe<Slot> {
    return Slot.fromEntity(input.data)
  }

  constructor(id: Maybe<Scalars['ID']>, input: slotDAO) {
    this.id = id
    this.createdAt = input.createdAt
    this.end = input.end
    this.start = input.start
    this.updatedAt = input.updatedAt
    this.groupSize = input.groupSize
    this.amountPerAge = input.amountPerAge

    if (input.guide?.data) {
      this.guide = Guide.map(input.guide)
    }
    if (input.experience?.data) {
      this.experience = Experience.map(input.experience)
    }
  }
}

export default Slot
