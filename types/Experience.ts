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

class Experience {
  id?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  duration?: Maybe<Scalars['Time']>
  bookings?: Maybe<Booking>
  slots?: Array<Slot>
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
  transportation?: Maybe<Enum_Experience_Transportation>
  languages?: Array<String>
  types?: Array<String>
  themes?: Array<String>
  thresholds: any
  discountPerGroupSize: any
  amountPerAge: any

  static fromEntity(
    entity: Maybe<ExperienceEntity> | undefined
  ): Maybe<Experience> {
    if (!entity) throw new Error('Experience.fromEntity: entity is undefined')
    if (!entity.id || !entity.attributes)
      throw new Error('Experience.fromEntity: id or attributes is undefined')
    return new Experience(entity?.id, entity?.attributes)
  }

  static mapList(list: ExperienceEntityResponseCollection): Array<Experience> {
    return list.data.map((x) => x && (Experience.fromEntity(x) as Experience))
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
    this.locale = input.locale
    this.location = input.location
    this.price = input.price
    this.publishedAt = input.publishedAt
    this.stars = input.stars
    this.title = input.title
    this.updatedAt = input.updatedAt

    this.localizations = input.localizations
    // this.localizations = input.localizations?.data.map(flattenList)
    this.languages = input.languages?.data.map(flattenList)
    this.themes = input.themes?.data.map(flattenList)
    this.types = input.types?.data.map(flattenList)
    this.photos = input.photos?.data.map(flattenList)
    this.amountPerAge = input.amountPerAge
    this.discountPerGroupSize = input.discountPerGroupSize
    this.thresholds = input.thresholds

    if (input.slots) {
      this.slots = Slot.mapList(input.slots)
    }
    if (input.guide) {
      this.guide = Guide.map(input.guide)
    }
  }
}

export default Experience
