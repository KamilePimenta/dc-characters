import { createStore } from 'vuex';

const store = createStore({
  state: {
    darkMode: false,
  },
  mutations: {
    setDarkMode: (state, res) => {
      state.darkMode = res;
    }
  },
  actions: {
    changeTheme({ commit }, res) {
      commit('setDarkMode', res);
    },
  },
  getters: {
    darkMode: (state) => state.darkMode,
  },
});

export default store;
