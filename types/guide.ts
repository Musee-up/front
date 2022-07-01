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

// class DAO {

//   fromEntity(entity: any) : any {
//     return new DAO(
//       entity?.id || 'noId',
//       entity?.attributes || {}
//     )
//   }
// }

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
  languages?: Maybe<LanguageRelationResponseCollection>
  location?: Maybe<Scalars['String']>
  specialties?: Maybe<Scalars['JSON']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: any
  workExperiences?: Maybe<Scalars['JSON']>

  static fromEntity(entity: Maybe<GuideEntity> | undefined): Guide {
    return new Guide(entity?.id || 'noId', entity?.attributes || {})
  }

  static mapList(guideList: GuideEntityResponseCollection): Guide {
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
    this.languages = input.languages
    this.favorite_place = flatten(input.favorite_place)
    this.experienceSlots = input.experienceSlots
    this.experiences = input.experiences?.data.map(flattenList)
    this.user = User.map(input.user || {})
  }
}

export default Guide
