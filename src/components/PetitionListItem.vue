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
export default {
  props: ["petition"],
};
</script>
