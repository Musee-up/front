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

class User implements UserDAO {
  // role?: Maybe<UsersPermissionsRoleEntityResponse>;
  // rooms?: Maybe<RoomRelationResponseCollection>;
  // friends?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  // guide?: Maybe<GuideEntityResponse>;
  // socketID?: Maybe<Scalars['String']>
  // confirmed?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['ID']>
  blocked?: Maybe<Scalars['Boolean']>
  bookings?: Maybe<BookingRelationResponseCollection>
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
    this.id = id
    this.blocked = input.blocked
    // this.confirmed = input.confirmed
    this.createdAt = input.createdAt
    this.email = input.email
    this.firstname = input.firstname
    this.lastname = input.lastname
    this.location = input.location
    this.phone = input.phone
    this.provider = input.provider
    this.socketID = input.socketID
    this.updatedAt = input.updatedAt
    this.username = input.username
    this.picture = flatten(input.picture)
    if (input.bookings) this.bookings = Booking.mapList(input.bookings)
  }
}

export default User
