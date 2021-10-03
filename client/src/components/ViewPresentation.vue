
<template>
  <div>
    <div class="rwv2">
      <div class="reveal">
<div v-html="presentation.content" class="slides"></div>
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="test">test</button>
    </div>
  </div>
</template>

<script>
import PresentationsService from "@/services/PresentationsService";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

export default {
  data() {
    return {
      presentation: {
        title: null,
        content: null,
      },
      error: null,
      required: (value) => !!value || "Required.",
    };
  },
  methods: {
    async test() {
      this.error = null;

      try {
        let deck = new Reveal({
          plugins: [Markdown],
        });
        deck.initialize();
      } catch (err) {
        console.log(err);
      }
    },
  },
  async beforeCreate() {
    try {
      const presentationId = this.$store.state.route.params.presentationId;
      this.presentation = (
        await PresentationsService.show(presentationId)
      ).data;
    } catch (err) {
      console.log(err);
    }
  },
  async mounted() {},
};
</script>
 
<style scoped src="../../node_modules/reveal.js/dist/reveal.css" >
</style>
<style scoped src="../../node_modules/reveal.js/dist/theme/black.css" >
</style>
<style scoped lang="css" >
@import "../../node_modules/reveal.js/dist/reveal.css";
@import "../../node_modules/reveal.js/dist//theme/beige.css";

.rwv {
  height: 400px;
}

.rwv2 {
  height: 400px;
  /*background-color: rgb(42, 165, 52);*/
}
</style>