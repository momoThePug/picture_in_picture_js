import { IPlayerComponent } from "./../interfaces/IPlayer";
import { Component } from 'vue';

export default class YoutubePlayer implements IPlayerComponent {
    readonly name: string = "Youtube";
    private regex = /(?:https?:[\\\/][\\\/])?(?:www.)?(youtube.com|youtu.be)[\\\/]/ig;
    private videoidrgx = /(watch\?v=|embed[\\\/])/ig;

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

        return true;
    }

    getComponent(): Component {
        return require('./Youtube.vue').default;
    }
}