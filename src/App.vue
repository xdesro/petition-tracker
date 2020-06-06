<template>
  <div id="app">
    <Intro v-on:activate="scrollToFirstUnsigned" />
    <transition name="scrolling-header">
      <ScrollingHeader v-if="scrolled" />
    </transition>
    <ul class="petitions-list" ref="petitions-list">
      <PetitionListItem
        v-for="(petition, index) in petitions"
        :ref="`petition-${index}`"
        :key="petition.url"
        :petition="petition"
      />
    </ul>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Intro from "./components/Intro";
import ScrollingHeader from "./components/ScrollingHeader";
import PetitionListItem from "./components/PetitionListItem";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Intro,
    ScrollingHeader,
    PetitionListItem,
    Footer,
  },
  data() {
    return {
      scrolled: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: mapState({
    petitions: (state) => state.petitions.all,
  }),
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY >= this.$refs["petitions-list"].offsetTop;
    },
    scrollToFirstUnsigned() {
      const firstUnsignedIndex = this.petitions.findIndex(
        (petition) => !petition.signed
      );
      window.scrollTo(
        0,
        this.$refs[`petition-${firstUnsignedIndex}`][0].$el.offsetTop - 100
      );
    },
  },
};
</script>
