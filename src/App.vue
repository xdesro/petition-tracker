<template>
  <div id="app">
    <Intro />
    <ul class="petitions-list">
      <PetitionListItem
        v-for="petition in petitions"
        :key="petition.url"
        :petition="petition"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Intro from "./components/Intro";
import PetitionListItem from "./components/PetitionListItem";

export default {
  name: "App",
  components: {
    Intro,
    PetitionListItem,
  },
  computed: mapState({
    petitions: (state) => state.petitions.all,
  }),
};
</script>
