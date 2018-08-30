import { getField, updateField } from 'vuex-map-fields'
export default {
  state: {
    error: false,
    errorMessage: ''
  },
  getters: {
    getField,
    getErrorMessage: state => state.errorMessage,
    isError: state => state.error
  },
  actions: {
    sendError ({commit}, payload) {
      console.log(payload, '000000000000')
      commit('setError', payload)
    }
  },
  mutations: {
    updateField,
    setError: (state, data) => {
      state.error = true
      state.errorMessage = data
    }
  }
}
