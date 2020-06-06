<template>
  <div id="app">
    <ul class="petitions-list">
      <PetitionListItem
        class="petitions-list__item"
        v-for="petition in petitions"
        :key="petition.url"
        :petition="petition"
      />
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import PetitionListItem from "./components/PetitionListItem";

export default {
  name: "App",
  components: {
    PetitionListItem,
  },
  computed: mapState({
    petitions: (state) => state.petitions.all,
  }),
  methods: mapActions("petitions", ["signPetition"]),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
