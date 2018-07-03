<template>
    <div id="youtube">
        <youtube-media  :player-width="width" :player-height="height" :video-id="mediaId"></youtube-media > 
    </div>
</template>


<script>
import VueYouTubeEmbed from "./lib/vue-youtube-embed";
import Vue from "vue";

Vue.use(VueYouTubeEmbed, {
  global: true,
  "component-name": "youtube-media"
});

export default {
  name: "Youtube",
  data() {
    return {};
  },
  mounted() {},
  props: ["mediaId", "height", "width"],
  methods: {}
};
</script>
