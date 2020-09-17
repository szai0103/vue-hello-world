import Vue from "vue";
import Vuex from "vuex";
import { version } from "../../package.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packageVersion: process.env.PACKAGE_VERSION || "0",
    environment: process.env.NODE_ENV
  },
  getters: {
    appVersion: state => {
      return version + " " + state.environment;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
