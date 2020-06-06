<template>
  <li :class="`petition ${petition.signed ? 'petition--signed' : ''}`">
    <a
      class="petition__link"
      :href="petition.url"
      @click="signPetition(petition)"
    >
      <h2 class="petition__title">{{ petition.name }}</h2>
      <span class="petition__url">{{ petitionUrl }}</span>
      <div class="petition__action" v-if="!petition.signed">
        Sign <IconArrowAngle class="petition__action-icon" />
      </div>
      <div class="petition__action petition__action--signed" v-else>
        Signed <IconCheck class="petition__action-icon" />
      </div>
    </a>
  </li>
</template>

<script>
import { mapActions } from "vuex";

import IconArrowAngle from "./icons/IconArrowAngle";
import IconCheck from "./icons/IconCheck";

export default {
  props: ["petition"],
  components: {
    IconArrowAngle,
    IconCheck
  },
  computed: {
    petitionUrl() {
      const url = new URL(this.petition.url);
      return url.hostname;
    }
  },
  methods: mapActions("petitions", ["signPetition"])
};
</script>
