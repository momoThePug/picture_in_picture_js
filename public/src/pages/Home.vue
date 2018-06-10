<template>
  <main-layout>
        <div class="input-field">
          <input v-on:keyup.enter="detectBrand" id="video-url" v-bind:disabled="isBlocked" type="text" class="validate" />
          <label for="video-url">URL</label>
       </div>
         <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">play_arrow</i></a>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/VideoContainer.vue";

export default {
  name: "home",
  components: {
    MainLayout
  }
};
</script>
