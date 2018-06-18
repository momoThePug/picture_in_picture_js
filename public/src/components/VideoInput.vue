<template>
<div>
    <div class="fixed-action-btn">
        <!-- Modal Trigger -->
        <a class="btn-floating btn-large waves-effect waves-light pink darken-4 modal-trigger" href="#modal1">
            <i class="material-icons">live_tv</i>
        </a>
    </div>
    <!-- Modal Structure -->
    <div id="modal1" class="modal bottom-sheet">
        <div class="modal-content">
            <VideoForm></VideoForm>
        </div>
    </div>
</div>
</template>

<script>
import VideoForm from "@/components/VideoForm.vue";
$(document).ready(function() {
  $(".modal").modal();
});
export default {
  components: {
    VideoForm
  }
};
</script>