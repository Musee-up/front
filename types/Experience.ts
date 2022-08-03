import { flatten, flattenList } from './tools'
import Guide from './Guide'
import Booking from './Booking'
import Slot from './Slot'
import {
  Scalars,
  Maybe,
  UploadFile,
  ExperienceEntityResponse,
  ExperienceEntity,
  slotRelationResponseCollection,
  ExperienceEntityResponseCollection,
  GuideEntityResponse,
  UploadFileRelationResponseCollection,
  ExperienceRelationResponseCollection,
  ExperienceTypeRelationResponseCollection,
  LanguageRelationResponseCollection,
  ThemeRelationResponseCollection,
  Enum_Experience_Transportation,
  Experience as ExperienceDAO,
  BookingRelationResponseCollection,
} from '@/graphql/generated'

class Experience implements ExperienceDAO {
  id?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  duration?: Maybe<Scalars['Time']>
  bookings?: Maybe<Booking>
  slots?: Array<Maybe<Slot>>
  groupSize?: Maybe<Scalars['Int']>
  guide?: Guide
  handifriendly?: Maybe<Scalars['Boolean']>
  language?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<ExperienceRelationResponseCollection>
  location?: Maybe<Scalars['String']>
  photos?: Maybe<UploadFile> | any
  price?: Maybe<Scalars['Float']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stars?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>

  // types?: Maybe<ExperienceTypeRelationResponseCollection>
  types?: any
  transportation?: Maybe<Enum_Experience_Transportation>
  languages?: Maybe<LanguageRelationResponseCollection>
  themes?: Maybe<ThemeRelationResponseCollection>

  static fromEntity(entity: Maybe<ExperienceEntity> | undefined): Maybe<Experience> {
    if (!entity) throw new Error('Experience.fromEntity: entity is undefined')
    if (!entity.id || !entity.attributes)
      throw new Error('Experience.fromEntity: id or attributes is undefined')
    return new Experience(entity?.id, entity?.attributes)
  }

  static mapList(list: ExperienceEntityResponseCollection): Array<Maybe<Experience>> {
    return list.data.map(Experience.fromEntity)
  }

  static map(input: ExperienceEntityResponse): Maybe<Experience> {
    return Experience.fromEntity(input.data)
  }

  constructor(id: Maybe<Scalars['ID']>, input: ExperienceDAO) {
    this.id = id
    this.createdAt = input.createdAt
    this.description = input.description
    this.duration = input.duration
    this.groupSize = input.groupSize
    this.handifriendly = input.handifriendly
    this.language = input.language
    this.languages = input.languages
    this.locale = input.locale
    this.location = input.location
    this.price = input.price
    this.publishedAt = input.publishedAt
    this.stars = input.stars
    this.title = input.title
    this.updatedAt = input.updatedAt

    this.localizations = input.localizations
    // this.localizations = input.localizations?.data.map(flattenList)
    this.photos = input.photos?.data.map(flattenList)
    this.types = input.types?.data.map(flatten)

    if (input.slots) {
      this.slots = Slot.mapList(input.slots)
    }
    if (input.guide) {
      this.guide = Guide.map(input.guide)
    }
  }
}

export default Experience
