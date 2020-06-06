import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import petitions from "./petitions";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "petition-tracker",
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    petitions,
  },
  plugins: [vuexLocal.plugin],
});
