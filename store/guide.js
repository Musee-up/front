import singleUserQuery from '@/graphql/queries/user'
// import guideQuery from '@/graphql/queries/guide'

export const state = () => ({
  guide: Object,
})

export const actions = {
  async load({ commit }) {
    const client = this.app.apolloProvider.defaultClient
    const user = await client.query({
      query: singleUserQuery,
      variables: {
        id: this.$strapi.user.id,
      },
    })
    // const guide = await client.query({
    //   query: guideQuery,
    //   variables: {
    //     id: user.data.me.guide.data.id,
    //   },
    // })
    // console.log(guide)
    commit('setGuide', user.data.me.guide)
  },
}
export const mutations = {
  setGuide(state, guide) {
    state.guide = guide
  },
}

export const getters = {
  getExperiences: (state) => {
    return state.guide.data?.attributes.experiences.data
  },
  getExperiencesSlot: (state) => {
    return state.guide.data.attributes.experience_slots.data
  },
}
