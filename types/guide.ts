import { flatten, flattenList } from './tools'
import User from './User'
import {
  // ExperienceRelationResponseCollection,
  FavoritePlaceEntityResponse,
  LanguageRelationResponseCollection,
  // UsersPermissionsUserEntityResponse,
  ExperienceSlotRelationResponseCollection,
  GuideEntityResponseCollection,
  Scalars,
  Guide as GuideDAO,
  GuideEntity,
  Maybe,
  GuideEntityResponse,
} from '@/graphql/generated'

class Guide implements GuideDAO {
  id?: Maybe<Scalars['ID']>
  background?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  experienceSlots?: Maybe<ExperienceSlotRelationResponseCollection>
  experiences?: any // Maybe<ExperienceRelationResponseCollection>
  favorite_place?: Maybe<FavoritePlaceEntityResponse>
  headline?: Maybe<Scalars['String']>
  interests?: Maybe<Scalars['JSON']>
  languages?: Array<string>
  location?: Maybe<Scalars['String']>
  specialties?: Maybe<Scalars['JSON']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: any
  workExperiences?: Maybe<Scalars['JSON']>

  static fromEntity(entity: Maybe<GuideEntity> | undefined): Guide {
    if (!entity) throw new Error('Guide.fromEntity: entity is undefined')
    if (!entity.id || !entity.attributes)
      throw new Error('Guide.fromEntity: id or attributes is undefined')
    return new Guide(entity?.id, entity?.attributes)
  }

  static mapList(guideList: GuideEntityResponseCollection): Array<Guide> {
    return guideList.data.map(Guide.fromEntity)
  }

  static map(GuideInput: GuideEntityResponse): Guide {
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
    this.experienceSlots = input.experienceSlots
    this.experiences = input.experiences?.data.map(flattenList)
    this.user = User.map(input.user)
  }
}

export default Guide
