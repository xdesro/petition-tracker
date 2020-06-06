<template>
  <div class="scrolling-header">
    <a class="scrolling-header__brand" href="#">Mission: Petition</a>
    <progress
      class="scrolling-header__progress-bar"
      :max="petitionsCount"
      :value="petitionsSigned"
    ></progress>
    <div class="scrolling-header__progress">
      {{ petitionsSigned }}/{{ petitionsCount }} signed
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      petitions: (state) => state.petitions.all,
    }),
    petitionsCount() {
      return this.petitions.length;
    },
    petitionsSigned() {
      return this.petitions.filter((petition) => petition.signed).length;
    },
  },
};
</script>
