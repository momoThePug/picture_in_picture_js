<template>
      <main-layout v-bind:mediaUrl="mediaUrl">
          <VideoStrategy v-bind:width="width" v-bind:height="height" v-bind:mediaId="mediaId"></VideoStrategy>
      </main-layout>
</template>

<script>
import MainLayout from "../layouts/VideoContainer.vue";
import { Router } from "@/router/Router";
import { LoadVideoStrategy } from "../players/Loader";

const $window = $(window);

/* Resolving player url */
const currentUrl = Router.getParam("url");
const VideoStrategyPack = LoadVideoStrategy(currentUrl);
const VideoStrategy = VideoStrategyPack.component;

export default {
  name: "player",
  data() {
    return {
      mediaUrl:currentUrl,
      mediaId: VideoStrategyPack.mediaId,
      height: this.calcHeight(),
      width: this.calcWidth()
    };
  },
  methods:{
    calcHeight(){
      return $window.innerHeight() - 6;
    },
    calcWidth(){
      return $window.innerWidth() - 10;
    }
  },
  mounted(){
    const self = this;
    $window.resize(function() {
          self.width = self.calcWidth();
          self.height = self.calcHeight();
    });
  },
  components: {
    MainLayout,
    VideoStrategy
  }
};
</script>

