import { getField, updateField } from 'vuex-map-fields'
import data from './../../json/data.json'
export default {
  state: {
    data: data,
    error: false,
    errorMessage: '',
    role: '',
    user: {}
  },
  getters: {
    getField,
    getRole: state => state.role,
    getErrorMessage: state => state.errorMessage,
    isError: state => state.error,
    getUser: state => state.user
  },
  actions: {
    loginDetail ({commit}, payload) {
      commit('login', payload)
    }
  },
  mutations: {
    updateField,
    login: (state, data) => {
      state.role = ''
      state.errorMessage = ''
      state.user = {}
      for (var i = 0; i < state.data.length; i++) {
        if (state.data[i].email === data.email && state.data[i].password === data.password) {
          state.role = state.data[i].role
          state.user = data
        }
      }
      if (state.role !== '') {
        console.log(state, '9999999999999999999')
      } else {
        state.error = true
        state.errorMessage = 'Invalid email or Password'
      }
    }
  }
}
