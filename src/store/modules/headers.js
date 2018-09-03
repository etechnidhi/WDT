import UserRoleComponent from './../../json/UserRoleComponent.json'
export default {
  state: {
    roleContentJson: UserRoleComponent,
    RoleContent: [],
    pageInfo: {}
  },
  getters: {
    getRoleJson: state => state.roleContentJson,
    getRoleContent: state => state.RoleContent,
    getPageInfo: state => state.pageInfo
  },
  actions: {
    sendRoleContent ({commit}, payload) {
      commit('setRoleContent', payload)
    },
    sendContentInfo ({commit}, payload) {
      commit('setPageTitle', payload)
    }
  },
  mutations: {
    setRoleContent: (state, data) => {
      state.RoleContent = data.subchild
    },
    setPageTitle: (state, data) => {
      state.pageInfo = data
    }
  }
}
