<template>
  <div>
      <main-layout>
          <VideoStrategy  v-bind:mediaId="mediaId"></VideoStrategy>
      </main-layout>
  </div>
</template>

<script>
import MainLayout from "../layouts/VideoContainer.vue";
import { Router } from "@/router/Router";
import { LoadVideoStrategy } from "../players/Loader";

const VideoStrategyPack = LoadVideoStrategy(Router.getParam("url"));
const VideoStrategy = VideoStrategyPack.component;

export default {
  name: "player",
  data() {
    return {
      mediaId: VideoStrategyPack.mediaId
    };
  },
  components: {
    MainLayout,
    VideoStrategy
  }
};
</script>
