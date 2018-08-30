export default {
  state: {
    currentTab: '',
    role: ''
  },
  getters: {
    getCurrentTab: state => state.currentTab,
    getRole: state => state.role
  },
  actions: {
    sendCurrentTab ({ commit }, payload) {
      commit('setTab', payload)
    },
    sendRole ({commit}, payload) {
      commit('setRole', payload)
    }
  },
  mutations: {
    setTab: (state, data) => {
      state.currentTab = data
    },
    setRole: (state, data) => {
      state.role = data
    }
  }
}
