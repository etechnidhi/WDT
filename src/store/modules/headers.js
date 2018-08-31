import role from './../../json/role.json'
export default {
  state: {
    roleJson: role,
    role: '',
    RoleContent: []
  },
  getters: {
    getRole: state => state.role,
    getRoleJson: state => state.roleJson,
    getRoleContent: state => state.RoleContent
  },
  actions: {
    sendRole ({commit}, payload) {
      commit('setRole', payload)
    },
    sendRoleContent ({commit}, payload) {
      commit('setRoleContent', payload)
    }
  },
  mutations: {
    setRole: (state, data) => {
      state.role = data
    },
    setRoleContent: (state, data) => {
      state.RoleContent = data.subchild
    }
  }
}
