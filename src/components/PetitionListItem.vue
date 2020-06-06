<template>
  <li>
    <input
      type="checkbox"
      :checked="petition.signed"
      @click="signPetition(petition)"
      :disabled="petition.signed"
    />
    <a :href="petition.url" @click="signPetition(petition)">{{
      petition.name
    }}</a>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["petition"],
  methods: mapActions("petitions", ["signPetition"]),
};
</script>
