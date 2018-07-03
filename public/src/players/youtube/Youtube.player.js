"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YoutubePlayer {
    constructor() {
        this.name = "Youtube";
        this.regex = /(?:https?:[\\\/][\\\/])?(?:www.)?(youtube.com|youtu.be)[\\\/]/ig;
        this.videoidrgx = /(watch\?v=|embed[\\\/])/ig;
    }
    test(input) {
        const isYoutube = input.trim().match(this.regex);
        if (!isYoutube) {
            return false;
        }
        const videoURLBody = input.replace(isYoutube[0], '');
        const videoId = videoURLBody.trim().replace(this.videoidrgx, '');
        if (!videoId) {
            return false;
        }
        this.currentMediaId = videoId;
        return true;
    }
    getComponent() {
        return require('./Youtube.vue').default;
    }
    getMediaId() {
        return this.currentMediaId;
    }
    get() {
        return {
            component: this.getComponent(),
            mediaId: this.getMediaId()
        };
    }
}
exports.default = YoutubePlayer;
