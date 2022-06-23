export const state = () => ({
  guide: Object,
})

export const actions = {
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
