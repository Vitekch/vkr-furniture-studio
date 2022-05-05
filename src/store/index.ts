import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobMenuVisible: false
  },
  mutations: {
    setMobMenuVisible: (state, payload: boolean) => {
      state.isMobMenuVisible = payload;
    }
  },
  actions: {},
  modules: {},
});
