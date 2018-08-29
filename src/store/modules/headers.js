export default{
  state: {
    currentTab: '',
    show: false
  },
  getters: {
    getCurrentTab: state => state.currentTab
  },
  actions: {
    sendCurrentTab ({commit}, payload) {
      console.log(payload, '0000000000000000')
    },
    showDropdown ({commit}, payload) {
      console.log(payload, '55555555555555')
      commit('setShow', payload)
    }
  },
  mtations: {
    setShow: (state, data) => {
      console.log(data, '555555555555555555')
    }
  }
}
