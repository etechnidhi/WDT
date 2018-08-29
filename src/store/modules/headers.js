export default {
  state: {
    currentTab: ''
  },
  getters: {
    getCurrentTab: state => state.currentTab
  },
  actions: {
    sendCurrentTab ({ commit }, payload) {
      commit('setTab', payload)
    }
  },
  mutations: {
    setTab: (state, data) => {
      state.currentTab = data
    }
  }
}
