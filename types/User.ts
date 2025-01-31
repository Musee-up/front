import { flatten } from './tools'
import Booking from './Booking'

import {
  Scalars,
  Maybe,
  UploadFileEntityResponse,
  UsersPermissionsUserEntityResponse,
  UsersPermissionsUser as UserDAO,
  UsersPermissionsUserEntity,
  UsersPermissionsUserEntityResponseCollection,
} from '@/graphql/generated'

class User {
  // role?: Maybe<UsersPermissionsRoleEntityResponse>;
  role?: Maybe<string>
  // rooms?: Maybe<RoomRelationResponseCollection>;
  // friends?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  // guide?: Maybe<GuideEntityResponse>;
  // socketID?: Maybe<Scalars['String']>
  // confirmed?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['ID']>
  blocked?: Maybe<Scalars['Boolean']>
  bookings?: Array<Maybe<Booking>>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  firstname?: Maybe<Scalars['String']>
  lastname?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  picture?: Maybe<UploadFileEntityResponse>
  provider?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  username: Scalars['String']
  favorite: any

  static fromEntity(
    entity: Maybe<UsersPermissionsUserEntity> | undefined
  ): User {
    if (!entity) throw new Error('User.fromEntity: entity is undefined')
    if (!entity.id || !entity.attributes)
      throw new Error('User.fromEntity: id or attributes is undefined')

    return new User(entity.id, entity.attributes)
  }

  static mapList(
    list: UsersPermissionsUserEntityResponseCollection
  ): Array<User> {
    if (!list?.data) throw new Error('User.mapList: list is undefined')
    return list.data.map(User.fromEntity)
  }

  static map(input: UsersPermissionsUserEntityResponse): User {
    return User.fromEntity(input.data)
  }

  constructor(id: Maybe<Scalars['ID']>, input: UserDAO) {
    // this.confirmed = input.confirmed
    // this.socketID = input.socketID
    this.id = id
    this.blocked = input.blocked
    this.createdAt = input.createdAt
    this.email = input.email
    this.firstname = input.firstname
    this.lastname = input.lastname
    this.location = input.location
    this.phone = input.phone
    this.provider = input.provider
    this.updatedAt = input.updatedAt
    this.username = input.username
    this.picture = flatten(input.picture)
    this.role = input.role?.data?.attributes?.name
    this.favorite = input.favorite
    if (input.bookings) this.bookings = Booking.mapList(input.bookings)
  }
}

export default User
