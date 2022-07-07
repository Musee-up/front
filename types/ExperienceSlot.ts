import { flatten } from './tools'
import Experience from './Experience'
import Guide from './Guide'

import {
  Scalars,
  Maybe,
  ExperienceSlot as ExperienceSlotDAO,
  ExperienceSlotEntityResponse,
  ExperienceSlotEntity,
  ExperienceSlotEntityResponseCollection,
  ExperienceSlotRelationResponseCollection,
  GuideEntityResponse,
  ExperienceEntityResponse,
} from '@/graphql/generated'

class ExperienceSlot implements ExperienceSlotDAO {
  id: Maybe<Scalars['ID']>
  // bookings?: Maybe<BookingRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  end: Maybe<Scalars['DateTime']>
  guide: Guide
  experience: Maybe<Experience>
  start: Scalars['DateTime']
  updatedAt?: Maybe<Scalars['DateTime']>

  static fromEntity(
    entity: Maybe<ExperienceSlotEntity> | undefined
  ): ExperienceSlot | void {
    if (!entity)
      throw new Error('ExperienceSlot.fromEntity: entity is undefined')
    if (!entity.id || !entity.attributes)
      throw new Error(
        'ExperienceSlot.fromEntity: id or attributes is undefined'
      )

    return new ExperienceSlot(entity.id, entity.attributes)
  }

  static mapList(list: ExperienceSlotEntityResponseCollection): ExperienceSlot {
    return list.data.map(ExperienceSlot.fromEntity)
  }

  static map(input: ExperienceSlotEntityResponse): ExperienceSlot {
    return ExperienceSlot.fromEntity(input.data)
  }

  constructor(id: Maybe<Scalars['ID']>, input: ExperienceSlotDAO) {
    this.id = id
    this.createdAt = input.createdAt
    this.end = input.end
    this.start = input.start
    this.updatedAt = input.updatedAt
    if (input.guide?.data) {
      this.guide = Guide.map(input.guide)
    }
    if (input.experience?.data) {
      this.experience = Experience.map(input.experience)
    }
  }
}

export default ExperienceSlot
