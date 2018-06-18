<template>
  <div>
      <main-layout>
          <VideoStrategy></VideoStrategy>
      </main-layout>
  </div>
</template>

<script>
import MainLayout from "../layouts/VideoContainer.vue";
import { Router } from "@/router/Router";
import { LoadVideoStrategy } from "../players/Loader";

const VideoStrategy = LoadVideoStrategy(Router.getParam("url"));
export default {
  name: "player",
  components: {
    MainLayout,
    VideoStrategy
  }
};
</script>
