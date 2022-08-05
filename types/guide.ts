import { flatten, flattenList } from './tools'
import User from './User'
import Booking from './Booking'
import Slot from './Booking'
import Experience from './Experience'

import {
  // ExperienceRelationResponseCollection,
  FavoritePlaceEntityResponse,
  LanguageRelationResponseCollection,
  // UsersPermissionsUserEntityResponse,
  GuideEntityResponseCollection,
  Scalars,
  Guide as GuideDAO,
  GuideEntity,
  Maybe,
  GuideEntityResponse,
} from '@/graphql/generated'

class Guide {
  id?: Maybe<Scalars['ID']>
  background?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  slots?: Array<Slot>
  experiences?: Array<Experience>
  favorite_place?: Maybe<FavoritePlaceEntityResponse>
  headline?: Maybe<Scalars['String']>
  interests?: Maybe<Scalars['JSON']>
  bookings?: Array<Booking>
  languages?: Array<string>
  location?: Maybe<Scalars['String']>
  specialties?: Maybe<Scalars['JSON']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<User>
  workExperiences?: Maybe<Scalars['JSON']>

  static fromEntity(entity: Maybe<GuideEntity> | undefined): Maybe<Guide> {
    if (!entity) throw new Error('Guide.fromEntity: entity is undefined')
    if (!entity.id || !entity.attributes)
      throw new Error('Guide.fromEntity: id or attributes is undefined')
    return new Guide(entity?.id, entity?.attributes)
  }

  static mapList(guideList: GuideEntityResponseCollection): Array<Guide> {
    return guideList.data.map((x) => x && (Guide.fromEntity(x) as Guide))
  }

  static getAllBookings(guide: Guide): Array<Booking> {
    return guide.experiences.map(
      (experience: Experience) => experience.bookings
    )
  }
  static map(GuideInput: GuideEntityResponse): Maybe<Guide> {
    return Guide.fromEntity(GuideInput.data)
  }

  constructor(id: Maybe<Scalars['ID']>, input: GuideDAO) {
    this.id = id
    this.headline = input.headline
    this.description = input.description
    this.background = input.background
    this.workExperiences = input.workExperiences
    this.specialties = input.specialties
    this.interests = input.interests
    this.location = input.location
    this.languages = input.languages?.data.map(flattenList).map((x) => x.value)
    this.favorite_place = flatten(input.favorite_place)
    this.slots = input.slots || []
    if (input.bookings) {
      console.log(input.bookings)
      this.bookings = Booking.mapList(input.bookings)
    }
    if (input.experiences) {
      this.experiences = Experience.mapList(input.experiences)
    }
    this.user = User.map(input.user)
  }
}

export default Guide
