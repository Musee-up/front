import publicProfileQuery from '@/graphql/queries/guide.gql'
import Guide from '@/types/guide'

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
      const guide = Guide.map(query.data.guide)
      commit('setGuide', guide)
      return guide
    })
    .catch(console.error)
}

export const actions = {
  loadProfile(commit, id) {
    const client = this.app.apolloProvider.defaultClient
    return load(client, commit, publicProfileQuery, id)
  },

  async load({ dispatch, commit }, id) {
    const client = await dispatch('user/loadGuide', id, { root: true })
    commit('setGuide', Guide.map(client?.guide))
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
    return state.guide.experienceSlots.data
  },
}
