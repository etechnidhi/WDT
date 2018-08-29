export default{
  state: {
    currentTab: ''
  },
  getters: {
    getCurrentTab: state => state.currentTab
  },
  actions: {
    sendCurrentTab ({commit}, payload) {
      console.log(payload, '0000000000000000')
    }
  },
  mtations: {
  }
}
