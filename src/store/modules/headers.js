export default {
  state: {
    currentTab: '',
    // show: false
  },
  getters: {
    getCurrentTab: state => state.currentTab,
    // getShow: state => state.show
  },
  actions: {
    sendCurrentTab ({ commit }, payload) {
      commit('setTab', payload)
    },
    // showDropdown ({ commit }, payload) {
    //   commit('setShow', payload)
    // }
  },
  mutations: {
    setTab: (state, data) => {
      state.currentTab = data
    }
    // setShow: (state, data) => {
    //   console.log(data)
    //   state.show = data
    // }
  }
}
