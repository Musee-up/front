import publicProfileQuery from '@/graphql/queries/guide.gql'
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
      const guide = query.data.guide.data
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
  getCore: (state) => {
    return state.guide?.attributes
  },
  getID: (state) => {
    return state.guide?.id
  },
  getExperiencesSlot: (state) => {
    return state.guide?.attributes?.experienceSlots.data
  },
}
