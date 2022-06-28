import updateGuide from '@/graphql/mutations/updateGuide.gql'
import updateFavoritePlace from '@/graphql/mutations/updateFavoritePlace.gql'

export const state = () => ({
  guide: Object,
})

export const actions = {
  updateFavoritePlace(_, { id, input }) {
    const client = this.app.apolloProvider.defaultClient
    return client.mutate({
      mutation: updateFavoritePlace,
      variables: {
        id,
        input,
      },
    })
  },
  updateGuide(_, { id, input }) {
    const client = this.app.apolloProvider.defaultClient
    client.mutate({
      mutation: updateGuide,
      variables: {
        input,
        id,
      },
    })
  },
  async load({ dispatch, commit }) {
    const client = await dispatch('user/loadGuide', null, { root: true })
    commit('setGuide', client?.guide.data)
  },
}

export const mutations = {
  setGuide(state, guide) {
    state.guide = guide
  },
}

export const getters = {
  getExperiences: (state) => {
    return state.guide?.attributes?.experiences.data
  },
  getID: (state) => {
    return state.guide?.id
  },
  getExperiencesSlot: (state) => {
    return state.guide?.attributes?.experienceSlots.data
  },
}
