import Vue from 'vue'
import Vuex from 'vuex'
import headers from './modules/headers'
import login from './modules/login'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const debug = process.env.Node_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    headers,
    login
  },
  strict: debug,
  plugins: [createPersistedState()]
})
