const state = () => ({
  all: [
    {
      name: "Black Lives Matter #DefundThePolice",
      url: "https://blacklivesmatter.com/defundthepolice/",
      signed: true,
    },
    {
      name: "Reopen Tamir Rice's criminal case",
      url:
        "https://www.change.org/p/department-of-justice-investigate-the-killing-of-tamir-rice",
      signed: false,
    },
  ],
});
const getters = {};
const actions = {
  signPetition({ commit }, petition) {
    commit("setPetitionSigned", petition);
  },
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
    state.all.find((petition) => petition.url === url).signed = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
