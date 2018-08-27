<template>
    <div id="youtube">
        <youtube-media  @ready="ready" :player-vars="vars" :player-width="width" :player-height="height" :video-id="mediaId"></youtube-media > 
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
    return {
      vars: {
        theme:'dark',
        color:'white',
        showinfo: 0,
        autohide: 2,
        fs: 0,
        rel: 0,
        controls: 0,
        showsearch: 0,
        frameborder: 0,
        modestbranding: 1
      }
    };
  },

  props: ["mediaId", "height", "width"],
  methods: {
    ready() {
    }
  }
};
</script>
