import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  actions: {
    user({ commit }, user) {
      commit("user", user);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
});
