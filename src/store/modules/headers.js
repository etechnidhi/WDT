import role from './../../json/role.json'
export default {
  state: {
    roleJson: role,
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
