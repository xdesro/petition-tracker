import petitions from "../../../petitions.json";
const state = () => ({
  all: petitions.map(petition => Object.assign(petition, { signed: false }))
});
const getters = {};
const actions = {
  signPetition({ commit }, petition) {
    commit("setPetitionSigned", petition);
  }
};
const mutations = {
  getPetitions(state) {
    if (localStorage.getItem("petitions")) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem("petitions")))
      );
    }
  },
  setPetitionSigned(state, { url }) {
    state.all.find(petition => petition.url === url).signed = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
