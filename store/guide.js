export const state = () => ({
  guide: Object,
})

export const actions = {
  async load({ dispatch, commit }) {
    const client  = await dispatch('user/load', null,
      {root:true})
    commit('setGuide', client.guide.data)
  },
}

export const mutations = {
  setGuide(state, guide) {
    state.guide = guide
  },
}

export const getters = {
  getExperiences: (state) => {
    return state.guide.attributes.experiences.data
  },
  getExperiencesSlot: (state) => {
    return state.guide.attributes.experience_slots.data
  },
}
