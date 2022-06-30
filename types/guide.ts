import {
  // ExperienceRelationResponseCollection,
  FavoritePlaceEntityResponse,
  LanguageRelationResponseCollection,
  // UsersPermissionsUserEntityResponse,
  ExperienceSlotRelationResponseCollection,
  Scalars,
  Guide as GuideAPI,
  Maybe,
  GuideEntityResponse,
} from '@/graphql/generated'

const flattenList = (obj: any) => ({
  id: obj.id,
  ...obj.attributes,
})

const flatten = (obj: any) => {
  if (!obj) return undefined
  const d = obj.data
  return {
    id: d.id,
    ...d.attributes,
  }
}

class Guide implements GuideAPI {
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

  static map(GuideInput: GuideEntityResponse): Guide {
    const d = GuideInput.data
    // if (!d?.attributes || !d.id) return new Guide()
    const att = d?.attributes

    return new Guide(d?.id || 'test', att || {})
  }

  constructor(id: Maybe<Scalars['ID']>, input: GuideAPI) {
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
    this.user = flatten(input.user)
  }
}

export default Guide
