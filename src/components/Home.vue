<template>
  <div id="Home">
    <div class="slide">
      <Slide></Slide>
    </div>
    <div class="main">
      <Main />
    </div>
  </div>
</template>

<script>
import Main from "./Main.vue";
import Slide from "./SlideContent.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Main,
    Slide,
  },
  computed: {
    ...mapGetters(["user"]),
  },
  // props: ["user"],
};
</script>

<style></style>
