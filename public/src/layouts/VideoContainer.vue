<template>
<MainLayout>
  <div class="row">
        <div class="col s12">
            <slot></slot>      
            <VideoContainer></VideoContainer>
        </div> 
  </div>
</MainLayout>
</template>

<script>
import MainLayout from "./Main.vue";
import VideoContainer from "@/components/VideoInput.vue";
export default {
  components: {
    VideoContainer,
    MainLayout
  }
};
</script>

<style scoped>
</style>
