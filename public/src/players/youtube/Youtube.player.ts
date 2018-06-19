import { IPlayerComponent, ILoadedVideoStrategy } from "./../interfaces/IPlayer";
import { Component } from 'vue';

export default class YoutubePlayer implements IPlayerComponent {
    readonly name: string = "Youtube";
    private regex = /(?:https?:[\\\/][\\\/])?(?:www.)?(youtube.com|youtu.be)[\\\/]/ig;
    private videoidrgx = /(watch\?v=|embed[\\\/])/ig;
    private currentMediaId: string;

    test(input: string): boolean {
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

    getComponent(): Component {
        return require('./Youtube.vue').default;
    }

    getMediaId(): string {
        return this.currentMediaId;
    }

    get(): ILoadedVideoStrategy {
        return {
            component: this.getComponent(),
            mediaId: this.getMediaId()
        }
    }
}