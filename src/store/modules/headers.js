import UserRoleComponent from './../../json/UserRoleComponent.json'
import LeftMenuJson from './../../json/LeftMenuData.json'
export default {
  state: {
    roleContentJson: UserRoleComponent,
    LeftMenuData: LeftMenuJson,
    RoleContent: [],
    pageInfo: {},
    LeftmenuObject: {}
  },
  getters: {
    getRoleJson: state => state.roleContentJson,
    getRoleContent: state => state.RoleContent,
    getPageInfo: state => state.pageInfo,
    getLeftMenuData: state => state.LeftMenuData,
    getLeftMenuName: state => state.LeftmenuObject
  },
  actions: {
    sendRoleContent ({commit}, payload) {
      commit('setRoleContent', payload)
    },
    sendContentInfo ({commit}, payload) {
      commit('setPageTitle', payload)
    },
    LeftMenuContentName ({commit}, payload) {
      commit('setMenuName', payload)
    }
  },
  mutations: {
    setRoleContent: (state, data) => {
      state.RoleContent = data.subchild
    },
    setPageTitle: (state, data) => {
      state.pageInfo = data
    },
    setMenuName: (state, data) => {
      state.LeftmenuObject = data
    }
  }
}
