import singleUserQuery from '@/graphql/queries/account/client/me.gql'
import userGuideQuery from '@/graphql/queries/account/client/guide.gql'
import updateUser from '@/graphql/mutations/me'
import User from '@/types/User'

export const state = () => ({
  me: Object,
})

const load = (client, { commit }, query, id) => {
  return client
    .query({
      query,
      variables: {
        id,
      },
    })
    .then((query) => {
      const core = query.data.usersPermissionsUser
      commit('setMyself', core)
      return core
    })
    .catch(console.error)
}

export const actions = {
  loadGuide(commit, id) {
    id = id || this.$strapi.user.id
    const client = this.app.apolloProvider.defaultClient
    return load(client, commit, userGuideQuery, id)
  },
  load(commit) {
    const id = this.$strapi.user.id
    const client = this.app.apolloProvider.defaultClient
    load(client, commit, singleUserQuery, id)
  },
}

export const mutations = {
  setMyself(state, me) {
    state.me = User.map(me)
  },
  updateSocketID(state, id) {
    const client = this.app.apolloProvider.defaultClient
    client.mutate({
      mutation: updateUser,
      variables: {
        id: this.$strapi.user.id,
        input: { socketID: id },
      },
    })
    state.me.id = id
  },
}

export const getters = {
  getBookingsExperience: (state) => state.me.bookings?.map((x) => x.experience),
  getBookings: (state) => state.me.bookings,
  getBooking: (state) => (id) => {
    if (!state.me.bookings) return
    return state.me.bookings.find((x) => x.id === id)
  },
  getFriends: (state) => {
    return state.me?.friends?.data
  },
  getFriend: (state, id) => {
    return state.me?.friends.data.filter((x) => x.id === id)
  },
  getSocketId: (state) => {
    return state.me?.socketID
  },
  getCore: (state) => state.me,
}
