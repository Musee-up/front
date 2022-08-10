import { flatten, flattenList } from './tools'
import Guide from './Guide'
import Booking from './Booking'
import Slot from './Slot'
import {
  InputMaybe,
  Scalars,
  Maybe,
  UploadFile,
  ComponentAgeRangeAdulte,
  ExperienceEntityResponse,
  ExperienceEntity,
  ComponentThresholdsThresholds,
  ComponentAmountPerAgeAmountPerAge,
  ComponentDiscountPerGroupSizeDiscountPerGroupSizeInput,
  ExperienceEntityResponseCollection,
  ComponentAmountPerAgeAmountPerAgeInput,
  ExperienceRelationResponseCollection,
  Enum_Experience_Transportation,
  Experience as ExperienceDAO,
} from '@/graphql/generated'

class AgeRangeAdulte {
  amount?: Maybe<Scalars['Float']>
  id: Scalars['ID']

  constructor(data: ComponentAgeRangeAdulte) {
    this.id = data.id
    this.amount = data.amount
  }
}

class AmountPerAge {
  adult?: Maybe<AgeRangeAdulte>
  baby?: Maybe<AgeRangeAdulte>
  children?: Maybe<AgeRangeAdulte>
  id: Scalars['ID']
  teenager?: Maybe<AgeRangeAdulte>

  constructor(data: ComponentAmountPerAgeAmountPerAge) {
    this.id = data.id
    this.adult = data.adult ? new AgeRangeAdulte(data.adult) : null
    this.baby = data.baby ? new AgeRangeAdulte(data.baby) : null
    this.children = data.children ? new AgeRangeAdulte(data.children) : null
    this.teenager = data.teenager ? new AgeRangeAdulte(data.teenager) : null
  }
}

class DiscountPerGroupSize {
  discount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['ID']>
  max?: Maybe<Scalars['Int']>
  min?: Maybe<Scalars['Int']>

  constructor(data: ComponentDiscountPerGroupSizeDiscountPerGroupSizeInput) {
    this.discount = data.discount
    this.id = data.id
    this.max = data.max
    this.min = data.min
  }
}

class ThresholdInput {
  groupSizeMax?: Maybe<Scalars['Int']>
  groupSizeMin?: Maybe<Scalars['Int']>
  id: Scalars['ID']

  constructor(data: ComponentThresholdsThresholds) {
    this.groupSizeMax = data.groupSizeMax
    this.groupSizeMin = data.groupSizeMin
    this.id = data.id
  }
}

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
  thresholds: Maybe<ThresholdInput>
  discountPerGroupSize: Array<ComponentDiscountPerGroupSizeDiscountPerGroupSizeInput>
  amountPerAge: Maybe<ComponentAmountPerAgeAmountPerAgeInput>

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

    this.amountPerAge =
      input.amountPerAge && new AmountPerAge(input.amountPerAge)
    this.discountPerGroupSize = input.discountPerGroupSize?.map(
      (x) => new DiscountPerGroupSize(x)
    )
    this.thresholds = input.thresholds && new ThresholdInput(input.thresholds)

    if (input.slots) {
      this.slots = Slot.mapList(input.slots)
    }
    if (input.guide) {
      this.guide = Guide.map(input.guide)
    }
  }
}

export default Experience
