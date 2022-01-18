import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    user
  },
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })]
})

export default store