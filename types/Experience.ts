import { flatten, flattenList } from './tools'
import Guide from './Guide'
import {
  Scalars,
  Maybe,
  ExperienceEntityResponse,
  ExperienceSlotRelationResponseCollection,
  GuideEntityResponse,
  UploadFileRelationResponseCollection,
  ExperienceRelationResponseCollection,
  ExperienceTypeRelationResponseCollection,
  LanguageRelationResponseCollection,
  ThemeRelationResponseCollection,
  Enum_Experience_Transportation,
  Experience as ExperienceDAO,
} from '@/graphql/generated'

class Experience implements ExperienceDAO {
  id?: Maybe<Scalars['ID']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  duration?: Maybe<Scalars['Time']>
  experienceSlots?: Maybe<ExperienceSlotRelationResponseCollection>
  groupSize?: Maybe<Scalars['Int']>
  guide?: Guide
  handifriendly?: Maybe<Scalars['Boolean']>
  language?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<ExperienceRelationResponseCollection>
  location?: Maybe<Scalars['String']>
  photos?: Maybe<UploadFileRelationResponseCollection>
  price?: Maybe<Scalars['Float']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stars?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>

  types?: Maybe<ExperienceTypeRelationResponseCollection>
  transportation?: Maybe<Enum_Experience_Transportation>
  languages?: Maybe<LanguageRelationResponseCollection>
  themes?: Maybe<ThemeRelationResponseCollection>

  static map(ExperienceInput: ExperienceEntityResponse): Experience {
    const d = ExperienceInput.data
    // if (!d?.attributes || !d.id) return new Experience()
    const att = d?.attributes
    return new Experience(d?.id || 'test', att || {})
  }

  constructor(id: Maybe<Scalars['ID']>, input: ExperienceDAO) {
    this.id = id
    this.createdAt = input.createdAt
    this.description = input.description
    this.duration = input.duration
    this.experienceSlots = input.experienceSlots
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
    this.photos = input.photos
    // this.photos = input.photos?.data.map(flattenList)
    this.types = input.types
    // this.types = input.types?.data.map(flatten)
    if (input.guide) {
      this.guide = Guide.map(input.guide)
    }
  }
}

export default Experience
