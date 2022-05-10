export const state = () => ({
  list: []
})

export const mutations = {
  save(state, experiences) {
    state.list = experiences
  },
}
