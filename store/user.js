import singleUserQuery from '@/graphql/queries/user'
import updateUser from '@/graphql/mutations/me'

export const state = () => ({
  me: Object,
})

export const actions = {
  load({ commit }) {
    console.log('loading client')
    const client = this.app.apolloProvider.defaultClient
    return client
      .query({
        query: singleUserQuery,
        variables: {
          id: this.$strapi.user.id,
        },
      })
      .then((user) => {
        commit('setMyself', user.data.me)
        return user.data.me
      })
  },
}

export const mutations = {
  setMyself(state, me) {
    state.me = me
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
  getFriends: (state) => {
    return state.me.friends.data
  },
  getFriend: (state, id) => {
    return state.me.friends.data.filter((x) => x.id === id)
  },
  getSocketId: (state) => {
    return state.me.socketID
  },
}
