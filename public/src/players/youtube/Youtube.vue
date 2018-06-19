<template>
    <div id="youtube">
        {{mediaId}}
    </div>
</template>


<script>
export default {
  name: "Youtube",
  data() {
    return {
      done: false,
      player: null
    };
  },
  mounted() {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  },
  props: ["mediaId"],
  methods: {
    onYouTubeIframeAPIReady() {
      const theId = this.mediaId;
      this.player = new YT.Player("youtube", {
        height: "390",
        width: "640",
        videoId: theId,
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange
        }
      });
    },
    onPlayerReady(event) {
      event.target.playVideo();
    },
    stopVideo() {
      this.player.stopVideo();
    },
    onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !this.done) {
        setTimeout(stopVideo, 6000);
        this.done = true;
      }
    }
  }
};
</script>
