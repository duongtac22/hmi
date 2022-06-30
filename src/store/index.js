import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      user: null,
      isLogin: false,
      token: null
    };
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getIsLogin: (state) => {
      return state.isLogin
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit("user", user);
    },
    setToken({ commit }, token) {
      commit("token", token);
    },
  },
  mutations: {
    changeLoginStatus: (state, value) => {
      state.isLogin = value
    },
    user(state, user) {
      state.user = user;
    },
    token(state, token) {
      state.token = token;
    },
    clearState: (state) => {
      state.isLogin = false
      state.token = null
    },
  },
});
