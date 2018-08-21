<template>
  <div class="container">
    <slot></slot>
    <VideoInput>
    </VideoInput>

  </div>
</template>

<script>
import VideoInput from "@/components/VideoInput.vue";
export default {
  components: {
    VideoInput
  }
};
</script>

<style>
html,body {
   -webkit-app-region: drag;
}

.no-drag {
  -webkit-app-region: no-drag;
}
</style>
