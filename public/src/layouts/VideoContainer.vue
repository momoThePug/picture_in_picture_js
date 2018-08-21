<template>
  <div class="player no-drag">
    <slot></slot>      
    <VideoInput v-bind:mediaUrl="mediaUrl"></VideoInput>
  </div>
</template>

<script>
import VideoInput from "@/components/VideoInput.vue";
export default {
  props: ["mediaUrl"],
  components: {
    VideoInput
  }
};
</script>

<style>
    body, .player {
      background-color: #000;
    }
    .player  iframe {
      margin: 0 auto;
      position: relative;
      display: block;
    }
</style>
