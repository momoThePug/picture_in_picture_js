<template>
  <div class="container">
    <slot></slot>
    <VideoInput></VideoInput>
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

<style scoped>
</style>
