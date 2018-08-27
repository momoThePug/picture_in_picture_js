<template>
  <div class="">
    <WinActions></WinActions>
    <VideoInput></VideoInput>
        <slot></slot>
  </div>
</template>

<script>
import WinActions from "@/components/WinActions.vue";
import VideoInput from "@/components/VideoInput.vue";
export default {
  components: {
    VideoInput, WinActions
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
