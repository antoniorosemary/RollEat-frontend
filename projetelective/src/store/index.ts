import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }, user) {
      // TODO: Authenticate the user with your API and get the user data
      commit('setUser', user)
    },
    logout({ commit }) {
      // TODO: Log out the user from your API
      commit('setUser', null)
    }
  }
})
