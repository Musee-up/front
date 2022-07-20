import publicProfileQuery from '@/graphql/queries/guide.gql'
import updateFavoritePlace from '@/graphql/mutations/guide/updateFavoritePlace.gql'
import updateGuide from '@/graphql/mutations/guide/update.gql'
import Guide from '@/types/Guide'

export const state = () => ({
  guide: Object,
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
      console.log(query)
      const guide = Guide.map(query.data.guide)
      commit('setGuide', guide)
      return guide
    })
    .catch(console.error)
}

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
  loadProfile(commit, id) {
    const client = this.app.apolloProvider.defaultClient
    return load(client, commit, publicProfileQuery, id)
  },

  async load({ dispatch, commit }, id) {
    const client = await dispatch('user/loadGuide', id, { root: true })
    console.log(client)
    commit('setGuide', Guide.map(client.data.attributes.guide))
  },
}

export const mutations = {
  setGuide(state, guide) {
    state.guide = guide
  },
}

export const getters = {
  getExperiences: (state) => {
    return state.guide.experiences
  },
  getCore: (state) => {
    return state.guide
  },
  getID: (state) => {
    return state.guide.id
  },
  getExperiencesSlot: (state) => {
    return state.guide.slots?.data
  },
}
