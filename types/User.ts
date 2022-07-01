import { flatten } from './tools'

import {
  Scalars,
  Maybe,
  UploadFileEntityResponse,
  UsersPermissionsUserEntityResponse,
  UsersPermissionsUser as UserDAO,
} from '@/graphql/generated'

class User implements UserDAO {
  id?: Maybe<Scalars['ID']>
  blocked?: Maybe<Scalars['Boolean']>
  // bookings?: Maybe<BookingRelationResponseCollection>;
  confirmed?: Maybe<Scalars['Boolean']>
  createdAt?: Maybe<Scalars['DateTime']>
  email: Scalars['String']
  firstname?: Maybe<Scalars['String']>
  // friends?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  // guide?: Maybe<GuideEntityResponse>;
  lastname?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  picture?: Maybe<UploadFileEntityResponse>
  provider?: Maybe<Scalars['String']>
  // role?: Maybe<UsersPermissionsRoleEntityResponse>;
  // rooms?: Maybe<RoomRelationResponseCollection>;
  socketID?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  username: Scalars['String']

  static map(UserInput: UsersPermissionsUserEntityResponse): User {
    const d = UserInput.data
    // if (!d?.attributes || !d.id) return new User()
    const att = d?.attributes
    return new User(
      d?.id || 'noID',
      att || {
        email: '',
        username: '',
      }
    )
  }

  constructor(id: Maybe<Scalars['ID']>, input: UserDAO) {
    this.id = id
    this.blocked = input.blocked
    this.confirmed = input.confirmed
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
  }
}

export default User
