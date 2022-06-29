import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  I18NLocaleCode: any
  JSON: any
  Time: any
  Upload: any
}

export type Booking = {
  __typename?: 'Booking'
  createdAt?: Maybe<Scalars['DateTime']>
  experience?: Maybe<ExperienceEntityResponse>
  experience_slot?: Maybe<ExperienceSlotEntityResponse>
  size?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<UsersPermissionsUserEntityResponse>
}

export type BookingEntity = {
  __typename?: 'BookingEntity'
  attributes?: Maybe<Booking>
  id?: Maybe<Scalars['ID']>
}

export type BookingEntityResponse = {
  __typename?: 'BookingEntityResponse'
  data?: Maybe<BookingEntity>
}

export type BookingEntityResponseCollection = {
  __typename?: 'BookingEntityResponseCollection'
  data: Array<BookingEntity>
  meta: ResponseCollectionMeta
}

export type BookingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BookingFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  experience?: InputMaybe<ExperienceFiltersInput>
  experience_slot?: InputMaybe<ExperienceSlotFiltersInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<BookingFiltersInput>
  or?: InputMaybe<Array<InputMaybe<BookingFiltersInput>>>
  size?: InputMaybe<IntFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  user?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type BookingInput = {
  experience?: InputMaybe<Scalars['ID']>
  experience_slot?: InputMaybe<Scalars['ID']>
  size?: InputMaybe<Scalars['Int']>
  user?: InputMaybe<Scalars['ID']>
}

export type BookingRelationResponseCollection = {
  __typename?: 'BookingRelationResponseCollection'
  data: Array<BookingEntity>
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  contains?: InputMaybe<Scalars['Boolean']>
  containsi?: InputMaybe<Scalars['Boolean']>
  endsWith?: InputMaybe<Scalars['Boolean']>
  eq?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['Boolean']>
  gte?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  lt?: InputMaybe<Scalars['Boolean']>
  lte?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  not?: InputMaybe<BooleanFilterInput>
  notContains?: InputMaybe<Scalars['Boolean']>
  notContainsi?: InputMaybe<Scalars['Boolean']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  startsWith?: InputMaybe<Scalars['Boolean']>
}

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  contains?: InputMaybe<Scalars['DateTime']>
  containsi?: InputMaybe<Scalars['DateTime']>
  endsWith?: InputMaybe<Scalars['DateTime']>
  eq?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  ne?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<DateTimeFilterInput>
  notContains?: InputMaybe<Scalars['DateTime']>
  notContainsi?: InputMaybe<Scalars['DateTime']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  startsWith?: InputMaybe<Scalars['DateTime']>
}

export enum Enum_Experience_Transportation {
  AVelo = 'A_Velo',
  APied = 'A_pied',
}

export enum Enum_Language_Value {
  English = 'English',
  Francais = 'Francais',
  Spanish = 'Spanish',
}

export type Experience = {
  __typename?: 'Experience'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  duration?: Maybe<Scalars['Time']>
  experienceSlots?: Maybe<ExperienceSlotRelationResponseCollection>
  groupSize?: Maybe<Scalars['Int']>
  guide?: Maybe<GuideEntityResponse>
  handifriendly?: Maybe<Scalars['Boolean']>
  language?: Maybe<Scalars['String']>
  languages?: Maybe<LanguageRelationResponseCollection>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<ExperienceRelationResponseCollection>
  location?: Maybe<Scalars['String']>
  photos?: Maybe<UploadFileRelationResponseCollection>
  price?: Maybe<Scalars['Float']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stars?: Maybe<Scalars['Float']>
  themes?: Maybe<ThemeRelationResponseCollection>
  title?: Maybe<Scalars['String']>
  transportation?: Maybe<Enum_Experience_Transportation>
  types?: Maybe<ExperienceTypeRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ExperienceExperienceSlotsArgs = {
  filters?: InputMaybe<ExperienceSlotFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ExperienceLanguagesArgs = {
  filters?: InputMaybe<LanguageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ExperienceLocalizationsArgs = {
  filters?: InputMaybe<ExperienceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ExperiencePhotosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ExperienceThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ExperienceTypesArgs = {
  filters?: InputMaybe<ExperienceTypeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ExperienceEntity = {
  __typename?: 'ExperienceEntity'
  attributes?: Maybe<Experience>
  id?: Maybe<Scalars['ID']>
}

export type ExperienceEntityResponse = {
  __typename?: 'ExperienceEntityResponse'
  data?: Maybe<ExperienceEntity>
}

export type ExperienceEntityResponseCollection = {
  __typename?: 'ExperienceEntityResponseCollection'
  data: Array<ExperienceEntity>
  meta: ResponseCollectionMeta
}

export type ExperienceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExperienceFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  duration?: InputMaybe<TimeFilterInput>
  experienceSlots?: InputMaybe<ExperienceSlotFiltersInput>
  groupSize?: InputMaybe<IntFilterInput>
  guide?: InputMaybe<GuideFiltersInput>
  handifriendly?: InputMaybe<BooleanFilterInput>
  id?: InputMaybe<IdFilterInput>
  language?: InputMaybe<StringFilterInput>
  languages?: InputMaybe<LanguageFiltersInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ExperienceFiltersInput>
  location?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ExperienceFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ExperienceFiltersInput>>>
  price?: InputMaybe<FloatFilterInput>
  publishedAt?: InputMaybe<DateTimeFilterInput>
  stars?: InputMaybe<FloatFilterInput>
  themes?: InputMaybe<ThemeFiltersInput>
  title?: InputMaybe<StringFilterInput>
  transportation?: InputMaybe<StringFilterInput>
  types?: InputMaybe<ExperienceTypeFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ExperienceInput = {
  description?: InputMaybe<Scalars['String']>
  duration?: InputMaybe<Scalars['Time']>
  experienceSlots?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  groupSize?: InputMaybe<Scalars['Int']>
  guide?: InputMaybe<Scalars['ID']>
  handifriendly?: InputMaybe<Scalars['Boolean']>
  language?: InputMaybe<Scalars['String']>
  languages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  location?: InputMaybe<Scalars['String']>
  photos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  price?: InputMaybe<Scalars['Float']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  stars?: InputMaybe<Scalars['Float']>
  themes?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  title?: InputMaybe<Scalars['String']>
  transportation?: InputMaybe<Enum_Experience_Transportation>
  types?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type ExperienceRelationResponseCollection = {
  __typename?: 'ExperienceRelationResponseCollection'
  data: Array<ExperienceEntity>
}

export type ExperienceSlot = {
  __typename?: 'ExperienceSlot'
  bookings?: Maybe<BookingRelationResponseCollection>
  createdAt?: Maybe<Scalars['DateTime']>
  end?: Maybe<Scalars['DateTime']>
  experience?: Maybe<ExperienceEntityResponse>
  guide?: Maybe<GuideEntityResponse>
  start: Scalars['DateTime']
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ExperienceSlotBookingsArgs = {
  filters?: InputMaybe<BookingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ExperienceSlotEntity = {
  __typename?: 'ExperienceSlotEntity'
  attributes?: Maybe<ExperienceSlot>
  id?: Maybe<Scalars['ID']>
}

export type ExperienceSlotEntityResponse = {
  __typename?: 'ExperienceSlotEntityResponse'
  data?: Maybe<ExperienceSlotEntity>
}

export type ExperienceSlotEntityResponseCollection = {
  __typename?: 'ExperienceSlotEntityResponseCollection'
  data: Array<ExperienceSlotEntity>
  meta: ResponseCollectionMeta
}

export type ExperienceSlotFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExperienceSlotFiltersInput>>>
  bookings?: InputMaybe<BookingFiltersInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  end?: InputMaybe<DateTimeFilterInput>
  experience?: InputMaybe<ExperienceFiltersInput>
  guide?: InputMaybe<GuideFiltersInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<ExperienceSlotFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ExperienceSlotFiltersInput>>>
  start?: InputMaybe<DateTimeFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ExperienceSlotInput = {
  bookings?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  end?: InputMaybe<Scalars['DateTime']>
  experience?: InputMaybe<Scalars['ID']>
  guide?: InputMaybe<Scalars['ID']>
  start?: InputMaybe<Scalars['DateTime']>
}

export type ExperienceSlotRelationResponseCollection = {
  __typename?: 'ExperienceSlotRelationResponseCollection'
  data: Array<ExperienceSlotEntity>
}

export type ExperienceType = {
  __typename?: 'ExperienceType'
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<ExperienceTypeRelationResponseCollection>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ExperienceTypeLocalizationsArgs = {
  filters?: InputMaybe<ExperienceTypeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ExperienceTypeEntity = {
  __typename?: 'ExperienceTypeEntity'
  attributes?: Maybe<ExperienceType>
  id?: Maybe<Scalars['ID']>
}

export type ExperienceTypeEntityResponse = {
  __typename?: 'ExperienceTypeEntityResponse'
  data?: Maybe<ExperienceTypeEntity>
}

export type ExperienceTypeEntityResponseCollection = {
  __typename?: 'ExperienceTypeEntityResponseCollection'
  data: Array<ExperienceTypeEntity>
  meta: ResponseCollectionMeta
}

export type ExperienceTypeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ExperienceTypeFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ExperienceTypeFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ExperienceTypeFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ExperienceTypeFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ExperienceTypeInput = {
  name?: InputMaybe<Scalars['String']>
}

export type ExperienceTypeRelationResponseCollection = {
  __typename?: 'ExperienceTypeRelationResponseCollection'
  data: Array<ExperienceTypeEntity>
}

export type FavoritePlace = {
  __typename?: 'FavoritePlace'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  guide?: Maybe<GuideEntityResponse>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<FavoritePlaceRelationResponseCollection>
  picture?: Maybe<UploadFileEntityResponse>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type FavoritePlaceLocalizationsArgs = {
  filters?: InputMaybe<FavoritePlaceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type FavoritePlaceEntity = {
  __typename?: 'FavoritePlaceEntity'
  attributes?: Maybe<FavoritePlace>
  id?: Maybe<Scalars['ID']>
}

export type FavoritePlaceEntityResponse = {
  __typename?: 'FavoritePlaceEntityResponse'
  data?: Maybe<FavoritePlaceEntity>
}

export type FavoritePlaceEntityResponseCollection = {
  __typename?: 'FavoritePlaceEntityResponseCollection'
  data: Array<FavoritePlaceEntity>
  meta: ResponseCollectionMeta
}

export type FavoritePlaceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<FavoritePlaceFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  guide?: InputMaybe<GuideFiltersInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<FavoritePlaceFiltersInput>
  not?: InputMaybe<FavoritePlaceFiltersInput>
  or?: InputMaybe<Array<InputMaybe<FavoritePlaceFiltersInput>>>
  title?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type FavoritePlaceInput = {
  description?: InputMaybe<Scalars['String']>
  guide?: InputMaybe<Scalars['ID']>
  picture?: InputMaybe<Scalars['ID']>
  title?: InputMaybe<Scalars['String']>
}

export type FavoritePlaceRelationResponseCollection = {
  __typename?: 'FavoritePlaceRelationResponseCollection'
  data: Array<FavoritePlaceEntity>
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  contains?: InputMaybe<Scalars['Float']>
  containsi?: InputMaybe<Scalars['Float']>
  endsWith?: InputMaybe<Scalars['Float']>
  eq?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<FloatFilterInput>
  notContains?: InputMaybe<Scalars['Float']>
  notContainsi?: InputMaybe<Scalars['Float']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  startsWith?: InputMaybe<Scalars['Float']>
}

export type GenericMorph =
  | Booking
  | Experience
  | ExperienceSlot
  | ExperienceType
  | FavoritePlace
  | Guide
  | I18NLocale
  | Language
  | Room
  | Theme
  | UploadFile
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser

export type Guide = {
  __typename?: 'Guide'
  background?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  experienceSlots?: Maybe<ExperienceSlotRelationResponseCollection>
  experiences?: Maybe<ExperienceRelationResponseCollection>
  favorite_place?: Maybe<FavoritePlaceEntityResponse>
  headline?: Maybe<Scalars['String']>
  interests?: Maybe<Scalars['JSON']>
  languages?: Maybe<LanguageRelationResponseCollection>
  location?: Maybe<Scalars['String']>
  specialties?: Maybe<Scalars['JSON']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<UsersPermissionsUserEntityResponse>
  workExperiences?: Maybe<Scalars['JSON']>
}

export type GuideExperienceSlotsArgs = {
  filters?: InputMaybe<ExperienceSlotFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type GuideExperiencesArgs = {
  filters?: InputMaybe<ExperienceFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type GuideLanguagesArgs = {
  filters?: InputMaybe<LanguageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type GuideEntity = {
  __typename?: 'GuideEntity'
  attributes?: Maybe<Guide>
  id?: Maybe<Scalars['ID']>
}

export type GuideEntityResponse = {
  __typename?: 'GuideEntityResponse'
  data?: Maybe<GuideEntity>
}

export type GuideEntityResponseCollection = {
  __typename?: 'GuideEntityResponseCollection'
  data: Array<GuideEntity>
  meta: ResponseCollectionMeta
}

export type GuideFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<GuideFiltersInput>>>
  background?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  experienceSlots?: InputMaybe<ExperienceSlotFiltersInput>
  experiences?: InputMaybe<ExperienceFiltersInput>
  favorite_place?: InputMaybe<FavoritePlaceFiltersInput>
  headline?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  interests?: InputMaybe<JsonFilterInput>
  languages?: InputMaybe<LanguageFiltersInput>
  location?: InputMaybe<StringFilterInput>
  not?: InputMaybe<GuideFiltersInput>
  or?: InputMaybe<Array<InputMaybe<GuideFiltersInput>>>
  specialties?: InputMaybe<JsonFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  user?: InputMaybe<UsersPermissionsUserFiltersInput>
  workExperiences?: InputMaybe<JsonFilterInput>
}

export type GuideInput = {
  background?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  experienceSlots?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  experiences?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  favorite_place?: InputMaybe<Scalars['ID']>
  headline?: InputMaybe<Scalars['String']>
  interests?: InputMaybe<Scalars['JSON']>
  languages?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  location?: InputMaybe<Scalars['String']>
  specialties?: InputMaybe<Scalars['JSON']>
  user?: InputMaybe<Scalars['ID']>
  workExperiences?: InputMaybe<Scalars['JSON']>
}

export type I18NLocale = {
  __typename?: 'I18NLocale'
  code?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity'
  attributes?: Maybe<I18NLocale>
  id?: Maybe<Scalars['ID']>
}

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse'
  data?: Maybe<I18NLocaleEntity>
}

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection'
  data: Array<I18NLocaleEntity>
  meta: ResponseCollectionMeta
}

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  code?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<I18NLocaleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  contains?: InputMaybe<Scalars['ID']>
  containsi?: InputMaybe<Scalars['ID']>
  endsWith?: InputMaybe<Scalars['ID']>
  eq?: InputMaybe<Scalars['ID']>
  gt?: InputMaybe<Scalars['ID']>
  gte?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  lt?: InputMaybe<Scalars['ID']>
  lte?: InputMaybe<Scalars['ID']>
  ne?: InputMaybe<Scalars['ID']>
  not?: InputMaybe<IdFilterInput>
  notContains?: InputMaybe<Scalars['ID']>
  notContainsi?: InputMaybe<Scalars['ID']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  startsWith?: InputMaybe<Scalars['ID']>
}

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  contains?: InputMaybe<Scalars['Int']>
  containsi?: InputMaybe<Scalars['Int']>
  endsWith?: InputMaybe<Scalars['Int']>
  eq?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<IntFilterInput>
  notContains?: InputMaybe<Scalars['Int']>
  notContainsi?: InputMaybe<Scalars['Int']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  startsWith?: InputMaybe<Scalars['Int']>
}

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  contains?: InputMaybe<Scalars['JSON']>
  containsi?: InputMaybe<Scalars['JSON']>
  endsWith?: InputMaybe<Scalars['JSON']>
  eq?: InputMaybe<Scalars['JSON']>
  gt?: InputMaybe<Scalars['JSON']>
  gte?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  lt?: InputMaybe<Scalars['JSON']>
  lte?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  not?: InputMaybe<JsonFilterInput>
  notContains?: InputMaybe<Scalars['JSON']>
  notContainsi?: InputMaybe<Scalars['JSON']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  startsWith?: InputMaybe<Scalars['JSON']>
}

export type Language = {
  __typename?: 'Language'
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<LanguageRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']>
  value?: Maybe<Enum_Language_Value>
}

export type LanguageLocalizationsArgs = {
  filters?: InputMaybe<LanguageFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type LanguageEntity = {
  __typename?: 'LanguageEntity'
  attributes?: Maybe<Language>
  id?: Maybe<Scalars['ID']>
}

export type LanguageEntityResponse = {
  __typename?: 'LanguageEntityResponse'
  data?: Maybe<LanguageEntity>
}

export type LanguageEntityResponseCollection = {
  __typename?: 'LanguageEntityResponseCollection'
  data: Array<LanguageEntity>
  meta: ResponseCollectionMeta
}

export type LanguageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<LanguageFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<LanguageFiltersInput>
  not?: InputMaybe<LanguageFiltersInput>
  or?: InputMaybe<Array<InputMaybe<LanguageFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  value?: InputMaybe<StringFilterInput>
}

export type LanguageInput = {
  value?: InputMaybe<Enum_Language_Value>
}

export type LanguageRelationResponseCollection = {
  __typename?: 'LanguageRelationResponseCollection'
  data: Array<LanguageEntity>
}

export type Mutation = {
  __typename?: 'Mutation'
  createBooking?: Maybe<BookingEntityResponse>
  createExperience?: Maybe<ExperienceEntityResponse>
  createExperienceLocalization?: Maybe<ExperienceEntityResponse>
  createExperienceSlot?: Maybe<ExperienceSlotEntityResponse>
  createExperienceType?: Maybe<ExperienceTypeEntityResponse>
  createExperienceTypeLocalization?: Maybe<ExperienceTypeEntityResponse>
  createFavoritePlace?: Maybe<FavoritePlaceEntityResponse>
  createFavoritePlaceLocalization?: Maybe<FavoritePlaceEntityResponse>
  createGuide?: Maybe<GuideEntityResponse>
  createLanguage?: Maybe<LanguageEntityResponse>
  createLanguageLocalization?: Maybe<LanguageEntityResponse>
  createRoom?: Maybe<RoomEntityResponse>
  createTheme?: Maybe<ThemeEntityResponse>
  createThemeLocalization?: Maybe<ThemeEntityResponse>
  createUploadFile?: Maybe<UploadFileEntityResponse>
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse
  deleteBooking?: Maybe<BookingEntityResponse>
  deleteExperience?: Maybe<ExperienceEntityResponse>
  deleteExperienceSlot?: Maybe<ExperienceSlotEntityResponse>
  deleteExperienceType?: Maybe<ExperienceTypeEntityResponse>
  deleteFavoritePlace?: Maybe<FavoritePlaceEntityResponse>
  deleteGuide?: Maybe<GuideEntityResponse>
  deleteLanguage?: Maybe<LanguageEntityResponse>
  deleteRoom?: Maybe<RoomEntityResponse>
  deleteTheme?: Maybe<ThemeEntityResponse>
  deleteUploadFile?: Maybe<UploadFileEntityResponse>
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>
  login: UsersPermissionsLoginPayload
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>
  /** Register a user */
  register: UsersPermissionsLoginPayload
  removeFile?: Maybe<UploadFileEntityResponse>
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>
  updateBooking?: Maybe<BookingEntityResponse>
  updateExperience?: Maybe<ExperienceEntityResponse>
  updateExperienceSlot?: Maybe<ExperienceSlotEntityResponse>
  updateExperienceType?: Maybe<ExperienceTypeEntityResponse>
  updateFavoritePlace?: Maybe<FavoritePlaceEntityResponse>
  updateFileInfo: UploadFileEntityResponse
  updateGuide?: Maybe<GuideEntityResponse>
  updateLanguage?: Maybe<LanguageEntityResponse>
  updateRoom?: Maybe<RoomEntityResponse>
  updateTheme?: Maybe<ThemeEntityResponse>
  updateUploadFile?: Maybe<UploadFileEntityResponse>
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse
  upload: UploadFileEntityResponse
}

export type MutationCreateBookingArgs = {
  data: BookingInput
}

export type MutationCreateExperienceArgs = {
  data: ExperienceInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateExperienceLocalizationArgs = {
  data?: InputMaybe<ExperienceInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateExperienceSlotArgs = {
  data: ExperienceSlotInput
}

export type MutationCreateExperienceTypeArgs = {
  data: ExperienceTypeInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateExperienceTypeLocalizationArgs = {
  data?: InputMaybe<ExperienceTypeInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateFavoritePlaceArgs = {
  data: FavoritePlaceInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateFavoritePlaceLocalizationArgs = {
  data?: InputMaybe<FavoritePlaceInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateGuideArgs = {
  data: GuideInput
}

export type MutationCreateLanguageArgs = {
  data: LanguageInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateLanguageLocalizationArgs = {
  data?: InputMaybe<LanguageInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateRoomArgs = {
  data: RoomInput
}

export type MutationCreateThemeArgs = {
  data: ThemeInput
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateThemeLocalizationArgs = {
  data?: InputMaybe<ThemeInput>
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput
}

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
}

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
}

export type MutationDeleteBookingArgs = {
  id: Scalars['ID']
}

export type MutationDeleteExperienceArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteExperienceSlotArgs = {
  id: Scalars['ID']
}

export type MutationDeleteExperienceTypeArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteFavoritePlaceArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteGuideArgs = {
  id: Scalars['ID']
}

export type MutationDeleteLanguageArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteRoomArgs = {
  id: Scalars['ID']
}

export type MutationDeleteThemeArgs = {
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']
}

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']
}

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput
}

export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  files: Array<InputMaybe<Scalars['Upload']>>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput
}

export type MutationRemoveFileArgs = {
  id: Scalars['ID']
}

export type MutationResetPasswordArgs = {
  code: Scalars['String']
  password: Scalars['String']
  passwordConfirmation: Scalars['String']
}

export type MutationUpdateBookingArgs = {
  data: BookingInput
  id: Scalars['ID']
}

export type MutationUpdateExperienceArgs = {
  data: ExperienceInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateExperienceSlotArgs = {
  data: ExperienceSlotInput
  id: Scalars['ID']
}

export type MutationUpdateExperienceTypeArgs = {
  data: ExperienceTypeInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateFavoritePlaceArgs = {
  data: FavoritePlaceInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']
  info?: InputMaybe<FileInfoInput>
}

export type MutationUpdateGuideArgs = {
  data: GuideInput
  id: Scalars['ID']
}

export type MutationUpdateLanguageArgs = {
  data: LanguageInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateRoomArgs = {
  data: RoomInput
  id: Scalars['ID']
}

export type MutationUpdateThemeArgs = {
  data: ThemeInput
  id: Scalars['ID']
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput
  id: Scalars['ID']
}

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput
  id: Scalars['ID']
}

export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>
  file: Scalars['Upload']
  info?: InputMaybe<FileInfoInput>
  ref?: InputMaybe<Scalars['String']>
  refId?: InputMaybe<Scalars['ID']>
}

export type Pagination = {
  __typename?: 'Pagination'
  page: Scalars['Int']
  pageCount: Scalars['Int']
  pageSize: Scalars['Int']
  total: Scalars['Int']
}

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>
  page?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
  start?: InputMaybe<Scalars['Int']>
}

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query'
  booking?: Maybe<BookingEntityResponse>
  bookings?: Maybe<BookingEntityResponseCollection>
  experience?: Maybe<ExperienceEntityResponse>
  experienceSlot?: Maybe<ExperienceSlotEntityResponse>
  experienceSlots?: Maybe<ExperienceSlotEntityResponseCollection>
  experienceType?: Maybe<ExperienceTypeEntityResponse>
  experienceTypes?: Maybe<ExperienceTypeEntityResponseCollection>
  experiences?: Maybe<ExperienceEntityResponseCollection>
  favoritePlace?: Maybe<FavoritePlaceEntityResponse>
  favoritePlaces?: Maybe<FavoritePlaceEntityResponseCollection>
  guide?: Maybe<GuideEntityResponse>
  guides?: Maybe<GuideEntityResponseCollection>
  i18NLocale?: Maybe<I18NLocaleEntityResponse>
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>
  language?: Maybe<LanguageEntityResponse>
  languages?: Maybe<LanguageEntityResponseCollection>
  me?: Maybe<UsersPermissionsMe>
  room?: Maybe<RoomEntityResponse>
  rooms?: Maybe<RoomEntityResponseCollection>
  theme?: Maybe<ThemeEntityResponse>
  themes?: Maybe<ThemeEntityResponseCollection>
  uploadFile?: Maybe<UploadFileEntityResponse>
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>
}

export type QueryBookingArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryBookingsArgs = {
  filters?: InputMaybe<BookingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryExperienceArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryExperienceSlotArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryExperienceSlotsArgs = {
  filters?: InputMaybe<ExperienceSlotFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryExperienceTypeArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryExperienceTypesArgs = {
  filters?: InputMaybe<ExperienceTypeFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryExperiencesArgs = {
  filters?: InputMaybe<ExperienceFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  publicationState?: InputMaybe<PublicationState>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryFavoritePlaceArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryFavoritePlacesArgs = {
  filters?: InputMaybe<FavoritePlaceFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryGuideArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryGuidesArgs = {
  filters?: InputMaybe<GuideFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryLanguagesArgs = {
  filters?: InputMaybe<LanguageFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryRoomArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryRoomsArgs = {
  filters?: InputMaybe<RoomFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryThemeArgs = {
  id?: InputMaybe<Scalars['ID']>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
}

export type QueryThemesArgs = {
  filters?: InputMaybe<ThemeFiltersInput>
  locale?: InputMaybe<Scalars['I18NLocaleCode']>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta'
  pagination: Pagination
}

export type Room = {
  __typename?: 'Room'
  createdAt?: Maybe<Scalars['DateTime']>
  owners?: Maybe<UsersPermissionsUserRelationResponseCollection>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type RoomOwnersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type RoomEntity = {
  __typename?: 'RoomEntity'
  attributes?: Maybe<Room>
  id?: Maybe<Scalars['ID']>
}

export type RoomEntityResponse = {
  __typename?: 'RoomEntityResponse'
  data?: Maybe<RoomEntity>
}

export type RoomEntityResponseCollection = {
  __typename?: 'RoomEntityResponseCollection'
  data: Array<RoomEntity>
  meta: ResponseCollectionMeta
}

export type RoomFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RoomFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<RoomFiltersInput>
  or?: InputMaybe<Array<InputMaybe<RoomFiltersInput>>>
  owners?: InputMaybe<UsersPermissionsUserFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type RoomInput = {
  owners?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type RoomRelationResponseCollection = {
  __typename?: 'RoomRelationResponseCollection'
  data: Array<RoomEntity>
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  contains?: InputMaybe<Scalars['String']>
  containsi?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  eq?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  not?: InputMaybe<StringFilterInput>
  notContains?: InputMaybe<Scalars['String']>
  notContainsi?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type Theme = {
  __typename?: 'Theme'
  createdAt?: Maybe<Scalars['DateTime']>
  locale?: Maybe<Scalars['String']>
  localizations?: Maybe<ThemeRelationResponseCollection>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ThemeLocalizationsArgs = {
  filters?: InputMaybe<ThemeFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type ThemeEntity = {
  __typename?: 'ThemeEntity'
  attributes?: Maybe<Theme>
  id?: Maybe<Scalars['ID']>
}

export type ThemeEntityResponse = {
  __typename?: 'ThemeEntityResponse'
  data?: Maybe<ThemeEntity>
}

export type ThemeEntityResponseCollection = {
  __typename?: 'ThemeEntityResponseCollection'
  data: Array<ThemeEntity>
  meta: ResponseCollectionMeta
}

export type ThemeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ThemeFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  locale?: InputMaybe<StringFilterInput>
  localizations?: InputMaybe<ThemeFiltersInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<ThemeFiltersInput>
  or?: InputMaybe<Array<InputMaybe<ThemeFiltersInput>>>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type ThemeInput = {
  name?: InputMaybe<Scalars['String']>
}

export type ThemeRelationResponseCollection = {
  __typename?: 'ThemeRelationResponseCollection'
  data: Array<ThemeEntity>
}

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  contains?: InputMaybe<Scalars['Time']>
  containsi?: InputMaybe<Scalars['Time']>
  endsWith?: InputMaybe<Scalars['Time']>
  eq?: InputMaybe<Scalars['Time']>
  gt?: InputMaybe<Scalars['Time']>
  gte?: InputMaybe<Scalars['Time']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  lt?: InputMaybe<Scalars['Time']>
  lte?: InputMaybe<Scalars['Time']>
  ne?: InputMaybe<Scalars['Time']>
  not?: InputMaybe<TimeFilterInput>
  notContains?: InputMaybe<Scalars['Time']>
  notContainsi?: InputMaybe<Scalars['Time']>
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  notNull?: InputMaybe<Scalars['Boolean']>
  null?: InputMaybe<Scalars['Boolean']>
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>
  startsWith?: InputMaybe<Scalars['Time']>
}

export type UploadFile = {
  __typename?: 'UploadFile'
  alternativeText?: Maybe<Scalars['String']>
  caption?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  ext?: Maybe<Scalars['String']>
  formats?: Maybe<Scalars['JSON']>
  hash: Scalars['String']
  height?: Maybe<Scalars['Int']>
  mime: Scalars['String']
  name: Scalars['String']
  previewUrl?: Maybe<Scalars['String']>
  provider: Scalars['String']
  provider_metadata?: Maybe<Scalars['JSON']>
  related?: Maybe<Array<Maybe<GenericMorph>>>
  size: Scalars['Float']
  updatedAt?: Maybe<Scalars['DateTime']>
  url: Scalars['String']
  width?: Maybe<Scalars['Int']>
}

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity'
  attributes?: Maybe<UploadFile>
  id?: Maybe<Scalars['ID']>
}

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse'
  data?: Maybe<UploadFileEntity>
}

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection'
  data: Array<UploadFileEntity>
  meta: ResponseCollectionMeta
}

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  caption?: InputMaybe<StringFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  ext?: InputMaybe<StringFilterInput>
  formats?: InputMaybe<JsonFilterInput>
  hash?: InputMaybe<StringFilterInput>
  height?: InputMaybe<IntFilterInput>
  id?: InputMaybe<IdFilterInput>
  mime?: InputMaybe<StringFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UploadFileFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>
  previewUrl?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  provider_metadata?: InputMaybe<JsonFilterInput>
  size?: InputMaybe<FloatFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  url?: InputMaybe<StringFilterInput>
  width?: InputMaybe<IntFilterInput>
}

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>
  caption?: InputMaybe<Scalars['String']>
  ext?: InputMaybe<Scalars['String']>
  formats?: InputMaybe<Scalars['JSON']>
  hash?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Int']>
  mime?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  previewUrl?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Scalars['String']>
  provider_metadata?: InputMaybe<Scalars['JSON']>
  size?: InputMaybe<Scalars['Float']>
  url?: InputMaybe<Scalars['String']>
  width?: InputMaybe<Scalars['Int']>
}

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection'
  data: Array<UploadFileEntity>
}

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']
  password: Scalars['String']
  provider?: Scalars['String']
}

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload'
  jwt?: Maybe<Scalars['String']>
  user: UsersPermissionsMe
}

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe'
  birthdate?: Maybe<Scalars['Date']>
  blocked?: Maybe<Scalars['Boolean']>
  bookings?: Maybe<BookingEntityResponseCollection>
  confirmed?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  firstname?: Maybe<Scalars['String']>
  friends?: Maybe<UsersPermissionsUserEntityResponseCollection>
  guide?: Maybe<GuideEntityResponse>
  id: Scalars['ID']
  lastname?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsMeRole>
  rooms?: Maybe<RoomEntityResponse>
  socketID?: Maybe<Scalars['String']>
  username: Scalars['String']
}

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name: Scalars['String']
  type?: Maybe<Scalars['String']>
}

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission'
  action: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity'
  attributes?: Maybe<UsersPermissionsPermission>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  id?: InputMaybe<IdFilterInput>
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
}

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection'
  data: Array<UsersPermissionsPermissionEntity>
}

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']
  password: Scalars['String']
  username: Scalars['String']
}

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  name: Scalars['String']
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>
  type?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>
}

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity'
  attributes?: Maybe<UsersPermissionsRole>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse'
  data?: Maybe<UsersPermissionsRoleEntity>
}

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection'
  data: Array<UsersPermissionsRoleEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  createdAt?: InputMaybe<DateTimeFilterInput>
  description?: InputMaybe<StringFilterInput>
  id?: InputMaybe<IdFilterInput>
  name?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>
  type?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  users?: InputMaybe<UsersPermissionsUserFiltersInput>
}

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  type?: InputMaybe<Scalars['String']>
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
}

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload'
  ok: Scalars['Boolean']
}

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser'
  blocked?: Maybe<Scalars['Boolean']>
  bookings?: Maybe<BookingRelationResponseCollection>
  confirmed?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  firstname?: Maybe<Scalars['String']>
  friends?: Maybe<UsersPermissionsUserRelationResponseCollection>
  guide?: Maybe<GuideEntityResponse>
  lastname?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  picture?: Maybe<UploadFileEntityResponse>
  provider?: Maybe<Scalars['String']>
  role?: Maybe<UsersPermissionsRoleEntityResponse>
  rooms?: Maybe<RoomRelationResponseCollection>
  socketID?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  username: Scalars['String']
}

export type UsersPermissionsUserBookingsArgs = {
  filters?: InputMaybe<BookingFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsUserFriendsArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsUserRoomsArgs = {
  filters?: InputMaybe<RoomFiltersInput>
  pagination?: InputMaybe<PaginationArg>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity'
  attributes?: Maybe<UsersPermissionsUser>
  id?: Maybe<Scalars['ID']>
}

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse'
  data?: Maybe<UsersPermissionsUserEntity>
}

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection'
  data: Array<UsersPermissionsUserEntity>
  meta: ResponseCollectionMeta
}

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  blocked?: InputMaybe<BooleanFilterInput>
  bookings?: InputMaybe<BookingFiltersInput>
  confirmationToken?: InputMaybe<StringFilterInput>
  confirmed?: InputMaybe<BooleanFilterInput>
  createdAt?: InputMaybe<DateTimeFilterInput>
  email?: InputMaybe<StringFilterInput>
  firstname?: InputMaybe<StringFilterInput>
  friends?: InputMaybe<UsersPermissionsUserFiltersInput>
  guide?: InputMaybe<GuideFiltersInput>
  id?: InputMaybe<IdFilterInput>
  lastname?: InputMaybe<StringFilterInput>
  location?: InputMaybe<StringFilterInput>
  not?: InputMaybe<UsersPermissionsUserFiltersInput>
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>
  password?: InputMaybe<StringFilterInput>
  phone?: InputMaybe<StringFilterInput>
  provider?: InputMaybe<StringFilterInput>
  resetPasswordToken?: InputMaybe<StringFilterInput>
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>
  rooms?: InputMaybe<RoomFiltersInput>
  socketID?: InputMaybe<StringFilterInput>
  updatedAt?: InputMaybe<DateTimeFilterInput>
  username?: InputMaybe<StringFilterInput>
}

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>
  bookings?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  confirmationToken?: InputMaybe<Scalars['String']>
  confirmed?: InputMaybe<Scalars['Boolean']>
  email?: InputMaybe<Scalars['String']>
  firstname?: InputMaybe<Scalars['String']>
  friends?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  guide?: InputMaybe<Scalars['ID']>
  lastname?: InputMaybe<Scalars['String']>
  location?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['ID']>
  provider?: InputMaybe<Scalars['String']>
  resetPasswordToken?: InputMaybe<Scalars['String']>
  role?: InputMaybe<Scalars['ID']>
  rooms?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  socketID?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection'
  data: Array<UsersPermissionsUserEntity>
}
