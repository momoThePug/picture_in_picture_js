"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VimeoPlayer {
    constructor() {
        this.name = "Vimeo";
        this.regex = /(?:https?:[\\\/][\\\/])?(?:www.)?(?:player.)?(vimeo.com)[\\\/]/ig;
        this.videoidrgx = /(video[\\\/])/ig;
    }
    test(input) {
        const isPlayer = input.trim().match(this.regex);
        if (!isPlayer) {
            return false;
        }
        const videoURLBody = input.replace(isPlayer[0], '');
        const videoId = videoURLBody.trim().replace(this.videoidrgx, '');
        if (!videoId) {
            return false;
        }
        this.currentMediaId = videoId;
        return true;
    }
    getComponent() {
        return require('./Vimeo.vue').default;
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
exports.default = VimeoPlayer;
