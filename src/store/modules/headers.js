import UserRoleComponent from './../../json/UserRoleComponent.json'
export default {
  state: {
    roleJson: UserRoleComponent,
    RoleContent: []
  },
  getters: {
    getRoleJson: state => state.roleJson,
    getRoleContent: state => state.RoleContent
  },
  actions: {
    sendRoleContent ({commit}, payload) {
      commit('setRoleContent', payload)
    }
  },
  mutations: {
    setRoleContent: (state, data) => {
      state.RoleContent = data.subchild
    }
  }
}
